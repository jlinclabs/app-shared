import {jsx as $jlofh$jsx, jsxs as $jlofh$jsxs} from "react/jsx-runtime";
import {useCallback as $jlofh$useCallback} from "react";
import $jlofh$muimaterialButton from "@mui/material/Button";
import $jlofh$muimaterialIconButton from "@mui/material/IconButton";
import $jlofh$muiiconsmaterialContentCopy from "@mui/icons-material/ContentCopy";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}





var $8e6d25e76dd15597$exports = {};

$parcel$export($8e6d25e76dd15597$exports, "copyText", () => $8e6d25e76dd15597$export$c8531afc97e1e0f8);
function $8e6d25e76dd15597$export$c8531afc97e1e0f8(text) {
    navigator.clipboard.writeText(text);
}


function $e65346c3f10be815$export$2e2bcd8739ae039({ children: children , variant: variant = "button" , value: value , icon: icon = /*#__PURE__*/ (0, $jlofh$jsx)((0, $jlofh$muiiconsmaterialContentCopy), {}) , ...props }) {
    const copy = $jlofh$useCallback(()=>{
        (0, $8e6d25e76dd15597$export$c8531afc97e1e0f8)(value);
    }, [
        value
    ]);
    if (variant === "icon") return /*#__PURE__*/ (0, $jlofh$jsxs)((0, $jlofh$muimaterialIconButton), {
        color: "primary",
        component: "label",
        onClick: copy,
        ...props,
        children: [
            children,
            icon
        ]
    });
    return /*#__PURE__*/ (0, $jlofh$jsx)((0, $jlofh$muimaterialButton), {
        onClick: copy,
        children: children
    });
}


export {$e65346c3f10be815$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=CopyButton.js.map
