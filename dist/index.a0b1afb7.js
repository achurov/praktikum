// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8eaYH":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "1293bae57ac04db4";
module.bundle.HMR_BUNDLE_ID = "b094574ba0b1afb7";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"gZWof":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _index = require("./pages/index/index");
var _indexDefault = parcelHelpers.interopDefault(_index);
var _signin = require("./pages/signin/signin");
var _signinDefault = parcelHelpers.interopDefault(_signin);
var _signup = require("./pages/signup/signup");
var _signupDefault = parcelHelpers.interopDefault(_signup);
const app = document.querySelector("#app");
const path = window.location.pathname;
switch(path){
    case '/':
        app.innerHTML = _indexDefault.default();
        break;
    case '/signin':
        app.innerHTML = _signinDefault.default();
        break;
    case '/signup':
        app.innerHTML = _signupDefault.default();
        break;
}

},{"./pages/index/index":"edd1u","@parcel/transformer-js/src/esmodule-helpers.js":"8FsVl","./pages/signin/signin":"aLrmx","./pages/signup/signup":"2jhqo"}],"edd1u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexPug = require("./index.pug");
var _indexPugDefault = parcelHelpers.interopDefault(_indexPug);
var _button = require("../../components/button/button");
var _buttonDefault = parcelHelpers.interopDefault(_button);
const data = {
    title: 'World',
    buttons: [
        _buttonDefault.default({
            text: 'кнопка 11',
            className: 'form__btn'
        }),
        _buttonDefault.default({
            text: 'кнопка 11'
        })
    ]
};
exports.default = ()=>{
    return _indexPugDefault.default(data);
};

},{"./index.pug":"5DTeR","../../components/button/button":"5UYD2","@parcel/transformer-js/src/esmodule-helpers.js":"8FsVl"}],"5DTeR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function pug_escape(e) {
    var a = "" + e, t = pug_match_html.exec(a);
    if (!t) return e;
    var r, c, n, s = "";
    for(r = t.index, c = 0; r < a.length; r++){
        switch(a.charCodeAt(r)){
            case 34:
                n = "&quot;";
                break;
            case 38:
                n = "&amp;";
                break;
            case 60:
                n = "&lt;";
                break;
            case 62:
                n = "&gt;";
                break;
            default:
                continue;
        }
        c !== r && (s += a.substring(c, r)), c = r + 1, s += n;
    }
    return c !== r ? s + a.substring(c, r) : s;
}
var pug_match_html = /["&<>]/;
function template(locals) {
    var pug_html = "", pug_mixins = {
    }, pug_interp;
    var locals_for_with = locals || {
    };
    (function(buttons, title) {
        pug_html = pug_html + "\u003Cdiv\u003E" + pug_escape(null == (pug_interp = title) ? "" : pug_interp) + "\u003C\u002Fdiv\u003E";
        (function() {
            var $$obj = buttons;
            if ('number' == typeof $$obj.length) for(var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++){
                var btn = $$obj[pug_index0];
                pug_html = pug_html + (null == (pug_interp = btn) ? "" : pug_interp);
            }
            else {
                var $$l = 0;
                for(var pug_index0 in $$obj){
                    $$l++;
                    var btn = $$obj[pug_index0];
                    pug_html = pug_html + (null == (pug_interp = btn) ? "" : pug_interp);
                }
            }
        }).call(this);
    }).call(this, "buttons" in locals_for_with ? locals_for_with.buttons : typeof buttons !== 'undefined' ? buttons : undefined, "title" in locals_for_with ? locals_for_with.title : typeof title !== 'undefined' ? title : undefined);
    return pug_html;
}
exports.default = template;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"8FsVl"}],"8FsVl":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"5UYD2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _buttonCss = require("./button.css");
var _buttonPug = require("./button.pug");
var _buttonPugDefault = parcelHelpers.interopDefault(_buttonPug);
exports.default = (data)=>{
    return _buttonPugDefault.default(data);
};

},{"./button.css":"8wvaz","./button.pug":"l3gcs","@parcel/transformer-js/src/esmodule-helpers.js":"8FsVl"}],"8wvaz":[function() {},{}],"l3gcs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function pug_attr(t, e, n, r) {
    if (!1 === e || null == e || !e && ("class" === t || "style" === t)) return "";
    if (!0 === e) return " " + (r ? t : t + '="' + t + '"');
    var f = typeof e;
    return "object" !== f && "function" !== f || "function" != typeof e.toJSON || (e = e.toJSON()), "string" == typeof e || (e = JSON.stringify(e), n || -1 === e.indexOf('"')) ? (n && (e = pug_escape(e)), " " + t + '="' + e + '"') : " " + t + "='" + e.replace(/'/g, "&#39;") + "'";
}
function pug_classes(s, r) {
    return Array.isArray(s) ? pug_classes_array(s, r) : s && "object" == typeof s ? pug_classes_object(s) : s || "";
}
function pug_classes_array(r, a) {
    for(var s, e = "", u = "", c = Array.isArray(a), g = 0; g < r.length; g++)(s = pug_classes(r[g])) && (c && a[g] && (s = pug_escape(s)), e = e + u + s, u = " ");
    return e;
}
function pug_classes_object(r) {
    var a = "", n = "";
    for(var o in r)o && r[o] && pug_has_own_property.call(r, o) && (a = a + n + o, n = " ");
    return a;
}
function pug_escape(e) {
    var a = "" + e, t = pug_match_html.exec(a);
    if (!t) return e;
    var r, c, n, s = "";
    for(r = t.index, c = 0; r < a.length; r++){
        switch(a.charCodeAt(r)){
            case 34:
                n = "&quot;";
                break;
            case 38:
                n = "&amp;";
                break;
            case 60:
                n = "&lt;";
                break;
            case 62:
                n = "&gt;";
                break;
            default:
                continue;
        }
        c !== r && (s += a.substring(c, r)), c = r + 1, s += n;
    }
    return c !== r ? s + a.substring(c, r) : s;
}
var pug_has_own_property = Object.prototype.hasOwnProperty;
var pug_match_html = /["&<>]/;
function template(locals) {
    var pug_html = "", pug_mixins = {
    }, pug_interp;
    var locals_for_with = locals || {
    };
    (function(className, text) {
        pug_html = pug_html + "\u003Cbutton" + pug_attr("class", pug_classes([
            "button",
            className
        ], [
            false,
            false
        ]), false, false) + "\u003E" + pug_escape(null == (pug_interp = text) ? "" : pug_interp) + "\u003C\u002Fbutton\u003E";
    }).call(this, "className" in locals_for_with ? locals_for_with.className : typeof className !== 'undefined' ? className : undefined, "text" in locals_for_with ? locals_for_with.text : typeof text !== 'undefined' ? text : undefined);
    return pug_html;
}
exports.default = template;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"8FsVl"}],"aLrmx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _signinPug = require("./signin.pug");
var _signinPugDefault = parcelHelpers.interopDefault(_signinPug);
var _form = require("../../components/form/form");
var _formDefault = parcelHelpers.interopDefault(_form);
const data = {
    form: _formDefault.default({
        action: '/',
        title: 'Вход',
        inputs: [
            {
                type: 'text',
                name: 'login',
                placeholder: 'Логин'
            },
            {
                type: 'password',
                name: 'password',
                placeholder: 'Пароль'
            }
        ],
        buttons: [
            {
                text: 'Войти'
            }
        ],
        bottomText: 'Нет аккаунта?',
        bottomLink: {
            href: 'signup',
            text: 'Регистрация'
        }
    })
};
exports.default = ()=>{
    return _signinPugDefault.default(data);
};

},{"./signin.pug":"8BZ6q","@parcel/transformer-js/src/esmodule-helpers.js":"8FsVl","../../components/form/form":"9POfv"}],"8BZ6q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function template(locals) {
    var pug_html = "", pug_mixins = {
    }, pug_interp;
    var locals_for_with = locals || {
    };
    (function(form) {
        pug_html = pug_html + (null == (pug_interp = form) ? "" : pug_interp);
    }).call(this, "form" in locals_for_with ? locals_for_with.form : typeof form !== 'undefined' ? form : undefined);
    return pug_html;
}
exports.default = template;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"8FsVl"}],"9POfv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _formCss = require("./form.css");
var _formPug = require("./form.pug");
var _formPugDefault = parcelHelpers.interopDefault(_formPug);
var _input = require("../../components/input/input");
var _inputDefault = parcelHelpers.interopDefault(_input);
var _button = require("../../components/button/button");
var _buttonDefault = parcelHelpers.interopDefault(_button);
var _link = require("../../components/link/link");
var _linkDefault = parcelHelpers.interopDefault(_link);
exports.default = (data)=>{
    if (Array.isArray(data.inputs)) data.inputs = data.inputs.map((item)=>{
        item.className = 'form__input';
        return _inputDefault.default(item);
    });
    if (Array.isArray(data.buttons)) data.buttons = data.buttons.map((item)=>{
        item.className = 'form__btn';
        return _buttonDefault.default(item);
    });
    if (data.bottomLink) {
        data.bottomLink.className = 'form__bottom';
        data.bottomLink = _linkDefault.default(data.bottomLink);
    }
    return _formPugDefault.default(data);
};

},{"./form.css":"1zDOQ","@parcel/transformer-js/src/esmodule-helpers.js":"8FsVl","./form.pug":"6UvyS","../../components/input/input":"agMfl","../../components/button/button":"5UYD2","../../components/link/link":"btmhH"}],"1zDOQ":[function() {},{}],"6UvyS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function pug_attr(t, e, n, r) {
    if (!1 === e || null == e || !e && ("class" === t || "style" === t)) return "";
    if (!0 === e) return " " + (r ? t : t + '="' + t + '"');
    var f = typeof e;
    return "object" !== f && "function" !== f || "function" != typeof e.toJSON || (e = e.toJSON()), "string" == typeof e || (e = JSON.stringify(e), n || -1 === e.indexOf('"')) ? (n && (e = pug_escape(e)), " " + t + '="' + e + '"') : " " + t + "='" + e.replace(/'/g, "&#39;") + "'";
}
function pug_escape(e) {
    var a = "" + e, t = pug_match_html.exec(a);
    if (!t) return e;
    var r, c, n, s = "";
    for(r = t.index, c = 0; r < a.length; r++){
        switch(a.charCodeAt(r)){
            case 34:
                n = "&quot;";
                break;
            case 38:
                n = "&amp;";
                break;
            case 60:
                n = "&lt;";
                break;
            case 62:
                n = "&gt;";
                break;
            default:
                continue;
        }
        c !== r && (s += a.substring(c, r)), c = r + 1, s += n;
    }
    return c !== r ? s + a.substring(c, r) : s;
}
var pug_match_html = /["&<>]/;
function template(locals) {
    var pug_html = "", pug_mixins = {
    }, pug_interp;
    var locals_for_with = locals || {
    };
    (function(action, bottomLink, bottomText, buttons, inputs, title) {
        pug_html = pug_html + "\u003Cform" + (" class=\"form\"" + pug_attr("action", action, false, false)) + "\u003E\u003Cspan class=\"form__title\"\u003E" + pug_escape(null == (pug_interp = title) ? "" : pug_interp) + "\u003C\u002Fspan\u003E";
        if (inputs) (function() {
            var $$obj = inputs;
            if ('number' == typeof $$obj.length) for(var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++){
                var input = $$obj[pug_index0];
                pug_html = pug_html + (null == (pug_interp = input) ? "" : pug_interp);
            }
            else {
                var $$l = 0;
                for(var pug_index0 in $$obj){
                    $$l++;
                    var input = $$obj[pug_index0];
                    pug_html = pug_html + (null == (pug_interp = input) ? "" : pug_interp);
                }
            }
        }).call(this);
        if (buttons) (function() {
            var $$obj = buttons;
            if ('number' == typeof $$obj.length) for(var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++){
                var button = $$obj[pug_index1];
                pug_html = pug_html + (null == (pug_interp = button) ? "" : pug_interp);
            }
            else {
                var $$l = 0;
                for(var pug_index1 in $$obj){
                    $$l++;
                    var button = $$obj[pug_index1];
                    pug_html = pug_html + (null == (pug_interp = button) ? "" : pug_interp);
                }
            }
        }).call(this);
        if (bottomText) pug_html = pug_html + "\u003Cspan class=\"form__bottom-text\"\u003E" + pug_escape(null == (pug_interp = bottomText) ? "" : pug_interp) + "\u003C\u002Fspan\u003E";
        pug_html = pug_html + (null == (pug_interp = bottomLink) ? "" : pug_interp) + "\u003C\u002Fform\u003E";
    }).call(this, "action" in locals_for_with ? locals_for_with.action : typeof action !== 'undefined' ? action : undefined, "bottomLink" in locals_for_with ? locals_for_with.bottomLink : typeof bottomLink !== 'undefined' ? bottomLink : undefined, "bottomText" in locals_for_with ? locals_for_with.bottomText : typeof bottomText !== 'undefined' ? bottomText : undefined, "buttons" in locals_for_with ? locals_for_with.buttons : typeof buttons !== 'undefined' ? buttons : undefined, "inputs" in locals_for_with ? locals_for_with.inputs : typeof inputs !== 'undefined' ? inputs : undefined, "title" in locals_for_with ? locals_for_with.title : typeof title !== 'undefined' ? title : undefined);
    return pug_html;
}
exports.default = template;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"8FsVl"}],"agMfl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _inputCss = require("./input.css");
var _inputPug = require("./input.pug");
var _inputPugDefault = parcelHelpers.interopDefault(_inputPug);
exports.default = (data)=>{
    return _inputPugDefault.default(data);
};

},{"./input.css":"jYoyI","./input.pug":"iQ3Cx","@parcel/transformer-js/src/esmodule-helpers.js":"8FsVl"}],"jYoyI":[function() {},{}],"iQ3Cx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function pug_attr(t, e, n, r) {
    if (!1 === e || null == e || !e && ("class" === t || "style" === t)) return "";
    if (!0 === e) return " " + (r ? t : t + '="' + t + '"');
    var f = typeof e;
    return "object" !== f && "function" !== f || "function" != typeof e.toJSON || (e = e.toJSON()), "string" == typeof e || (e = JSON.stringify(e), n || -1 === e.indexOf('"')) ? (n && (e = pug_escape(e)), " " + t + '="' + e + '"') : " " + t + "='" + e.replace(/'/g, "&#39;") + "'";
}
function pug_classes(s, r) {
    return Array.isArray(s) ? pug_classes_array(s, r) : s && "object" == typeof s ? pug_classes_object(s) : s || "";
}
function pug_classes_array(r, a) {
    for(var s, e = "", u = "", c = Array.isArray(a), g = 0; g < r.length; g++)(s = pug_classes(r[g])) && (c && a[g] && (s = pug_escape(s)), e = e + u + s, u = " ");
    return e;
}
function pug_classes_object(r) {
    var a = "", n = "";
    for(var o in r)o && r[o] && pug_has_own_property.call(r, o) && (a = a + n + o, n = " ");
    return a;
}
function pug_escape(e) {
    var a = "" + e, t = pug_match_html.exec(a);
    if (!t) return e;
    var r, c, n, s = "";
    for(r = t.index, c = 0; r < a.length; r++){
        switch(a.charCodeAt(r)){
            case 34:
                n = "&quot;";
                break;
            case 38:
                n = "&amp;";
                break;
            case 60:
                n = "&lt;";
                break;
            case 62:
                n = "&gt;";
                break;
            default:
                continue;
        }
        c !== r && (s += a.substring(c, r)), c = r + 1, s += n;
    }
    return c !== r ? s + a.substring(c, r) : s;
}
var pug_has_own_property = Object.prototype.hasOwnProperty;
var pug_match_html = /["&<>]/;
function template(locals) {
    var pug_html = "", pug_mixins = {
    }, pug_interp;
    var locals_for_with = locals || {
    };
    (function(className, name, placeholder, type) {
        pug_html = pug_html + "\u003Cinput" + (pug_attr("class", pug_classes([
            "input",
            className
        ], [
            false,
            false
        ]), false, false) + pug_attr("type", type, false, false) + pug_attr("name", name, false, false) + pug_attr("placeholder", placeholder, false, false)) + "\u002F\u003E";
    }).call(this, "className" in locals_for_with ? locals_for_with.className : typeof className !== 'undefined' ? className : undefined, "name" in locals_for_with ? locals_for_with.name : typeof name !== 'undefined' ? name : undefined, "placeholder" in locals_for_with ? locals_for_with.placeholder : typeof placeholder !== 'undefined' ? placeholder : undefined, "type" in locals_for_with ? locals_for_with.type : typeof type !== 'undefined' ? type : undefined);
    return pug_html;
}
exports.default = template;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"8FsVl"}],"btmhH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _linkCss = require("./link.css");
var _linkPug = require("./link.pug");
var _linkPugDefault = parcelHelpers.interopDefault(_linkPug);
exports.default = (data)=>{
    return _linkPugDefault.default(data);
};

},{"./link.css":"cHr3w","./link.pug":"avTDN","@parcel/transformer-js/src/esmodule-helpers.js":"8FsVl"}],"cHr3w":[function() {},{}],"avTDN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function pug_attr(t, e, n, r) {
    if (!1 === e || null == e || !e && ("class" === t || "style" === t)) return "";
    if (!0 === e) return " " + (r ? t : t + '="' + t + '"');
    var f = typeof e;
    return "object" !== f && "function" !== f || "function" != typeof e.toJSON || (e = e.toJSON()), "string" == typeof e || (e = JSON.stringify(e), n || -1 === e.indexOf('"')) ? (n && (e = pug_escape(e)), " " + t + '="' + e + '"') : " " + t + "='" + e.replace(/'/g, "&#39;") + "'";
}
function pug_classes(s, r) {
    return Array.isArray(s) ? pug_classes_array(s, r) : s && "object" == typeof s ? pug_classes_object(s) : s || "";
}
function pug_classes_array(r, a) {
    for(var s, e = "", u = "", c = Array.isArray(a), g = 0; g < r.length; g++)(s = pug_classes(r[g])) && (c && a[g] && (s = pug_escape(s)), e = e + u + s, u = " ");
    return e;
}
function pug_classes_object(r) {
    var a = "", n = "";
    for(var o in r)o && r[o] && pug_has_own_property.call(r, o) && (a = a + n + o, n = " ");
    return a;
}
function pug_escape(e) {
    var a = "" + e, t = pug_match_html.exec(a);
    if (!t) return e;
    var r, c, n, s = "";
    for(r = t.index, c = 0; r < a.length; r++){
        switch(a.charCodeAt(r)){
            case 34:
                n = "&quot;";
                break;
            case 38:
                n = "&amp;";
                break;
            case 60:
                n = "&lt;";
                break;
            case 62:
                n = "&gt;";
                break;
            default:
                continue;
        }
        c !== r && (s += a.substring(c, r)), c = r + 1, s += n;
    }
    return c !== r ? s + a.substring(c, r) : s;
}
var pug_has_own_property = Object.prototype.hasOwnProperty;
var pug_match_html = /["&<>]/;
function template(locals) {
    var pug_html = "", pug_mixins = {
    }, pug_interp;
    var locals_for_with = locals || {
    };
    (function(className, href, text) {
        pug_html = pug_html + "\u003Ca" + (pug_attr("class", pug_classes([
            "link",
            className
        ], [
            false,
            false
        ]), false, false) + pug_attr("href", href, false, false)) + "\u003E" + pug_escape(null == (pug_interp = text) ? "" : pug_interp) + "\u003C\u002Fa\u003E";
    }).call(this, "className" in locals_for_with ? locals_for_with.className : typeof className !== 'undefined' ? className : undefined, "href" in locals_for_with ? locals_for_with.href : typeof href !== 'undefined' ? href : undefined, "text" in locals_for_with ? locals_for_with.text : typeof text !== 'undefined' ? text : undefined);
    return pug_html;
}
exports.default = template;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"8FsVl"}],"2jhqo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _signupPug = require("./signup.pug");
var _signupPugDefault = parcelHelpers.interopDefault(_signupPug);
var _form = require("../../components/form/form");
var _formDefault = parcelHelpers.interopDefault(_form);
const data = {
    form: _formDefault.default({
        action: '/',
        title: 'Регистрация',
        inputs: [
            {
                type: 'text',
                name: 'first_name',
                placeholder: 'Имя'
            },
            {
                type: 'text',
                name: 'second_name',
                placeholder: 'Фамилия'
            },
            {
                type: 'text',
                name: 'login',
                placeholder: 'Логин'
            },
            {
                type: 'email',
                name: 'email',
                placeholder: 'Почта'
            },
            {
                type: 'text',
                name: 'phone',
                placeholder: 'Телефон'
            },
            {
                type: 'password',
                name: 'password',
                placeholder: 'Пароль'
            },
            {
                type: 'password',
                name: 're_password',
                placeholder: 'Пароль еще раз'
            }, 
        ],
        buttons: [
            {
                text: 'Зарегистрироваться'
            }
        ],
        bottomText: 'Уже есть аккаунт?',
        bottomLink: {
            href: '/signin',
            text: 'Войти'
        }
    })
};
exports.default = ()=>{
    return _signupPugDefault.default(data);
};

},{"./signup.pug":"cwbd5","../../components/form/form":"9POfv","@parcel/transformer-js/src/esmodule-helpers.js":"8FsVl"}],"cwbd5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function template(locals) {
    var pug_html = "", pug_mixins = {
    }, pug_interp;
    var locals_for_with = locals || {
    };
    (function(form) {
        pug_html = pug_html + (null == (pug_interp = form) ? "" : pug_interp);
    }).call(this, "form" in locals_for_with ? locals_for_with.form : typeof form !== 'undefined' ? form : undefined);
    return pug_html;
}
exports.default = template;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"8FsVl"}]},["8eaYH","gZWof"], "gZWof", "parcelRequire716c")

