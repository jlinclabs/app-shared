import {useState as $ecYeW$useState, useCallback as $ecYeW$useCallback} from "react";


function $f1d72acc899af9b6$export$2e2bcd8739ae039(init = {}) {
    const [value, setValue] = (0, $ecYeW$useState)(init);
    const onChange = (0, $ecYeW$useCallback)((changes)=>{
        onChange.value = changes === undefined ? init : {
            ...onChange.value,
            ...changes
        };
        setValue(onChange.value);
    }, [
        setValue,
        init
    ]);
    onChange.value = value;
    return [
        value,
        onChange
    ];
}


export {$f1d72acc899af9b6$export$2e2bcd8739ae039 as default};
