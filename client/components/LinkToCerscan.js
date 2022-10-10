import {jsx as $g4Uz7$jsx} from "react/jsx-runtime";
import {forwardRef as $g4Uz7$forwardRef} from "react";
import $g4Uz7$muimaterialBox from "@mui/material/Box";
import {Link as $g4Uz7$Link} from "react-router-dom";
import $g4Uz7$muimaterialLink from "@mui/material/Link";

function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}



var $3e26572ec1ad1291$exports = {};

$parcel$defineInteropFlag($3e26572ec1ad1291$exports);

$parcel$export($3e26572ec1ad1291$exports, "default", () => $3e26572ec1ad1291$export$2e2bcd8739ae039);




const $3e26572ec1ad1291$var$Link = /*#__PURE__*/ $g4Uz7$forwardRef(({ ...props }, ref)=>{
    props.component = "a";
    if (props.to) props.component = (0, $g4Uz7$Link);
    if (props.to && props.to.startsWith("http")) {
        props.href = props.to;
        delete props.to;
        props.rel = props.rel || "noopener noreferrer";
        props.target = props.target || "_blank";
        props.component = "a";
    }
    return /*#__PURE__*/ (0, $g4Uz7$jsx)((0, $g4Uz7$muimaterialLink), {
        ...props,
        ref: ref
    });
});
$3e26572ec1ad1291$var$Link.displayName = "Link";
var $3e26572ec1ad1291$export$2e2bcd8739ae039 = $3e26572ec1ad1291$var$Link;


function $1ab5544700457944$export$2e2bcd8739ae039({ id: id , children: children , ...props }) {
    const to = `https://cerscan.com/testnet-clay/stream/${id}`;
    return /*#__PURE__*/ (0, $g4Uz7$jsx)((0, $3e26572ec1ad1291$export$2e2bcd8739ae039), {
        ...props,
        to: to,
        target: "_blank",
        children: children ?? /*#__PURE__*/ (0, $g4Uz7$jsx)($1ab5544700457944$var$CerscanIcon, {})
    });
}
function $1ab5544700457944$var$CerscanIcon() {
    return /*#__PURE__*/ (0, $g4Uz7$jsx)((0, $g4Uz7$muimaterialBox), {
        component: "span",
        sx: {
            verticalAlign: "bottom"
        },
        children: /*#__PURE__*/ (0, $g4Uz7$jsx)("img", {
            src: "https://cerscan.com/img/favicon.png"
        })
    });
}


export {$1ab5544700457944$export$2e2bcd8739ae039 as default};
