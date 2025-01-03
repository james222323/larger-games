!function e(t, o, i) {
    function r(s, a) {
        if (!o[s]) {
            if (!t[s]) {
                var c = "function" == typeof require && require;
                if (!a && c)
                    return c(s, !0);
                if (n)
                    return n(s, !0);
                var h = new Error("Cannot find module '" + s + "'");
                throw h.code = "MODULE_NOT_FOUND",
                h
            }
            var d = o[s] = {
                exports: {}
            };
            t[s][0].call(d.exports, (function(e) {
                return r(t[s][1][e] || e)
            }
            ), d, d.exports, e, t, o, i)
        }
        return o[s].exports
    }
    for (var n = "function" == typeof require && require, s = 0; s < i.length; s++)
        r(i[s]);
    return r
}({
    1: [function(e, t, o) {
        "use strict";
        Object.defineProperty(o, "__esModule", {
            value: !0
        }),
        o.getConfigEndpoint = void 0;
        o.getConfigEndpoint = "https://dontrackme/loader/config/get"
    }
    , {}],
    2: [function(e, t, o) {
        "use strict";
        Object.defineProperty(o, "__esModule", {
            value: !0
        }),
        o.testkit = void 0,
        o.testkit = window.testkit
    }
    , {}],
    3: [function(e, t, o) {
        "use strict";
        Object.defineProperty(o, "__esModule", {
            value: !0
        }),
        o.isDevHost = void 0,
        o.isDevHost = function() {
            const e = /(.*)version=/.test(location.href);
            return location.href.indexOf("/#!/dev/") >= 0 || location.href.indexOf(".cloudfront.net/repository/") >= 0 || location.href.indexOf("ngrok.io") >= 0 || function() {
                const e = window.location.href
                  , t = /(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){3}(?!0)((1?\d?\d|25[0-5]|2[0-4]\d)(.*))/g;
                return "about:blank" === e || e.indexOf("localhost") >= 0 || t.test(e)
            }() || e
        }
    }
    , {}],
    4: [function(e, t, o) {
        "use strict";
        Object.defineProperty(o, "__esModule", {
            value: !0
        }),
        o.HostInfo = void 0;
        const i = e("./resource-loader-fetch")
          , r = e("./debug")
          , n = [{
            cpu: "a7",
            width: 640,
            height: 1136,
            model: "iPhone 5/iPhone 5s"
        }, {
            cpu: "a7",
            width: 1536,
            height: 2048,
            model: "iPad Air/iPad Mini 2/iPad Mini 3"
        }, {
            cpu: "a8",
            width: 640,
            height: 1136,
            model: "iPod touch (6th gen)"
        }, {
            cpu: "a8",
            width: 750,
            height: 1334,
            model: "iPhone 6"
        }, {
            cpu: "a8",
            width: 1242,
            height: 2208,
            model: "iPhone 6 Plus"
        }, {
            cpu: "a8",
            width: 1536,
            height: 2048,
            model: "iPad Air 2/iPad Mini 4"
        }, {
            cpu: "a9",
            width: 640,
            height: 1136,
            model: "iPhone SE"
        }, {
            cpu: "a9",
            width: 750,
            height: 1334,
            model: "iPhone 6s"
        }, {
            cpu: "a9",
            width: 1242,
            height: 2208,
            model: "iPhone 6s Plus"
        }, {
            cpu: "a9x",
            width: 1536,
            height: 2048,
            model: "iPad Pro (1st gen 9.7-inch)"
        }, {
            cpu: "a9x",
            width: 2048,
            height: 2732,
            model: "iPad Pro (1st gen 12.9-inch)"
        }, {
            cpu: "a10",
            width: 750,
            height: 1334,
            model: "iPhone 7"
        }, {
            cpu: "a10",
            width: 1242,
            height: 2208,
            model: "iPhone 7 Plus"
        }, {
            cpu: "a10x",
            width: 1668,
            height: 2224,
            model: "iPad Pro (2th gen 10.5-inch)"
        }, {
            cpu: "a10x",
            width: 2048,
            height: 2732,
            model: "iPad Pro (2th gen 12.9-inch)"
        }, {
            cpu: "a11",
            width: 750,
            height: 1334,
            model: "iPhone 8"
        }, {
            cpu: "a11",
            width: 1242,
            height: 2208,
            model: "iPhone 8 Plus"
        }, {
            cpu: "a11",
            width: 1125,
            height: 2436,
            model: "iPhone X"
        }, {
            cpu: "a12",
            width: 828,
            height: 1792,
            model: "iPhone Xr"
        }, {
            cpu: "a12",
            width: 1125,
            height: 2436,
            model: "iPhone Xs"
        }, {
            cpu: "a12",
            width: 1242,
            height: 2688,
            model: "iPhone Xs Max"
        }, {
            cpu: "a12x",
            width: 1668,
            height: 2388,
            model: "iPad Pro (3rd gen 11-inch)"
        }, {
            cpu: "a12x",
            width: 2048,
            height: 2732,
            model: "iPad Pro (3rd gen 12.9-inch)"
        }, {
            cpu: "a13",
            width: 828,
            height: 1792,
            model: "iPhone 11"
        }, {
            cpu: "a13",
            width: 1125,
            height: 2436,
            model: "iPhone 11 Pro"
        }, {
            cpu: "a13",
            width: 1242,
            height: 2688,
            model: "iPhone 11 Pro Max"
        }, {
            cpu: "a14",
            width: 1080,
            height: 2340,
            model: "iPhone 12 Mini"
        }, {
            cpu: "a14",
            width: 1170,
            height: 2532,
            model: "iPhone 12"
        }, {
            cpu: "a14",
            width: 1284,
            height: 2778,
            model: "iPhone 12 Pro Max"
        }, {
            cpu: "a15",
            width: 1080,
            height: 2340,
            model: "iPhone 13 Mini"
        }, {
            cpu: "a15",
            width: 1170,
            height: 2532,
            model: "iPhone 13"
        }, {
            cpu: "a15",
            width: 1284,
            height: 2778,
            model: "iPhone 13 Pro Max"
        }, {
            cpu: "a15",
            width: 1170,
            height: 2532,
            model: "iPhone 14"
        }, {
            cpu: "a15",
            width: 1284,
            height: 2778,
            model: "iPhone 14 Plus"
        }, {
            cpu: "a16",
            width: 1179,
            height: 2556,
            model: "iPhone 14 Pro"
        }, {
            cpu: "a16",
            width: 1290,
            height: 2796,
            model: "iPhone 14 Pro Max"
        }];
        o.HostInfo = class {
            location;
            baseUrl;
            wasmSupported;
            wasmStreaming;
            hardwareConcurrency;
            legacyVm;
            brotliSupported;
            webpSupported;
            systemInfo;
            imageLoaderType = "direct";
            caniuse = {};
            constructor() {
                const e = this;
                this.location = window.location.href;
                const t = this.location.split("/");
                this.baseUrl = t.slice(0, t.length - 1).join("/"),
                this.wasmSupported = !1,
                this.wasmStreaming = !1;
                try {
                    if ("object" == typeof WebAssembly && "function" == typeof WebAssembly.instantiate && "function" == typeof WebAssembly.compile) {
                        const e = new WebAssembly.Module(Uint8Array.of(0, 97, 115, 109, 1, 0, 0, 0));
                        e instanceof WebAssembly.Module && (this.wasmSupported = new WebAssembly.Instance(e)instanceof WebAssembly.Instance,
                        this.wasmStreaming = this.wasmSupported && "function" == typeof WebAssembly.instantiateStreaming)
                    }
                } catch (e) {}
                this.hardwareConcurrency = 0 | navigator.hardwareConcurrency,
                this.legacyVm = void 0 === Int32Array.from || !(Math.imul && Math.fround && Math.clz32 && Math.trunc),
                this.brotliSupported = !this.legacyVm,
                this.webpSupported = !1;
                const o = new Image;
                o.onload = () => {
                    e.webpSupported = 2 === o.width && 1 === o.height
                }
                ,
                o.src = "data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACyAgCdASoCAAEALmk0mk0iIiIiIgBoSygABc6zbAAA/v56QAAAAA==",
                Math.imul && -5 === Math.imul(4294967295, 5) || (Math.imul = function(e, t) {
                    const o = 65535 & e
                      , i = 65535 & t;
                    return o * i + ((e >>> 16) * i + o * (t >>> 16) << 16) | 0
                }
                ),
                Math.imul = Math.imul,
                Math.fround || (Math.fround = function(e) {
                    return e
                }
                ),
                Math.fround = Math.fround,
                Math.clz32 || (Math.clz32 = function(e) {
                    e >>>= 0;
                    for (let t = 0; t < 32; t++)
                        if (e & 1 << 31 - t)
                            return t;
                    return 32
                }
                ),
                Math.clz32 = Math.clz32,
                Math.trunc || (Math.trunc = function(e) {
                    return e < 0 ? Math.ceil(e) : Math.floor(e)
                }
                ),
                Math.trunc = Math.trunc,
                this.systemInfo = function() {
                    const t = navigator.userAgent + " ";
                    function o(e, t, o) {
                        const i = RegExp(e, "i").exec(t);
                        return i && i[o]
                    }
                    const i = function() {
                        const e = {
                            Yandex: {
                                prefixs: ["YaApp", "YaBrowser"]
                            },
                            Firefox: {
                                prefixs: ["Firefox"]
                            },
                            Opera: {
                                prefixs: ["OPR"]
                            },
                            Edge: {
                                prefixs: ["Edg"]
                            },
                            "Samsung Browser": {
                                prefixs: ["SamsungBrowser"]
                            },
                            "Internet Explorer": {
                                prefixs: ["Trident", "MSIE"]
                            },
                            Chrome: {
                                prefixs: ["Chrome"]
                            },
                            "Chrome on iOS": {
                                prefixs: ["CriOS"]
                            },
                            "Firefox on iOS": {
                                prefixs: ["FxiOS"]
                            },
                            Safari: {
                                prefixs: ["Safari"]
                            },
                            Facebook: {
                                prefixs: ["FBSV"],
                                regExp: "[/;](.*?)[;\\)]"
                            }
                        };
                        for (const [i,r] of Object.entries(e))
                            for (const e of r.prefixs) {
                                let n = o(e + (r.regExp || "[/ ](.*?)[ \\)]"), t, 1);
                                if (null !== n)
                                    return "Safari" === i && (n = o("Version/(.*?) ", t, 1)),
                                    "Internet Explorer" === i && (n = o("rv:(.*?)\\)? ", t, 1) || n),
                                    {
                                        name: i,
                                        version: n
                                    }
                            }
                        return {
                            name: "",
                            version: ""
                        }
                    }()
                      , n = function() {
                        const e = {
                            Android: ["Android ([0-9_.]+)"],
                            Windows: ["Windows (.*?)[;)]"],
                            iOS: ["iPhone OS ([0-9_.]+)", "iPad.*? OS ([0-9_.]+)"],
                            macOS: ["Mac OS X ([0-9_.]+)"],
                            Linux: ["FreeBSD( )", "OpenBSD( )", "Linux|X11()"],
                            "Search Bot": ["bot|google|baidu|bing|msn|teoma|slurp|yandex"]
                        };
                        for (const [i,r] of Object.entries(e))
                            for (const e of r) {
                                let r = o(e, t, 1);
                                if (null != r) {
                                    if (r = r.replace(/_/g, "."),
                                    "Windows" === i) {
                                        r = {
                                            "NT 5.0": "2000",
                                            "NT 5.1": "XP",
                                            "NT 5.2": "Server 2003",
                                            "NT 6.0": "Vista",
                                            "NT 6.1": "7",
                                            "NT 6.2": "8",
                                            "NT 6.3": "8.1",
                                            "NT 10.0": "10"
                                        }[r] || r
                                    }
                                    return {
                                        name: i,
                                        version: r
                                    }
                                }
                            }
                        return {
                            name: "",
                            version: ""
                        }
                    }()
                      , s = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(navigator.appVersion) || /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(navigator.userAgent) || /MacIntel/.test(navigator.platform) && navigator.maxTouchPoints && navigator.maxTouchPoints > 2
                      , a = navigator.hardwareConcurrency
                      , c = window.navigator.language.slice(0, 2);
                    return {
                        devHost: (0,
                        r.isDevHost)(),
                        width: window.innerWidth,
                        height: window.innerHeight,
                        browser: i.name,
                        browserVersion: i.version,
                        mobile: s,
                        os: n.name,
                        osVersion: n.version,
                        language: c,
                        hasWebGL: 0,
                        gpu: "-",
                        deviceModel: s ? "" : "desktop/laptop",
                        logicalCores: a || 0,
                        screenWidth: 0,
                        screenHeight: 0,
                        hasCursorLock: function() {
                            const e = document.createElement("canvas");
                            return e.requestPointerLock || e.mozRequestPointerLock || e.webkitRequestPointerLock || e.msRequestPointerLock ? 1 : 0
                        }(),
                        hasFullscreen: 0,
                        hasThreads: !1,
                        hasWasm: e.wasmSupported,
                        webglContextAttributes: {
                            preserveDrawingBuffer: !1
                        }
                    }
                }();
                const i = this.getPortraitScreenResolution();
                this.systemInfo.screenHeight = i.height,
                this.systemInfo.screenWidth = i.width
            }
            getParameterByName(e, t) {
                t || (t = this.location),
                e = e.replace(/[\[\]]/g, "\\$&");
                const o = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)").exec(t);
                return o ? o[2] ? decodeURIComponent(o[2].replace(/\+/g, " ")) : "" : null
            }
            wasmSupportLevel() {
                if (!this.wasmSupported)
                    return "not-supported";
                if ("Safari" !== this.systemInfo.browser)
                    return "supported";
                return Number.parseInt(this.systemInfo.browserVersion.split(".")[0], 10) < 14 ? "partial" : "supported"
            }
            caniuseBrotli(e) {
                return this.caniuseTool(e, "brotli", "br")
            }
            caniuseGzip(e) {
                return this.caniuseTool(e, "gzip", "gz")
            }
            caniuseTool(e, t, o) {
                return new Promise((r => {
                    const n = e.substr(0, e.lastIndexOf("/") + 1)
                      , s = n + o + "/caniuse." + o;
                    void 0 === this.caniuse[s] && (this.caniuse[s] = (0,
                    i.loadResource)(s + "?time=" + Date.now(), "text").then((e => (e !== t && console.error("ERR!", t, "is not supported by browser, but supported by game", n),
                    e === t))).catch(( () => !1))),
                    this.caniuse[s].then(r)
                }
                ))
            }
            getAndroidDeviceModel(e) {
                const t = [/Android[\s][\d]+\.[\d]+\.[\d]+; [A-Za-z]{2}\-[A-Za-z]{2}\; (.+) Build/, /Android[\s][\d]+\.[\d]+\.[\d]+; (.+) Build/, /Android(.+)Build/];
                for (const o of t) {
                    const t = e.match(o);
                    if (t && t.length > 0)
                        return t[1]
                }
                return "unknown Android"
            }
            getAppleDeviceModel(e) {
                let t = "";
                for (const o of n)
                    e.width === Math.min(o.width, o.height) && e.height === Math.max(o.width, o.height) && (t += t.length > 0 ? "/" + o.model : o.model);
                return t.length > 0 ? t : "unknown iPhone"
            }
            getPortraitScreenResolution() {
                const e = window.devicePixelRatio || 1;
                return {
                    width: Math.min(screen.width, screen.height) * e,
                    height: Math.max(screen.width, screen.height) * e
                }
            }
            gpuNameOf(e) {
                const t = e.getExtension("WEBGL_debug_renderer_info");
                return t && e.getParameter(t.UNMASKED_RENDERER_WEBGL) || "-"
            }
            getDeviceModel(e, t, o) {
                if (!e)
                    return "desktop/laptop";
                return t.match(/^apple+[a-zA-Z0-9_\s]+gpu$/i) ? this.getAppleDeviceModel(o) : this.getAndroidDeviceModel(navigator.userAgent)
            }
            updateWebGLInfo(e, t) {
                this.systemInfo.gpu = this.gpuNameOf(e),
                this.systemInfo.hasWebGL = t,
                this.systemInfo.deviceModel = this.getDeviceModel(this.systemInfo.mobile, this.systemInfo.gpu, {
                    width: this.systemInfo.screenWidth,
                    height: this.systemInfo.screenHeight
                })
            }
        }
    }
    , {
        "./debug": 3,
        "./resource-loader-fetch": 7
    }],
    5: [function(e, t, o) {
        "use strict";
        Object.defineProperty(o, "__esModule", {
            value: !0
        }),
        o.log = void 0,
        o.log = function(e, t) {
            for (var o = arguments.length, i = new Array(o > 2 ? o - 2 : 0), r = 2; r < o; r++)
                i[r - 2] = arguments[r];
            const n = [Date.now() - e + "ms | ", ...i];
            "string" == typeof n[1] ? 0 === n[1].indexOf("ERR!") ? console.error(...n) : 0 === n[1].indexOf("WARN!") ? console.warn(...n) : t && console.log(...n) : t && console.log(...n)
        }
    }
    , {}],
    6: [function(e, t, o) {
        "use strict";
        Object.defineProperty(o, "__esModule", {
            value: !0
        }),
        o.mountJs = void 0;
        const i = e("../testkit/testkit");
        o.mountJs = async function(e) {
            const t = async function(e) {
                let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                const o = i.testkit?.overrideFileUrl(e) ?? e
                  , r = document.createElement("script");
                await new Promise(( (e, i) => {
                    r.onload = () => e(),
                    r.onerror = () => {
                        document.body.removeChild(r),
                        i(new Error("Mount error: " + r.src))
                    }
                    ,
                    r.src = o,
                    t && r.setAttribute("crossorigin", "anonymous"),
                    document.body.appendChild(r)
                }
                ))
            };
            for (const o of e ?? [])
                try {
                    await t(o)
                } catch {
                    await t(o, !1)
                }
        }
    }
    , {
        "../testkit/testkit": 2
    }],
    7: [function(e, t, o) {
        "use strict";
        Object.defineProperty(o, "__esModule", {
            value: !0
        }),
        o.loadResource = void 0,
        o.loadResource = async function(e, t) {
            let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}
              , i = arguments.length > 3 ? arguments[3] : void 0;
            const r = await fetch(e, {
                mode: "cors",
                credentials: "same-origin",
                redirect: "follow",
                cache: "default"
            });
            if (!r.ok || null == r.body)
                throw new Error("Invalid fetch response. Code: " + r.status + "status: " + r.statusText + " url: " + e);
            const n = i || parseInt(r.headers.get("Content-Length") || "0", 10) || 0
              , s = function(e, t, o) {
                if (0 === t)
                    return o(100),
                    e;
                const i = new Response(new ReadableStream({
                    start: async i => {
                        const r = e.body.getReader();
                        let n = 0;
                        for (; ; ) {
                            const e = await r.read();
                            if (e.done) {
                                o(100);
                                break
                            }
                            n += e.value.byteLength,
                            o(Math.min(100, Math.round(100 * n / t))),
                            i.enqueue(e.value)
                        }
                        i.close()
                    }
                }));
                for (const [t,o] of e.headers.entries())
                    i.headers.set(t, o);
                return i
            }(r, n, o);
            switch (t) {
            case "text":
                return s.text();
            case "arraybuffer":
                return s.arrayBuffer();
            default:
                return s
            }
        }
    }
    , {}],
    8: [function(e, t, o) {
        "use strict";
        Object.defineProperty(o, "__esModule", {
            value: !0
        }),
        o.loadResource = void 0,
        o.loadResource = function(e, t) {
            let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}
              , i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0
              , r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "GET"
              , n = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null
              , s = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
            return new Promise(( (a, c) => {
                const h = new XMLHttpRequest;
                if (h.open(r, e, !0),
                h.overrideMimeType("text/plain; charset=x-user-defined"),
                null !== n)
                    for (const [e,t] of Object.entries(n))
                        h.setRequestHeader(e, t);
                "function" == typeof h.addEventListener && (h.addEventListener("progress", (e => {
                    const t = i || e.total || 0;
                    t > 0 && o(Math.min(100, Math.round(100 * e.loaded / t)))
                }
                )),
                h.addEventListener("error", (t => {
                    c(new Error("Invalid xhr response. Code: " + h.status + "status: " + h.statusText + " url: " + e))
                }
                ))),
                h.responseType = t,
                h.onreadystatechange = () => {
                    4 === h.readyState && (200 === h.status ? (o(100),
                    a(h.response)) : c(new Error("Invalid xhr response. Code: " + h.status + "status: " + h.statusText + " url: " + e)))
                }
                ,
                h.send(s)
            }
            ))
        }
    }
    , {}],
    9: [function(e, t, o) {
        "use strict";
        Object.defineProperty(o, "__esModule", {
            value: !0
        }),
        o.TinyLoader = void 0;
        const i = e("../config")
          , r = e("./host")
          , n = e("./resource-loader-fetch")
          , s = e("./resource-loader-xhr")
          , a = e("./mount")
          , c = e("./debug")
          , h = e("./log")
          , d = e("../testkit/testkit")
          , u = e("./worker");
        class l {
            startedAt = Date.now();
            config;
            host = new r.HostInfo;
            run = [];
            postRun = [];
            stop = [];
            errors = [];
            verbose = !1;
            imageLoader;
            runCopy = [];
            postRunCopy = [];
            constructor() {
                this.log = this.log.bind(this)
            }
            log() {
                for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
                    t[o] = arguments[o];
                (0,
                h.log)(this.startedAt, this.host.systemInfo.devHost || this.verbose, ...t)
            }
            loadResource(e, t, o) {
                return "response" === t ? (0,
                n.loadResource)(e, t, o, this.resourceSize(e)) : (0,
                s.loadResource)(e, t, o, this.resourceSize(e))
            }
            resourceSize(e) {
                if (void 0 !== this.config && void 0 !== this.config.sizes) {
                    if (void 0 !== this.config.sizes[e])
                        return this.config.sizes[e];
                    for (const [t,o] of Object.entries(this.config.sizes))
                        if (t.endsWith(e))
                            return o
                }
            }
            mountJs(e) {
                return (0,
                a.mountJs)(e)
            }
            async createImageLoader(e, t, o) {
                if ("direct" === d.testkit?.imageLoaderType)
                    return;
                const i = d.testkit?.overrideFileUrl(e) ?? e
                  , r = "js" === d.testkit?.imageLoaderType
                  , n = "wasm" === d.testkit?.imageLoaderType
                  , s = "undefined" != typeof createImageBitmap && "undefined" != typeof OffscreenCanvas && this.host.webpSupported;
                if (r || !n && s)
                    try {
                        return this.imageLoader = await (0,
                        u.createBrowserImageLoader)(i),
                        void (this.host.imageLoaderType = "js")
                    } catch (e) {
                        this.log("ERR! " + e),
                        this.errors.push({
                            name: e.name,
                            message: e.message,
                            stack: e.stack
                        })
                    }
                this.imageLoader = await (0,
                u.createWasmImageLoader)(d.testkit?.overrideFileUrl(t) ?? t, d.testkit?.overrideFileUrl(o) ?? o),
                this.host.imageLoaderType = "wasm"
            }
            async load() {
                delete this.load;
                const e = this.loadResource("gpx.json", "text");
                try {
                    this.config = JSON.parse(await e)
                } catch (e) {
                    return alert("Can't start gpx.json not found"),
                    void this.log("ERR! Unable to load gpx.json", e)
                }
                this.host.systemInfo.devHost = (0,
                c.isDevHost)();
                try {
                    this.config = await this.updateConfig(this.config)
                } catch (e) {
                    this.errors.push({
                        name: e.name,
                        message: e.message,
                        stack: e.stack
                    })
                }
                this.verbose = this.config.verbose ?? !1;
                const t = [...this.config.sdkScripts ?? [], ...this.config.runtime.initialScripts ?? []];
                try {
                    await this.mountJs(t)
                } catch (e) {
                    return alert("Unable to mount init scripts"),
                    void this.log("ERR! Unable to mount init scripts", e)
                }
                if (void 0 !== this.config.workerScripts && void 0 !== this.config.workerScripts.browserImageLoader && void 0 !== this.config.workerScripts.wasmImageLoader)
                    try {
                        await this.createImageLoader(this.config.workerScripts.browserImageLoader, this.config.workerScripts.wasmImageLoader.wasm, this.config.workerScripts.wasmImageLoader.wasmJs)
                    } catch (e) {
                        this.log("ERR! Unable to create worker for image loading: " + e),
                        this.errors.push({
                            name: e.name,
                            message: e.message,
                            stack: e.stack
                        })
                    }
                else
                    this.log("ERR! Unable to find worker image loader scripts. Direct image loader will be used");
                await this.runScripts()
            }
            async reload() {
                try {
                    for (const e of [...this.stop].reverse())
                        await e()
                } catch (e) {
                    alert("Unable to execute post stop script"),
                    this.log("ERR! Unable to execute post stop script", e)
                }
                this.run = this.runCopy,
                this.postRun = this.postRunCopy,
                await this.runScripts()
            }
            async runScripts() {
                void 0 !== this.config.runtime.initialScripts && 0 !== this.config.runtime.initialScripts.length || this.run.push((async () => {
                    await window.sdk.load()
                }
                ));
                try {
                    for (const e of this.run)
                        await e();
                    this.runCopy = this.run,
                    delete this.run
                } catch (e) {
                    alert("Unable to execute run script"),
                    this.log("ERR! Unable to execute run script", e),
                    this.errors.push({
                        name: e.name,
                        message: e.message,
                        stack: e.stack
                    })
                }
                try {
                    for (const e of this.postRun)
                        await e();
                    this.postRunCopy = this.postRun,
                    delete this.postRun
                } catch (e) {
                    alert("Unable to execute post run script"),
                    this.log("ERR! Unable to execute post run script", e)
                }
            }
            updateConfig(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3e3;
                return new Promise((async (o, r) => {
                    const n = setTimeout(( () => {
                        o(e),
                        o = () => {}
                    }
                    ), t);
                    try {
                        const t = d.testkit?.overrideFileUrl(i.getConfigEndpoint) ?? i.getConfigEndpoint
                          , o = {
                            "Content-type": "application/json"
                        }
                          , r = JSON.stringify({
                            config: e,
                            host: this.host
                        })
                          , n = await (0,
                        s.loadResource)(t, "text", ( () => {}
                        ), void 0, "POST", o, r)
                          , a = JSON.parse(n);
                        !0 === a.success && (e = a.config ?? e)
                    } catch (e) {
                        this.log("ERR! Unable to get config from server, using original one", e),
                        this.errors.push({
                            name: e.name,
                            message: e.message,
                            stack: e.stack
                        })
                    }
                    clearTimeout(n),
                    o(e)
                }
                ))
            }
        }
        o.TinyLoader = l,
        window.tinyLoader = new l
    }
    , {
        "../config": 1,
        "../testkit/testkit": 2,
        "./debug": 3,
        "./host": 4,
        "./log": 5,
        "./mount": 6,
        "./resource-loader-fetch": 7,
        "./resource-loader-xhr": 8,
        "./worker": 10
    }],
    10: [function(e, t, o) {
        "use strict";
        Object.defineProperty(o, "__esModule", {
            value: !0
        }),
        o.createWasmImageLoader = o.createBrowserImageLoader = void 0;
        const i = e("./resource-loader-fetch");
        function r(e) {
            return new Promise(( (t, o) => {
                const i = r => {
                    void 0 === r.data.error ? "ready" === r.data.command && (e.removeEventListener("message", i),
                    t()) : o(r.data.error)
                }
                ;
                e.addEventListener("message", i)
            }
            ))
        }
        o.createBrowserImageLoader = async function(e) {
            if ("string" != typeof e)
                throw new Error(`${e} is not defined`);
            const t = await (0,
            i.loadResource)(e, "response")
              , o = await t.blob()
              , n = URL.createObjectURL(o)
              , s = new Worker(n)
              , a = new OffscreenCanvas(2048,2048);
            s.postMessage({
                command: "init",
                canvas: a
            }, [a]);
            try {
                await r(s)
            } catch (e) {
                throw new Error(e)
            }
            return s
        }
        ,
        o.createWasmImageLoader = async function(e, t) {
            const o = new Blob([`self.importScripts("${t}");\n                Module({\n                    locateFile: (path, script) => { \n                        return "${e}";\n                    },\n                });`],{
                type: "application/javascript"
            })
              , i = URL.createObjectURL(o)
              , n = new Worker(i);
            try {
                await r(n)
            } catch (e) {
                throw new Error(e)
            }
            return n
        }
    }
    , {
        "./resource-loader-fetch": 7
    }]
}, {}, [9]);
