import {jsxs as $gBUKT$jsxs, jsx as $gBUKT$jsx} from "react/jsx-runtime";
import {useState as $gBUKT$useState, forwardRef as $gBUKT$forwardRef, useCallback as $gBUKT$useCallback, useEffect as $gBUKT$useEffect} from "react";
import $gBUKT$muimaterialPaper from "@mui/material/Paper";
import $gBUKT$muimaterialTypography from "@mui/material/Typography";
import $gBUKT$muimaterialStack from "@mui/material/Stack";
import $gBUKT$muimaterialButton from "@mui/material/Button";
import $gBUKT$muimaterialBox from "@mui/material/Box";
import $gBUKT$muimaterialTextField from "@mui/material/TextField";
import {Link as $gBUKT$Link} from "react-router-dom";
import $gBUKT$muimaterialLink from "@mui/material/Link";
import $gBUKT$muimaterialAlert from "@mui/material/Alert";
import $gBUKT$swr from "swr";

function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
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








var $08b8c86ef070e3a0$exports = {};

$parcel$defineInteropFlag($08b8c86ef070e3a0$exports);

$parcel$export($08b8c86ef070e3a0$exports, "default", () => $08b8c86ef070e3a0$export$2e2bcd8739ae039);




const $08b8c86ef070e3a0$var$Link = /*#__PURE__*/ $gBUKT$forwardRef(({ ...props }, ref)=>{
    props.component = "a";
    if (props.to) props.component = (0, $gBUKT$Link);
    if (props.to && props.to.startsWith("http")) {
        props.href = props.to;
        delete props.to;
        props.rel = props.rel || "noopener noreferrer";
        props.target = props.target || "_blank";
        props.component = "a";
    }
    return /*#__PURE__*/ (0, $gBUKT$jsx)((0, $gBUKT$muimaterialLink), {
        ...props,
        ref: ref
    });
});
$08b8c86ef070e3a0$var$Link.displayName = "Link";
var $08b8c86ef070e3a0$export$2e2bcd8739ae039 = $08b8c86ef070e3a0$var$Link;


var $e57fa53a045bcfbf$exports = {};

$parcel$defineInteropFlag($e57fa53a045bcfbf$exports);

$parcel$export($e57fa53a045bcfbf$exports, "default", () => $e57fa53a045bcfbf$export$2e2bcd8739ae039);



const $e57fa53a045bcfbf$var$ErrorMessage = ({ error: error , ...props })=>{
    if (!error) return null;
    return /*#__PURE__*/ (0, $gBUKT$jsx)((0, $gBUKT$muimaterialAlert), {
        severity: "error",
        ...props,
        children: error.message
    });
};
var $e57fa53a045bcfbf$export$2e2bcd8739ae039 = $e57fa53a045bcfbf$var$ErrorMessage;


var $64a3a77a2f3e8ee3$exports = {};

$parcel$export($64a3a77a2f3e8ee3$exports, "useCurrentUser", () => $64a3a77a2f3e8ee3$export$3901076af3749fa9);
$parcel$export($64a3a77a2f3e8ee3$exports, "useLoggedIn", () => $64a3a77a2f3e8ee3$export$3b062b02b4537682);
$parcel$export($64a3a77a2f3e8ee3$exports, "useRedirectIfLoggedIn", () => $64a3a77a2f3e8ee3$export$227d34abc4c8317a);
$parcel$export($64a3a77a2f3e8ee3$exports, "useRedirectIfNotLoggedIn", () => $64a3a77a2f3e8ee3$export$b92513448216e3dc);
$parcel$export($64a3a77a2f3e8ee3$exports, "useCommandAndReloadCurrentUser", () => $64a3a77a2f3e8ee3$export$11d7bf43a94ebd74);
$parcel$export($64a3a77a2f3e8ee3$exports, "useLogin", () => $64a3a77a2f3e8ee3$export$d4e22f05f73ea56b);
$parcel$export($64a3a77a2f3e8ee3$exports, "useLogout", () => $64a3a77a2f3e8ee3$export$9a5b97a7aba1a585);
$parcel$export($64a3a77a2f3e8ee3$exports, "useSignup", () => $64a3a77a2f3e8ee3$export$da8941e4c91255e0);

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
    let setState = (0, $gBUKT$useState)()[1];
    (0, $gBUKT$useEffect)(()=>()=>{
            setState = $b6a953b0721d86c6$var$noop;
        }, []);
    return (0, $gBUKT$useCallback)(()=>{
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
    const [ctx] = (0, $gBUKT$useState)({});
    const setState = (state)=>{
        ctx.state = $27954de794c56674$var$STATES[state];
        $27954de794c56674$var$STATES.forEach((name, index)=>{
            ctx[name] = index === state;
        });
        forceUpdate();
    };
    if (ctx.state === undefined) setState(0);
    ctx.call = (0, $gBUKT$useCallback)((...args)=>{
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
    (0, $gBUKT$useEffect)(()=>{
        if (callOnMount && ctx.state === $27954de794c56674$var$STATES["0"]) ctx.call();
    }, [
        ctx.call,
        callOnMount,
        ctx.state
    ]);
    return ctx;
}


const $3b200ebc3435d25f$var$wait = (ms)=>new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        }, ms);
    });
