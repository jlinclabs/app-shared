import {jsxDEV as $PB43f$jsxDEV} from "react/jsx-dev-runtime";
import "react";
import $PB43f$muimaterialAlert from "@mui/material/Alert";

function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $e57fa53a045bcfbf$exports = {};

$parcel$defineInteropFlag($e57fa53a045bcfbf$exports);

$parcel$export($e57fa53a045bcfbf$exports, "default", () => $e57fa53a045bcfbf$export$2e2bcd8739ae039, (v) => $e57fa53a045bcfbf$export$2e2bcd8739ae039 = v);



const $e57fa53a045bcfbf$var$ErrorMessage = ({ error: error , ...props })=>{
    if (!error) return null;
    return /*#__PURE__*/ (0, $PB43f$jsxDEV)((0, $PB43f$muimaterialAlert), {
        severity: "error",
        ...props,
        children: error.message
    }, void 0, false, {
        fileName: "client-src/components/ErrorMessage.js",
        lineNumber: 6,
        columnNumber: 10
    }, undefined);
};
var $e57fa53a045bcfbf$export$2e2bcd8739ae039 = $e57fa53a045bcfbf$var$ErrorMessage;


export {$e57fa53a045bcfbf$export$2e2bcd8739ae039 as default, $e57fa53a045bcfbf$exports as default};
//# sourceMappingURL=ErrorMessage.js.map
