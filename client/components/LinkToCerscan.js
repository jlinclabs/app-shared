import {jsxDEV as $i3kuG$jsxDEV} from "react/jsx-dev-runtime";
import {forwardRef as $i3kuG$forwardRef} from "react";
import $i3kuG$muimaterialBox from "@mui/material/Box";
import {Link as $i3kuG$Link} from "react-router-dom";
import $i3kuG$muimaterialLink from "@mui/material/Link";

function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}



var $08b8c86ef070e3a0$exports = {};

$parcel$defineInteropFlag($08b8c86ef070e3a0$exports);

$parcel$export($08b8c86ef070e3a0$exports, "default", () => $08b8c86ef070e3a0$export$2e2bcd8739ae039, (v) => $08b8c86ef070e3a0$export$2e2bcd8739ae039 = v);




const $08b8c86ef070e3a0$var$Link = /*#__PURE__*/ $i3kuG$forwardRef(({ ...props }, ref)=>{
    props.component = "a";
    if (props.to) props.component = (0, $i3kuG$Link);
    if (props.to && props.to.startsWith("http")) {
        props.href = props.to;
        delete props.to;
        props.rel = props.rel || "noopener noreferrer";
        props.target = props.target || "_blank";
        props.component = "a";
    }
    return /*#__PURE__*/ (0, $i3kuG$jsxDEV)((0, $i3kuG$muimaterialLink), {
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


function $7f8ba4072a6e7e6a$export$2e2bcd8739ae039({ id: id , children: children , ...props }) {
    const to = `https://cerscan.com/testnet-clay/stream/${id}`;
    return /*#__PURE__*/ (0, $i3kuG$jsxDEV)((0, $08b8c86ef070e3a0$exports.default), {
        ...props,
        to: to,
        target: "_blank",
        children: children ?? /*#__PURE__*/ (0, $i3kuG$jsxDEV)($7f8ba4072a6e7e6a$var$CerscanIcon, {}, void 0, false, {
            fileName: "client-src/components/LinkToCerscan.js",
            lineNumber: 9,
            columnNumber: 18
        }, this)
    }, void 0, false, {
        fileName: "client-src/components/LinkToCerscan.js",
        lineNumber: 8,
        columnNumber: 10
    }, this);
}
function $7f8ba4072a6e7e6a$var$CerscanIcon() {
    return /*#__PURE__*/ (0, $i3kuG$jsxDEV)((0, $i3kuG$muimaterialBox), {
        component: "span",
        sx: {
            verticalAlign: "bottom"
        },
        children: /*#__PURE__*/ (0, $i3kuG$jsxDEV)("img", {
            src: "https://cerscan.com/img/favicon.png"
        }, void 0, false, {
            fileName: "client-src/components/LinkToCerscan.js",
            lineNumber: 18,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "client-src/components/LinkToCerscan.js",
        lineNumber: 15,
        columnNumber: 10
    }, this);
}


export {$7f8ba4072a6e7e6a$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=LinkToCerscan.js.map
