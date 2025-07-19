'use strict';

// Function initQueryAndApply copied from:
// gitlab.com/eyeo/anti-cv/snippets/-/blob/main/source/utils/dom.js
/**
 * Given a CSS or Xpath selector, returns a query function.
 * @param {string} selector A CSS selector or a Xpath selector which must be
 * described with the following syntax: `xpath(the_actual_selector)`
 * @returns {queryAndApply} The query function. Accepts a callback function
 * which will be called for every node resulted from querying the document.
 * @private
 */
function initQueryAndApply(selector) {
  let $selector = selector;
  if ($selector.startsWith("xpath(") &&
      $selector.endsWith(")")) {
    let xpathQuery = $selector.slice(6, -1);
    let evaluator = new XPathEvaluator();
    let expression = evaluator.createExpression(xpathQuery, null);
    // do not use ORDERED_NODE_ITERATOR_TYPE or the test env will fail
    let flag = XPathResult.ORDERED_NODE_SNAPSHOT_TYPE;

    return cb => {
      if (!cb)
        return;
      let result = expression.evaluate(document, flag, null);
      let {snapshotLength} = result;
      for (let i = 0; i < snapshotLength; i++)
        cb(result.snapshotItem(i));
    };
  }
  return cb => $$(selector).forEach(cb);
}

/**
 * Adds mutation observer on document body and ensures it's loaded.
 * @param {function} callback - Function to be executed upon change. It takes
 * two arguments:
 * 1. An array describing each change that occurred
 * 2. Observer instance that invoked the callback
 */
function addMutationObserver(callback) {
  const observer = new MutationObserver(callback);
  const options = {childList: true, subtree: true};
  const observeBody = () => observer.observe(document.body, options);
  if (document.body) {
    observeBody();
  } else {
    document.addEventListener('DOMContentLoaded', observeBody);
  }
}

/**
 * Skips current media
 * @param {string} xpathCondition The XPath selector that will be used to
 * know when to trigger the skipping logic.
 */
function skipCurrentMedia(xpathCondition) {
  const queryAndApply = initQueryAndApply(`xpath(${xpathCondition})`);
  const searchNodes = () => {
    let alreadySkipped = false;
    queryAndApply(_node => {
      if (alreadySkipped) {
        return;
      }

      opr.contentFilterPrivate.skipCurrentlyPlayingMedia();
      alreadySkipped = true;
    });
  };

  addMutationObserver(searchNodes);
  searchNodes();
}

// Function parseScript copied from
// gitlab.com/eyeo/adblockplus/adblockpluscore/-/blob/next/lib/snippets.js
/**
 * Parses a script and returns a list of all its commands and their arguments.
 * @param {string} script The script.
 * @returns {Array.<string[]>} A list of commands and their arguments.
 * @package
 */
function parseScript(script) {
  let tree = [];

  let escape = false;
  let withinQuotes = false;

  let unicodeEscape = null;

  let quotesClosed = false;

  let call = [];
  let argument = '';

  for (let character of script.trim() + ';') {
    let afterQuotesClosed = quotesClosed;
    quotesClosed = false;

    if (unicodeEscape != null) {
      unicodeEscape += character;

      if (unicodeEscape.length == 4) {
        let codePoint = parseInt(unicodeEscape, 16);
        if (!isNaN(codePoint)) argument += String.fromCodePoint(codePoint);

        unicodeEscape = null;
      }
    } else if (escape) {
      escape = false;

      if (character == 'u') unicodeEscape = '';
      else argument += singleCharacterEscapes.get(character) || character;
    } else if (character == '\\') {
      escape = true;
    } else if (character == "'") {
      withinQuotes = !withinQuotes;

      if (!withinQuotes) quotesClosed = true;
    } else if (withinQuotes || (character != ';' && !/\s/.test(character))) {
      argument += character;
    } else {
      if (argument || afterQuotesClosed) {
        call.push(argument);
        argument = '';
      }

      if (character == ';' && call.length > 0) {
        tree.push(call);
        call = [];
      }
    }
  }

  return tree;
}

class Snippet {
  constructor(name, args) {
    this.name = name;
    this.args = args;
  }
}

class SnippetRunner {
  #init;
  #isolatedFirstRunner;
  #snippets = new Array();
  #customSnippets = {
    'skip-current-media': skipCurrentMedia,
  };

  constructor() {
    this.#init = this.#loadIsolatedModule();
    opr.contentFilterPrivate.isWhitelisted(whitelisted => {
      if (!whitelisted) {
        this.getSnippets_();
        opr.contentFilterPrivate.onRulesLoaded.addListener(
          () => this.getSnippets_());
      }
    });
  }

  getSnippets_() {
    return new Promise(resolve => {
      opr.contentFilterPrivate.getSnippets(snippetRules => {
        if (!Array.isArray(snippetRules)) {
          resolve();
          return;
        }
        snippetRules.forEach(snippetRule =>
          this.convertSnippetRule_(snippetRule),
        );
        this.runSnippets_();
      });
    });
  }

  convertSnippetRule_(rule) {
    let tree = parseScript(rule);
    for (const snippet of tree) {
      let functionName = snippet[0];
      let args = new Array();
      for (let i = 1; i < snippet.length; i++) {
        args.push(snippet[i]);
      }
      this.#snippets.push(new Snippet(functionName, args));
    }
  }

  async isContentFilterAdsEnabled_() {
    return new Promise(resolve => {
      opr.contentFilterPrivate.isContentFilterTypeEnabled(
        opr.contentFilterPrivate.ContentFilterType.ADS,
        isBlockingAdsEnabled => {
          resolve(isBlockingAdsEnabled);
        },
      );
    });
  }

  async runSnippets_() {
    await this.#init;
    if (!(await this.isContentFilterAdsEnabled_())) {
      return;
    }
    const filters = this.#snippets.map(snippet => [
      snippet.name,
      ...snippet.args,
    ]);

    const [customFilters, normalFilters] =
      filters.reduce(([custom, normal], [name, ...args]) => {
        (name in this.#customSnippets ? custom : normal).push([name, ...args]);
        return [custom, normal];
      }, [[], []]);

    customFilters.forEach(([name, ...args]) =>
      this.#customSnippets[name](...args));
    this.#isolatedFirstRunner({world: 'ISOLATED'}, ...normalFilters);
  }

  async #loadIsolatedModule() {
    // The isolated-first.jst was originally downloaded from
    // https://gitlab.com/eyeo/anti-cv/snippets/-/blob/main/dist/isolated-first.jst
    // Please use the same URL to upgrade the file if needed.
    const response = await fetch(chrome.runtime.getURL('isolated-first.jst'));
    const script = await response.text();
    // Construct a runner function from the eyeo script
    this.#isolatedFirstRunner = new Function(`return ${script}`)();
  }
}

new SnippetRunner();
