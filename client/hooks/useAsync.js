import {useRef as $kKpXz$useRef, useMemo as $kKpXz$useMemo, useCallback as $kKpXz$useCallback, useEffect as $kKpXz$useEffect, useState as $kKpXz$useState} from "react";

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
    let setState = (0, $kKpXz$useState)()[1];
    (0, $kKpXz$useEffect)(()=>()=>{
            setState = $b6a953b0721d86c6$var$noop;
        }, []);
    return (0, $kKpXz$useCallback)(()=>{
        setState({});
    }, []);
}


const $27954de794c56674$var$STATES = [
    "idle",
    "pending",
    "resolved",
    "rejected"
];
function $27954de794c56674$export$2e2bcd8739ae039(asyncFunction, config = {}) {
    const { callOnMount: callOnMount , onSuccess: onSuccess , onFailure: onFailure , onComplete: onComplete  } = config;
    const callbacks = (0, $kKpXz$useRef)();
    Object.assign(callbacks, {
        onSuccess: onSuccess,
        onFailure: onFailure,
        onComplete: onComplete
    });
    const forceUpdate = (0, $b6a953b0721d86c6$export$2e2bcd8739ae039)();
    const ctx = (0, $kKpXz$useMemo)(()=>({}), [
        asyncFunction,
        callOnMount
    ]);
    ctx.call = (0, $kKpXz$useCallback)((...args)=>{
        if (ctx.promise) throw new Error(`already executing`);
        const setState = (state)=>{
            ctx.state = $27954de794c56674$var$STATES[state];
            $27954de794c56674$var$STATES.forEach((name, index)=>{
                ctx[name] = index === state;
            });
            forceUpdate();
        };
        ctx.promise = new Promise((resolve, reject)=>{
            asyncFunction(...args).then(resolve, reject);
        }).then(async (result)=>{
            delete ctx.promise;
            ctx.result = result;
            setState(2);
            if (callbacks.onSuccess) await callbacks.onSuccess(result);
            return result;
        }, async (error)=>{
            delete ctx.promise;
            ctx.error = error;
            if (callbacks.onFailure) await callbacks.onFailure(error);
            setState(3);
            return error;
        }).then(async (result)=>{
            if (callbacks.onComplete) await callbacks.onComplete(result);
        });
        setState(1);
        return ctx.promise;
    }, [
        ctx
    ]);
    (0, $kKpXz$useEffect)(()=>{
        if (callOnMount && ctx.idle) ctx.call();
    }, [
        ctx
    ]);
    return ctx;
}


export {$27954de794c56674$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=useAsync.js.map
