import {jsx as $PB43f$jsx} from "react/jsx-runtime";
import "react";
import $PB43f$muimaterialAlert from "@mui/material/Alert";




const $e57fa53a045bcfbf$var$ErrorMessage = ({ error: error , ...props })=>{
    if (!error) return null;
    return /*#__PURE__*/ (0, $PB43f$jsx)((0, $PB43f$muimaterialAlert), {
        severity: "error",
        ...props,
        children: error.message
    });
};
var $e57fa53a045bcfbf$export$2e2bcd8739ae039 = $e57fa53a045bcfbf$var$ErrorMessage;


export {$e57fa53a045bcfbf$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=ErrorMessage.js.map
