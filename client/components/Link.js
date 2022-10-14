import {jsxDEV as $jLWvC$jsxDEV} from "react/jsx-dev-runtime";
import {forwardRef as $jLWvC$forwardRef} from "react";
import {Link as $jLWvC$Link} from "react-router-dom";
import $jLWvC$muimaterialLink from "@mui/material/Link";

function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $08b8c86ef070e3a0$exports = {};

$parcel$defineInteropFlag($08b8c86ef070e3a0$exports);

$parcel$export($08b8c86ef070e3a0$exports, "default", () => $08b8c86ef070e3a0$export$2e2bcd8739ae039, (v) => $08b8c86ef070e3a0$export$2e2bcd8739ae039 = v);




const $08b8c86ef070e3a0$var$Link = /*#__PURE__*/ $jLWvC$forwardRef(({ ...props }, ref)=>{
    props.component = "a";
    if (props.to) props.component = (0, $jLWvC$Link);
    if (props.to && props.to.startsWith("http")) {
        props.href = props.to;
        delete props.to;
        props.rel = props.rel || "noopener noreferrer";
        props.target = props.target || "_blank";
        props.component = "a";
    }
    return /*#__PURE__*/ (0, $jLWvC$jsxDEV)((0, $jLWvC$muimaterialLink), {
        ...props,
        ref: ref
    }, void 0, false, {
        fileName: "client-src/components/Link.js",
        lineNumber: 17,
        columnNumber: 10
    }, undefined);
});
$08b8c86ef070e3a0$var$Link.displayName = "Link";
var $08b8c86ef070e3a0$export$2e2bcd8739ae039 = $08b8c86ef070e3a0$var$Link;


export {$08b8c86ef070e3a0$export$2e2bcd8739ae039 as default, $08b8c86ef070e3a0$exports as default};
//# sourceMappingURL=Link.js.map
