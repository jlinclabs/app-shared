import {jsx as $jLWvC$jsx} from "react/jsx-runtime";
import {forwardRef as $jLWvC$forwardRef} from "react";
import {Link as $jLWvC$Link} from "react-router-dom";
import $jLWvC$muimaterialLink from "@mui/material/Link";





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
    return /*#__PURE__*/ (0, $jLWvC$jsx)((0, $jLWvC$muimaterialLink), {
        ...props,
        ref: ref
    });
});
$08b8c86ef070e3a0$var$Link.displayName = "Link";
var $08b8c86ef070e3a0$export$2e2bcd8739ae039 = $08b8c86ef070e3a0$var$Link;


export {$08b8c86ef070e3a0$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=Link.js.map
