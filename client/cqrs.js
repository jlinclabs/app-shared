import {useCallback as $gM7ic$useCallback, useEffect as $gM7ic$useEffect, useState as $gM7ic$useState} from "react";
import $gM7ic$swr from "swr";

function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}


var $2e683807ce90e650$exports = {};

$parcel$defineInteropFlag($2e683807ce90e650$exports);

$parcel$export($2e683807ce90e650$exports, "default", () => $2e683807ce90e650$export$2e2bcd8739ae039);


var $8e5aa45bd2bf2df3$exports = {};

$parcel$defineInteropFlag($8e5aa45bd2bf2df3$exports);

$parcel$export($8e5aa45bd2bf2df3$exports, "default", () => $8e5aa45bd2bf2df3$export$2e2bcd8739ae039);

const $8e5aa45bd2bf2df3$var$noop = ()=>{};
function $8e5aa45bd2bf2df3$export$2e2bcd8739ae039() {
    let setState = (0, $gM7ic$useState)()[1];
    (0, $gM7ic$useEffect)(()=>()=>{
            setState = $8e5aa45bd2bf2df3$var$noop;
        }, []);
    return (0, $gM7ic$useCallback)(()=>{
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
    const [ctx] = (0, $gM7ic$useState)({});
    const setState = (state)=>{
        ctx.state = $2e683807ce90e650$var$STATES[state];
        $2e683807ce90e650$var$STATES.forEach((name, index)=>{
            ctx[name] = index === state;
        });
        forceUpdate();
    };
    if (ctx.state === undefined) setState(0);
    ctx.call = (0, $gM7ic$useCallback)((...args)=>{
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
    (0, $gM7ic$useEffect)(()=>{
        if (callOnMount && ctx.state === $2e683807ce90e650$var$STATES["0"]) ctx.call();
    }, [
        ctx.call,
        callOnMount,
        ctx.state
    ]);
    return ctx;
}


async function $7f5c6f790c4cfcc9$export$a1c549e76b7f385e(name, options = {}) {
    const params = new URLSearchParams(options);
    return await $7f5c6f790c4cfcc9$var$apiFetch("GET", `/api/${name}?${params}`);
}
async function $7f5c6f790c4cfcc9$export$df781a4386db1cc8(name, options) {
    return await $7f5c6f790c4cfcc9$var$apiFetch("POST", `/api/${name}`, options);
}
// window.cqrs = {
//   query: fetchQuery,
//   command: fetchCommand,
// }
async function $7f5c6f790c4cfcc9$var$apiFetch(method, path, body, tries = 0) {
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
        await $7f5c6f790c4cfcc9$var$wait(500);
        return $7f5c6f790c4cfcc9$var$apiFetch(method, path, body, tries + 1);
    }
    const { result: result , error: error  } = await res.json();
    if (error) throw new Error(error.message);
    return result || null;
}
const $7f5c6f790c4cfcc9$var$wait = (ms)=>new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        }, ms);
    });
function $7f5c6f790c4cfcc9$export$dd0a697e1782aedd(name, options = {}, config) {
    const swrKey = name ? [
        name,
        options
    ] : null;
    const { data: result , error: error , mutate: mutate  } = (0, $gM7ic$swr)(swrKey, {
        ...config,
        fetcher: $7f5c6f790c4cfcc9$export$a1c549e76b7f385e
    });
    const loading = typeof result === "undefined" && !error;
    const reload = (0, $gM7ic$useCallback)(()=>{
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
function $7f5c6f790c4cfcc9$export$194d0c7cb6792e23(name, config) {
    return (0, $2e683807ce90e650$export$2e2bcd8739ae039)((options)=>$7f5c6f790c4cfcc9$export$df781a4386db1cc8(name, options), config);
}
function $7f5c6f790c4cfcc9$export$b87ac4c6452497e4(name, options, config) {
    const command = $7f5c6f790c4cfcc9$export$194d0c7cb6792e23(name, config);
    (0, $gM7ic$useEffect)(()=>{
        if (command.idle) command.call(options);
    }, [
        name,
        options
    ]);
    return command;
}


export {$7f5c6f790c4cfcc9$export$a1c549e76b7f385e as fetchQuery, $7f5c6f790c4cfcc9$export$df781a4386db1cc8 as fetchCommand, $7f5c6f790c4cfcc9$export$dd0a697e1782aedd as useQuery, $7f5c6f790c4cfcc9$export$194d0c7cb6792e23 as useCommand, $7f5c6f790c4cfcc9$export$b87ac4c6452497e4 as useCommandOnMount};
