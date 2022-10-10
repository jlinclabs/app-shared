import {jsx as $8AaBF$jsx} from "react/jsx-runtime";
import {useCallback as $8AaBF$useCallback} from "react";
import $8AaBF$muimaterialBox from "@mui/material/Box";




function $6252030698aa3768$export$2e2bcd8739ae039({ disabled: disabled , children: children , onSubmit: onSubmit , ...props }) {
    const _onSubmit = $8AaBF$useCallback((event)=>{
        event.preventDefault();
        if (disabled || !onSubmit) return;
        const formData = new FormData(event.currentTarget);
        onSubmit(event, formData);
    }, [
        disabled,
        onSubmit
    ]);
    return /*#__PURE__*/ (0, $8AaBF$jsx)((0, $8AaBF$muimaterialBox), {
        component: "form",
        disabled: disabled,
        ...props,
        onSubmit: _onSubmit,
        children: children
    });
}


export {$6252030698aa3768$export$2e2bcd8739ae039 as default};
