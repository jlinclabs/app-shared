import {jsx as $8Hdk9$jsx, jsxs as $8Hdk9$jsxs, Fragment as $8Hdk9$Fragment} from "react/jsx-runtime";
import {useEffect as $8Hdk9$useEffect, useCallback as $8Hdk9$useCallback, useRef as $8Hdk9$useRef, useMemo as $8Hdk9$useMemo, useState as $8Hdk9$useState, forwardRef as $8Hdk9$forwardRef} from "react";
import {Route as $8Hdk9$Route, useNavigate as $8Hdk9$useNavigate, Link as $8Hdk9$Link} from "react-router-dom";
import $8Hdk9$zustand from "zustand";
import $8Hdk9$muimaterialContainer from "@mui/material/Container";
import $8Hdk9$muimaterialPaper from "@mui/material/Paper";
import $8Hdk9$muimaterialTypography from "@mui/material/Typography";
import $8Hdk9$muimaterialStack from "@mui/material/Stack";
import $8Hdk9$muimaterialButton from "@mui/material/Button";
import $8Hdk9$muimaterialDivider from "@mui/material/Divider";
import $8Hdk9$muimaterialBox from "@mui/material/Box";
import $8Hdk9$muiiconsmaterialGitHub from "@mui/icons-material/GitHub";
import $8Hdk9$swr from "swr";
import $8Hdk9$muimaterialAlert from "@mui/material/Alert";
import $8Hdk9$muimaterialLink from "@mui/material/Link";
import $8Hdk9$muimaterialTextField from "@mui/material/TextField";

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












var $e4cfecd068afd020$exports = {};

$parcel$defineInteropFlag($e4cfecd068afd020$exports);

$parcel$export($e4cfecd068afd020$exports, "default", () => $e4cfecd068afd020$export$2e2bcd8739ae039);


