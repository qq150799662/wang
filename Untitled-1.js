this.pagejs = e => {
    ( () => {
        const newLocal = "use strict";
        function t(e, t, n, o, r, s, i) {
            try {
                var a = s(e, i)
                  , l = At(a, "value")
            } catch (e) {
                return void n(e)
            }
            At(a, "done") ? t(l) : cn(new un((e => e(l))), o, r)
        }
        function n(e) {
            const n = function() {
                var n = this
                  , o = arguments;
                return new un((function(r, s) {
                    function i(e) {
                        t(l, r, s, i, a, dn, e)
                    }
                    function a(e) {
                        t(l, r, s, i, a, gn, e)
                    }
                    var l = Pt(e, n, o);
                    i(void 0)
                }
                ))
            };
            return Tt(n, "apply", (function(e, t) {
                return Pt(n, e, t)
            }
            )),
            n
        }
        const o = ["chrome"]
          , r = "vault"in e;
        if (r && void 0 === e.vault)
            throw "Invalid vault";
        const s = e.vault = e.vault || (e => {
            const t = Object.call
              , n = t.bind(t)
              , o = Object.assign
              , r = Object.getOwnPropertyDescriptor
              , s = Object.getPrototypeOf
              , i = e => o({
                __proto__: null
            }, e)
              , a = s(function*() {}());
            return i({
                sourceWindow: e,
                cSO: i,
                F_c: n,
                F_a: Object.apply,
                F_b: Object.bind,
                F_tS: Function.toString,
                A_fE: [].forEach,
                A_so: [].some,
                A_sh: [].shift,
                A_j: [].join,
                A_iO: [].indexOf,
                A_iA: Array.isArray,
                O_a: o,
                O_k: Object.keys,
                O_v: Object.values,
                O_dP: Object.defineProperties,
                O_dPy: Object.defineProperty,
                O_hOP: Object.hasOwnProperty,
                O_gOPN: Object.getOwnPropertyNames,
                O_gOPD: r,
                O_gOPDs: Object.getOwnPropertyDescriptors,
                O_gPO: s,
                O_tS: {}.toString,
                J_p: JSON.parse,
                J_s: JSON.stringify,
                M_f: Math.floor,
                M_r: Math.random,
                M_m: Math.max,
                M_mi: Math.min,
                N_tS: (0).toString,
                N_MSI: Number.MAX_SAFE_INTEGER,
                P_t: Promise.prototype.then,
                P_c: Promise.prototype.catch,
                P_co: Promise.prototype.constructor,
                G_n: a.next,
                G_t: a.throw,
                R_rABS: FileReader.prototype.readAsBinaryString,
                R_rAT: FileReader.prototype.readAsText,
                R_r: r(FileReader.prototype, "result").get,
                R_enq: e.ReadableStreamDefaultController ? e.ReadableStreamDefaultController.prototype.enqueue : null,
                R_cl: e.ReadableStreamDefaultController ? e.ReadableStreamDefaultController.prototype.close : null,
                S_fCC: String.fromCharCode,
                S_sl: "".slice,
                S_su: "".substr,
                S_sp_nr: "".split,
                S_iO: "".indexOf,
                S_tr: "".trim,
                S_r_nr: "".replace,
                S_rA_nr: "".replaceAll,
                S_cCA: "".charCodeAt,
                S_tLC: "".toLowerCase,
                S_tUC: "".toUpperCase,
                Y_tST: Symbol.toStringTag,
                Y_unsc: Symbol.unscopables,
                USP_tS: URLSearchParams.prototype.toString,
                D_pFS: DOMParser.prototype.parseFromString,
                U_cOU: URL.createObjectURL,
                U_rOU: URL.revokeObjectURL,
                X_o: XMLHttpRequest.prototype.open,
                X_pSD: XMLHttpRequest.prototype.DONE,
                X_pSH: XMLHttpRequest.prototype.HEADERS_RECEIVED,
                X_pSL: XMLHttpRequest.prototype.LOADING,
                X_pSO: XMLHttpRequest.prototype.OPENED,
                X_pSU: XMLHttpRequest.prototype.UNSENT,
                X_s: XMLHttpRequest.prototype.send,
                D_n: Date.now,
                I_tS: e => "" + e,
                E_r: Element.prototype.remove,
                E_s: Element.prototype.setAttribute,
                E_rA: Element.prototype.removeAttribute,
                D_cS: r(Document.prototype, "currentScript").get,
                D_gRS: r(Document.prototype, "readyState").get,
                D_cE: Document.prototype.createElementNS,
                D_gEBT: Document.prototype.getElementsByTagName,
                M_rT: r(MouseEvent.prototype, "relatedTarget").get,
                C_d: r(CustomEvent.prototype, "detail").get,
                P_p: r(PageTransitionEvent.prototype, "persisted").get,
                C_pA: CustomEvent.prototype.AT_TARGET,
                M_d: MutationObserver.prototype.disconnect,
                W_aEL: addEventListener,
                W_rEL: removeEventListener,
                parseInt,
                parseFloat,
                CustomEvent,
                CompositionEvent,
                KeyboardEvent,
                MouseEvent,
                MutationObserver,
                console: Object.assign({}, console),
                Error,
                Uint8Array,
                Blob,
                ReadableStream,
                Number,
                String,
                Proxy,
                Window,
                FileReader,
                DOMParser,
                XMLHttpRequest,
                Function,
                RegExp,
                Promise,
                encodeURIComponent,
                decodeURIComponent,
                encodeURI,
                decodeURI,
                escape,
                unescape,
                atob,
                btoa,
                setTimeout,
                clearTimeout,
                setInterval,
                clearInterval,
                postMessage,
                dispatchEvent,
                alert,
                prompt,
                confirm,
                close,
                getElementById: e.Document.prototype.getElementById,
                createEvent: e.Document.prototype.createEvent,
                createElement: e.Document.prototype.createElement
            })
        }
        )(e.unsafeWindow)
          , {cSO: i, F_c: a, F_a: l, F_b: c, F_tS: u, A_fE: d, A_so: g, A_sh: p, A_j: f, A_iO: v, A_iA: m, O_a: _, O_k: h, O_v: b, O_dP: M, O_dPy: y, O_hOP: w, O_gOPN: E, O_gOPD: G, O_gOPDs: S, O_gPO: R, O_tS: L, J_p: I, J_s: O, M_f: C, M_r: x, M_m: P, M_mi: k, N_tS: T, N_MSI: D, P_t: A, P_c: U, P_co: $, G_n: j, G_t: V, R_rABS: F, R_rAT: N, R_r: q, R_enq: X, R_cl: B, S_fCC: H, S_sl: W, S_su: K, S_iO: J, S_sp_nr: z, S_tr: Y, S_rA_nr: Q, S_cCA: Z, S_tLC: ee, S_tUC: te, Y_tST: ne, Y_unsc: oe, D_pFS: re, D_cS: se, D_gRS: ie, D_cE: ae, D_gEBT: le, E_r: ce, E_s: ue, E_rA: de, C_pA: ge, M_d: pe, C_d: fe, P_p: ve, M_rT: me, U_cOU: _e, U_rOU: he, USP_tS: be, X_o: Me, X_s: ye, X_pSD: we, X_pSH: Ee, X_pSL: Ge, X_pSO: Se, X_pSU: Re, D_n: Le, I_tS: Ie, W_aEL: Oe, W_rEL: Ce, parseInt: xe, parseFloat: Pe, console: ke, encodeURIComponent: Te, decodeURIComponent: De, encodeURI: Ae, decodeURI: Ue, escape: $e, unescape: je, atob: Ve, btoa: Fe, postMessage: Ne, dispatchEvent: qe, alert: Xe, prompt: Be, confirm: He, close: We, getElementById: Ke, createEvent: Je, createElement: ze, CustomEvent: Ye, CompositionEvent: Qe, KeyboardEvent: Ze, MouseEvent: et, MutationObserver: tt, Uint8Array: nt, FileReader: ot, DOMParser: rt, XMLHttpRequest: st, Function: it, RegExp: at, Blob: lt, ReadableStream: ct, Number: ut, String: dt, Proxy: gt, Window: pt} = s
          , ft = e
          , {unsafeWindow: vt, unsafeThis: mt} = ft
          , _t = a
          , ht = l
          , bt = h
          , Mt = b
          , yt = _
          , wt = M
          , Et = y
          , Gt = E
          , St = G
          , Rt = R
          , Lt = S || (e => {
            const t = kt({});
            for (const n in e)
                t[n] = St(e, n);
            return t
        }
        )
          , It = m
          , Ot = C
          , Ct = x
          , xt = P
          , Pt = (e, t, n) => _t(ht, e, t, n)
          , kt = i
          , Tt = (e, t, n) => (Et(e, t, kt({
            value: n,
            configurable: !0,
            enumerable: !0,
            writable: !0
        })),
        e)
          , Dt = (e, t) => Zt(e, t) ? e[t] : void 0
          , At = (e, t) => {
            const n = St(e, t);
            return n ? kt(n).value : void 0
        }
          , Ut = (e, t) => {
            const n = (e, t, o) => {
                const r = St(e, t)
                  , s = r ? kt(r) : void 0;
                let i;
                return s ? s.enumerable ? s.value : void 0 : --o >= 0 && (i = Rt(e)) ? n(i, t, o) : void 0
            }
            ;
            return n(e, t, 5)
        }
          , $t = e => {
            const t = (t, ...n) => Pt(e, t, n);
            return Tt(t, "wrappedJSObject", e),
            t
        }
          , jt = () => e => $t(e)
          , Vt = $t(c)
          , Ft = e => {
            const t = (e, n) => {
                let o;
                if (null === e)
                    o = "null";
                else {
                    const r = typeof e;
                    if ("object" === r) {
                        if (n) {
                            if (-1 != Yt(n, e))
                                throw "Converting circular structure to JSON";
                            Tt(n, n.length, e)
                        } else
                            n = [e];
                        if (It(e)) {
                            let r = "";
                            for (let o = 0; o < e.length; o++) {
                                let s;
                                s = Zt(e, o) ? Dt(e, o) : Ut(e, o);
                                const i = t(s, n);
                                r += `${o ? "," : ""}${void 0 === i ? "null" : i}`
                            }
                            o = `[${r}]`
                        } else {
                            let r = "";
                            Qt(bt(e), (o => {
                                const s = t(e[o], n);
                                void 0 !== s && (r += `${r ? "," : ""}${O(o)}: ${s}`)
                            }
                            )),
                            o = `{${r}}`
                        }
                        n.length -= 1
                    } else {
                        if ("bigint" === r)
                            throw "Do not know how to serialize a BigInt";
                        o = O(e)
                    }
                }
                return o
            }
            ;
            return t(e)
        }
          , Nt = e => {
            const t = I(e)
              , n = e => {
                const t = [];
                for (let n = 0; n < e.length; n++)
                    Tt(t, n, o(e[n]));
                return t
            }
              , o = e => {
                if (null === e)
                    ;
                else if ("object" == typeof e) {
                    if (It(e))
                        return n(e);
                    {
                        const t = {};
                        return Qt(bt(e), (r => {
                            const s = e[r];
                            let i;
                            i = "object" == typeof s ? It(s) ? n(s) : o(s) : s,
                            Tt(t, r, i)
                        }
                        )),
                        t
                    }
                }
                return e
            }
            ;
            return o(t)
        }
          , qt = jt()(g)
          , Xt = (e, t, n, ...o) => {
            const r = o || []
              , s = Wt(e, 0, t)
              , i = Wt(e, t, n)
              , a = Wt(e, t + n);
            let l = Jt([], s);
            return l = Jt(l, r),
            l = Jt(l, a),
            kt({
                result: l,
                removed: i
            })
        }
          , Bt = jt()(p)
          , Ht = (e, t) => {
            const n = [];
            return Qt(e, (e => {
                t(e) && zt(n, e)
            }
            )),
            n
        }
          , Wt = (e, t, n) => {
            const o = e.length;
            let r = t || 0;
            if (r >= o)
                return [];
            r < 0 && (r = xt(0, o + r));
            let s = void 0 === n ? o : n;
            s < 0 && (s = xt(0, o + s)),
            s > o && (s = o);
            const i = kt({});
            for (let t = r; t < s; t++)
                i[t] = At(e, t);
            return Mt(i)
        }
          , Kt = jt()(f)
          , Jt = (e, ...t) => {
            let n = e.length;
            const o = kt(e);
            for (let e = 0; e < t.length; e++) {
                const r = t[e]
                  , s = It(r) ? r : [r];
                for (let e = 0; e < s.length; e++)
                    o[n + e] = At(s, e);
                n += s.length
            }
            return Mt(o)
        }
          , zt = (e, t) => {
            let n = e.length || 0;
            return Tt(e, n, t),
            n++,
            e.length = n
        }
          , Yt = jt()(v)
          , Qt = jt()(d)
          , Zt = jt()(w)
          , en = jt()(z)
          , tn = jt()(W)
          , nn = $t(L)
          , on = Rt({})
          , rn = e => {
            const t = kt(e)
              , n = Gt(t);
            for (let e = 0; e < n.length; e++) {
                const o = n[e]
                  , r = t[o];
                null !== r && "object" == typeof r && Rt(r) === on && (t[o] = rn(r))
            }
            return t
        }
          , sn = e => {
            const t = en(nn(e), " ");
            return tn(Kt(Wt(t, 1), " "), 0, -1)
        }
          , an = (jt()(u),
        jt()(T))
          , ln = D
          , cn = jt()(A)
          , un = (jt()(U),
        Vt($, Rt((async () => {}
        )())))
          , dn = jt()(j)
          , gn = jt()(V)
          , pn = jt()(F)
          , fn = jt()(N)
          , vn = jt()(q)
          , mn = X ? jt()(X) : X
          , _n = B ? jt()(B) : B
          , hn = H
          , bn = jt()(K)
          , Mn = jt()(J)
          , yn = jt()(Y)
          , wn = (jt()(Q || function(e, t) {
            return Kt(en(this, e), t)
        }
        ),
        jt()(Z))
          , En = jt()(ee)
          , Gn = jt()(te)
          , Sn = ne
          , Rn = oe
          , Ln = $t(re)
          , In = $t(se)
          , On = $t(ie)
          , Cn = ($t(ae),
        $t(le),
        $t(ce))
          , xn = $t(ue)
          , Pn = $t(de)
          , kn = ge
          , Tn = $t(me)
          , Dn = $t(fe)
          , An = ($t(ve),
        pe && jt()(pe),
        $t(be))
          , Un = (jt()(Me),
        we)
          , $n = Ee
          , jn = Ge
          , Vn = Se
          , Fn = Re
          , Nn = (jt()(ye),
        Le)
          , qn = gt
          , Xn = ut
          , Bn = Ye
          , Hn = Ze
          , Wn = et
          , Kn = nt
          , Jn = tt
          , zn = lt
          , Yn = function(e, t) {
            return At(e, t)
        }
          , Qn = kt({
            addEventListener: !1,
            Array: !0,
            Blob: !0,
            close: !1,
            CustomEvent: !0,
            Date: !0,
            DOMParser: !0,
            Error: !0,
            Event: !0,
            FileReader: !0,
            KeyboardEvent: !0,
            location: !0,
            Math: !0,
            MouseEvent: !0,
            Number: !0,
            Object: !0,
            ReadableStream: !0,
            removeEventListener: !1,
            Uint8Array: !0,
            XMLHttpRequest: !0
        })
          , Zn = ( () => {
            const e = kt({
                getElementById: Ke,
                createEvent: Je,
                createElement: ze,
                dispatchEvent: qe,
                addEventListener,
                removeEventListener
            })
              , t = kt({});
            return Qt(bt(e), (n => {
                try {
                    const o = e[n];
                    t[n] = function(...e) {
                        return Pt(o, vt.document, e)
                    }
                } catch (e) {
                    t[n] = ( (e, t) => {
                        if (to.error(`Tampermonkey sandbox preparation ${t ? "(" + t + ") " : ""}failed. This usually is caused by a third-party extension.`, e),
                        t)
                            return () => {}
                    }
                    )(e, `document.${n}`)
                }
            }
            )),
            t
        }
        )()
          , eo = kt({
            top: !0,
            location: !0
        });
        e.bridges = e.bridges || kt({});
        const to = e.console = e.console || kt({})
          , no = kt({
            addEventListener: Vt(Oe, vt),
            removeEventListener: Vt(Ce, vt)
        });
        Qt(bt(eo), (async e => {
            if (!no[e])
                try {
                    const t = vt[e];
                    if (null == t)
                        return;
                    no[e] = t
                } catch (e) {}
        }
        )),
        Qt(bt(Qn), (async e => {
            if (!no[e])
                try {
                    let t = At(vt, e);
                    if (void 0 === t && (mt === vt || void 0 === (t = At(mt, e))))
                        return;
                    const n = Qn[e];
                    no[e] = !1 === n && "function" == typeof t ? Vt(t, mt) : t
                } catch (e) {}
        }
        ));
        const oo = e => {
            let t, n = [], o = !1;
            e((e => {
                if (!o) {
                    if (n.length) {
                        const t = n;
                        n = [],
                        Qt(t, (t => t(e)))
                    } else
                        t = e;
                    o = !0
                }
            }
            ));
            const r = kt({
                then: e => (o ? e(t) : zt(n, e),
                r)
            });
            return r
        }
          , ro = ({sendPrefix: e, listenPrefix: t, send: o, onMessage: r}) => {
            if (void 0 === o || void 0 === r)
                throw "invalid args";
            let s, i, a = 1;
            const l = kt({})
              , c = kt({})
              , u = e => {
                e && (s = e)
            }
              , d = e => {
                const t = ++a;
                return c[a] = e,
                t
            }
            ;
            r(( (n, r) => n == `${t}_${s}` ? (t => {
                const {m: n, r, a, n: u} = t;
                if (l[n] && (Qt(l[n], (e => e(a))),
                delete l[n]),
                "message.response" == n) {
                    if (null == r)
                        throw "Invalid Message";
                    ( (e, t) => {
                        let n;
                        e && (n = c[e]) && (n(t),
                        delete c[e])
                    }
                    )(r, a)
                } else if (i) {
                    const t = r ? t => {
                        o(`${e}_${s}`, kt({
                            m: "message.response",
                            a: t,
                            r
                        }))
                    }
                    : () => {}
                    ;
                    i(kt({
                        method: n,
                        args: a,
                        node: u
                    }), t)
                }
            }
            )(r) : null));
            const g = kt({
                init: (p = n((function*(e) {
                    s ? u() : u(e)
                }
                )),
                function(e) {
                    return p.apply(this, arguments)
                }
                ),
                refresh: () => null,
                switchId: e => {
                    s && g.cleanup(),
                    u(e)
                }
                ,
                send: (t, n, r, i) => oo((a => {
                    let l, c;
                    "function" != typeof r && null !== r ? (l = r,
                    c = i) : c = r,
                    o(`${e}_${s}`, kt({
                        m: t,
                        a: n,
                        r: c ? d(c) : null,
                        n: l
                    })),
                    a()
                }
                )),
                sendToId: (t, n, r) => {
                    o(`${e}_${t}`, kt({
                        m: n,
                        a: r,
                        r: null
                    }))
                }
                ,
                once: (e, t) => {
                    l[e] || (l[e] = []),
                    zt(l[e], t)
                }
                ,
                setMessageListener: e => {
                    i = e
                }
                ,
                cleanup: () => null
            });
            var p;
            return g
        }
          , so = ({sendPrefix: e, listenPrefix: t, cloneInto: o}) => {
            const s = e => o ? o(e, vt.document) : e
              , i = kt({});
            let a, l, c = 1;
            const u = kt({});
            let d = !1
              , g = [];
            const p = () => {
                b = vt.document.documentElement,
                d = !1;
                const e = g;
                g = [],
                Qt(e, (e => {
                    d || y() ? zt(g, e) : e()
                }
                ))
            }
            ;
            let f;
            const v = e => {
                const t = ++c;
                return u[c] = e,
                t
            }
              , m = (e, t) => {
                const {m: n, a: o, r, n: i} = t
                  , {m: a, c: l} = ( (e, t, n) => {
                    let o, r;
                    return n ? (r = new Wn(e,kt({
                        relatedTarget: n
                    })),
                    o = new Bn(e,kt({
                        detail: s(t)
                    }))) : o = new Bn(e,kt({
                        detail: s(t)
                    })),
                    kt({
                        m: r,
                        c: o
                    })
                }
                )(e, kt({
                    m: n,
                    a: o,
                    r
                }), i);
                a && Pt(qe, vt, [a]),
                Pt(qe, vt, [l])
            }
              , _ = t => {
                const n = (e => {
                    if ("MouseEvent" === sn(e)) {
                        const t = Tn(e);
                        if (!t)
                            throw "Invalid MouseEvent";
                        return void (f = t)
                    }
                    const t = rn(Dn(e));
                    return f && (t.n = f,
                    f = void 0),
                    t
                }
                )(t);
                if (!n)
                    return;
                const {m: o, r, a: s, n: c} = n;
                if (i[o] && (Qt(i[o], (e => e(s))),
                delete i[o]),
                "unlock" == o)
                    m(`${e}_${l}`, kt({
                        m: "unlocked",
                        a: void 0,
                        r: null
                    })),
                    p();
                else if ("unlocked" == o)
                    p();
                else if ("message.response" == o) {
                    if (null == r)
                        throw "Invalid Message";
                    ( (e, t) => {
                        let n;
                        e && (n = u[e]) && (n(t),
                        delete u[e])
                    }
                    )(r, s)
                } else if (a) {
                    const t = r ? t => {
                        m(`${e}_${l}`, kt({
                            m: "message.response",
                            a: t,
                            r
                        }))
                    }
                    : () => {}
                    ;
                    a(kt({
                        method: o,
                        args: s,
                        node: c
                    }), t)
                }
            }
              , h = e => {
                e && (l = e),
                l && no.addEventListener(`${t}_${l}`, _, !0)
            }
            ;
            let b, M;
            const y = () => {
                if (( () => {
                    const e = vt.document.documentElement;
                    return b || (b = e),
                    b !== e
                }
                )()) {
                    if (M) {
                        const e = M;
                        M = void 0,
                        e(vt.document)
                    }
                    return !0
                }
            }
              , w = e => (b = vt.document.documentElement,
            oo(function() {
                var t = n((function*(t) {
                    if (M = t,
                    r && !e && (yield null,
                    y()))
                        return;
                    const n = new Jn(( () => {
                        y() && n.disconnect()
                    }
                    ));
                    n.observe(vt.document, kt({
                        childList: !0
                    }))
                }
                ));
                return function(e) {
                    return t.apply(this, arguments)
                }
            }()))
              , E = kt({
                init: (G = n((function*(t, n) {
                    l ? h() : h(t),
                    w(n).then(( () => {
                        d = !0,
                        E.refresh(),
                        m(`${e}_${l}`, kt({
                            m: "unlock",
                            a: void 0,
                            r: null
                        }))
                    }
                    ))
                }
                )),
                function(e, t) {
                    return G.apply(this, arguments)
                }
                ),
                refresh: () => {
                    const e = l;
                    e && (E.cleanup(),
                    E.init(e, !0))
                }
                ,
                switchId: e => {
                    l && E.cleanup(),
                    h(e)
                }
                ,
                send: (t, n, o, r) => oo((s => {
                    let i, a;
                    "function" != typeof o && null !== o ? (i = o,
                    a = r) : a = o,
                    y();
                    const c = () => {
                        m(`${e}_${l}`, kt({
                            m: t,
                            a: n,
                            r: a ? v(a) : null,
                            n: i
                        })),
                        s()
                    }
                    ;
                    d ? zt(g, c) : c()
                }
                )),
                sendToId: (t, n, o) => {
                    m(`${e}_${t}`, kt({
                        m: n,
                        a: o,
                        r: null
                    }))
                }
                ,
                setMessageListener: e => {
                    a = e
                }
                ,
                once: (e, t) => {
                    i[e] || (i[e] = []),
                    zt(i[e], t)
                }
                ,
                cleanup: () => {
                    l && (no.removeEventListener(`${t}_${l}`, _, !0),
                    l = void 0)
                }
            });
            var G;
            return E
        }
          , io = () => an(Nn() + 19831206 * Ct() + 1, 36)
          , ao = function() {
            var e = n((function*(e) {
                yield null,
                e()
            }
            ));
            return function(t) {
                return e.apply(this, arguments)
            }
        }()
          , lo = () => {
            const e = In(vt.document);
            e && (Pn(e, "nonce"),
            Cn(e))
        }
          , co = ( () => {
            const {console: t, bridges: n} = e
              , o = kt({});
            let r;
            const s = (e, n, r, s) => {
                let a, l = [], c = [], u = [], d = [];
                const g = () => {
                    c = [],
                    u = [],
                    d = [],
                    m(),
                    y = null,
                    delete o[n]
                }
                  , p = t => {
                    e.send("port.message", kt({
                        response_id: n,
                        value: t
                    }))
                }
                  , f = e => {
                    s && "messageId"in e && zt(l, e),
                    p(e)
                }
                  , v = (e, t=!0) => {
                    a = e,
                    t && p(e)
                }
                  , m = () => {
                    a = void 0
                }
                  , _ = kt({
                    addListener: e => {
                        zt(c, e)
                    }
                })
                  , h = kt({
                    addListener: e => {
                        zt(u, e)
                    }
                })
                  , b = kt({
                    addListener: e => {
                        zt(d, e)
                    }
                })
                  , M = () => {
                    g(),
                    e.send("port.message", kt({
                        response_id: n,
                        disconnect: !0
                    }))
                }
                ;
                let y = kt(r ? {
                    postMessage: f,
                    connectMessage: v,
                    stopReconnecting: m,
                    onMessage: _,
                    onDisconnect: h,
                    onReconnect: b,
                    disconnect: M
                } : {
                    postMessage: f,
                    onMessage: _,
                    onDisconnect: h,
                    disconnect: M
                });
                return o[n] = kt({
                    message: e => {
                        if (s && (e => "ack"in e)(e)) {
                            const {messageId: n} = e;
                            (e => {
                                if (!e)
                                    return void t.warn("PortMessaging: no message id in ack message");
                                if (a && a.messageId === e)
                                    return;
                                let n = -1;
                                qt(l, ( (t, o) => t.messageId === e && (n = o,
                                !0))),
                                -1 !== n ? (Qt(Wt(l, 0, n), (e => t.warn(`PortMessaging: message ${e.messageId} was not ack'ed!`, e))),
                                l = Wt(l, n + 1)) : t.warn(`PortMessaging: no one is waiting for ${e}`)
                            }
                            )(n)
                        }
                        c && Qt(c, (t => t(e)))
                    }
                    ,
                    disconnect: () => {
                        if (a && r)
                            return i(r, n),
                            v(a),
                            s && Qt(l, (e => p(e))),
                            void (d.length && Qt(d, (e => e())));
                        u.length && Qt(u, (e => e())),
                        g()
                    }
                }),
                y
            }
              , i = (e, t) => {
                n.first.send("port.message", kt({
                    response_id: t,
                    connect: !0,
                    destination: e
                }))
            }
            ;
            return kt({
                message: (e, n) => {
                    let i;
                    if (e.connect) {
                        if (!e.destination || !e.response_id)
                            throw "invalid message";
                        r && r(e.destination, s(n, e.response_id))
                    } else {
                        if (!e.response_id)
                            throw "invalid message";
                        if (!(i = o[e.response_id]))
                            return void t.warn("ports: unknown id", e.response_id, e);
                        e.disconnect ? i.disconnect() : i.message(e.value)
                    }
                }
                ,
                connect: function(e, t, o) {
                    const r = io();
                    return i(e, r),
                    s(n.first, r, t ? e : void 0, o)
                },
                onConnect: kt({
                    addListener: e => {
                        r = e
                    }
                })
            })
        }
        )()
          , {bridges: uo} = e
          , go = kt({})
          , po = kt({});
        let fo = !0
          , vo = [];
        ao(( () => {
            fo = !1,
            Qt(vo, ( ({m: e, i: t}) => uo.first.send("console", [e, t]))),
            vo = []
        }
        )),
        Qt(["debug", "log", "info", "warn", "error"], (e => {
            Tt(go, e, ( (...t) => {
                const n = (e => {
                    const t = [];
                    return Qt(e, (e => {
                        zt(t, (e => Ft(e))(e))
                    }
                    )),
                    t
                }
                )(t);
                if (fo)
                    return zt(vo, kt({
                        m: e,
                        i: n
                    }));
                uo.first.send("console", [e, n])
            }
            ))
        }
        ));
        const mo = kt(Lt(vt.console))
          , _o = kt({});
        Qt(Gt(ke), (e => {
            const t = kt(mo[e]);
            _o[e] = kt({
                get: "value"in t ? () => t.value : t.get,
                enumerable: !0,
                configurable: !1
            })
        }
        )),
        wt(po, _o);
        const ho = ["GM.backgroundControl"]
          , bo = ["GM_addElement", "GM.addElement", "GM_addStyle", "GM.addStyle"]
          , Mo = ["GM_cookie", "GM.cookie"]
          , yo = ["GM_listValues", "GM.listValues", "GM_getValue", "GM.getValue", "GM_getValues", "GM.getValues", "GM_addValueChangeListener", "GM.addValueChangeListener", "GM_removeValueChangeListener", "GM.removeValueChangeListener", "GM_setValue", "GM.setValue", "GM_setValues", "GM.setValues", "GM_deleteValue", "GM.deleteValue", "GM_deleteValues", "GM.deleteValues"]
          , wo = ["GM_download", "GM.download"]
          , Eo = ["GM_getResourceText", "GM.getResourceText", "GM_getResourceURL", "GM.getResourceUrl"]
          , Go = ["GM_getTab", "GM.getTab", "GM_getTabs", "GM.getTabs", "GM_saveTab", "GM.saveTab"]
          , So = ["GM_log", "GM.log"]
          , Ro = ["GM_notification", "GM.notification"]
          , Lo = ["GM_openInTab", "GM.openInTab"]
          , Io = ["GM_registerMenuCommand", "GM.registerMenuCommand", "GM_unregisterMenuCommand", "GM.unregisterMenuCommand"]
          , Oo = ["GM_setClipboard", "GM.setClipboard"]
          , Co = ["GM_xmlhttpRequest", "GM.xmlHttpRequest"]
          , xo = ["window.close"]
          , Po = ["window.focus"]
          , ko = ["window.onurlchange"]
          , To = ["GM_webRequest", "GM.webRequest"]
          , Do = kt({
            encode: e => je(Te(e)),
            decode: e => De($e(e))
        })
          , Ao = kt({
            encode: e => {
                let t = "";
                for (let n = 0; n < e.length; n++)
                    t += hn(255 & wn(e, n));
                return Fe(t)
            }
            ,
            decode: e => Ve(e)
        })
          , Uo = e => {
            const t = new Kn(e.length);
            for (let n = 0; n < e.length; n++)
                t[n] = wn(e, n);
            return t.buffer
        }
          , $o = (e, t) => oo((n => {
            const o = new no.FileReader;
            o.onload = () => {
                n(vn(o))
            }
            ,
            o.onerror = e => {
                to.warn(`unable to decode data ${e}`),
                n("")
            }
            ,
            t ? fn(o, e, t) : pn(o, e)
        }
        ))
          , {bridges: jo} = e;
        let Vo = 0
          , Fo = 0;
        const No = kt({})
          , qo = kt({})
          , Xo = function(e, t, n, o) {
            const r = () => {
                No[n] && (Pt(e, this, o),
                delete No[n])
            }
            ;
            "function" == typeof e && (No[n] = e,
            0 === t ? ao(( () => r())) : jo.first.send("setTimeout", kt({
                t: t || 1
            }), ( () => r())))
        }
          , Bo = function(e, t, n, o) {
            if ("function" == typeof e) {
                const r = qo[n] = co.connect("setInterval");
                r.onMessage.addListener(( () => {
                    qo[n] && Pt(e, this, o)
                }
                )),
                r.onDisconnect.addListener(( () => Ho(n))),
                r.postMessage(kt({
                    method: "setInterval",
                    t: t || 1
                }))
            }
        }
          , Ho = e => {
            const t = qo[e];
            t && (t.disconnect(),
            delete qo[e])
        }
          , Wo = (e, t, ...n) => {
            const o = io();
            return Xo(e, t, o, n),
            o
        }
          , Ko = e => {
            (e => {
                delete No[e]
            }
            )(e)
        }
          , Jo = e => Ho(e)
          , zo = (e, t, ...n) => {
            const o = ++Fo;
            return t = xt(t, 1),
            Xo(e, t, o, n),
            o
        }
          , Yo = (e, t, ...n) => {
            const o = ++Vo;
            return t = xt(t, 1),
            Bo(e, t, o, n),
            o
        }
        ;
        let Qo;
        const Zo = e => {
            if (void 0 === Qo) {
                Qo = !0;
                const t = "keepAlive"
                  , n = co.connect(t, !0)
                  , o = no.location.href;
                n.onMessage.addListener(( () => {}
                )),
                n.connectMessage(kt({
                    messageId: io(),
                    method: t,
                    id: e,
                    url: o
                })),
                n.onDisconnect.addListener(( () => {
                    r && Jo(r),
                    r = null
                }
                ));
                let r = ( (e, t, ...n) => {
                    const o = io();
                    return Bo(e, t, o, n),
                    o
                }
                )(( () => {
                    Qo ? n.postMessage(kt({
                        messageId: io(),
                        method: "keepAlive",
                        url: o
                    })) : r && (n.disconnect(),
                    Jo(r),
                    r = null)
                }
                ), 2e4)
            }
        }
          , er = t => {
            const {contextId: o, bridges: r} = e
              , s = kt({})
              , i = (e, t) => qt(t, (t => -1 != Yt(e, t)))
              , a = e => function() {
                return new un((t => t(Pt(e, this, arguments))))
            }
              , l = (e, t) => function(...n) {
                const o = [];
                if (void 0 !== t)
                    for (let e = 0; e < t; e++)
                        zt(o, Yn(n, e) || void 0);
                return new un((t => {
                    Pt(e, this, Jt(o, [t]))
                }
                ))
            }
              , c = (e, t) => {
                let n;
                const o = new un(( (o, r) => {
                    const s = kt({})
                      , i = t.onload
                      , a = t.ontimeout
                      , l = t.onerror;
                    Qt(bt(t), (e => {
                        s[e] = t[e]
                    }
                    )),
                    s.onerror = function(e) {
                        l ? (o(e),
                        Pt(l, this, arguments)) : r(e)
                    }
                    ,
                    s.ontimeout = function(e) {
                        a ? (o(e),
                        Pt(a, this, arguments)) : r(e)
                    }
                    ,
                    s.onload = function(e) {
                        o(e),
                        i && Pt(i, this, arguments)
                    }
                    ;
                    const c = e(s).abort;
                    !0 === n ? c() : n = c
                }
                ));
                return Tt(o, "abort", ( () => {
                    "function" == typeof n ? n() : n = !0
                }
                )),
                o
            }
            ;
            return kt({
                of: e => {
                    const u = e.script
                      , d = ( () => {
                        const e = i(u.grant, Oo)
                          , t = (e, t, n) => {
                            r.first.send("setClipboard", kt({
                                content: e,
                                info: t,
                                id: o,
                                uuid: u.uuid
                            }), n ? () => n() : null)
                        }
                        ;
                        return kt({
                            GM_setClipboard: e ? kt({
                                value: t
                            }) : void 0,
                            "GM.setClipboard": e ? kt({
                                get: () => l(t, 2)
                            }) : void 0
                        })
                    }
                    )()
                      , g = ( () => {
                        let t = [];
                        const n = e.storage;
                        let r = 0
                          , s = null;
                        const l = i(u.grant, yo)
                          , c = (e, t) => {
                            if ("string" != typeof e)
                                return t;
                            {
                                const n = bn(e, 0, 1);
                                switch (e = bn(e, 1),
                                n) {
                                case "b":
                                    return "true" === e;
                                case "n":
                                    return Xn(e);
                                case "x":
                                    try {
                                        return Do.decode(Ao.decode(e))
                                    } catch (t) {
                                        return e
                                    }
                                case "o":
                                    try {
                                        return Nt(e)
                                    } catch (e) {
                                        to.log(`values: parseValueFromStorage: ${e}`)
                                    }
                                    return t;
                                case "u":
                                    return;
                                default:
                                    return e
                                }
                            }
                        }
                          , d = (e, n, o, r) => {
                            n != o && Qt(t, (t => {
                                if (t && t.key == e && t.cb)
                                    try {
                                        t.cb(e, c(n), c(o), r)
                                    } catch (t) {
                                        to.warn(`values: change listener of "${e}" failed with: ${t.message}`)
                                    }
                            }
                            ))
                        }
                          , g = (e, t) => {
                            s && s.postMessage(kt({
                                messageId: io(),
                                method: "saveStorageKey",
                                uuid: u.uuid,
                                key: e,
                                value: n.data[e],
                                removed: t,
                                id: o,
                                ts: n.ts
                            }))
                        }
                        ;
                        l && (Zo(o),
                        s = co.connect("values", !0, !0),
                        s.onDisconnect.addListener(( () => {
                            to.warn("values: port disconnected"),
                            s = null
                        }
                        )),
                        s.onMessage.addListener((e => {
                            if ("ack"in e)
                                return;
                            const {storage: t, removed: o} = e;
                            if (!t)
                                return;
                            const r = t
                              , s = bt(r);
                            o && zt(s, o),
                            Qt(s, (e => {
                                const t = n.data[e]
                                  , o = r[e];
                                void 0 === o ? delete n.data[e] : n.data[e] = o,
                                d(e, t, o, !0)
                            }
                            ))
                        }
                        )),
                        s.connectMessage(kt({
                            messageId: io(),
                            method: "addStorageListener",
                            uuid: u.uuid,
                            id: o
                        })));
                        const p = (e, t) => c(n.data[e], t)
                          , f = e => {
                            const t = kt({});
                            let o = e;
                            if (o || (o = bt(n.data)),
                            It(o))
                                Qt(o, (e => {
                                    e in n.data && (t[e] = p(e))
                                }
                                ));
                            else {
                                const e = o;
                                Qt(bt(e), (n => {
                                    t[n] = p(n, e[n])
                                }
                                ))
                            }
                            return t
                        }
                          , v = () => bt(n.data)
                          , m = (e, n) => {
                            const o = ++r
                              , s = kt({
                                id: o,
                                key: e,
                                cb: n
                            });
                            return zt(t, s),
                            o
                        }
                          , _ = e => {
                            t = Ht(t, (t => t.id !== e))
                        }
                          , h = (e, t) => {
                            const o = n.data[e];
                            n.ts = Nn(),
                            n.data[e] = (e => {
                                const t = typeof e;
                                let n, o = bn(t, 0, 1);
                                switch (t) {
                                case "object":
                                    try {
                                        n = o + Ft(e)
                                    } catch (e) {
                                        return void to.log(e)
                                    }
                                    break;
                                case "function":
                                case "symbol":
                                case "bigint":
                                    o = "u",
                                    n = o + void 0;
                                    break;
                                case "string":
                                case "number":
                                case "undefined":
                                case "boolean":
                                    n = o + e;
                                    break;
                                default:
                                    n = t
                                }
                                return n
                            }
                            )(t),
                            g(e),
                            d(e, o, n.data[e], !1)
                        }
                          , b = e => {
                            const t = bt(e);
                            Qt(t, (t => {
                                h(t, e[t])
                            }
                            ))
                        }
                          , M = e => {
                            const t = n.data[e];
                            n.ts = Nn(),
                            delete n.data[e],
                            g(e, !0),
                            d(e, t, n.data[e], !1)
                        }
                          , y = e => {
                            It(e) ? Qt(e, (e => {
                                M(e)
                            }
                            )) : to.warn("values: removes: names is not an array")
                        }
                        ;
                        return kt({
                            GM_getValue: l ? kt({
                                value: p
                            }) : void 0,
                            "GM.getValue": l ? kt({
                                get: () => a(p)
                            }) : void 0,
                            GM_getValues: l ? kt({
                                value: f
                            }) : void 0,
                            "GM.getValues": l ? kt({
                                get: () => a(f)
                            }) : void 0,
                            GM_listValues: l ? kt({
                                value: v
                            }) : void 0,
                            "GM.listValues": l ? kt({
                                get: () => a(v)
                            }) : void 0,
                            GM_addValueChangeListener: l ? kt({
                                value: m
                            }) : void 0,
                            "GM.addValueChangeListener": l ? kt({
                                get: () => a(m)
                            }) : void 0,
                            GM_removeValueChangeListener: l ? kt({
                                value: _
                            }) : void 0,
                            "GM.removeValueChangeListener": l ? kt({
                                get: () => a(_)
                            }) : void 0,
                            GM_setValue: l ? kt({
                                value: h
                            }) : void 0,
                            "GM.setValue": l ? kt({
                                get: () => a(h)
                            }) : void 0,
                            GM_setValues: l ? kt({
                                value: b
                            }) : void 0,
                            "GM.setValues": l ? kt({
                                get: () => a(b)
                            }) : void 0,
                            GM_deleteValue: l ? kt({
                                value: M
                            }) : void 0,
                            "GM.deleteValue": l ? kt({
                                get: () => a(M)
                            }) : void 0,
                            GM_deleteValues: l ? kt({
                                value: y
                            }) : void 0,
                            "GM.deleteValues": l ? kt({
                                get: () => a(y)
                            }) : void 0
                        })
                    }
                    )()
                      , p = ( () => {
                        const e = i(u.grant, ko)
                          , t = ( () => {
                            let e = []
                              , t = null;
                            return kt({
                                register: (n, r) => {
                                    zt(e, n),
                                    t || (Zo(o),
                                    t = co.connect("onurlchange", !0),
                                    t.onMessage.addListener((t => {
                                        if ("ack"in t)
                                            return;
                                        const {url: n} = t;
                                        if (!n)
                                            return;
                                        const o = kt({
                                            url: n
                                        });
                                        Qt(e, (e => {
                                            Pt(e, r, [o])
                                        }
                                        ))
                                    }
                                    )),
                                    t.connectMessage(kt({
                                        messageId: io(),
                                        method: "observeUrlChanges",
                                        uuid: u.uuid,
                                        id: o
                                    })))
                                }
                                ,
                                unregister: n => {
                                    let o;
                                    n && (o = Yt(e, n)) > -1 && (e = Xt(e, o, 1).result),
                                    t && 0 === e.length && (t.disconnect(),
                                    t = null)
                                }
                            })
                        }
                        )();
                        return kt({
                            "window.onurlchange": e ? kt({
                                value: t
                            }) : void 0
                        })
                    }
                    )()
                      , f = ( () => {
                        const e = i(u.grant, Eo)
                          , t = e => {
                            for (let t = 0; t < u.resources.length; t++) {
                                const n = u.resources[t];
                                if (n.name == e) {
                                    if (n.error)
                                        to.warn("@resource: " + n.error);
                                    else
                                        try {
                                            if ("string" == typeof n.content)
                                                return Do.decode(n.content)
                                        } catch (e) {}
                                    return ""
                                }
                            }
                            return null
                        }
                          , n = e => {
                            for (let t = 0; t < u.resources.length; t++) {
                                const n = u.resources[t];
                                if (n.name == e) {
                                    if (n.error)
                                        to.warn("@resource: " + n.error);
                                    else if ("string" == typeof n.content) {
                                        try {
                                            return `data:${n.meta || "application/octet-stream"};base64,${Ao.encode(n.content)}`
                                        } catch (e) {}
                                        return n.url
                                    }
                                    return ""
                                }
                            }
                            return null
                        }
                        ;
                        return kt({
                            GM_getResourceText: e ? kt({
                                value: t
                            }) : void 0,
                            "GM.getResourceText": e ? kt({
                                get: () => a(t)
                            }) : void 0,
                            GM_getResourceURL: e ? kt({
                                value: n
                            }) : void 0,
                            "GM.getResourceUrl": e ? kt({
                                get: () => a(n)
                            }) : void 0
                        })
                    }
                    )()
                      , v = ( () => {
                        const e = i(u.grant, Go)
                          , t = (e, t) => {
                            r.first.send("tabs", kt({
                                action: "set",
                                uuid: u.uuid,
                                tab: e
                            }), t ? () => t() : null)
                        }
                          , n = e => {
                            r.first.send("tabs", kt({
                                action: "get",
                                uuid: u.uuid
                            }), e ? t => {
                                e(t || kt({}))
                            }
                            : null)
                        }
                          , o = e => {
                            r.first.send("tabs", kt({
                                action: "list",
                                uuid: u.uuid
                            }), e ? t => {
                                e(t || kt({}))
                            }
                            : null)
                        }
                        ;
                        return kt({
                            GM_saveTab: e ? kt({
                                value: t
                            }) : void 0,
                            "GM.saveTab": e ? kt({
                                get: () => l(t, 1)
                            }) : void 0,
                            GM_getTab: e ? kt({
                                value: n
                            }) : void 0,
                            "GM.getTab": e ? kt({
                                get: () => l(n)
                            }) : void 0,
                            GM_getTabs: e ? kt({
                                value: o
                            }) : void 0,
                            "GM.getTabs": e ? kt({
                                get: () => l(o)
                            }) : void 0
                        })
                    }
                    )()
                      , m = ( () => {
                        const e = i(u.grant, Co)
                          , r = e => {
                            const r = rn(e);
                            let i = !1
                              , a = () => {
                                i = !0
                            }
                            ;
                            const l = (e, t) => {
                                t = t || kt({}),
                                e && Wo(( () => {
                                    yt(t, s),
                                    Pt(e, t, [t])
                                }
                                ), 1)
                            }
                              , c = r.url;
                            "object" == typeof c && c.href && (r.url = c.href);
                            const d = (e, t) => {
                                const n = sn(e);
                                if ("Blob" === n || "File" === n) {
                                    const o = e;
                                    $o(o).then((e => {
                                        t(kt({
                                            type: n,
                                            value: e,
                                            meta: o.type,
                                            name: o.name,
                                            lastModified: o.lastModified
                                        }))
                                    }
                                    ))
                                } else if ("FormData" === n) {
                                    const n = e
                                      , o = n.keys();
                                    let r;
                                    const s = kt({})
                                      , i = [];
                                    for (; !(r = o.next()).done; )
                                        zt(i, r.value);
                                    const a = () => {
                                        if (i.length) {
                                            const e = Bt(i);
                                            let t = n.getAll(e);
                                            "[]" !== bn(e, -2) && (t = Yn(t, 0)),
                                            d(t, (t => {
                                                s[e] = t,
                                                a()
                                            }
                                            ))
                                        } else
                                            t(kt({
                                                type: "FormData",
                                                value: s
                                            }))
                                    }
                                    ;
                                    a()
                                } else if ("URLSearchParams" === n)
                                    t(kt({
                                        type: "URLSearchParams",
                                        value: An(e)
                                    }));
                                else if ("Array" === n || "Object" === n) {
                                    const o = e;
                                    let r, s, i = 0, a = 0;
                                    if ("Object" === n) {
                                        const e = bt(o);
                                        s = t => t < e.length ? e[t] : null,
                                        r = kt({})
                                    } else
                                        s = e => e < o.length ? e : null,
                                        r = [];
                                    const l = () => {
                                        const e = s(i);
                                        null === e ? t(kt({
                                            type: n,
                                            value: r
                                        })) : d(o[e], (t => {
                                            r[e] = t,
                                            i++,
                                            a++ < 1024 ? l() : (a = 0,
                                            Wo(l, 1))
                                        }
                                        ))
                                    }
                                    ;
                                    l()
                                } else
                                    t(kt({
                                        value: e,
                                        type: "raw"
                                    }))
                            }
                              , g = (e, t, n, o, r) => {
                                let s;
                                if (n)
                                    "stream" == o && (s = n);
                                else if ("arraybuffer" == o)
                                    s = t || Uo(e || "");
                                else if ("blob" == o)
                                    s = new no.Blob([t || Uo(e || "")],kt({
                                        type: r
                                    }));
                                else if ("json" == o)
                                    s = Nt(e || "");
                                else if ("document" == o) {
                                    const t = new no.DOMParser
                                      , n = ["application/xhtml+xml", "application/xml", "image/svg+xml", "text/html", "text/xml"];
                                    let o = Yn(en(r || "text/xml", ";"), 0);
                                    -1 == Yt(n, o) && (o = "text/xml");
                                    try {
                                        s = Ln(t, e || "", o)
                                    } catch (e) {
                                        s = null
                                    }
                                } else
                                    s = e || (t ? (e => {
                                        let t = "";
                                        const n = new Kn(e);
                                        for (let e = 0; e < n.length; e += 32687)
                                            t += Pt(hn, null, n.subarray(e, e + 32687));
                                        return t
                                    }
                                    )(t) : "");
                                return s
                            }
                            ;
                            return (e => {
                                if (r.url) {
                                    const t = bn(r.url, 0, 5);
                                    if (-1 != Yt(["data:", "blob:"], t))
                                        return e()
                                }
                                if (!r.data)
                                    return e();
                                d(r.data, (t => {
                                    r.binary && (t.type = "Blob"),
                                    r.data = t,
                                    r.data_type = "typified",
                                    e()
                                }
                                ))
                            }
                            )(( () => {
                                if (i)
                                    return i = !1,
                                    void l(r.onabort);
                                let e, s, c, d = co.connect("xhr"), p = [], f = !1;
                                const {method: v, url: m, redirect: _, headers: h, cookie: b, binary: M, nocache: y, revalidate: w, timeout: E, context: G, responseType: S, overrideMimeType: R, anonymous: L, cookiePartition: I, fetch: O, user: C, password: x, data: P, data_type: k} = r
                                  , T = kt({
                                    method: v,
                                    url: m,
                                    redirect: _,
                                    headers: h,
                                    cookie: b,
                                    binary: M,
                                    nocache: y,
                                    revalidate: w,
                                    timeout: E,
                                    responseType: S,
                                    overrideMimeType: R,
                                    anonymous: L,
                                    cookiePartition: I,
                                    fetch: O,
                                    user: C,
                                    password: x,
                                    data: P,
                                    data_type: k
                                });
                                if (T.headers) {
                                    const e = T.headers;
                                    Qt(bt(e), (t => {
                                        "cookie" === En(t) && (T.cookie = `${e[t]}`,
                                        delete e[t])
                                    }
                                    ))
                                }
                                let D, A, U, $;
                                d.postMessage(kt({
                                    messageId: io(),
                                    method: "xhr",
                                    details: T,
                                    callbacks: kt({
                                        onloadstart: !!r.onloadstart,
                                        onload: !!r.onload,
                                        ondone: !!r.onloadend,
                                        onreadystatechange: !!r.onreadystatechange,
                                        onerror: !0,
                                        onabort: !!r.onabort,
                                        ontimeout: !!r.ontimeout,
                                        onprogress: !!r.onprogress,
                                        onuploadprogress: !(!r.upload || !r.upload.onprogress),
                                        onpartial: !0
                                    }),
                                    id: o,
                                    location: no.location.href,
                                    uuid: u.uuid,
                                    no_blob: "js" == t.sandboxMode
                                }));
                                const j = S ? En(S) : "";
                                let V, F = 0, N = 0;
                                const q = function() {
                                    var t = n((function*(t) {
                                        if (t && (c || void 0 !== e || void 0 !== s)) {
                                            if (R ? $ = R : t && ($ = (e => {
                                                const t = kt({});
                                                return e && Qt(en(e, "\n"), (e => {
                                                    const n = en(e, ":");
                                                    if (n.length < 2)
                                                        return;
                                                    const o = Yn(n, 0);
                                                    if (!o)
                                                        return;
                                                    const r = Kt(Wt(n, 1), ":");
                                                    t[En(yn(o))] = yn(r || "")
                                                }
                                                )),
                                                t
                                            }
                                            )(t.responseHeaders)["content-type"]),
                                            D = e,
                                            c)
                                                U = c.stream;
                                            else if (s) {
                                                const e = s;
                                                if (A = e.buffer,
                                                -1 == Yt(["blob", "arraybuffer"], j) && !D) {
                                                    let t;
                                                    qt([$, e.type], (e => t = ( (e, t, n, o) => {
                                                        const r = Mn(e, "charset=");
                                                        if (-1 == r)
                                                            return;
                                                        const s = bn(e, r + 8)
                                                          , i = Mn(s, ";");
                                                        return -1 == i ? o && o.optionalEnd ? s : void 0 : bn(e, r + 8, i)
                                                    }
                                                    )(En(e || ""), 0, 0, kt({
                                                        optionalEnd: !0
                                                    }))));
                                                    const n = new zn([A]);
                                                    V = $o(n, t),
                                                    D = yield V
                                                }
                                                V = void 0
                                            } else
                                                V && (yield V);
                                            e = s = void 0
                                        }
                                        if (D || U || A) {
                                            t.responseType = S,
                                            Qt(["response_data"], (e => delete t[e]));
                                            const e = kt({
                                                response: () => g(D, A, U, j, $ || "binary/octet-stream"),
                                                responseText: () => g(D, A, U, "text", $),
                                                responseXML: () => g(D, A, U, "document", $ || "text/xml")
                                            });
                                            Qt(bt(e), (n => {
                                                Et(t, n, kt({
                                                    get() {
                                                        try {
                                                            return e[n]()
                                                        } catch (e) {
                                                            to.warn(`${v}:`, e)
                                                        }
                                                    }
                                                }))
                                            }
                                            ))
                                        }
                                    }
                                    ));
                                    return function(e) {
                                        return t.apply(this, arguments)
                                    }
                                }()
                                  , X = []
                                  , B = function() {
                                    var e = n((function*(e) {
                                        e && zt(X, e);
                                        {
                                            const e = Bt(X);
                                            e && e()
                                        }
                                    }
                                    ));
                                    return function(t) {
                                        return e.apply(this, arguments)
                                    }
                                }();
                                "stream" === j && B(n((function*() {
                                    c = yield oo((e => {
                                        const t = new no.ReadableStream(kt({
                                            start: n => {
                                                Wo(( () => e(kt({
                                                    stream: t,
                                                    ctrl: n
                                                }))), 0)
                                            }
                                            ,
                                            cancel: () => {
                                                c && (c.canceled || a(),
                                                c.canceled = !0)
                                            }
                                        }))
                                    }
                                    ))
                                }
                                )));
                                const H = function() {
                                    var t = n((function*(t) {
                                        if (!("ack"in t))
                                            if (t.onpartial) {
                                                const n = t.data
                                                  , o = n
                                                  , r = o.partial
                                                  , i = n.nada;
                                                if (c) {
                                                    if (c.canceled)
                                                        return;
                                                    const e = mn || ( (e, t) => e.enqueue(t));
                                                    if (void 0 !== r)
                                                        e(c.ctrl, r);
                                                    else if (void 0 !== i) {
                                                        const t = new Kn(i.buffer);
                                                        e(c.ctrl, t)
                                                    } else
                                                        to.error(`${v}:`, "data message without data?!")
                                                } else {
                                                    let t;
                                                    r && zt(p, r),
                                                    i && (t = i),
                                                    void 0 !== o.index && o.index !== o.length - 1 || (p.length && (e = Kt(p, ""),
                                                    p = []),
                                                    s = t)
                                                }
                                            } else {
                                                const e = t.data;
                                                if (F = e.readyState || F,
                                                N = e.status || N,
                                                G && (e.context = G),
                                                t.onload)
                                                    yield q(e),
                                                    l(r.onreadystatechange, e),
                                                    l(r.onload, e);
                                                else if (t.onreadystatechange)
                                                    yield q(e),
                                                    4 != e.readyState && l(r.onreadystatechange, e);
                                                else if (t.onerror)
                                                    t.exception && to.error(t.exception),
                                                    l(r.onerror, e);
                                                else if (t.onabort)
                                                    l(r.onabort, e);
                                                else if (t.ondone)
                                                    f = !0,
                                                    c && !c.canceled && (_n || (e => e.close()))(c.ctrl),
                                                    yield q(e),
                                                    l(r.onloadend, e);
                                                else if (t.onloadstart)
                                                    c && (yield q(e)),
                                                    l(r.onloadstart, e);
                                                else if (t.onuploadprogress)
                                                    r.upload && l(r.upload.onprogress, e);
                                                else {
                                                    const n = Yn(Ht(["onprogress", "ontimeout"], (e => !!t[e])), 0) || "onerror";
                                                    l(r[n], e)
                                                }
                                            }
                                    }
                                    ));
                                    return function(e) {
                                        return t.apply(this, arguments)
                                    }
                                }();
                                d.onMessage.addListener((e => B(( () => H(e))))),
                                d.onDisconnect.addListener(( () => {
                                    f || l(r.onerror, kt({
                                        readyState: F,
                                        status: N,
                                        error: "background shutdown"
                                    })),
                                    d = null
                                }
                                )),
                                a = () => {
                                    d && d.postMessage(kt({
                                        messageId: io(),
                                        cancel: !0
                                    }))
                                }
                            }
                            )),
                            kt({
                                abort: () => {
                                    a()
                                }
                            })
                        }
                          , s = ( () => {
                            const e = kt({
                                toString: () => "[object Object]",
                                DONE: Un,
                                HEADERS_RECEIVED: $n,
                                LOADING: jn,
                                OPENED: Vn,
                                UNSENT: Fn
                            });
                            return Qt(["text", "arraybuffer", "blob", "document", "json", "stream"], (t => {
                                e[`RESPONSE_TYPE_${Gn(t)}`] = t
                            }
                            )),
                            e
                        }
                        )();
                        return Qt(bt(s), (e => Tt(r, e, s[e]))),
                        kt({
                            GM_xmlhttpRequest: e ? kt({
                                value: r
                            }) : void 0,
                            "GM.xmlHttpRequest": e ? kt({
                                get: () => {
                                    const e = e => c(r, e);
                                    return Qt(bt(s), (t => Tt(e, t, s[t]))),
                                    e
                                }
                            }) : void 0
                        })
                    }
                    )()
                      , _ = ( () => {
                        let n;
                        const o = () => {
                            if (!n) {
                                const {script: o} = e
                                  , {antifeatures: r, author: s, blockers: i, copyright: a, deleted: l, description_i18n: c, description: u, downloadURL: d, fileURL: g, grant: p, header: f, homepage: v, icon: m, icon64: _, lastModified: h, name_i18n: b, name: M, namespace: y, position: w, resources: E, supportURL: G, system: S, updateURL: R, version: L, webRequest: I, options: {override: {orig_connects: O, orig_excludes: C, orig_includes: x, orig_matches: P}, run_at: k, run_in: T, unwrap: D}} = o
                                  , {downloadMode: A, inIncognitoContext: U, relaxedCsp: $, isFirstPartyIsolation: j, container: V, sandboxMode: F, userAgent: N, version: q} = t
                                  , X = R || g
                                  , B = kt({
                                    antifeatures: r,
                                    author: s,
                                    blockers: i,
                                    connects: O,
                                    copyright: a,
                                    deleted: l,
                                    description_i18n: c,
                                    description: u,
                                    downloadURL: d,
                                    excludes: C,
                                    fileURL: g,
                                    grant: p,
                                    header: f,
                                    homepage: v,
                                    icon: m,
                                    icon64: _,
                                    includes: x,
                                    lastModified: h,
                                    matches: P,
                                    name_i18n: b,
                                    name: M,
                                    namespace: y,
                                    options: o.options,
                                    position: w,
                                    resources: E,
                                    "run-at": k,
                                    "run-in": T,
                                    supportURL: G,
                                    system: S,
                                    unwrap: D,
                                    updateURL: R,
                                    version: L,
                                    webRequest: I
                                })
                                  , H = kt({
                                    downloadMode: A,
                                    isFirstPartyIsolation: j,
                                    isIncognito: U,
                                    relaxedCsp: $,
                                    sandboxMode: F,
                                    container: V ? kt({
                                        id: V
                                    }) : void 0,
                                    script: B,
                                    scriptHandler: "Tampermonkey",
                                    scriptMetaStr: o.header,
                                    scriptUpdateURL: X,
                                    scriptWillUpdate: !!X,
                                    userAgentData: N,
                                    version: q
                                });
                                n = H
                            }
                            return Nt(Ft(n))
                        }
                        ;
                        return kt({
                            GM_info: kt({
                                get: o
                            }),
                            "GM.info": kt({
                                get: o
                            })
                        })
                    }
                    )()
                      , h = ( () => {
                        const e = i(u.grant, To);
                        let t = null;
                        const n = (e, n) => {
                            const r = () => {
                                t == s && (t = null),
                                s = null
                            }
                            ;
                            t && t.disconnect(),
                            Zo(o);
                            let s = t = co.connect("webRequest", !0);
                            return n && s.onMessage.addListener((e => {
                                "ack"in e || n(e.type, e.message || "ok", e.details)
                            }
                            )),
                            s.onDisconnect.addListener(r),
                            s.connectMessage(kt({
                                messageId: io(),
                                rules: e,
                                uuid: u.uuid
                            })),
                            kt({
                                abort: () => {
                                    s && s.disconnect(),
                                    r()
                                }
                            })
                        }
                        ;
                        return kt({
                            GM_webRequest: e ? kt({
                                value: n
                            }) : void 0,
                            "GM.webRequest": e ? kt({
                                get: () => a(n)
                            }) : void 0
                        })
                    }
                    )()
                      , b = ( () => {
                        const e = i(u.grant, Io);
                        let t = 0;
                        const n = kt({})
                          , o = kt({})
                          , r = (e, r, i) => {
                            if ("string" != typeof e)
                                throw "invalid name";
                            const {accessKey: a, autoClose: l, title: c, id: d} = "string" == typeof i ? kt({
                                accessKey: i
                            }) : i || kt({})
                              , g = void 0 !== d ? d : ++t
                              , p = n[g]
                              , f = p || co.connect("registerMenuCommand", !0);
                            return o[g] = r,
                            p || (f.onMessage.addListener((e => {
                                if (!("ack"in e) && "run" === e.method) {
                                    const t = o[g];
                                    if (!t)
                                        return;
                                    const n = e.event
                                      , r = n ? n.keyCode ? new Hn("keypress",n) : new Wn("click",e.event) : void 0;
                                    Wo(( () => t(r)), 1)
                                }
                            }
                            )),
                            f.onDisconnect.addListener(( () => {
                                s(g)
                            }
                            )),
                            n[g] = f),
                            f.connectMessage(kt({
                                messageId: io(),
                                name: e,
                                uuid: u.uuid,
                                accessKey: a,
                                autoClose: l,
                                title: c,
                                id: `${g}`
                            })),
                            g
                        }
                          , s = e => {
                            delete o[e];
                            const t = n[e];
                            t && (t.disconnect(),
                            delete n[e])
                        }
                        ;
                        return kt({
                            GM_registerMenuCommand: e ? kt({
                                value: r
                            }) : void 0,
                            "GM.registerMenuCommand": e ? kt({
                                get: () => a(r)
                            }) : void 0,
                            GM_unregisterMenuCommand: e ? kt({
                                value: s
                            }) : void 0,
                            "GM.unregisterMenuCommand": e ? kt({
                                get: () => a(s)
                            }) : void 0
                        })
                    }
                    )()
                      , M = ( () => {
                        const e = i(u.grant, Ro)
                          , t = (e, t, n, o) => {
                            let r, s, i = null;
                            const a = e => Kt([e ? `tag-${e}` : io(), u.uuid], "#");
                            if ("object" == typeof e) {
                                const n = e
                                  , {timeout: l, text: c, image: d, title: g, highlight: p, silent: f, url: v, tag: m} = n;
                                s = a(m),
                                r = kt({
                                    id: s,
                                    timeout: l,
                                    text: c,
                                    image: d || u.icon64 || u.icon || void 0,
                                    title: g || u.name,
                                    highlight: p,
                                    silent: f,
                                    url: v,
                                    tag: m
                                }),
                                i = n.ondone,
                                o = n.onclick,
                                "function" == typeof t && (i = t)
                            } else
                                s = a(),
                                r = kt({
                                    id: s,
                                    text: e,
                                    title: "string" == typeof t ? t : u.name,
                                    image: n || u.icon64 || u.icon || void 0
                                });
                            r.onclick = o,
                            r.ondone = i || void 0,
                            ( (e, t) => {
                                const {text: n, title: o, tag: r, url: s, image: i, highlight: a, silent: l, timeout: c, onclick: d, ondone: g} = rn(t);
                                if (n || a) {
                                    const t = "notification"
                                      , p = co.connect(t, !0);
                                    p.onMessage.addListener((e => {
                                        if ("ack"in e)
                                            return;
                                        const {clicked: t} = e;
                                        let u = !1;
                                        const f = kt({
                                            text: n,
                                            title: o,
                                            tag: r,
                                            url: s,
                                            image: i,
                                            highlight: a,
                                            silent: l,
                                            timeout: c,
                                            preventDefault: () => {
                                                u = !0
                                            }
                                        });
                                        t && (d && d(f),
                                        p.postMessage(kt({
                                            messageId: io(),
                                            canceled: u
                                        }))),
                                        g && g(!0 === t, f),
                                        p.disconnect()
                                    }
                                    )),
                                    p.connectMessage(kt({
                                        messageId: io(),
                                        method: "notification",
                                        id: e,
                                        uuid: u.uuid,
                                        text: n,
                                        title: o,
                                        tag: r,
                                        url: s,
                                        image: i,
                                        highlight: a,
                                        silent: l,
                                        timeout: c
                                    }))
                                } else
                                    to.warn("GM_notification: neither a message text nor highlight options were given!")
                            }
                            )(s, r)
                        }
                        ;
                        return kt({
                            GM_notification: e ? kt({
                                value: t
                            }) : void 0,
                            "GM.notification": e ? kt({
                                get: () => (e, n, o, r) => {
                                    let s;
                                    return s = "object" == typeof e ? e : kt({
                                        text: e,
                                        title: n,
                                        image: o,
                                        onclick: r
                                    }),
                                    new un((e => {
                                        const n = kt({});
                                        Qt(bt(s), (e => {
                                            n[e] = s[e]
                                        }
                                        ));
                                        const o = n.ondone;
                                        n.ondone = function(t, n) {
                                            o && Pt(o, this, [t, n]),
                                            Pt(e, this, [t])
                                        }
                                        ,
                                        t(n)
                                    }
                                    ))
                                }
                            }) : void 0
                        })
                    }
                    )()
                      , y = ( () => {
                        const e = i(u.grant, Mo)
                          , t = (e, t) => kt({
                            action: e,
                            uuid: u.uuid,
                            location: no.location.href,
                            details: t
                        })
                          , n = kt({
                            set: (e, n) => {
                                r.first.send("cookie", t("set", e), n ? e => {
                                    n(e.error)
                                }
                                : null)
                            }
                            ,
                            delete: (e, n) => {
                                r.first.send("cookie", t("delete", e), n ? e => {
                                    n(e.error)
                                }
                                : null)
                            }
                            ,
                            list: (e, n) => {
                                r.first.send("cookie", t("list", e), n ? e => {
                                    n(e.cookies, e.error)
                                }
                                : null)
                            }
                        });
                        return kt({
                            GM_cookie: e ? kt({
                                get: () => {
                                    const e = (e, t, o) => (n[e] || ( () => {}
                                    ))(t, o);
                                    return Qt(bt(n), (t => {
                                        Tt(e, t, n[t])
                                    }
                                    )),
                                    e
                                }
                            }) : void 0,
                            "GM.cookie": e ? kt({
                                get: () => {
                                    const e = kt({});
                                    return Qt(bt(n), (t => {
                                        e[t] = e => ( (e, t) => new un(( (o, r) => {
                                            if ("list" == e) {
                                                const s = t || kt({});
                                                n[e](s, ( (e, t) => {
                                                    t ? r(t) : o(e)
                                                }
                                                ))
                                            } else if ("set" == e) {
                                                const s = t;
                                                n[e](s, (e => {
                                                    e ? r(e) : o(void 0)
                                                }
                                                ))
                                            } else {
                                                const s = t;
                                                n[e](s, (e => {
                                                    e ? r(e) : o(void 0)
                                                }
                                                ))
                                            }
                                        }
                                        )))(t, e)
                                    }
                                    )),
                                    e
                                }
                            }) : void 0
                        })
                    }
                    )()
                      , w = ( () => {
                        const e = i(u.grant, wo)
                          , t = (e, t) => "object" == typeof e ? e : kt({
                            url: e,
                            name: t,
                            headers: void 0,
                            saveAs: void 0,
                            conflictAction: void 0,
                            onprogress: void 0,
                            onload: void 0,
                            ondone: void 0,
                            ontimeout: void 0,
                            onerror: void 0
                        })
                          , n = (e, n) => {
                            const r = t(e, n)
                              , s = (e, t) => {
                                t = t || kt({}),
                                e && Wo(( () => {
                                    Pt(e, t, [t])
                                }
                                ), 1)
                            }
                              , {url: i, name: a, headers: l, saveAs: c, conflictAction: d} = r;
                            let g;
                            Zo(o);
                            let p = co.connect("download", !0);
                            const f = () => {
                                p && p.stopReconnecting()
                            }
                            ;
                            p.onMessage.addListener((e => {
                                if (!("ack"in e)) {
                                    p && void 0 === g && (g = e.id,
                                    p.connectMessage(kt({
                                        messageId: io(),
                                        method: "download",
                                        uuid: u.uuid,
                                        id: g
                                    }), !1));
                                    try {
                                        e.load ? (r.onload && s(r.onload, e.data),
                                        f()) : e.progress ? r.onprogress && s(r.onprogress, e.data) : e.timeout ? (r.ontimeout && s(r.ontimeout, e.data),
                                        f()) : (r.onerror && s(r.onerror, e.data),
                                        f())
                                    } catch (e) {
                                        to.log("env: Error: TM_download - ", e, r)
                                    }
                                }
                            }
                            )),
                            p.onDisconnect.addListener(( () => p = null));
                            const v = kt({
                                messageId: io(),
                                details: kt({
                                    url: i,
                                    name: a,
                                    headers: l,
                                    conflictAction: d,
                                    saveAs: c
                                }),
                                uuid: u.uuid
                            });
                            return p.postMessage(v),
                            kt({
                                abort: () => {
                                    p && p.postMessage(kt({
                                        uuid: u.uuid,
                                        cancel: !0
                                    }))
                                }
                            })
                        }
                        ;
                        return kt({
                            GM_download: e ? kt({
                                value: n
                            }) : void 0,
                            "GM.download": e ? kt({
                                get: () => (e, o) => c(n, t(e, o))
                            }) : void 0
                        })
                    }
                    )()
                      , E = ( () => {
                        const e = i(u.grant, Lo)
                          , t = (e, t) => {
                            const n = "openInTab";
                            let r, s, i = !1, a = null;
                            const l = ( () => {
                                const e = [];
                                return kt({
                                    run: t => {
                                        if (t && zt(e, t),
                                        r)
                                            for (; e.length; )
                                                Bt(e)()
                                    }
                                })
                            }
                            )();
                            Zo(o);
                            let c = co.connect(n, !0);
                            const d = () => {
                                c && c.postMessage(kt({
                                    messageId: io(),
                                    close: !0
                                }))
                            }
                            ;
                            c.onMessage.addListener((e => {
                                "ack"in e || (e.tabId ? i ? d() : (c && void 0 === r && c.connectMessage(kt({
                                    messageId: io(),
                                    method: n,
                                    uuid: u.uuid,
                                    tabId: e.tabId
                                }), !1),
                                r = e.tabId,
                                l.run()) : e.name ? s = e.name : e.closed && (i = !0,
                                a && (a(),
                                a = null),
                                c && c.stopReconnecting()))
                            }
                            )),
                            c.onDisconnect.addListener(( () => c = null)),
                            c.postMessage(kt({
                                messageId: io(),
                                method: n,
                                url: e,
                                location: no.location.href,
                                options: t,
                                uuid: u.uuid
                            }));
                            const g = kt({});
                            return wt(g, kt({
                                close: kt({
                                    value: () => {
                                        i ? to.warn("env: attempt to close already closed tab!") : d()
                                    }
                                }),
                                focus: kt({
                                    value: () => {
                                        c && c.postMessage(kt({
                                            messageId: io(),
                                            focus: !0
                                        }))
                                    }
                                }),
                                closed: kt({
                                    get: () => i
                                }),
                                onclose: kt({
                                    get: () => a,
                                    set: e => {
                                        a = e
                                    }
                                }),
                                name: kt({
                                    get: () => s,
                                    set: e => {
                                        l.run(( () => {
                                            c && c.postMessage(kt({
                                                messageId: io(),
                                                name: e
                                            }))
                                        }
                                        ))
                                    }
                                })
                            })),
                            g
                        }
                        ;
                        return kt({
                            GM_openInTab: e ? kt({
                                value: t
                            }) : void 0,
                            "GM.openInTab": e ? kt({
                                get: () => a(t)
                            }) : void 0
                        })
                    }
                    )()
                      , G = ( () => {
                        const e = i(u.grant, xo);
                        return kt({
                            "window.close": e ? kt({
                                value: e => {
                                    r.first.send("closeTab", kt({
                                        uuid: u.uuid
                                    }), e ? () => e() : null)
                                }
                            }) : void 0
                        })
                    }
                    )()
                      , S = ( () => {
                        const e = i(u.grant, Po);
                        return kt({
                            "window.focus": e ? kt({
                                value: e => {
                                    r.first.send("focusTab", kt({
                                        uuid: u.uuid
                                    }), e ? () => e() : null)
                                }
                            }) : void 0
                        })
                    }
                    )()
                      , R = ( () => {
                        const e = i(u.grant, So)
                          , t = function(...e) {
                            Pt(to.log, this, e)
                        };
                        return kt({
                            GM_log: e ? kt({
                                value: t
                            }) : void 0,
                            "GM.log": e ? kt({
                                get: () => a(t)
                            }) : void 0
                        })
                    }
                    )()
                      , L = ({root: e, tag: t, properties: n, cb: o}) => {
                        const s = io()
                          , i = kt({
                            tag: t,
                            properties: n,
                            id: s,
                            uuid: u.uuid
                        });
                        r.first.send("addElement", i, e, o ? () => o() : null);
                        const a = Zn.getElementById(s)
                          , l = n ? n.id : void 0;
                        return void 0 !== l && xn(a, "id", l),
                        a
                    }
                      , I = ( () => {
                        const e = i(u.grant, bo)
                          , t = (e, t) => L(kt({
                            root: void 0,
                            tag: "style",
                            properties: kt({
                                textContent: e
                            }),
                            cb: t
                        }));
                        return kt({
                            GM_addStyle: e ? kt({
                                value: t
                            }) : void 0,
                            "GM.addStyle": e ? kt({
                                get: () => a(t)
                            }) : void 0
                        })
                    }
                    )()
                      , O = ( () => {
                        const e = i(u.grant, bo)
                          , t = (e, t, n, o) => {
                            let r, s, i, a;
                            return "string" == typeof e ? (s = e,
                            i = t,
                            a = n) : (r = e,
                            s = t,
                            i = n,
                            a = o),
                            i && (i = kt(i)),
                            L(kt({
                                root: r,
                                tag: s,
                                properties: i,
                                cb: a
                            }))
                        }
                        ;
                        return kt({
                            GM_addElement: e ? kt({
                                value: t
                            }) : void 0,
                            "GM.addElement": e ? kt({
                                get: () => a(t)
                            }) : void 0
                        })
                    }
                    )()
                      , C = ( () => {
                        const e = i(u.grant, ho)
                          , t = (e, t) => {
                            const n = "backgroundControl"
                              , r = co.connect(n);
                            let s = !1;
                            const i = "restart" === e.action || void 0;
                            r.onMessage.addListener((e => {
                                if ("ack"in e)
                                    return;
                                s = !0;
                                const n = e ? e.error : void 0;
                                n && to.warn(n),
                                t && t(n),
                                r.disconnect()
                            }
                            )),
                            r.postMessage(kt({
                                messageId: io(),
                                method: n,
                                id: o,
                                uuid: u.uuid,
                                restart: i
                            })),
                            i && (Qo = !1),
                            r.onDisconnect.addListener(( () => {
                                !s && t && t(i ? void 0 : "port disconnected for unknown reason"),
                                s = !0
                            }
                            ))
                        }
                        ;
                        return kt({
                            "GM.backgroundControl": e ? kt({
                                get: () => a(t)
                            }) : void 0
                        })
                    }
                    )()
                      , x = kt({
                        ...O,
                        ...I,
                        ...G,
                        ...y,
                        ...w,
                        ...S,
                        ..._,
                        ...R,
                        ...b,
                        ...M,
                        ...E,
                        ...f,
                        ...d,
                        ...v,
                        ...p,
                        ...g,
                        ...h,
                        ...m,
                        ...C
                    });
                    return s[e.script.uuid] = s[e.script.uuid] || x,
                    s[e.script.uuid]
                }
            })
        }
          , tr = (e, t, o, r, s, i) => {
            const a = (e, t, n, o, r) => {
                const s = t[n]
                  , a = typeof s;
                return o && "string" === a ? t[n] = () => i(s, r) : r && "function" === a && (t[n] = function() {
                    return Pt(s, r, arguments)
                }
                ),
                Pt(e, vt, t)
            }
              , l = function() {
                var e = n((function*(e, t, n, o) {
                    const r = kt({
                        attrName: "null",
                        newValue: "null",
                        prevValue: "null",
                        eventPhase: kn,
                        target: vt.document,
                        relatedNode: vt.document,
                        srcElement: vt.document
                    });
                    yield null,
                    n || (yield null),
                    "load" === e && (yield null),
                    ( (e, t, n, o) => {
                        const r = kt({
                            bubbles: !0,
                            cancelBubble: !1,
                            cancelable: !1,
                            clipboardData: void 0,
                            currentTarget: null,
                            defaultPrevented: !1,
                            eventPhase: 0,
                            newValue: null,
                            prevValue: null,
                            relatedNode: null,
                            returnValue: !0,
                            srcElement: null,
                            target: null,
                            timeStamp: Nn()
                        })
                          , s = "string" == typeof n ? () => i(n, o) : n
                          , a = new Event(e);
                        Qt(bt(r), (e => {
                            Tt(a, e, r[e])
                        }
                        )),
                        Qt(bt(t), (e => {
                            Tt(a, e, t[e])
                        }
                        )),
                        Pt(s, o, [a])
                    }
                    )(e, r, t, o)
                }
                ));
                return function(t, n, o, r) {
                    return e.apply(this, arguments)
                }
            }();
            let c = !0;
            ao(( () => c = !1));
            const u = kt({})
              , d = e => !!("object" == typeof e && null !== e ? e.capture : e)
              , g = (e, r, s) => {
                let i, g;
                null === r || ("object" == typeof r ? (i = function() {
                    var e = n((function*(e) {
                        const t = r.handleEvent;
                        "function" == typeof t && Pt(t, r, [e])
                    }
                    ));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                g = r) : (i = r,
                g = void 0));
                const f = d(s);
                let m, _;
                if (void 0 !== i && c && ((m = "DOMContentLoaded" == e) || "load" == e)) {
                    const n = On(vt.document);
                    if (m && ("complete" == n || "interactive" === n) && "document-idle" != t || !m && "complete" == n)
                        return void l(e, i, f, v)
                }
                const h = "urlchange" == e ? o["window.onurlchange"] : void 0;
                if (void 0 === i)
                    ;
                else if ("string" != typeof i) {
                    const t = `${e}-${f}`;
                    u[t] = u[t] || [];
                    const n = function(...t) {
                        return "object" == typeof s && s.once && p(e, r, s),
                        Pt(i, this === vt || this === mt ? v : this, t)
                    }
                      , o = kt({
                        listener: i,
                        filter: n,
                        object: g
                    });
                    if (zt(u[t], o),
                    _ = n,
                    h)
                        return void h.value.register(n)
                } else {
                    if (h)
                        return void to.warn("env: urlchange listener must be a function!");
                    _ = i
                }
                return a(no.addEventListener, [e, _, s], 1, !0)
            }
              , p = (e, t, n) => {
                let r, s;
                null === t || ("object" == typeof t ? s = t : r = t);
                const i = "urlchange" == e ? o["window.onurlchange"] : void 0
                  , l = d(n)
                  , c = `${e}-${l}`
                  , g = u[c] && Ht(u[c], (e => e.object ? e.object === s : e.listener === r));
                if (g && g.length) {
                    let t;
                    if (Qt(g, (o => {
                        if (i)
                            i.value.unregister(o.filter);
                        else
                            try {
                                a(no.removeEventListener, [e, o.filter, n], 1, !0)
                            } catch (o) {
                                t = o
                            }
                        const r = Yt(u[c], o);
                        u[c] = Xt(u[c], r, 1).result
                    }
                    )),
                    u[c].length || delete u[c],
                    t)
                        throw t
                } else if (void 0 !== r)
                    return a(no.removeEventListener, [e, r, n], 1, !0)
            }
              , f = kt({
                CDATA: kt({
                    value: function(e) {
                        this.src = e,
                        this.toString = function() {
                            return this.src
                        }
                        ,
                        this.toXMLString = this.toString
                    }
                }),
                uneval: kt({
                    value: e => {
                        try {
                            return `\\$1 = ${Ft(e)};`
                        } catch (e) {
                            to.log(e)
                        }
                    }
                }),
                define: kt({
                    value: void 0
                }),
                module: kt({
                    value: void 0
                }),
                exports: kt({
                    value: void 0
                }),
                setTimeout: kt({
                    value: (...e) => a(zo, e, 0, !0, v)
                }),
                setInterval: kt({
                    value: (...e) => a(Yo, e, 0, !0, v)
                }),
                close: ( () => {
                    const e = o["window.close"];
                    return e ? kt({
                        get: () => vt == vt.top ? t => e.value(t) : no.close
                    }) : void 0
                }
                )(),
                focus: ( () => {
                    const e = o["window.focus"];
                    return e ? kt({
                        get: () => t => e.value(t)
                    }) : void 0
                }
                )(),
                onurlchange: o["window.onurlchange"] ? ( () => {
                    let e = null;
                    return kt({
                        get: () => e,
                        set: t => {
                            e && p("urlchange", e),
                            e = t,
                            g("urlchange", e)
                        }
                    })
                }
                )() : void 0,
                location: kt({
                    set: e => {
                        no.location.href = e
                    }
                }),
                name: kt({
                    get: () => vt.name,
                    set: e => {
                        vt.name = e
                    }
                }),
                clearInterval: kt({
                    get: () => Jo
                }),
                clearTimeout: kt({
                    get: () => Ko
                }),
                addEventListener: kt({
                    value: g
                }),
                removeEventListener: kt({
                    value: p
                }),
                console: kt({
                    get: () => po
                })
            });
            if (!e) {
                const e = kt({
                    window: kt({
                        get: () => v
                    }),
                    globalThis: kt({
                        get: () => v
                    }),
                    cloneInto: kt({
                        value: e => e
                    }),
                    exportFunction: kt({
                        value: (e, t, n) => {
                            const o = n && Dt(n, "defineAs");
                            return o && (t[o] = e),
                            e
                        }
                    }),
                    createObjectIn: kt({
                        value: (e, t) => {
                            const n = kt({})
                              , o = t && Dt(t, "defineAs");
                            return o && (e[o] = n),
                            n
                        }
                    }),
                    undefined: kt({
                        get: () => {}
                    })
                });
                yt(f, e)
            }
            r && yt(f, r);
            const v = s(f);
            return v
        }
        ;
        let nr;
        n((function*() {
            const t = e.contextId;
            let r;
            const {fSend: s, fOnMessage: i, cloneInto: a, pageWindow: l} = e;
            r = s && i ? ro(kt({
                sendPrefix: "2U",
                listenPrefix: "2S",
                send: s,
                onMessage: i
            })) : so(kt({
                sendPrefix: "2C",
                listenPrefix: "2P"
            })),
            e.bridges.first = r;
            const c = yt(e.console, go);
            r.init(t);
            const u = kt({});
            r.setMessageListener(( ({method: t, args: n}) => {
                if ("commid" == t)
                    r.switchId(n.id),
                    r.send("ack", kt({
                        id: n.id
                    }));
                else if ("injectable" == t)
                    p(n.id, ( () => {
                        r.send("ack", kt({
                            id: n.id
                        }))
                    }
                    )),
                    r.send("injectableack", kt({
                        id: n.id
                    }));
                else if ("setForeignAttr" == t)
                    vt[n.attr] = n.value;
                else if ("script" == t) {
                    const {id: t, unwrap: o, bundle: s} = n
                      , {script: i} = s
                      , {name: a, uuid: l, options: {run_at: c}} = i;
                    p(t, (t => {
                        const r = o ? () => t() : () => Pt(t, ( (t, n, o, r) => {
                            const {pageWindow: s, cloneInto: i, exportFunction: a} = e
                              , l = s || vt
                              , {script: c} = t
                              , u = c.options.compat_powerful_this
                              , d = -1 !== Yt(c.grant, "none");
                            nr = nr || er(n);
                            const g = nr.of(t)
                              , p = e => kt({
                                p: m,
                                r: Pt,
                                s: e
                            })
                              , f = kt({
                                seed: kt({
                                    get: () => p(h),
                                    once: !0
                                })
                            })
                              , v = kt({})
                              , m = kt({
                                GM: v
                            })
                              , _ = l && l;
                            u && (Tt(f, "GM", kt({
                                value: v
                            })),
                            Tt(f, "unsafeWindow", kt({
                                value: _
                            }))),
                            d || (m.unsafeWindow = _),
                            Qt(bt(g), (e => {
                                const t = bn(e, 0, 3)
                                  , n = g[e];
                                if (void 0 !== n)
                                    if ("GM_" === t)
                                        m[e] = void 0 !== n.get ? n.get() : n.value,
                                        u && Tt(f, e, n);
                                    else if ("GM." === t) {
                                        const t = tn(e, 3);
                                        n.configurable = n.enumerable = !0,
                                        "value"in n ? n.writable = !0 : "set"in n || (n.set = e => {
                                            delete v[t],
                                            v[t] = e
                                        }
                                        ),
                                        Et(v, t, n)
                                    }
                            }
                            ));
                            const h = d ? p(u ? m : kt({})) : tr(d, c.options.run_at, g, f, o, r);
                            return h
                        }
                        )(s, n.flags, d, v), []);
                        "document-start" == c || "context-menu" == c ? r() : u[l] = r
                    }
                    )),
                    r.send(`scriptack-${t}`, kt({
                        id: t
                    }))
                } else if ("port.message" == t)
                    co.message(n, r);
                else if ("external.connect" == t)
                    (t => {
                        const {bridges: n} = e
                          , o = vt
                          , r = Dt(o, "external");
                        if (!r)
                            return;
                        const s = t ? e => t(e, o, kt({
                            cloneFunctions: !0
                        })) : e => e
                          , i = (e, t) => {
                            n.first.send("external.message", e, t)
                        }
                        ;
                        try {
                            const e = () => {
                                const e = kt({
                                    getVersion: e => {
                                        i(kt({
                                            method: "getVersion"
                                        }), (t => e(s(t))))
                                    }
                                    ,
                                    openOptions: (e, t) => {
                                        i(kt({
                                            method: "openOptions",
                                            params: e
                                        }), t)
                                    }
                                    ,
                                    isInstalled: (e, t, n) => {
                                        "function" == typeof t && (n = t,
                                        t = null),
                                        n && i(kt({
                                            method: "isInstalled",
                                            script: kt({
                                                name: e,
                                                namespace: t
                                            })
                                        }), (e => n(s(e))))
                                    }
                                });
                                return s(e)
                            }
                            ;
                            wt(r, kt({
                                Tampermonkey: kt({
                                    value: e(),
                                    configurable: !0
                                })
                            }))
                        } catch (e) {}
                    }
                    )(a);
                else if ("run" == t) {
                    const {uuid: e} = n
                      , t = Dt(u, e);
                    t ? "function" == typeof t && (t(),
                    delete u[e]) : c.warn(`env: missing script "${e}"!`)
                }
            }
            ));
            const {createProxy: d} = ( (e, t) => {
                const n = (e => {
                    let t = kt({});
                    const n = (e, o, r) => {
                        const s = Rt(e);
                        s && s === o || (null != s && --r >= 0 && n(s, e, r),
                        t = yt(t, Lt(e)))
                    }
                    ;
                    return n(e, null, 5),
                    t
                }
                )(vt);
                Qt(o, (e => delete n[e]));
                const r = n;
                return kt({                                                                                                                                                                                                                     
                    createProxy: n => {
                        let o = r;
                        const s = e => {
                            let t, n;
                            const r = (t = St(p, e)) || (n = o[e]);
                            return kt({
                                d: r ? kt(r) : r,
                                l: !!t,
                                w: !!n
                            })
                        }
                          , i = e => {
                            if (!l(e))
                                return !1;
                            if ("length" === e)
                                return !0;
                            const t = Ot(Xn(e));
                            return t >= 0 && t <= ln && e === `${t}`
                        }
                          , a = e => "on" === bn(e, 0, 2)
                          , l = e => "string" == typeof e
                          , c = (e, n) => {
                            const o = bn(e, 2)
                              , r = g[o];
                            if (r && (t.removeEventListener(o, r),
                            delete g[o]),
                            n && (e => "function" == typeof e)(n)) {
                                const e = (...e) => Pt(n, t, e);
                                t.addEventListener(o, e),
                                g[o] = e
                            }
                        }
                          , u = t => void 0 !== t && (t === e || t === vt || t === mt)
                          , d = kt({
                            addEventListener: !0,
                            alert: !0,
                            atob: !0,
                            blur: !0,
                            btoa: !0,
                            cancelAnimationFrame: !0,
                            cancelIdleCallback: !0,
                            captureEvents: !0,
                            clearInterval: !0,
                            clearTimeout: !0,
                            close: !0,
                            confirm: !0,
                            createImageBitmap: !0,
                            dispatchEvent: !0,
                            dump: !0,
                            fetch: !0,
                            find: !0,
                            focus: !0,
                            getComputedStyle: !0,
                            getDefaultComputedStyle: !0,
                            getSelection: !0,
                            matchMedia: !0,
                            moveBy: !0,
                            moveTo: !0,
                            open: !0,
                            openDatabase: !0,
                            postMessage: !0,
                            print: !0,
                            prompt: !0,
                            queueMicrotask: !0,
                            releaseEvents: !0,
                            removeEventListener: !0,
                            reportError: !0,
                            requestAnimationFrame: !0,
                            requestIdleCallback: !0,
                            resizeBy: !0,
                            resizeTo: !0,
                            scroll: !0,
                            scrollBy: !0,
                            scrollByLines: !0,
                            scrollByPages: !0,
                            scrollTo: !0,
                            setInterval: !0,
                            setResizable: !0,
                            setTimeout: !0,
                            showDirectoryPicker: !0,
                            sizeToContent: !0,
                            stop: !0,
                            structuredClone: !0,
                            updateCommands: !0,
                            webkitCancelAnimationFrame: !0,
                            webkitRequestAnimationFrame: !0,
                            webkitRequestFileSystem: !0,
                            webkitResolveLocalFileSystemURL: !0
                        });
                        Qt(bt(d), (e => {
                            n[e] = n[e] || kt({
                                bind: !0
                            })
                        }
                        ));
                        const g = kt({})
                          , p = kt({});
                        Tt(p, Sn, "Window");
                        const f = new qn(p,kt({
                            defineProperty: (e, t, o) => {
                                const {d: r, l: u} = s(t)
                                  , d = kt(o);
                                return r && !r.configurable && (!!r.configurable != !!d.configurable || !!r.enumerable != !!r.enumerable) || i(t) ? (Et(u ? p : vt, t, d),
                                !1) : (Et(p, t, d),
                                l(t) && a(t) && c(t),
                                delete n[t],
                                !0)
                            }
                            ,
                            deleteProperty: (e, t) => {
                                let {d: i, l: u, w: d} = s(t);
                                return !(!i || !i.configurable) && (u && (u = delete p[t],
                                l(t) && a(t) && c(t)),
                                (d || (i = o[t]) && i.configurable) && (r === o && (o = yt(kt({}), r)),
                                d = delete o[t]),
                                delete n[t],
                                u || d)
                            }
                            ,
                            get: (e, t) => {
                                if ("undefined" === t || t === Rn)
                                    return;
                                const o = n[t];
                                if (o) {
                                    if (o.once && delete n[t],
                                    "value"in o)
                                        return o.value;
                                    if (o.get)
                                        return o.get()
                                }
                                const {d: r, l: a} = i(t) ? kt({
                                    d: St(vt, t),
                                    l: !1
                                }) : s(t);
                                if (r) {
                                    let e;
                                    const n = "value"in r ? Dt(r, "value") : (e = Dt(r, "get")) && "function" == typeof e ? a ? e() : Vt(e, vt)() : void 0;
                                    return n && o && o.bind ? Vt(n, vt) : a || "event" == t ? n : u(n) || "globalThis" === t ? f : n
                                }
                            }
                            ,
                            getOwnPropertyDescriptor: (e, t) => {
                                let {d: o, l: r} = s(t);
                                if (!o) {
                                    const e = n[t];
                                    if (e)
                                        return kt({
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0,
                                            value: e.value,
                                            set: e.set,
                                            get: e.get
                                        });
                                    if (!i(t))
                                        return;
                                    o = St(vt, t),
                                    r = !1
                                }
                                const a = yt(kt({}), o);
                                if (u(a.value) && (a.value = f),
                                !r) {
                                    const e = a.get;
                                    e && (a.get = () => {
                                        const t = Vt(e, vt)();
                                        return u(t) ? f : t
                                    }
                                    ),
                                    a && !a.configurable && Et(p, t, a)
                                }
                                return a
                            }
                            ,
                            has: (e, t) => t in p || t in n || t in o,
                            ownKeys: () => {
                                const e = e => !(e in o)
                                  , t = bt(o)
                                  , n = Ht(bt(Lt(p)), e)
                                  , r = kt({});
                                for (let e = 0; "Window" === sn(At(vt, e)); e += 1)
                                    r[e] = !0;
                                const s = Ht(bt(r), e);
                                return Jt(t, n, s)
                            }
                            ,
                            preventExtensions: () => !0,
                            set: (e, t, o) => {
                                const r = n[t];
                                if (r && r.set)
                                    return r.set(o),
                                    !0;
                                const {d: u} = s(t);
                                return !(u && !u.writable && !Dt(u, "set") || i(t) || (delete n[t],
                                Tt(p, t, o),
                                l(t) && a(t) && c(t, o),
                                0))
                            }
                        }));
                        return f
                    }
                })
            }
            )(l, no)
              , g = e => {
                r.send("csp", kt({
                    src: e
                }))
            }
              , p = function() {
                var e = n((function*(e, t) {
                    Et(mt, e, kt({
                        set: n => (delete mt[e],
                        lo(),
                        t(n)),
                        configurable: !0,
                        enumerable: !1
                    })),
                    ao(( () => delete mt[e]))
                }
                ));
                return function(t, n) {
                    return e.apply(this, arguments)
                }
            }()
              , f = function() {
                var e = n((function*(e, t, n) {
                    p(e, (e => Pt(e, t, n || [])))
                }
                ));
                return function(t, n, o) {
                    return e.apply(this, arguments)
                }
            }()
              , v = (e, t) => t ? ( (e, t) => {
                const n = `__p__${io()}`;
                f(n, t, void 0),
                g('window["' + n + '"] = function(){' + e + "};"),
                delete mt[n]
            }
            )(e, t) : g(e)
        }
        ))(),
        lo()
    }
    )()
}
;