var $3b200ebc3435d25f$export$2e2bcd8739ae039 = $3b200ebc3435d25f$var$wait;


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
        await (0, $3b200ebc3435d25f$export$2e2bcd8739ae039)(500);
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
    const { data: result , error: error , mutate: mutate  } = (0, $gBUKT$swr)(swrKey, {
        ...config,
        fetcher: $80d64c4521a01cab$export$a1c549e76b7f385e
    });
    const loading = typeof result === "undefined" && !error;
    const reload = (0, $gBUKT$useCallback)(()=>{
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
    (0, $gBUKT$useEffect)(()=>{
        if (command.idle) command.call(options);
    }, [
        name,
        options
    ]);
    return command;
}


function $64a3a77a2f3e8ee3$export$3901076af3749fa9() {
    const { result: currentUser , loading: loading , error: error , mutate: mutate  } = (0, $80d64c4521a01cab$export$dd0a697e1782aedd)("auth.getCurrentUser");
    const reload = (0, $gBUKT$useCallback)(()=>{
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


function $325d7b40613f983f$export$2e2bcd8739ae039({ onSuccess: onSuccess , onFailure: onFailure , ...props }) {
    const [email, setEmail] = (0, $gBUKT$useState)("");
    const [password, setPassword] = (0, $gBUKT$useState)("");
    const signup = (0, $64a3a77a2f3e8ee3$export$da8941e4c91255e0)({
        onSuccess: onSuccess,
        onFailure: onFailure
    });
    const onSubmit = (event)=>{
        event.preventDefault();
        signup.call({
            email: email || undefined,
            password: password || undefined
        });
    };
    const disabled = !!signup.pending;
    // const emailIsValid = email.length >= 3 && email.includes('@')
    // const secretKeyIsValid = PassphraseInput.isValid(secretKey)
    const submittable = !!(email ?? password);
    return /*#__PURE__*/ (0, $gBUKT$jsxs)((0, $gBUKT$muimaterialPaper), {
        ...props,
        sx: {
            ...props.sx,
            minWidth: `min(100vw, 500px)`
        },
        children: [
            /*#__PURE__*/ (0, $gBUKT$jsx)((0, $gBUKT$muimaterialTypography), {
                variant: "h4",
                mb: 2,
                children: "Signup"
            }),
            /*#__PURE__*/ (0, $gBUKT$jsxs)((0, $gBUKT$muimaterialBox), {
                component: "form",
                onSubmit: onSubmit,
                children: [
                    /*#__PURE__*/ (0, $gBUKT$jsx)((0, $e57fa53a045bcfbf$export$2e2bcd8739ae039), {
                        error: signup.error
                    }),
                    /*#__PURE__*/ (0, $gBUKT$jsx)((0, $gBUKT$muimaterialTextField), {
                        label: "email",
                        autoComplete: "email",
                        disabled: disabled,
                        margin: "normal",
                        fullWidth: true,
                        name: "email",
                        type: "email",
                        value: email,
                        onChange: (e)=>{
                            setEmail(e.target.value);
                        }
                    }),
                    /*#__PURE__*/ (0, $gBUKT$jsx)((0, $gBUKT$muimaterialTextField), {
                        label: "password",
                        autoComplete: "email",
                        disabled: disabled,
                        margin: "normal",
                        fullWidth: true,
                        name: "password",
                        type: "password",
                        value: password,
                        onChange: (e)=>{
                            setPassword(e.target.value);
                        }
                    }),
                    /*#__PURE__*/ (0, $gBUKT$jsxs)((0, $gBUKT$muimaterialStack), {
                        spacing: 2,
                        direction: "row-reverse",
                        alignItems: "center",
                        mt: 2,
                        children: [
                            /*#__PURE__*/ (0, $gBUKT$jsx)((0, $gBUKT$muimaterialButton), {
                                disabled: disabled || !submittable,
                                type: "submit",
                                variant: "contained",
                                size: "large",
                                children: "Signup"
                            }),
                            /*#__PURE__*/ (0, $gBUKT$jsx)((0, $08b8c86ef070e3a0$export$2e2bcd8739ae039), {
                                variant: "text",
                                to: "/signup",
                                children: "back"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


export {$325d7b40613f983f$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=SignupForm.js.map