function $e4cfecd068afd020$export$2e2bcd8739ae039({ to: to  }) {
    const navigate = (0, $8Hdk9$useNavigate)();
    (0, $8Hdk9$useEffect)(()=>{
        navigate(to);
    }, []);
    console.log("RedirectPage to", to);
    return null;
}


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
    let setState = (0, $8Hdk9$useState)()[1];
    (0, $8Hdk9$useEffect)(()=>()=>{
            setState = $b6a953b0721d86c6$var$noop;
        }, []);
    return (0, $8Hdk9$useCallback)(()=>{
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
    const callbacks = (0, $8Hdk9$useRef)();
    Object.assign(callbacks, {
        onSuccess: onSuccess,
        onFailure: onFailure,
        onComplete: onComplete
    });
    const forceUpdate = (0, $b6a953b0721d86c6$export$2e2bcd8739ae039)();
    const ctx = (0, $8Hdk9$useMemo)(()=>({}), [
        asyncFunction,
        callOnMount
    ]);
    ctx.call = (0, $8Hdk9$useCallback)((...args)=>{
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
    (0, $8Hdk9$useEffect)(()=>{
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
    const { data: result , error: error , mutate: mutate  } = (0, $8Hdk9$swr)(swrKey, {
        ...config,
        fetcher: $80d64c4521a01cab$export$a1c549e76b7f385e
    });
    const loading = typeof result === "undefined" && !error;
    const reload = (0, $8Hdk9$useCallback)(()=>{
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
    (0, $8Hdk9$useEffect)(()=>{
        if (command.idle) command.call(options);
    }, [
        name,
        options
    ]);
    return command;
}


function $64a3a77a2f3e8ee3$export$3901076af3749fa9() {
    const { result: currentUser , loading: loading , error: error , mutate: mutate  } = (0, $80d64c4521a01cab$export$dd0a697e1782aedd)("auth.getCurrentUser");
    const reload = (0, $8Hdk9$useCallback)(()=>{
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


var $e57fa53a045bcfbf$exports = {};

$parcel$defineInteropFlag($e57fa53a045bcfbf$exports);

$parcel$export($e57fa53a045bcfbf$exports, "default", () => $e57fa53a045bcfbf$export$2e2bcd8739ae039);



const $e57fa53a045bcfbf$var$ErrorMessage = ({ error: error , ...props })=>{
    if (!error) return null;
    return /*#__PURE__*/ (0, $8Hdk9$jsx)((0, $8Hdk9$muimaterialAlert), {
        severity: "error",
        ...props,
        children: error.message
    });
};
var $e57fa53a045bcfbf$export$2e2bcd8739ae039 = $e57fa53a045bcfbf$var$ErrorMessage;


var $08b8c86ef070e3a0$exports = {};

$parcel$defineInteropFlag($08b8c86ef070e3a0$exports);

$parcel$export($08b8c86ef070e3a0$exports, "default", () => $08b8c86ef070e3a0$export$2e2bcd8739ae039);




const $08b8c86ef070e3a0$var$Link = /*#__PURE__*/ $8Hdk9$forwardRef(({ ...props }, ref)=>{
    props.component = "a";
    if (props.to) props.component = (0, $8Hdk9$Link);
    if (props.to && props.to.startsWith("http")) {
        props.href = props.to;
        delete props.to;
        props.rel = props.rel || "noopener noreferrer";
        props.target = props.target || "_blank";
        props.component = "a";
    }
    return /*#__PURE__*/ (0, $8Hdk9$jsx)((0, $8Hdk9$muimaterialLink), {
        ...props,
        ref: ref
    });
});
$08b8c86ef070e3a0$var$Link.displayName = "Link";
var $08b8c86ef070e3a0$export$2e2bcd8739ae039 = $08b8c86ef070e3a0$var$Link;


var $000fbe8322a2baca$exports = {};

$parcel$defineInteropFlag($000fbe8322a2baca$exports);

$parcel$export($000fbe8322a2baca$exports, "default", () => $000fbe8322a2baca$export$2e2bcd8739ae039);











function $000fbe8322a2baca$export$2e2bcd8739ae039(props) {
    // const navigate = useNavigate()
    // const [searchParams] = useSearchParams()
    // const destination = searchParams.get('d')
    const [email, setEmail] = (0, $8Hdk9$useState)("");
    const [password, setPassword] = (0, $8Hdk9$useState)("");
    const [error, setError] = (0, $8Hdk9$useState)(null);
    const login = (0, $64a3a77a2f3e8ee3$export$d4e22f05f73ea56b)({
        onSuccess () {
        // setError(null)
        // navigate(destination || '/')
        },
        onFailure (error) {
            if (`${error}`.includes("email or password is invalid")) setError({
                message: "email or password is invalid"
            });
            else setError(error);
        // console.error(error)
        // debugger
        }
    });
    const onSubmit = (event)=>{
        event.preventDefault();
        setError(null);
        login.call({
            email: email,
            password: password
        });
    };
    const submitOnEnter = (event)=>{
        if (event.key === "Enter") onSubmit(event);
    };
    const submittable = email && password;
    const disabled = !!login.pending;
    return /*#__PURE__*/ (0, $8Hdk9$jsxs)((0, $8Hdk9$muimaterialBox), {
        ...props,
        children: [
            /*#__PURE__*/ (0, $8Hdk9$jsx)((0, $8Hdk9$muimaterialTypography), {
                variant: "h4",
                children: "Login"
            }),
            /*#__PURE__*/ (0, $8Hdk9$jsxs)((0, $8Hdk9$muimaterialBox), {
                component: "form",
                onSubmit: onSubmit,
                children: [
                    /*#__PURE__*/ (0, $8Hdk9$jsx)((0, $e57fa53a045bcfbf$export$2e2bcd8739ae039), {
                        error: error
                    }),
                    /*#__PURE__*/ (0, $8Hdk9$jsx)((0, $8Hdk9$muimaterialTextField), {
                        autoFocus: true,
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
                    /*#__PURE__*/ (0, $8Hdk9$jsx)((0, $8Hdk9$muimaterialTextField), {
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
                    /*#__PURE__*/ (0, $8Hdk9$jsxs)((0, $8Hdk9$muimaterialStack), {
                        spacing: 2,
                        direction: "row-reverse",
                        alignItems: "center",
                        mt: 2,
                        children: [
                            /*#__PURE__*/ (0, $8Hdk9$jsx)((0, $8Hdk9$muimaterialButton), {
                                type: "submit",
                                variant: "contained",
                                disabled: disabled || !submittable,
                                children: "Login"
                            }),
                            /*#__PURE__*/ (0, $8Hdk9$jsx)((0, $8Hdk9$muimaterialButton), {
                                variant: "outlined",
                                to: "/forgot-password",
                                component: (0, $08b8c86ef070e3a0$export$2e2bcd8739ae039),
                                children: "Forgot Password"
                            }),
                            /*#__PURE__*/ (0, $8Hdk9$jsx)((0, $08b8c86ef070e3a0$export$2e2bcd8739ae039), {
                                variant: "text",
                                to: "/",
                                children: "back"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


var $325d7b40613f983f$exports = {};

$parcel$defineInteropFlag($325d7b40613f983f$exports);

$parcel$export($325d7b40613f983f$exports, "default", () => $325d7b40613f983f$export$2e2bcd8739ae039);











function $325d7b40613f983f$export$2e2bcd8739ae039({ onSuccess: onSuccess , onFailure: onFailure , ...props }) {
    const [email, setEmail] = (0, $8Hdk9$useState)("");
    const [password, setPassword] = (0, $8Hdk9$useState)("");
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
    return /*#__PURE__*/ (0, $8Hdk9$jsxs)((0, $8Hdk9$muimaterialPaper), {
        ...props,
        sx: {
            ...props.sx,
            minWidth: `min(100vw, 500px)`
        },
        children: [
            /*#__PURE__*/ (0, $8Hdk9$jsx)((0, $8Hdk9$muimaterialTypography), {
                variant: "h4",
                mb: 2,
                children: "Signup"
            }),
            /*#__PURE__*/ (0, $8Hdk9$jsxs)((0, $8Hdk9$muimaterialBox), {
                component: "form",
                onSubmit: onSubmit,
                children: [
                    /*#__PURE__*/ (0, $8Hdk9$jsx)((0, $e57fa53a045bcfbf$export$2e2bcd8739ae039), {
                        error: signup.error
                    }),
                    /*#__PURE__*/ (0, $8Hdk9$jsx)((0, $8Hdk9$muimaterialTextField), {
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
                    /*#__PURE__*/ (0, $8Hdk9$jsx)((0, $8Hdk9$muimaterialTextField), {
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
                    /*#__PURE__*/ (0, $8Hdk9$jsxs)((0, $8Hdk9$muimaterialStack), {
                        spacing: 2,
                        direction: "row-reverse",
                        alignItems: "center",
                        mt: 2,
                        children: [
                            /*#__PURE__*/ (0, $8Hdk9$jsx)((0, $8Hdk9$muimaterialButton), {
                                disabled: disabled || !submittable,
                                type: "submit",
                                variant: "contained",
                                size: "large",
                                children: "Signup"
                            }),
                            /*#__PURE__*/ (0, $8Hdk9$jsx)((0, $08b8c86ef070e3a0$export$2e2bcd8739ae039), {
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


const $b0e3fa2d987314e2$var$useLoginDestination = (0, $8Hdk9$zustand)((set)=>({
        destination: "/",
        setDestination (destination) {
            set({
                destination: destination
            });
        }
    }));
function $b0e3fa2d987314e2$var$useSetLoginDestinationOnMount(args = []) {
    const { destination: destination , setDestination: setDestination  } = $b0e3fa2d987314e2$var$useLoginDestination();
    (0, $8Hdk9$useEffect)(()=>{
        setDestination(location.toString().split(location.origin)[1]);
    }, args);
    return destination;
}
function $b0e3fa2d987314e2$export$2e2bcd8739ae039({ component: component  }) {
    const Component = component;
    return /*#__PURE__*/ (0, $8Hdk9$jsx)((0, $8Hdk9$muimaterialContainer), {
        sx: {
            minHeight: "100vh",
            width: "100vw",
            display: "flex"
        },
        children: /*#__PURE__*/ (0, $8Hdk9$jsx)((0, $8Hdk9$muimaterialContainer), {
            maxWidth: "sm",
            sx: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            },
            children: /*#__PURE__*/ (0, $8Hdk9$jsx)(Component, {})
        })
    });
}
$b0e3fa2d987314e2$export$2e2bcd8739ae039.routes = (props)=>{
    return props.currentUser ? /*#__PURE__*/ (0, $8Hdk9$jsxs)((0, $8Hdk9$Fragment), {
        children: [
            /*#__PURE__*/ (0, $8Hdk9$jsx)((0, $8Hdk9$Route), {
                path: "/login",
                element: /*#__PURE__*/ (0, $8Hdk9$jsx)($b0e3fa2d987314e2$export$50bd399f722114ac, {})
            }),
            /*#__PURE__*/ (0, $8Hdk9$jsx)((0, $8Hdk9$Route), {
                path: "/login/eth",
                element: /*#__PURE__*/ (0, $8Hdk9$jsx)($b0e3fa2d987314e2$export$50bd399f722114ac, {})
            }),
            /*#__PURE__*/ (0, $8Hdk9$jsx)((0, $8Hdk9$Route), {
                path: "/forgot-password",
                element: /*#__PURE__*/ (0, $8Hdk9$jsx)($b0e3fa2d987314e2$export$50bd399f722114ac, {})
            }),
            /*#__PURE__*/ (0, $8Hdk9$jsx)((0, $8Hdk9$Route), {
                path: "/signup",
                element: /*#__PURE__*/ (0, $8Hdk9$jsx)($b0e3fa2d987314e2$export$50bd399f722114ac, {})
            }),
            /*#__PURE__*/ (0, $8Hdk9$jsx)((0, $8Hdk9$Route), {
                path: "/signup/password",
                element: /*#__PURE__*/ (0, $8Hdk9$jsx)($b0e3fa2d987314e2$export$50bd399f722114ac, {})
            }),
            /*#__PURE__*/ (0, $8Hdk9$jsx)((0, $8Hdk9$Route), {
                path: "/signup/wallet",
                element: /*#__PURE__*/ (0, $8Hdk9$jsx)($b0e3fa2d987314e2$export$50bd399f722114ac, {})
            })
        ]
    }) : /*#__PURE__*/ (0, $8Hdk9$jsxs)((0, $8Hdk9$Fragment), {
        children: [
            /*#__PURE__*/ (0, $8Hdk9$jsx)((0, $8Hdk9$Route), {
                path: "/login",
                element: /*#__PURE__*/ (0, $8Hdk9$jsx)($b0e3fa2d987314e2$export$2e2bcd8739ae039, {
                    component: $b0e3fa2d987314e2$var$Login
                })
            }),
            /*#__PURE__*/ (0, $8Hdk9$jsx)((0, $8Hdk9$Route), {
                path: "/login/eth",
                element: /*#__PURE__*/ (0, $8Hdk9$jsx)($b0e3fa2d987314e2$export$2e2bcd8739ae039, {
                    component: $b0e3fa2d987314e2$var$LoginEth
                })
            }),
            /*#__PURE__*/ (0, $8Hdk9$jsx)((0, $8Hdk9$Route), {
                path: "/forgot-password",
                element: /*#__PURE__*/ (0, $8Hdk9$jsx)($b0e3fa2d987314e2$export$2e2bcd8739ae039, {
                    component: $b0e3fa2d987314e2$var$ForgotPassword
                })
            }),
            /*#__PURE__*/ (0, $8Hdk9$jsx)((0, $8Hdk9$Route), {
                path: "/signup",
                element: /*#__PURE__*/ (0, $8Hdk9$jsx)($b0e3fa2d987314e2$export$2e2bcd8739ae039, {
                    component: $b0e3fa2d987314e2$var$Signup
                })
            }),
            /*#__PURE__*/ (0, $8Hdk9$jsx)((0, $8Hdk9$Route), {
                path: "/signup/password",
                element: /*#__PURE__*/ (0, $8Hdk9$jsx)($b0e3fa2d987314e2$export$2e2bcd8739ae039, {
                    component: $b0e3fa2d987314e2$var$SignupWithPassword
                })
            }),
            /*#__PURE__*/ (0, $8Hdk9$jsx)((0, $8Hdk9$Route), {
                path: "/signup/wallet",
                element: /*#__PURE__*/ (0, $8Hdk9$jsx)($b0e3fa2d987314e2$export$2e2bcd8739ae039, {
                    component: $b0e3fa2d987314e2$var$SignupWithWallet
                })
            }),
            /*#__PURE__*/ (0, $8Hdk9$jsx)((0, $8Hdk9$Route), {
                path: "*",
                element: /*#__PURE__*/ (0, $8Hdk9$jsx)($b0e3fa2d987314e2$export$2e2bcd8739ae039, {
                    component: $b0e3fa2d987314e2$var$Main
                })
            })
        ]
    });
};
function $b0e3fa2d987314e2$export$50bd399f722114ac() {
    const { destination: destination  } = $b0e3fa2d987314e2$var$useLoginDestination();
    return /*#__PURE__*/ (0, $8Hdk9$jsx)((0, $e4cfecd068afd020$export$2e2bcd8739ae039), {
        to: destination || "/"
    });
}
function $b0e3fa2d987314e2$var$Main() {
    const destination = $b0e3fa2d987314e2$var$useSetLoginDestinationOnMount();
    const query = destination && destination !== "/" ? "?" + new URLSearchParams({
        d: destination
    }) : "";
    return /*#__PURE__*/ (0, $8Hdk9$jsxs)((0, $8Hdk9$muimaterialStack), {
        divider: /*#__PURE__*/ (0, $8Hdk9$jsx)((0, $8Hdk9$muimaterialDivider), {
            sx: {
                my: 3
            },
            children: "OR"
        }),
        children: [
            /*#__PURE__*/ (0, $8Hdk9$jsx)((0, $8Hdk9$muimaterialButton), {
                variant: "contained",
                component: (0, $08b8c86ef070e3a0$export$2e2bcd8739ae039),
                to: `/login${query}`,
                children: "Login"
            }),
            /*#__PURE__*/ (0, $8Hdk9$jsx)((0, $8Hdk9$muimaterialButton), {
                variant: "contained",
                to: `/signup${query}`,
                component: (0, $08b8c86ef070e3a0$export$2e2bcd8739ae039),
                children: "Signup"
            })
        ]
    });
}
function $b0e3fa2d987314e2$var$Login() {
    return /*#__PURE__*/ (0, $8Hdk9$jsx)((0, $8Hdk9$muimaterialPaper), {
        children: /*#__PURE__*/ (0, $8Hdk9$jsx)((0, $000fbe8322a2baca$export$2e2bcd8739ae039), {
            sx: {
                p: 2
            }
        })
    });
}
function $b0e3fa2d987314e2$var$LoginEth() {
    const navigate = (0, $8Hdk9$useNavigate)();
    return /*#__PURE__*/ (0, $8Hdk9$jsx)((0, $8Hdk9$muimaterialPaper), {
        sx: {
            p: 2
        },
        children: /*#__PURE__*/ (0, $8Hdk9$jsx)((0, $8Hdk9$muimaterialTypography), {
            variant: "h5",
            children: "Logging in with Ethereum…"
        })
    });
}
function $b0e3fa2d987314e2$var$Signup() {
    const signup = (0, $64a3a77a2f3e8ee3$export$da8941e4c91255e0)();
    const justTryIt = ()=>{
        signup.call({});
    };
    return /*#__PURE__*/ (0, $8Hdk9$jsxs)((0, $8Hdk9$muimaterialBox), {
        children: [
            /*#__PURE__*/ (0, $8Hdk9$jsx)((0, $8Hdk9$muimaterialTypography), {
                variant: "h4",
                mb: 3,
                children: "Signup"
            }),
            /*#__PURE__*/ (0, $8Hdk9$jsxs)((0, $8Hdk9$muimaterialStack), {
                spacing: 2,
                children: [
                    /*#__PURE__*/ (0, $8Hdk9$jsx)((0, $8Hdk9$muimaterialButton), {
                        variant: "contained",
                        onClick: justTryIt,
                        disabled: signup.pending,
                        children: "Just Try It!"
                    }),
                    /*#__PURE__*/ (0, $8Hdk9$jsx)((0, $e57fa53a045bcfbf$export$2e2bcd8739ae039), {
                        error: signup.error
                    }),
                    /*#__PURE__*/ (0, $8Hdk9$jsx)((0, $8Hdk9$muimaterialButton), {
                        variant: "contained",
                        to: "/signup/password",
                        component: (0, $08b8c86ef070e3a0$export$2e2bcd8739ae039),
                        children: "Email & Password"
                    }),
                    /*#__PURE__*/ (0, $8Hdk9$jsxs)((0, $8Hdk9$muimaterialButton), {
                        variant: "contained",
                        to: "/signup/wallet",
                        component: (0, $08b8c86ef070e3a0$export$2e2bcd8739ae039),
                        children: [
                            /*#__PURE__*/ (0, $8Hdk9$jsx)((0, $8Hdk9$muiiconsmaterialGitHub), {}),
                            "\xa0",
                            /*#__PURE__*/ (0, $8Hdk9$jsx)("span", {
                                children: "Oauth Github"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $8Hdk9$jsx)((0, $8Hdk9$muimaterialButton), {
                        variant: "contained",
                        to: "/signup/wallet",
                        component: (0, $08b8c86ef070e3a0$export$2e2bcd8739ae039),
                        children: "Crypto Wallet"
                    }),
                    /*#__PURE__*/ (0, $8Hdk9$jsx)((0, $8Hdk9$muimaterialButton), {
                        variant: "text",
                        to: "/",
                        component: (0, $08b8c86ef070e3a0$export$2e2bcd8739ae039),
                        size: "small",
                        children: "back"
                    })
                ]
            })
        ]
    });
}
function $b0e3fa2d987314e2$var$SignupWithPassword() {
    const navigate = (0, $8Hdk9$useNavigate)();
    return /*#__PURE__*/ (0, $8Hdk9$jsx)((0, $325d7b40613f983f$export$2e2bcd8739ae039), {
        sx: {
            p: 2
        }
    });
}
function $b0e3fa2d987314e2$var$SignupWithWallet() {
    return /*#__PURE__*/ (0, $8Hdk9$jsxs)((0, $8Hdk9$muimaterialBox), {
        children: [
            /*#__PURE__*/ (0, $8Hdk9$jsx)((0, $8Hdk9$muimaterialTypography), {
                variant: "h4",
                mb: 3,
                children: "Signup with crypto wallet"
            }),
            /*#__PURE__*/ (0, $8Hdk9$jsx)((0, $8Hdk9$muimaterialTypography), {
                variant: "body1",
                mb: 3,
                children: "coming soon…"
            }),
            /*#__PURE__*/ (0, $8Hdk9$jsx)((0, $08b8c86ef070e3a0$export$2e2bcd8739ae039), {
                variant: "text",
                to: "/signup",
                children: "back"
            })
        ]
    });
}
function $b0e3fa2d987314e2$var$ForgotPassword() {
    return /*#__PURE__*/ (0, $8Hdk9$jsx)("div", {
        children: "forgot password form TBD"
    });
}


export {$b0e3fa2d987314e2$export$2e2bcd8739ae039 as default, $b0e3fa2d987314e2$export$50bd399f722114ac as RedirectToLoginDestination};
//# sourceMappingURL=AuthPage.js.map
