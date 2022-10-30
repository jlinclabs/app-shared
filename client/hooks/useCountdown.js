import {useEffect as $arRGr$useEffect, useState as $arRGr$useState, useCallback as $arRGr$useCallback} from "react";

function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

var $b6a953b0721d86c6$exports = {};

$parcel$defineInteropFlag($b6a953b0721d86c6$exports);

$parcel$export($b6a953b0721d86c6$exports, "default", () => $b6a953b0721d86c6$export$2e2bcd8739ae039);

const $b6a953b0721d86c6$var$noop = ()=>{};
function $b6a953b0721d86c6$export$2e2bcd8739ae039() {
    let setState = (0, $arRGr$useState)()[1];
    (0, $arRGr$useEffect)(()=>()=>{
            setState = $b6a953b0721d86c6$var$noop;
        }, []);
    return (0, $arRGr$useCallback)(()=>{
        setState({});
    }, []);
}


function $0c8d6bf565bc2e40$export$2e2bcd8739ae039(seconds) {
    const forceUpdate = (0, $b6a953b0721d86c6$export$2e2bcd8739ae039)();
    const [endTime] = useState(Date.now() + seconds);
    const secondsRemaining = Math.ceil((endTime - Date.now()) / 1000);
    console.log({
        seconds: seconds,
        endTime: endTime,
        secondsRemaining: secondsRemaining
    });
    (0, $arRGr$useEffect)(()=>{
        const id = setInterval(()=>{
            forceUpdate();
            if (Date.now() > endTime) clearInterval(id);
        }, 100);
        return ()=>clearInterval(id);
    }, [
        endTime
    ]);
    return secondsRemaining;
}


export {$0c8d6bf565bc2e40$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=useCountdown.js.map
