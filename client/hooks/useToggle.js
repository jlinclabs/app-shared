import {useCallback as $8OQuB$useCallback, useState as $8OQuB$useState} from "react";


function $4ba52e189a623eb3$export$563cafb095d52d53(isOn, _setValue) {
    const setOn = (0, $8OQuB$useCallback)((isOn)=>{
        _setValue(!!isOn);
    }, [
        _setValue
    ]);
    const turnOn = (0, $8OQuB$useCallback)(()=>{
        setOn(true);
    }, [
        setOn
    ]);
    const turnOff = (0, $8OQuB$useCallback)(()=>{
        setOn();
    }, [
        setOn
    ]);
    const toggle = (0, $8OQuB$useCallback)(()=>{
        setOn(!toggle.isOn);
    }, [
        setOn
    ]);
    toggle.isOn = isOn;
    return [
        isOn,
        turnOn,
        turnOff,
        toggle,
        setOn
    ];
}
function $4ba52e189a623eb3$export$2e2bcd8739ae039(initialValue = false) {
    return $4ba52e189a623eb3$export$563cafb095d52d53(...(0, $8OQuB$useState)(initialValue));
}


export {$4ba52e189a623eb3$export$563cafb095d52d53 as _useToggle, $4ba52e189a623eb3$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=useToggle.js.map
