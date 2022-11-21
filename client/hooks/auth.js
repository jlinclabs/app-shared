import {useCallback as $ddpqO$useCallback, useEffect as $ddpqO$useEffect, useRef as $ddpqO$useRef, useMemo as $ddpqO$useMemo, useState as $ddpqO$useState} from "react";
import $ddpqO$swr from "swr";

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
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}

var $80d64c4521a01cab$exports = {};

$parcel$export($80d64c4521a01cab$exports, "fetchQuery", () => $80d64c4521a01cab$export$a1c549e76b7f385e);
$parcel$export($80d64c4521a01cab$exports, "fetchCommand", () => $80d64c4521a01cab$export$df781a4386db1cc8);
$parcel$export($80d64c4521a01cab$exports, "useQuery", () => $80d64c4521a01cab$export$dd0a697e1782aedd);
$parcel$export($80d64c4521a01cab$exports, "useCommand", () => $80d64c4521a01cab$export$194d0c7cb6792e23);
$parcel$export($80d64c4521a01cab$exports, "useCommandOnMount", () => $80d64c4521a01cab$export$b87ac4c6452497e4);


var $27954de794c56674$exports = {};

$parcel$defineInteropFlag($27954de794c56674$exports);

$parcel$export($27954de794c56674$exports, "default", () => $27954de794c56674$export$2e2bcd8739ae039);


var $b6a953b0721d86c6$exports = {};

$parcel$defineInteropFlag($b6a953b0721d86c6$exports);

$parcel$export($b6a953b0721d86c6$exports, "default", () => $b6a953b0721d86c6$export$2e2bcd8739ae039);

const $b6a953b0721d86c6$var$noop = ()=>{};
function $b6a953b0721d86c6$export$2e2bcd8739ae039() {
    let setState = (0, $ddpqO$useState)()[1];
    (0, $ddpqO$useEffect)(()=>()=>{
            setState = $b6a953b0721d86c6$var$noop;
        }, []);
    return (0, $ddpqO$useCallback)(()=>{
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
    const callbacks = (0, $ddpqO$useRef)();
    Object.assign(callbacks, {
        onSuccess: onSuccess,
        onFailure: onFailure,
        onComplete: onComplete
    });
    const forceUpdate = (0, $b6a953b0721d86c6$export$2e2bcd8739ae039)();
    const ctx = (0, $ddpqO$useMemo)(()=>({}), [
        asyncFunction,
        callOnMount
    ]);
    ctx.call = (0, $ddpqO$useCallback)((...args)=>{
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
    (0, $ddpqO$useEffect)(()=>{
        if (callOnMount && ctx.idle) ctx.call();
    }, [
        ctx
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
    const { data: result , error: error , mutate: mutate  } = (0, $ddpqO$swr)(swrKey, {
        ...config,
        fetcher: $80d64c4521a01cab$export$a1c549e76b7f385e
    });
    const loading = typeof result === "undefined" && !error;
    const reload = (0, $ddpqO$useCallback)(()=>{
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
    (0, $ddpqO$useEffect)(()=>{
        if (command.idle) command.call(options);
    }, [
        name,
        options
    ]);
    return command;
}


function $64a3a77a2f3e8ee3$export$3901076af3749fa9() {
    const { result: currentUser , loading: loading , error: error , mutate: mutate  } = (0, $80d64c4521a01cab$export$dd0a697e1782aedd)("auth.getCurrentUser");
    const reload = (0, $ddpqO$useCallback)(()=>{
        mutate();
    }, [
        mutate
    ]);
    return {
        currentUser: currentUser,
        loading: loading,
        error: error,
        mutate: mutate,
        reload: reload
    };
}
function $64a3a77a2f3e8ee3$export$3b062b02b4537682() {
    return {};
}
function $64a3a77a2f3e8ee3$export$227d34abc4c8317a() {
// const navigate = useNavigate()
// useEffect(
//   () => {
//     if (loading) return
//     if (redirectToIfFound && currentUser){
//       navigate(redirectToIfFound)
//     }else if (redirectToIfNotFound && !currentUser){
//       navigate(redirectToIfNotFound)
//     }
//   },
//   [
//     navigate,
//     loading,
//     currentUser,
//     redirectToIfFound,
//     redirectToIfNotFound
//   ]
// )
}
function $64a3a77a2f3e8ee3$export$b92513448216e3dc() {}
function $64a3a77a2f3e8ee3$export$11d7bf43a94ebd74(action, callbacks = {}) {
    const { mutate: mutate  } = $64a3a77a2f3e8ee3$export$3901076af3749fa9();
    return (0, $80d64c4521a01cab$export$194d0c7cb6792e23)(action, {
        ...callbacks,
        onSuccess (currentUser) {
            mutate(currentUser);
            if (callbacks.onSuccess) callbacks.onSuccess(currentUser);
        }
    });
}
const $64a3a77a2f3e8ee3$export$d4e22f05f73ea56b = (callbacks)=>$64a3a77a2f3e8ee3$export$11d7bf43a94ebd74("auth.login", callbacks);
const $64a3a77a2f3e8ee3$export$9a5b97a7aba1a585 = (callbacks)=>$64a3a77a2f3e8ee3$export$11d7bf43a94ebd74("auth.logout", callbacks);
const $64a3a77a2f3e8ee3$export$da8941e4c91255e0 = (callbacks)=>$64a3a77a2f3e8ee3$export$11d7bf43a94ebd74("auth.signup", callbacks);


export {$64a3a77a2f3e8ee3$export$3901076af3749fa9 as useCurrentUser, $64a3a77a2f3e8ee3$export$3b062b02b4537682 as useLoggedIn, $64a3a77a2f3e8ee3$export$227d34abc4c8317a as useRedirectIfLoggedIn, $64a3a77a2f3e8ee3$export$b92513448216e3dc as useRedirectIfNotLoggedIn, $64a3a77a2f3e8ee3$export$11d7bf43a94ebd74 as useCommandAndReloadCurrentUser, $64a3a77a2f3e8ee3$export$d4e22f05f73ea56b as useLogin, $64a3a77a2f3e8ee3$export$9a5b97a7aba1a585 as useLogout, $64a3a77a2f3e8ee3$export$da8941e4c91255e0 as useSignup};
//# sourceMappingURL=auth.js.map
