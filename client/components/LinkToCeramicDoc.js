import {jsxDEV as $3VX7w$jsxDEV} from "react/jsx-dev-runtime";
import {forwardRef as $3VX7w$forwardRef} from "react";
import $3VX7w$muiiconsmaterialFindInPage from "@mui/icons-material/FindInPage";
import {Link as $3VX7w$Link} from "react-router-dom";
import $3VX7w$muimaterialLink from "@mui/material/Link";

function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}



var $08b8c86ef070e3a0$exports = {};

$parcel$defineInteropFlag($08b8c86ef070e3a0$exports);

$parcel$export($08b8c86ef070e3a0$exports, "default", () => $08b8c86ef070e3a0$export$2e2bcd8739ae039, (v) => $08b8c86ef070e3a0$export$2e2bcd8739ae039 = v);




const $08b8c86ef070e3a0$var$Link = /*#__PURE__*/ $3VX7w$forwardRef(({ ...props }, ref)=>{
    props.component = "a";
    if (props.to) props.component = (0, $3VX7w$Link);
    if (props.to && props.to.startsWith("http")) {
        props.href = props.to;
        delete props.to;
        props.rel = props.rel || "noopener noreferrer";
        props.target = props.target || "_blank";
        props.component = "a";
    }
    return /*#__PURE__*/ (0, $3VX7w$jsxDEV)((0, $3VX7w$muimaterialLink), {
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


function $b03eb33b20110a3c$export$2e2bcd8739ae039({ id: id , children: children , ...props }) {
    return /*#__PURE__*/ (0, $3VX7w$jsxDEV)((0, $08b8c86ef070e3a0$exports.default), {
        ...props,
        to: `/api/ceramic/${id}`,
        target: "_blank",
        children: children ?? /*#__PURE__*/ (0, $3VX7w$jsxDEV)((0, $3VX7w$muiiconsmaterialFindInPage), {}, void 0, false, {
            fileName: "client-src/components/LinkToCeramicDoc.js",
            lineNumber: 8,
            columnNumber: 18
        }, this)
    }, void 0, false, {
        fileName: "client-src/components/LinkToCeramicDoc.js",
        lineNumber: 7,
        columnNumber: 10
    }, this);
}


export {$b03eb33b20110a3c$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=LinkToCeramicDoc.js.map
