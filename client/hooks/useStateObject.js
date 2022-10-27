import {useState as $8KE8O$useState, useCallback as $8KE8O$useCallback} from "react";


function $21304eb1652507d0$export$2e2bcd8739ae039(init) {
    let [value, setValue] = (0, $8KE8O$useState)({
        ...init
    });
    const patchValue = (0, $8KE8O$useCallback)((patch, replace = false)=>{
        setValue((_value)=>{
            if (typeof patch === "function") patch = setValue(patch);
            let newValue;
            if (typeof patch === "undefined") newValue = {
                ...init
            };
            else if (typeof patch === "function") {
                newValue = {
                    ...value
                };
                newValue = patch(newValue) || newValue // too magic?
                ;
            } else newValue = replace ? patch : {
                ..._value,
                ...patch
            };
            if (typeof newValue !== "object") newValue = {};
            return newValue;
        });
    }, [
        setValue
    ]);
    return [
        value,
        patchValue
    ];
}


export {$21304eb1652507d0$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=useStateObject.js.map
