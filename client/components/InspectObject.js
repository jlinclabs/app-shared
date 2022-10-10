import {jsx as $kyCUf$jsx} from "react/jsx-runtime";
import "react";
import $kyCUf$muimaterialBox from "@mui/material/Box";




function $41fd2a28aa9166e0$export$2e2bcd8739ae039({ object: object , sx: sx , ...props }) {
    let string;
    if (typeof object === "function") string = object.toString();
    else if (typeof object === "undefined") string = "undefined";
    else try {
        string = $41fd2a28aa9166e0$var$inspect(object);
    } catch (error) {
        string = `ERROR: ${error}`;
    }
    return /*#__PURE__*/ (0, $kyCUf$jsx)((0, $kyCUf$muimaterialBox), {
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
    });
}
function $41fd2a28aa9166e0$var$inspect(object, indentation = 2) {
    return JSON.stringify(object, $41fd2a28aa9166e0$var$replaceUndefinedWithUndefinedString, indentation).replace(/"UNDEFINEDPLACEHOLDER"/g, "undefined");
}
const $41fd2a28aa9166e0$var$replaceUndefinedWithUndefinedString = (k, v)=>{
    if (v === undefined) return "UNDEFINEDPLACEHOLDER";
    if (v instanceof Error) return {
        message: v.message,
        stack: v.stack
    };
    return v;
};


export {$41fd2a28aa9166e0$export$2e2bcd8739ae039 as default};
