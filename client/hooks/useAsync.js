import {useState as $aY9Ed$useState, useCallback as $aY9Ed$useCallback, useEffect as $aY9Ed$useEffect} from "react";

function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}


var $8e5aa45bd2bf2df3$exports = {};

$parcel$defineInteropFlag($8e5aa45bd2bf2df3$exports);

$parcel$export($8e5aa45bd2bf2df3$exports, "default", () => $8e5aa45bd2bf2df3$export$2e2bcd8739ae039);

const $8e5aa45bd2bf2df3$var$noop = ()=>{};
function $8e5aa45bd2bf2df3$export$2e2bcd8739ae039() {
    let setState = (0, $aY9Ed$useState)()[1];
    (0, $aY9Ed$useEffect)(()=>()=>{
            setState = $8e5aa45bd2bf2df3$var$noop;
        }, []);
    return (0, $aY9Ed$useCallback)(()=>{
        setState({});
    }, []);
}


const $2e683807ce90e650$var$STATES = [
    "idle",
    "pending",
    "resolved",
    "rejected"
];
function $2e683807ce90e650$export$2e2bcd8739ae039(asyncFunction, config = {}) {
    const { callOnMount: callOnMount , onSuccess: onSuccess , onFailure: onFailure , onComplete: onComplete  } = config;
    const forceUpdate = (0, $8e5aa45bd2bf2df3$export$2e2bcd8739ae039)();
    const [ctx] = (0, $aY9Ed$useState)({});
    const setState = (state)=>{
        ctx.state = $2e683807ce90e650$var$STATES[state];
        $2e683807ce90e650$var$STATES.forEach((name, index)=>{
            ctx[name] = index === state;
        });
        forceUpdate();
    };
    if (ctx.state === undefined) setState(0);
    ctx.call = (0, $aY9Ed$useCallback)((...args)=>{
        if (ctx.promise) throw new Error(`already executing`);
        ctx.promise = new Promise((resolve, reject)=>{
            asyncFunction(...args).then(resolve, reject);
        }).then(async (result)=>{
            delete ctx.promise;
            ctx.result = result;
            setState(2);
            if (onSuccess) await onSuccess(result);
            return result;
        }, async (error)=>{
            delete ctx.promise;
            ctx.error = error;
            if (onFailure) await onFailure(error);
            setState(3);
            return error;
        }).then((result)=>{
            onComplete(result);
        });
        setState(1);
        return ctx.promise;
    }, [
        asyncFunction
    ]);
    (0, $aY9Ed$useEffect)(()=>{
        if (callOnMount && ctx.state === $2e683807ce90e650$var$STATES["0"]) ctx.call();
    }, [
        ctx.call,
        callOnMount,
        ctx.state
    ]);
    return ctx;
}


export {$2e683807ce90e650$export$2e2bcd8739ae039 as default};
