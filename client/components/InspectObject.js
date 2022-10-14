import {jsxDEV as $5BDeY$jsxDEV} from "react/jsx-dev-runtime";
import "react";
import $5BDeY$muimaterialBox from "@mui/material/Box";




function $b5643637aedb000b$export$2e2bcd8739ae039({ object: object , sx: sx , ...props }) {
    let string;
    if (typeof object === "function") string = object.toString();
    else if (typeof object === "undefined") string = "undefined";
    else try {
        string = $b5643637aedb000b$var$inspect(object);
    } catch (error) {
        string = `ERROR: ${error}`;
    }
    return /*#__PURE__*/ (0, $5BDeY$jsxDEV)((0, $5BDeY$muimaterialBox), {
        className: "InspectObject",
        sx: {
            m: 1,
            backgroundColor: "background.paper",
            overflow: "auto",
            whiteSpace: "pre",
            fontFamily: "monospace, mono",
            ...sx
        },
        ...props,
        children: string
    }, void 0, false, {
        fileName: "client-src/components/InspectObject.js",
        lineNumber: 17,
        columnNumber: 10
    }, this);
}
function $b5643637aedb000b$var$inspect(object, indentation = 2) {
    return JSON.stringify(object, $b5643637aedb000b$var$replaceUndefinedWithUndefinedString, indentation).replace(/"UNDEFINEDPLACEHOLDER"/g, "undefined");
}
const $b5643637aedb000b$var$replaceUndefinedWithUndefinedString = (k, v)=>{
    if (v === undefined) return "UNDEFINEDPLACEHOLDER";
    if (v instanceof Error) return {
        message: v.message,
        stack: v.stack
    };
    return v;
};


export {$b5643637aedb000b$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=InspectObject.js.map
