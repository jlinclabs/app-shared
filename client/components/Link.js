import {jsx as $gYHxG$jsx} from "react/jsx-runtime";
import {forwardRef as $gYHxG$forwardRef} from "react";
import {Link as $gYHxG$Link} from "react-router-dom";
import $gYHxG$muimaterialLink from "@mui/material/Link";





const $3e26572ec1ad1291$var$Link = /*#__PURE__*/ $gYHxG$forwardRef(({ ...props }, ref)=>{
    props.component = "a";
    if (props.to) props.component = (0, $gYHxG$Link);
    if (props.to && props.to.startsWith("http")) {
        props.href = props.to;
        delete props.to;
        props.rel = props.rel || "noopener noreferrer";
        props.target = props.target || "_blank";
        props.component = "a";
    }
    return /*#__PURE__*/ (0, $gYHxG$jsx)((0, $gYHxG$muimaterialLink), {
        ...props,
        ref: ref
    });
});
$3e26572ec1ad1291$var$Link.displayName = "Link";
var $3e26572ec1ad1291$export$2e2bcd8739ae039 = $3e26572ec1ad1291$var$Link;


export {$3e26572ec1ad1291$export$2e2bcd8739ae039 as default};
