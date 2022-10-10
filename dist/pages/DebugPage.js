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
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
})({"3skXw":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "71bc29df96d58389";
module.bundle.HMR_BUNDLE_ID = "712058a45d2ce26a";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
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
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
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
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
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

},{}],"hnHsY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactRouterDom = require("react-router-dom");
var _reactErrorBoundary = require("react-error-boundary");
var _container = require("@mui/material/Container");
var _containerDefault = parcelHelpers.interopDefault(_container);
var _box = require("@mui/material/Box");
var _boxDefault = parcelHelpers.interopDefault(_box);
var _paper = require("@mui/material/Paper");
var _paperDefault = parcelHelpers.interopDefault(_paper);
var _typography = require("@mui/material/Typography");
var _typographyDefault = parcelHelpers.interopDefault(_typography);
var _stack = require("@mui/material/Stack");
var _stackDefault = parcelHelpers.interopDefault(_stack);
var _select = require("@mui/material/Select");
var _selectDefault = parcelHelpers.interopDefault(_select);
var _menuItem = require("@mui/material/MenuItem");
var _menuItemDefault = parcelHelpers.interopDefault(_menuItem);
var _textField = require("@mui/material/TextField");
var _textFieldDefault = parcelHelpers.interopDefault(_textField);
var _button = require("@mui/material/Button");
var _buttonDefault = parcelHelpers.interopDefault(_button);
var _circularProgress = require("@mui/material/CircularProgress");
var _circularProgressDefault = parcelHelpers.interopDefault(_circularProgress);
var _list = require("@mui/material/List");
var _listDefault = parcelHelpers.interopDefault(_list);
var _listItem = require("@mui/material/ListItem");
var _listItemDefault = parcelHelpers.interopDefault(_listItem);
var _listItemButton = require("@mui/material/ListItemButton");
var _listItemButtonDefault = parcelHelpers.interopDefault(_listItemButton);
var _listItemIcon = require("@mui/material/ListItemIcon");
var _listItemIconDefault = parcelHelpers.interopDefault(_listItemIcon);
var _listItemText = require("@mui/material/ListItemText");
var _listItemTextDefault = parcelHelpers.interopDefault(_listItemText);
var _skeleton = require("@mui/material/Skeleton");
var _skeletonDefault = parcelHelpers.interopDefault(_skeleton);
var _iconButton = require("@mui/material/IconButton");
var _iconButtonDefault = parcelHelpers.interopDefault(_iconButton);
var _edit = require("@mui/icons-material/Edit");
var _editDefault = parcelHelpers.interopDefault(_edit);
var _close = require("@mui/icons-material/Close");
var _closeDefault = parcelHelpers.interopDefault(_close);
var _helpOutline = require("@mui/icons-material/HelpOutline");
var _helpOutlineDefault = parcelHelpers.interopDefault(_helpOutline);
var _keyboardCommandKeyTwoTone = require("@mui/icons-material/KeyboardCommandKeyTwoTone");
var _keyboardCommandKeyTwoToneDefault = parcelHelpers.interopDefault(_keyboardCommandKeyTwoTone);
var _cottage = require("@mui/icons-material/Cottage");
var _cottageDefault = parcelHelpers.interopDefault(_cottage);
var _appError = require("../components/AppError");
var _appErrorDefault = parcelHelpers.interopDefault(_appError);
var _link = require("../components/Link");
var _linkDefault = parcelHelpers.interopDefault(_link);
var _form = require("../components/Form");
var _formDefault = parcelHelpers.interopDefault(_form);
var _buttonRow = require("../components/ButtonRow");
var _buttonRowDefault = parcelHelpers.interopDefault(_buttonRow);
var _errorMessage = require("../components/ErrorMessage");
var _errorMessageDefault = parcelHelpers.interopDefault(_errorMessage);
var _cqrsJs = require("../cqrs.js");
var _inspectObject = require("../components/InspectObject");
var _inspectObjectDefault = parcelHelpers.interopDefault(_inspectObject);
// import { useCurrentAgent } from '../resources/auth'
// import LinkToDid from '../components/LinkToDid'
// import CopyButton from '../components/CopyButton'
const defaultExec = ()=>({
        isCommand: false,
        name: "",
        optionsJson: "{}"
    });
