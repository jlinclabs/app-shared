import {jsx as $lW3OE$jsx} from "react/jsx-runtime";
import "react";
import $lW3OE$muimaterialAlert from "@mui/material/Alert";




const $79fa5d701d61042d$var$ErrorMessage = ({ error: error , ...props })=>{
    if (!error) return null;
    return /*#__PURE__*/ (0, $lW3OE$jsx)((0, $lW3OE$muimaterialAlert), {
        severity: "error",
        ...props,
        children: error.message
    });
};
var $79fa5d701d61042d$export$2e2bcd8739ae039 = $79fa5d701d61042d$var$ErrorMessage;


export {$79fa5d701d61042d$export$2e2bcd8739ae039 as default};
