import {jsx as $bSo9k$jsx} from "react/jsx-runtime";
import {forwardRef as $bSo9k$forwardRef} from "react";
import $bSo9k$muiiconsmaterialFindInPage from "@mui/icons-material/FindInPage";
import {Link as $bSo9k$Link} from "react-router-dom";
import $bSo9k$muimaterialLink from "@mui/material/Link";

function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}



var $3e26572ec1ad1291$exports = {};

$parcel$defineInteropFlag($3e26572ec1ad1291$exports);

$parcel$export($3e26572ec1ad1291$exports, "default", () => $3e26572ec1ad1291$export$2e2bcd8739ae039);




const $3e26572ec1ad1291$var$Link = /*#__PURE__*/ $bSo9k$forwardRef(({ ...props }, ref)=>{
    props.component = "a";
    if (props.to) props.component = (0, $bSo9k$Link);
    if (props.to && props.to.startsWith("http")) {
        props.href = props.to;
        delete props.to;
        props.rel = props.rel || "noopener noreferrer";
        props.target = props.target || "_blank";
        props.component = "a";
    }
    return /*#__PURE__*/ (0, $bSo9k$jsx)((0, $bSo9k$muimaterialLink), {
        ...props,
        ref: ref
    });
});
$3e26572ec1ad1291$var$Link.displayName = "Link";
var $3e26572ec1ad1291$export$2e2bcd8739ae039 = $3e26572ec1ad1291$var$Link;


function $fe68d94101d322c2$export$2e2bcd8739ae039({ id: id , children: children , ...props }) {
    return /*#__PURE__*/ (0, $bSo9k$jsx)((0, $3e26572ec1ad1291$export$2e2bcd8739ae039), {
        ...props,
        to: `/api/ceramic/${id}`,
        target: "_blank",
        children: children ?? /*#__PURE__*/ (0, $bSo9k$jsx)((0, $bSo9k$muiiconsmaterialFindInPage), {})
    });
}


export {$fe68d94101d322c2$export$2e2bcd8739ae039 as default};
