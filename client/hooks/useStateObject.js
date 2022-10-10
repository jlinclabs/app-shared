import {useState as $8KE8O$useState, useCallback as $8KE8O$useCallback} from "react";


function $21304eb1652507d0$export$2e2bcd8739ae039(init = {}) {
    const [value, setValue] = (0, $8KE8O$useState)(init);
    const onChange = (0, $8KE8O$useCallback)((changes)=>{
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


export {$21304eb1652507d0$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=useStateObject.js.map
