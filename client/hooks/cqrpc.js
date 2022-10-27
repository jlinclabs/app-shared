import {useCallback as $keieZ$useCallback, useEffect as $keieZ$useEffect, useState as $keieZ$useState} from "react";
import $keieZ$swr from "swr";

var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}


var $27954de794c56674$exports = {};

$parcel$defineInteropFlag($27954de794c56674$exports);

$parcel$export($27954de794c56674$exports, "default", () => $27954de794c56674$export$2e2bcd8739ae039);


var $b6a953b0721d86c6$exports = {};

$parcel$defineInteropFlag($b6a953b0721d86c6$exports);

$parcel$export($b6a953b0721d86c6$exports, "default", () => $b6a953b0721d86c6$export$2e2bcd8739ae039);

const $b6a953b0721d86c6$var$noop = ()=>{};
function $b6a953b0721d86c6$export$2e2bcd8739ae039() {
    let setState = (0, $keieZ$useState)()[1];
    (0, $keieZ$useEffect)(()=>()=>{
            setState = $b6a953b0721d86c6$var$noop;
        }, []);
    return (0, $keieZ$useCallback)(()=>{
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
    const forceUpdate = (0, $b6a953b0721d86c6$export$2e2bcd8739ae039)();
    const [ctx] = (0, $keieZ$useState)({});
    const setState = (state)=>{
        ctx.state = $27954de794c56674$var$STATES[state];
        $27954de794c56674$var$STATES.forEach((name, index)=>{
            ctx[name] = index === state;
        });
        forceUpdate();
    };
    if (ctx.state === undefined) setState(0);
    ctx.call = (0, $keieZ$useCallback)((...args)=>{
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
            if (onComplete) onComplete(result);
        });
        setState(1);
        return ctx.promise;
    }, [
        asyncFunction
    ]);
    (0, $keieZ$useEffect)(()=>{
        if (callOnMount && ctx.state === $27954de794c56674$var$STATES["0"]) ctx.call();
    }, [
        ctx.call,
        callOnMount,
        ctx.state
    ]);
    return ctx;
}


const $88bf611d4d903948$var$wait = (ms)=>new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        }, ms);
    });
var $88bf611d4d903948$export$2e2bcd8739ae039 = $88bf611d4d903948$var$wait;


async function $80d64c4521a01cab$export$a1c549e76b7f385e(name, options = {}) {
    const json = JSON.stringify(options);
    const params = json === "{}" ? "" : "?" + new URLSearchParams({
        o: json
    });
    return await $80d64c4521a01cab$var$apiFetch("GET", `/api/${name}${params}`);
}
async function $80d64c4521a01cab$export$df781a4386db1cc8(name, options) {
    return await $80d64c4521a01cab$var$apiFetch("POST", `/api/${name}`, options);
}
/**/ $parcel$global.cqrpc = {
    query: $80d64c4521a01cab$export$a1c549e76b7f385e,
    command: $80d64c4521a01cab$export$df781a4386db1cc8
};
async function $80d64c4521a01cab$var$apiFetch(method, path, body, tries = 0) {
    const res = await fetch(path, {
        method: method,
        headers: {
            "Accepts": "application/json",
            "Content-Type": "application/json"
        },
        body: body ? JSON.stringify(body) : undefined
    });
    if (res.status === 502) throw new Error(`API server looks down or you're offline`);
    if (res.status === 504 && tries < 5) {
        await (0, $88bf611d4d903948$export$2e2bcd8739ae039)(500);
        return $80d64c4521a01cab$var$apiFetch(method, path, body, tries + 1);
    }
    const { result: result , error: error  } = await res.json();
    if (error) throw new Error(error.message);
    return result || null;
}
function $80d64c4521a01cab$export$dd0a697e1782aedd(name, options = {}, config) {
    const swrKey = name ? [
        name,
        options
    ] : null;
    const { data: result , error: error , mutate: mutate  } = (0, $keieZ$swr)(swrKey, {
        ...config,
        fetcher: $80d64c4521a01cab$export$a1c549e76b7f385e
    });
    const loading = typeof result === "undefined" && !error;
    const reload = (0, $keieZ$useCallback)(()=>{
        mutate();
    }, [
        mutate
    ]);
    return {
        result: result,
        loading: loading,
        error: error,
        mutate: mutate,
        reload: reload
    };
}
function $80d64c4521a01cab$export$194d0c7cb6792e23(name, config) {
    return (0, $27954de794c56674$export$2e2bcd8739ae039)((options)=>$80d64c4521a01cab$export$df781a4386db1cc8(name, options), config);
}
function $80d64c4521a01cab$export$b87ac4c6452497e4(name, options, config) {
    const command = $80d64c4521a01cab$export$194d0c7cb6792e23(name, config);
    (0, $keieZ$useEffect)(()=>{
        if (command.idle) command.call(options);
    }, [
        name,
        options
    ]);
    return command;
}


export {$80d64c4521a01cab$export$a1c549e76b7f385e as fetchQuery, $80d64c4521a01cab$export$df781a4386db1cc8 as fetchCommand, $80d64c4521a01cab$export$dd0a697e1782aedd as useQuery, $80d64c4521a01cab$export$194d0c7cb6792e23 as useCommand, $80d64c4521a01cab$export$b87ac4c6452497e4 as useCommandOnMount};
//# sourceMappingURL=cqrpc.js.map