const searchToString = (object)=>new URLSearchParams(object).toString();
const searchToObject = (search)=>Object.fromEntries(new URLSearchParams(search).entries());
function DebugPage() {
    const location = (0, _reactRouterDom.useLocation)();
    const name = location.pathname.split("/").reverse()[0];
    const search = searchToObject(location.search);
    const optionsJson = search.opts;
    (0, _react.useEffect)(()=>{
        document.title = `Debug ${process.env.APP_NAME}: ${name}(${optionsJson || ""})`;
    }, [
        name,
        optionsJson
    ]);
    const { result: spec , error  } = (0, _cqrsJs.useQuery)("__spec");
    const props = {
        spec,
        name,
        optionsJson
    };
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _containerDefault.default), {
        maxWidth: false,
        disableGutters: true,
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _boxDefault.default), {
            sx: {
                display: "flex",
                flexDirection: "row",
                minHeight: "100vh",
                minWidth: "100vw"
            },
            children: [
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(SideNav, {
                    spec
                }, void 0, false, {
                    fileName: "client/pages/DebugPage.js",
                    lineNumber: 66,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _boxDefault.default), {
                    sx: {
                        flex: "1 1",
                        p: 2
                    },
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _errorMessageDefault.default), {
                            error
                        }, void 0, false, {
                            fileName: "client/pages/DebugPage.js",
                            lineNumber: 68,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactErrorBoundary.ErrorBoundary), {
                            FallbackComponent: (0, _appErrorDefault.default),
                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouterDom.Routes), {
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouterDom.Route), {
                                        path: "/q/:name",
                                        element: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(ExecForm, {
                                            ...props,
                                            type: "query"
                                        }, name, false, void 0, void 0),
                                        title: "do a query"
                                    }, void 0, false, {
                                        fileName: "client/pages/DebugPage.js",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouterDom.Route), {
                                        path: "/c/:name",
                                        element: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(ExecForm, {
                                            ...props,
                                            type: "command"
                                        }, name, false, void 0, void 0),
                                        title: "do a command"
                                    }, void 0, false, {
                                        fileName: "client/pages/DebugPage.js",
                                        lineNumber: 76,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "client/pages/DebugPage.js",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "client/pages/DebugPage.js",
                            lineNumber: 69,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "client/pages/DebugPage.js",
                    lineNumber: 67,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "client/pages/DebugPage.js",
            lineNumber: 60,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "client/pages/DebugPage.js",
        lineNumber: 59,
        columnNumber: 10
    }, this);
}
exports.default = DebugPage;
function SideNav({ spec  }) {
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _boxDefault.default), {
        sx: {
            display: "flex",
            flexDirection: "column",
            backgroundColor: "primary.dark",
            minWidth: `max(10vw, 175px)`,
            maxWidth: `max(20vw, 400px)`,
            overflowX: "auto"
        },
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _typographyDefault.default), {
                variant: "h6",
                sx: {
                    my: 2,
                    textAlign: "center"
                },
                children: [
                    "Debug ",
                    process.env.APP_NAME
                ]
            }, void 0, true, {
                fileName: "client/pages/DebugPage.js",
                lineNumber: 97,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(SideNavButton, {
                to: `/`,
                icon: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _cottageDefault.default), {}, void 0, false, void 0, void 0),
                title: "Home"
            }, void 0, false, {
                fileName: "client/pages/DebugPage.js",
                lineNumber: 103,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(SideNavButtonList, {
                name: "Queries",
                types: spec?.queries,
                icon: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _helpOutlineDefault.default), {}, void 0, false, void 0, void 0),
                linkPrefix: "/debug/q/"
            }, void 0, false, {
                fileName: "client/pages/DebugPage.js",
                lineNumber: 108,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(SideNavButtonList, {
                name: "Commands",
                types: spec?.commands,
                icon: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _keyboardCommandKeyTwoToneDefault.default), {}, void 0, false, void 0, void 0),
                linkPrefix: "/debug/c/"
            }, void 0, false, {
                fileName: "client/pages/DebugPage.js",
                lineNumber: 114,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "client/pages/DebugPage.js",
        lineNumber: 89,
        columnNumber: 10
    }, this);
}
function SideNavButton({ icon , title , subtitle , ...props }) {
    if (props.to) props.component = (0, _linkDefault.default);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _listItemDefault.default), {
        disablePadding: true,
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _listItemButtonDefault.default), {
            ...props,
            children: [
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _listItemIconDefault.default), {
                    sx: {
                        minWidth: "30px"
                    },
                    children: icon
                }, void 0, false, {
                    fileName: "client/pages/DebugPage.js",
                    lineNumber: 127,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _listItemTextDefault.default), {
                    primary: title,
                    secondary: subtitle
                }, void 0, false, {
                    fileName: "client/pages/DebugPage.js",
                    lineNumber: 130,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "client/pages/DebugPage.js",
            lineNumber: 126,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "client/pages/DebugPage.js",
        lineNumber: 125,
        columnNumber: 10
    }, this);
}
function SideNavButtonList({ name , types , icon , linkPrefix  }) {
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _boxDefault.default), {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _typographyDefault.default), {
                variant: "h6",
                sx: {
                    pl: 1
                },
                children: name
            }, void 0, false, {
                fileName: "client/pages/DebugPage.js",
                lineNumber: 137,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _listDefault.default), {
                dense: true,
                sx: {
                    pt: 0
                },
                children: Array.isArray(types) ? [
                    ...types
                ].sort().map(({ name , args  })=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(SideNavButton, {
                        key: name,
                        to: `${linkPrefix}${name}`,
                        icon,
                        title: name,
                        subtitle: args
                    }, void 0, false, {
                        fileName: "client/pages/DebugPage.js",
                        lineNumber: 141,
                        columnNumber: 11
                    }, this)) : Array(3).fill().map((_, i)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _skeletonDefault.default), {
                        animation: "wave",
                        height: "40px"
                    }, i, false, {
                        fileName: "client/pages/DebugPage.js",
                        lineNumber: 150,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "client/pages/DebugPage.js",
                lineNumber: 138,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "client/pages/DebugPage.js",
        lineNumber: 136,
        columnNumber: 10
    }, this);
}
function ExecForm({ spec , type , name , optionsJson ="{}"  }) {
    const location = (0, _reactRouterDom.useLocation)();
    const navigate = (0, _reactRouterDom.useNavigate)();
    const isCommand = type === "command";
    const options = safeJsonParse(optionsJson);
    const optionsJsonIsValid = !(options instanceof Error);
    const submittable = !!(name && optionsJsonIsValid);
    const [execution, setExecution] = (0, _react.useState)(type === "query" && submittable ? {
        name,
        options
    } : null);
    const [executionDone, setExecutionDone] = (0, _react.useState)(false);
    const setOptionsJson = (0, _react.useCallback)((optionsJson, replace = false)=>{
        // TODO include other existing search params
        const params = {};
        if (optionsJson) params.opts = optionsJson;
        const newSearch = searchToString(params);
        let url = location.pathname;
        if (newSearch) url += "?" + newSearch;
        navigate(url, {
            replace
        });
    }, []);
    const reset = (0, _react.useCallback)(()=>{
        setOptionsJson(undefined, false);
        setExecution(null);
        setExecutionDone(false);
    }, [
        setOptionsJson
    ]);
    const onSubmit = (0, _react.useCallback)(()=>{
        if (submittable) setExecution({
            id: Date.now(),
            options
        });
    }, [
        name,
        options
    ]);
    const names = spec && (isCommand ? spec.commands : spec.queries) || [];
    const disabled = !!(execution && !executionDone);
    const Exec = isCommand ? ExecuteCommand : ExecuteQuery;
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _boxDefault.default), {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _formDefault.default), {
                disabled,
                onSubmit,
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _stackDefault.default), {
                    spacing: 2,
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _stackDefault.default), {
                            direction: "row",
                            spacing: 2,
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _typographyDefault.default), {
                                    variant: "h4",
                                    children: type
                                }, void 0, false, {
                                    fileName: "client/pages/DebugPage.js",
                                    lineNumber: 207,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _selectDefault.default), {
                                    value: name,
                                    // onChange={e => setName(e.target.value)}
                                    autoWidth: true,
                                    children: names.map(({ name  })=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _menuItemDefault.default), {
                                            value: name,
                                            component: (0, _linkDefault.default),
                                            to: `/debug/${isCommand ? "c" : "q"}/${name}`,
                                            children: name
                                        }, name, false, {
                                            fileName: "client/pages/DebugPage.js",
                                            lineNumber: 214,
                                            columnNumber: 15
                                        }, this))
                                }, void 0, false, {
                                    fileName: "client/pages/DebugPage.js",
                                    lineNumber: 208,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "client/pages/DebugPage.js",
                            lineNumber: 206,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _textFieldDefault.default), {
                            disabled: disabled,
                            label: "options (JSON)",
                            fullWidth: true,
                            multiline: true,
                            value: optionsJson,
                            onChange: (e)=>{
                                setOptionsJson(e.target.value, true);
                            },
                            error: optionsJsonIsValid ? false : true
                        }, void 0, false, {
                            fileName: "client/pages/DebugPage.js",
                            lineNumber: 223,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _buttonRowDefault.default), {
                            sx: {
                                mt: 2
                            },
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _buttonDefault.default), {
                                    disabled: disabled || !submittable,
                                    variant: "contained",
                                    type: "submit",
                                    autoFocus: true,
                                    children: isCommand ? "execute" : "query"
                                }, void 0, false, {
                                    fileName: "client/pages/DebugPage.js",
                                    lineNumber: 233,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _buttonDefault.default), {
                                    disabled: disabled,
                                    variant: "text",
                                    onClick: reset,
                                    children: "reset"
                                }, void 0, false, {
                                    fileName: "client/pages/DebugPage.js",
                                    lineNumber: 240,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "client/pages/DebugPage.js",
                            lineNumber: 232,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "client/pages/DebugPage.js",
                    lineNumber: 205,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "client/pages/DebugPage.js",
                lineNumber: 204,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("hr", {}, void 0, false, {
                fileName: "client/pages/DebugPage.js",
                lineNumber: 248,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _boxDefault.default), {
                children: execution ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(Exec, {
                    key: execution.id,
                    id: execution.id,
                    name,
                    options: execution.options,
                    onComplete () {
                        setExecutionDone(true);
                    }
                }, void 0, false, {
                    fileName: "client/pages/DebugPage.js",
                    lineNumber: 251,
                    columnNumber: 11
                }, this) : null
            }, void 0, false, {
                fileName: "client/pages/DebugPage.js",
                lineNumber: 249,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "client/pages/DebugPage.js",
        lineNumber: 203,
        columnNumber: 10
    }, this);
}
function ExecuteQuery({ id , name , options , onComplete  }) {
    const results = (0, _cqrsJs.useQuery)(name, options, {
        dedupingInterval: 0,
        revalidateOnMount: true,
        revalidateOnFocus: true
    });
    (0, _react.useEffect)(()=>{
        if (!results.loading) onComplete();
    }, [
        results.loading
    ]);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(Execution, {
        ...results,
        name,
        options
    }, void 0, false, {
        fileName: "client/pages/DebugPage.js",
        lineNumber: 274,
        columnNumber: 10
    }, this);
}
function ExecuteCommand({ name , options , onComplete  }) {
    const results = (0, _cqrsJs.useCommandOnMount)(name, options, {
        onComplete
    });
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(Execution, {
        ...results,
        name,
        options
    }, void 0, false, {
        fileName: "client/pages/DebugPage.js",
        lineNumber: 279,
        columnNumber: 10
    }, this);
}
function Execution({ name , options , result , loading , error  }) {
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _boxDefault.default), {
        children: loading ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _circularProgressDefault.default), {}, void 0, false, {
            fileName: "client/pages/DebugPage.js",
            lineNumber: 286,
            columnNumber: 11
        }, this) : error ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _errorMessageDefault.default), {
            error: error
        }, void 0, false, {
            fileName: "client/pages/DebugPage.js",
            lineNumber: 288,
            columnNumber: 13
        }, this) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _inspectObjectDefault.default), {
            object: result,
            sx: {
                m: 0,
                backgroundColor: "#232323"
            }
        }, void 0, false, {
            fileName: "client/pages/DebugPage.js",
            lineNumber: 289,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "client/pages/DebugPage.js",
        lineNumber: 283,
        columnNumber: 10
    }, this);
}
function Command({ name , options , ...prop }) {
    const command = (0, _cqrsJs.useCommandOnMount)(name, options);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(Tile, {
        title: `command: ${name}`,
        ...prop,
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _inspectObjectDefault.default), {
                object: {
                    options
                }
            }, void 0, false, {
                fileName: "client/pages/DebugPage.js",
                lineNumber: 304,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _inspectObjectDefault.default), {
                object: command
            }, void 0, false, {
                fileName: "client/pages/DebugPage.js",
                lineNumber: 305,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "client/pages/DebugPage.js",
        lineNumber: 303,
        columnNumber: 10
    }, this);
}
function safeJsonParse(json) {
    try {
        return JSON.parse(json);
    } catch (error) {
        return error;
    }
}

},{"../components/AppError":"camJp","../components/Link":"2W62Z","../components/Form":"fIbo8","../components/ButtonRow":"kETiD","../components/ErrorMessage":"7lNmi","../cqrs.js":"kH4I5","../components/InspectObject":"9knol","@parcel/transformer-js/src/esmodule-helpers.js":"3U8E3"}],"camJp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _container = require("@mui/material/Container");
var _containerDefault = parcelHelpers.interopDefault(_container);
var _paper = require("@mui/material/Paper");
var _paperDefault = parcelHelpers.interopDefault(_paper);
var _typography = require("@mui/material/Typography");
var _typographyDefault = parcelHelpers.interopDefault(_typography);
var _box = require("@mui/material/Box");
var _boxDefault = parcelHelpers.interopDefault(_box);
var _alert = require("@mui/material/Alert");
var _alertDefault = parcelHelpers.interopDefault(_alert);
var _button = require("@mui/material/Button");
var _buttonDefault = parcelHelpers.interopDefault(_button);
function AppError({ error , resetErrorBoundary  }) {
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _containerDefault.default), {
        maxWidth: "lg",
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _paperDefault.default), {
            elevation: 3,
            role: "alert",
            sx: {
                m: 3,
                p: 3
            },
            children: [
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _alertDefault.default), {
                    severity: "error",
                    children: "App Error"
                }, void 0, false, {
                    fileName: "client/components/AppError.js",
                    lineNumber: 17,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _boxDefault.default), {
                    component: "pre",
                    sx: {
                        overflow: "scroll"
                    },
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _typographyDefault.default), {
                            variant: "h4",
                            children: error.message
                        }, void 0, false, {
                            fileName: "client/components/AppError.js",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                            fileName: "client/components/AppError.js",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this),
                        error.stack
                    ]
                }, void 0, true, {
                    fileName: "client/components/AppError.js",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _buttonDefault.default), {
                    variant: "contained",
                    onClick: resetErrorBoundary,
                    children: "Try again"
                }, void 0, false, {
                    fileName: "client/components/AppError.js",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "client/components/AppError.js",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "client/components/AppError.js",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
exports.default = AppError;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"3U8E3"}],"3U8E3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
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

},{}],"2W62Z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactRouterDom = require("react-router-dom");
var _link = require("@mui/material/Link");
var _linkDefault = parcelHelpers.interopDefault(_link);
const Link = /*#__PURE__*/ _react.forwardRef(({ ...props }, ref)=>{
    props.component = "a";
    if (props.to) props.component = (0, _reactRouterDom.Link);
    if (props.to && props.to.startsWith("http")) {
        props.href = props.to;
        delete props.to;
        props.rel = props.rel || "noopener noreferrer";
        props.target = props.target || "_blank";
        props.component = "a";
    }
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _linkDefault.default), {
        ...props,
        ref: ref
    }, void 0, false, {
        fileName: "client/components/Link.js",
        lineNumber: 17,
        columnNumber: 10
    }, undefined);
});
Link.displayName = "Link";
exports.default = Link;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"3U8E3"}],"fIbo8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _box = require("@mui/material/Box");
var _boxDefault = parcelHelpers.interopDefault(_box);
function Form({ disabled , children , onSubmit , ...props }) {
    const _onSubmit = _react.useCallback((event)=>{
        event.preventDefault();
        if (disabled || !onSubmit) return;
        const formData = new FormData(event.currentTarget);
        onSubmit(event, formData);
    }, [
        disabled,
        onSubmit
    ]);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _boxDefault.default), {
        component: "form",
        disabled,
        ...props,
        onSubmit: _onSubmit,
        children: children
    }, void 0, false, {
        fileName: "client/components/Form.js",
        lineNumber: 16,
        columnNumber: 10
    }, this);
}
exports.default = Form;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"3U8E3"}],"kETiD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _stack = require("@mui/material/Stack");
var _stackDefault = parcelHelpers.interopDefault(_stack);
function ButtonRow({ children , ...props }) {
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _stackDefault.default), {
        spacing: 2,
        direction: "row-reverse",
        alignItems: "center",
        ...props,
        children: children
    }, void 0, false, {
        fileName: "client/components/ButtonRow.js",
        lineNumber: 5,
        columnNumber: 10
    }, this);
}
exports.default = ButtonRow;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"3U8E3"}],"7lNmi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _alert = require("@mui/material/Alert");
var _alertDefault = parcelHelpers.interopDefault(_alert);
const ErrorMessage = ({ error , ...props })=>{
    if (!error) return null;
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _alertDefault.default), {
        severity: "error",
        ...props,
        children: error.message
    }, void 0, false, {
        fileName: "client/components/ErrorMessage.js",
        lineNumber: 6,
        columnNumber: 10
    }, undefined);
};
exports.default = ErrorMessage;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"3U8E3"}],"kH4I5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fetchQuery", ()=>fetchQuery);
parcelHelpers.export(exports, "fetchCommand", ()=>fetchCommand);
parcelHelpers.export(exports, "useQuery", ()=>useQuery);
parcelHelpers.export(exports, "useCommand", ()=>useCommand);
parcelHelpers.export(exports, "useCommandOnMount", ()=>useCommandOnMount);
var _react = require("react");
var _swr = require("swr");
var _swrDefault = parcelHelpers.interopDefault(_swr);
var _useAsync = require("./hooks/useAsync");
var _useAsyncDefault = parcelHelpers.interopDefault(_useAsync);
async function fetchQuery(name, options = {}) {
    const params = new URLSearchParams(options);
    return await apiFetch("GET", `/api/${name}?${params}`);
}
async function fetchCommand(name, options) {
    return await apiFetch("POST", `/api/${name}`, options);
}
window.cqrs = {
    query: fetchQuery,
    command: fetchCommand
};
async function apiFetch(method, path, body, tries = 0) {
    const res = await fetch(path, {
        method,
        headers: {
            "Accepts": "application/json",
            "Content-Type": "application/json"
        },
        body: body ? JSON.stringify(body) : undefined
    });
    if (res.status === 502) throw new Error(`API server looks down or you're offline`);
    if (res.status === 504 && tries < 5) {
        await wait(500);
        return apiFetch(method, path, body, tries + 1);
    }
    const { result , error  } = await res.json();
    if (error) throw new Error(error.message);
    return result || null;
}
const wait = (ms)=>new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        }, ms);
    });
