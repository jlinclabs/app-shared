import {jsxs as $eTq4X$jsxs, jsx as $eTq4X$jsx} from "react/jsx-runtime";
import {useCallback as $eTq4X$useCallback} from "react";
import $eTq4X$muimaterialStack from "@mui/material/Stack";
import $eTq4X$muimaterialTextField from "@mui/material/TextField";
import $eTq4X$muimaterialIconButton from "@mui/material/IconButton";
import $eTq4X$muiiconsmaterialContentCopy from "@mui/icons-material/ContentCopy";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}






var $8e6d25e76dd15597$exports = {};

$parcel$export($8e6d25e76dd15597$exports, "copyText", () => $8e6d25e76dd15597$export$c8531afc97e1e0f8);
function $8e6d25e76dd15597$export$c8531afc97e1e0f8(text) {
    navigator.clipboard.writeText(text);
}


function $4082528ce2e1849f$export$2e2bcd8739ae039({ value: value , inputProps: inputProps , iconProps: iconProps , ...props }) {
    const copy = (0, $eTq4X$useCallback)(()=>{
        (0, $8e6d25e76dd15597$export$c8531afc97e1e0f8)(value);
    }, []);
    const selectAll = (0, $eTq4X$useCallback)((e)=>{
        e.target.setSelectionRange(0, 999999);
    }, []);
    const onFocus = (0, $eTq4X$useCallback)((e)=>{
        selectAll(e);
    }, []);
    const onMouseDown = (0, $eTq4X$useCallback)((e)=>{
        e.preventDefault();
        selectAll(e);
        e.target.focus();
        return false;
    }, []);
    return /*#__PURE__*/ (0, $eTq4X$jsxs)((0, $eTq4X$muimaterialStack), {
        direction: "row",
        spacing: 1,
        ...props,
        children: [
            /*#__PURE__*/ (0, $eTq4X$jsx)((0, $eTq4X$muimaterialTextField), {
                fullWidth: true,
                ...inputProps,
                sx: {
                    width: "auto",
                    flex: "1 1",
                    ...inputProps?.sx
                },
                value: value,
                readOnly: true,
                onFocus: onFocus,
                onMouseDown: onMouseDown
            }),
            /*#__PURE__*/ (0, $eTq4X$jsx)((0, $eTq4X$muimaterialIconButton), {
                onClick: copy,
                sx: {
                    display: "flex",
                    width: "56px"
                },
                children: /*#__PURE__*/ (0, $eTq4X$jsx)((0, $eTq4X$muiiconsmaterialContentCopy), {
                    ...iconProps
                })
            })
        ]
    });
}


export {$4082528ce2e1849f$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=CopyBox.js.map
