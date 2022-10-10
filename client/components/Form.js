import {jsx as $gegTa$jsx} from "react/jsx-runtime";
import {useCallback as $gegTa$useCallback} from "react";
import $gegTa$muimaterialBox from "@mui/material/Box";




function $1abdbf2868e540b2$export$2e2bcd8739ae039({ disabled: disabled , children: children , onSubmit: onSubmit , ...props }) {
    const _onSubmit = $gegTa$useCallback((event)=>{
        event.preventDefault();
        if (disabled || !onSubmit) return;
        const formData = new FormData(event.currentTarget);
        onSubmit(event, formData);
    }, [
        disabled,
        onSubmit
    ]);
    return /*#__PURE__*/ (0, $gegTa$jsx)((0, $gegTa$muimaterialBox), {
        component: "form",
        disabled: disabled,
        ...props,
        onSubmit: _onSubmit,
        children: children
    });
}


export {$1abdbf2868e540b2$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=Form.js.map