function useQuery(name, options = {}, config) {
    const swrKey = name ? [
        name,
        options
    ] : null;
    const { data: result , error , mutate  } = (0, _swrDefault.default)(swrKey, {
        ...config,
        fetcher: fetchQuery
    });
    const loading = typeof result === "undefined" && !error;
    const reload = (0, _react.useCallback)(()=>{
        mutate();
    }, [
        mutate
    ]);
    return {
        result,
        loading,
        error,
        mutate,
        reload
    };
}
function useCommand(name, config) {
    return (0, _useAsyncDefault.default)((options)=>fetchCommand(name, options), config);
}
function useCommandOnMount(name, options, config) {
    const command = useCommand(name, config);
    (0, _react.useEffect)(()=>{
        if (command.idle) command.call(options);
    }, [
        name,
        options
    ]);
    return command;
}

},{"./hooks/useAsync":"ajPud","@parcel/transformer-js/src/esmodule-helpers.js":"3U8E3"}],"ajPud":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _useForceUpdate = require("./useForceUpdate");
var _useForceUpdateDefault = parcelHelpers.interopDefault(_useForceUpdate);
const STATES = [
    "idle",
    "pending",
    "resolved",
    "rejected"
];
function useAsync(asyncFunction, config = {}) {
    const { callOnMount , onSuccess , onFailure , onComplete  } = config;
    const forceUpdate = (0, _useForceUpdateDefault.default)();
    const [ctx] = (0, _react.useState)({});
    const setState = (state)=>{
        ctx.state = STATES[state];
        STATES.forEach((name, index)=>{
            ctx[name] = index === state;
        });
        forceUpdate();
    };
    if (ctx.state === undefined) setState(0);
    ctx.call = (0, _react.useCallback)((...args)=>{
        if (ctx.promise) throw new Error(`already executing`);
        ctx.promise = new Promise((resolve, reject)=>{
            asyncFunction(...args).then(resolve, reject);
        }).then(async (result)=>{
            delete ctx.promise;
            ctx.result = result;
            setState(2);
            if (onSuccess) await onSuccess(result);
            return result;
        }, async (error)=>{
            delete ctx.promise;
            ctx.error = error;
            if (onFailure) await onFailure(error);
            setState(3);
            return error;
        }).then((result)=>{
            onComplete(result);
        });
        setState(1);
        return ctx.promise;
    }, [
        asyncFunction
    ]);
    (0, _react.useEffect)(()=>{
        if (callOnMount && ctx.state === STATES["0"]) ctx.call();
    }, [
        ctx.call,
        callOnMount,
        ctx.state
    ]);
    return ctx;
}
exports.default = useAsync;

},{"./useForceUpdate":"3Y3dr","@parcel/transformer-js/src/esmodule-helpers.js":"3U8E3"}],"3Y3dr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
const noop = ()=>{};
function useForceUpdate() {
    let setState = (0, _react.useState)()[1];
    (0, _react.useEffect)(()=>()=>{
            setState = noop;
        }, []);
    return (0, _react.useCallback)(()=>{
        setState({});
    }, []);
}
exports.default = useForceUpdate;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"3U8E3"}],"9knol":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _box = require("@mui/material/Box");
var _boxDefault = parcelHelpers.interopDefault(_box);
function InspectObject({ object , sx , ...props }) {
    let string;
    if (typeof object === "function") string = object.toString();
    else if (typeof object === "undefined") string = "undefined";
    else try {
        string = inspect(object);
    } catch (error) {
        string = `ERROR: ${error}`;
    }
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _boxDefault.default), {
        className: "InspectObject",
        sx: {
            m: 1,
            backgroundColor: "background.paper",
            overflow: "auto",
            whiteSpace: "pre",
            fontFamily: "monospace, mono",
            ...sx
        },
        ...props,
        children: string
    }, void 0, false, {
        fileName: "client/components/InspectObject.js",
        lineNumber: 17,
        columnNumber: 10
    }, this);
}
exports.default = InspectObject;
function inspect(object, indentation = 2) {
    return JSON.stringify(object, replaceUndefinedWithUndefinedString, indentation).replace(/"UNDEFINEDPLACEHOLDER"/g, "undefined");
}
const replaceUndefinedWithUndefinedString = (k, v)=>{
    if (v === undefined) return "UNDEFINEDPLACEHOLDER";
    if (v instanceof Error) return {
        message: v.message,
        stack: v.stack
    };
    return v;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"3U8E3"}]},["3skXw","hnHsY"], "hnHsY", "parcelRequirefba5")

//# sourceMappingURL=DebugPage.js.map
