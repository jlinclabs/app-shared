import {jsx as $h2dLv$jsx, jsxs as $h2dLv$jsxs} from "react/jsx-runtime";
import {StrictMode as $h2dLv$StrictMode, useEffect as $h2dLv$useEffect, useState as $h2dLv$useState, useCallback as $h2dLv$useCallback, forwardRef as $h2dLv$forwardRef} from "react";
import $h2dLv$reactdomclient from "react-dom/client";
import {BrowserRouter as $h2dLv$BrowserRouter, Route as $h2dLv$Route, useLocation as $h2dLv$useLocation, Routes as $h2dLv$Routes, useNavigate as $h2dLv$useNavigate, Link as $h2dLv$Link} from "react-router-dom";
import {ThemeProvider as $h2dLv$ThemeProvider, CssBaseline as $h2dLv$CssBaseline} from "@mui/material";
import {createTheme as $h2dLv$createTheme} from "@mui/material/styles";
import {ErrorBoundary as $h2dLv$ErrorBoundary} from "react-error-boundary";
import $h2dLv$muimaterialContainer from "@mui/material/Container";
import $h2dLv$muimaterialBox from "@mui/material/Box";
import $h2dLv$muimaterialPaper from "@mui/material/Paper";
import $h2dLv$muimaterialTypography from "@mui/material/Typography";
import $h2dLv$muimaterialStack from "@mui/material/Stack";
import $h2dLv$muimaterialSelect from "@mui/material/Select";
import $h2dLv$muimaterialMenuItem from "@mui/material/MenuItem";
import $h2dLv$muimaterialTextField from "@mui/material/TextField";
import $h2dLv$muimaterialButton from "@mui/material/Button";
import $h2dLv$muimaterialCircularProgress from "@mui/material/CircularProgress";
import $h2dLv$muimaterialList from "@mui/material/List";
import $h2dLv$muimaterialListItem from "@mui/material/ListItem";
import $h2dLv$muimaterialListItemButton from "@mui/material/ListItemButton";
import $h2dLv$muimaterialListItemIcon from "@mui/material/ListItemIcon";
import $h2dLv$muimaterialListItemText from "@mui/material/ListItemText";
import $h2dLv$muimaterialSkeleton from "@mui/material/Skeleton";
import "@mui/material/IconButton";
import "@mui/icons-material/Edit";
import "@mui/icons-material/Close";
import $h2dLv$muiiconsmaterialHelpOutline from "@mui/icons-material/HelpOutline";
import $h2dLv$muiiconsmaterialKeyboardCommandKeyTwoTone from "@mui/icons-material/KeyboardCommandKeyTwoTone";
import $h2dLv$muiiconsmaterialCottage from "@mui/icons-material/Cottage";
import $h2dLv$muimaterialAlert from "@mui/material/Alert";
import $h2dLv$muimaterialLink from "@mui/material/Link";
import $h2dLv$swr from "swr";

function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}





var $c8b71836488e4bbe$exports = {};

$parcel$defineInteropFlag($c8b71836488e4bbe$exports);

$parcel$export($c8b71836488e4bbe$exports, "default", () => $c8b71836488e4bbe$export$2e2bcd8739ae039);

const $c8b71836488e4bbe$var$darkTheme = (0, $h2dLv$createTheme)({
    palette: {
        mode: "dark"
    }
});
var $c8b71836488e4bbe$export$2e2bcd8739ae039 = $c8b71836488e4bbe$var$darkTheme;


var $bd5e7b1f34144514$exports = {};

$parcel$defineInteropFlag($bd5e7b1f34144514$exports);

$parcel$export($bd5e7b1f34144514$exports, "default", () => $bd5e7b1f34144514$export$2e2bcd8739ae039);



























var $398477c469915369$exports = {};

$parcel$defineInteropFlag($398477c469915369$exports);

$parcel$export($398477c469915369$exports, "default", () => $398477c469915369$export$2e2bcd8739ae039);








function $398477c469915369$export$2e2bcd8739ae039({ error: error , resetErrorBoundary: resetErrorBoundary  }) {
    return /*#__PURE__*/ (0, $h2dLv$jsx)((0, $h2dLv$muimaterialContainer), {
        maxWidth: "lg",
        children: /*#__PURE__*/ (0, $h2dLv$jsxs)((0, $h2dLv$muimaterialPaper), {
            elevation: 3,
            role: "alert",
            sx: {
                m: 3,
                p: 3
            },
            children: [
                /*#__PURE__*/ (0, $h2dLv$jsx)((0, $h2dLv$muimaterialAlert), {
                    severity: "error",
                    children: "App Error"
                }),
                /*#__PURE__*/ (0, $h2dLv$jsxs)((0, $h2dLv$muimaterialBox), {
                    component: "pre",
                    sx: {
                        overflow: "scroll"
                    },
                    children: [
                        /*#__PURE__*/ (0, $h2dLv$jsx)((0, $h2dLv$muimaterialTypography), {
                            variant: "h4",
                            children: error.message
                        }),
                        /*#__PURE__*/ (0, $h2dLv$jsx)("br", {}),
                        error.stack
                    ]
                }),
                /*#__PURE__*/ (0, $h2dLv$jsx)((0, $h2dLv$muimaterialButton), {
                    variant: "contained",
                    onClick: resetErrorBoundary,
                    children: "Try again"
                })
            ]
        })
    });
}


var $08b8c86ef070e3a0$exports = {};

$parcel$defineInteropFlag($08b8c86ef070e3a0$exports);

$parcel$export($08b8c86ef070e3a0$exports, "default", () => $08b8c86ef070e3a0$export$2e2bcd8739ae039);




const $08b8c86ef070e3a0$var$Link = /*#__PURE__*/ $h2dLv$forwardRef(({ ...props }, ref)=>{
    props.component = "a";
    if (props.to) props.component = (0, $h2dLv$Link);
    if (props.to && props.to.startsWith("http")) {
        props.href = props.to;
        delete props.to;
        props.rel = props.rel || "noopener noreferrer";
        props.target = props.target || "_blank";
        props.component = "a";
    }
    return /*#__PURE__*/ (0, $h2dLv$jsx)((0, $h2dLv$muimaterialLink), {
        ...props,
        ref: ref
    });
});
$08b8c86ef070e3a0$var$Link.displayName = "Link";
var $08b8c86ef070e3a0$export$2e2bcd8739ae039 = $08b8c86ef070e3a0$var$Link;


var $1abdbf2868e540b2$exports = {};

$parcel$defineInteropFlag($1abdbf2868e540b2$exports);

$parcel$export($1abdbf2868e540b2$exports, "default", () => $1abdbf2868e540b2$export$2e2bcd8739ae039);



function $1abdbf2868e540b2$export$2e2bcd8739ae039({ disabled: disabled , children: children , onSubmit: onSubmit , ...props }) {
    const _onSubmit = $h2dLv$useCallback((event)=>{
        event.preventDefault();
        if (disabled || !onSubmit) return;
        const formData = new FormData(event.currentTarget);
        onSubmit(event, formData);
    }, [
        disabled,
        onSubmit
    ]);
    return /*#__PURE__*/ (0, $h2dLv$jsx)((0, $h2dLv$muimaterialBox), {
        component: "form",
        disabled: disabled,
        ...props,
        onSubmit: _onSubmit,
        children: children
    });
}


var $33fea69a0e10afc7$exports = {};

$parcel$defineInteropFlag($33fea69a0e10afc7$exports);

$parcel$export($33fea69a0e10afc7$exports, "default", () => $33fea69a0e10afc7$export$2e2bcd8739ae039);



function $33fea69a0e10afc7$export$2e2bcd8739ae039({ children: children , ...props }) {
    return /*#__PURE__*/ (0, $h2dLv$jsx)((0, $h2dLv$muimaterialStack), {
        spacing: 2,
        direction: "row-reverse",
        alignItems: "center",
        ...props,
        children: children
    });
}


var $e57fa53a045bcfbf$exports = {};

$parcel$defineInteropFlag($e57fa53a045bcfbf$exports);

$parcel$export($e57fa53a045bcfbf$exports, "default", () => $e57fa53a045bcfbf$export$2e2bcd8739ae039);



const $e57fa53a045bcfbf$var$ErrorMessage = ({ error: error , ...props })=>{
    if (!error) return null;
    return /*#__PURE__*/ (0, $h2dLv$jsx)((0, $h2dLv$muimaterialAlert), {
        severity: "error",
        ...props,
        children: error.message
    });
};
var $e57fa53a045bcfbf$export$2e2bcd8739ae039 = $e57fa53a045bcfbf$var$ErrorMessage;


var $ba2cbc8f2cb18116$exports = {};

$parcel$export($ba2cbc8f2cb18116$exports, "fetchQuery", () => $ba2cbc8f2cb18116$export$a1c549e76b7f385e);
$parcel$export($ba2cbc8f2cb18116$exports, "fetchCommand", () => $ba2cbc8f2cb18116$export$df781a4386db1cc8);
$parcel$export($ba2cbc8f2cb18116$exports, "useQuery", () => $ba2cbc8f2cb18116$export$dd0a697e1782aedd);
$parcel$export($ba2cbc8f2cb18116$exports, "useCommand", () => $ba2cbc8f2cb18116$export$194d0c7cb6792e23);
$parcel$export($ba2cbc8f2cb18116$exports, "useCommandOnMount", () => $ba2cbc8f2cb18116$export$b87ac4c6452497e4);


var $27954de794c56674$exports = {};

$parcel$defineInteropFlag($27954de794c56674$exports);

$parcel$export($27954de794c56674$exports, "default", () => $27954de794c56674$export$2e2bcd8739ae039);


var $b6a953b0721d86c6$exports = {};

$parcel$defineInteropFlag($b6a953b0721d86c6$exports);

$parcel$export($b6a953b0721d86c6$exports, "default", () => $b6a953b0721d86c6$export$2e2bcd8739ae039);

const $b6a953b0721d86c6$var$noop = ()=>{};
function $b6a953b0721d86c6$export$2e2bcd8739ae039() {
    let setState = (0, $h2dLv$useState)()[1];
    (0, $h2dLv$useEffect)(()=>()=>{
            setState = $b6a953b0721d86c6$var$noop;
        }, []);
    return (0, $h2dLv$useCallback)(()=>{
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
    const [ctx] = (0, $h2dLv$useState)({});
    const setState = (state)=>{
        ctx.state = $27954de794c56674$var$STATES[state];
        $27954de794c56674$var$STATES.forEach((name, index)=>{
            ctx[name] = index === state;
        });
        forceUpdate();
    };
    if (ctx.state === undefined) setState(0);
    ctx.call = (0, $h2dLv$useCallback)((...args)=>{
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
    (0, $h2dLv$useEffect)(()=>{
        if (callOnMount && ctx.state === $27954de794c56674$var$STATES["0"]) ctx.call();
    }, [
        ctx.call,
        callOnMount,
        ctx.state
    ]);
    return ctx;
}


async function $ba2cbc8f2cb18116$export$a1c549e76b7f385e(name, options = {}) {
    const params = new URLSearchParams(options);
    return await $ba2cbc8f2cb18116$var$apiFetch("GET", `/api/${name}?${params}`);
}
async function $ba2cbc8f2cb18116$export$df781a4386db1cc8(name, options) {
    return await $ba2cbc8f2cb18116$var$apiFetch("POST", `/api/${name}`, options);
}
// window.cqrs = {
//   query: fetchQuery,
//   command: fetchCommand,
// }
async function $ba2cbc8f2cb18116$var$apiFetch(method, path, body, tries = 0) {
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
        await $ba2cbc8f2cb18116$var$wait(500);
        return $ba2cbc8f2cb18116$var$apiFetch(method, path, body, tries + 1);
    }
    const { result: result , error: error  } = await res.json();
    if (error) throw new Error(error.message);
    return result || null;
}
const $ba2cbc8f2cb18116$var$wait = (ms)=>new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        }, ms);
    });
function $ba2cbc8f2cb18116$export$dd0a697e1782aedd(name, options = {}, config) {
    const swrKey = name ? [
        name,
        options
    ] : null;
    const { data: result , error: error , mutate: mutate  } = (0, $h2dLv$swr)(swrKey, {
        ...config,
        fetcher: $ba2cbc8f2cb18116$export$a1c549e76b7f385e
    });
    const loading = typeof result === "undefined" && !error;
    const reload = (0, $h2dLv$useCallback)(()=>{
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
function $ba2cbc8f2cb18116$export$194d0c7cb6792e23(name, config) {
    return (0, $27954de794c56674$export$2e2bcd8739ae039)((options)=>$ba2cbc8f2cb18116$export$df781a4386db1cc8(name, options), config);
}
function $ba2cbc8f2cb18116$export$b87ac4c6452497e4(name, options, config) {
    const command = $ba2cbc8f2cb18116$export$194d0c7cb6792e23(name, config);
    (0, $h2dLv$useEffect)(()=>{
        if (command.idle) command.call(options);
    }, [
        name,
        options
    ]);
    return command;
}


var $b5643637aedb000b$exports = {};

$parcel$defineInteropFlag($b5643637aedb000b$exports);

$parcel$export($b5643637aedb000b$exports, "default", () => $b5643637aedb000b$export$2e2bcd8739ae039);



function $b5643637aedb000b$export$2e2bcd8739ae039({ object: object , sx: sx , ...props }) {
    let string;
    if (typeof object === "function") string = object.toString();
    else if (typeof object === "undefined") string = "undefined";
    else try {
        string = $b5643637aedb000b$var$inspect(object);
    } catch (error) {
        string = `ERROR: ${error}`;
    }
    return /*#__PURE__*/ (0, $h2dLv$jsx)((0, $h2dLv$muimaterialBox), {
        className: "InspectObject",
        sx: {
            m: 1,
            backgroundColor: "background.paper",
            overflow: "auto",
            whiteSpace: "pre",
            fontFamily: "monospace, mono",
            ...sx
        },
        ...props,
        children: string
    });
}
function $b5643637aedb000b$var$inspect(object, indentation = 2) {
    return JSON.stringify(object, $b5643637aedb000b$var$replaceUndefinedWithUndefinedString, indentation).replace(/"UNDEFINEDPLACEHOLDER"/g, "undefined");
}
const $b5643637aedb000b$var$replaceUndefinedWithUndefinedString = (k, v)=>{
    if (v === undefined) return "UNDEFINEDPLACEHOLDER";
    if (v instanceof Error) return {
        message: v.message,
        stack: v.stack
    };
    return v;
};


// import { useCurrentAgent } from '../resources/auth'
// import LinkToDid from '../components/LinkToDid'
// import CopyButton from '../components/CopyButton'
const $bd5e7b1f34144514$var$defaultExec = ()=>({
        isCommand: false,
        name: "",
        optionsJson: "{}"
    });
const $bd5e7b1f34144514$var$searchToString = (object)=>new URLSearchParams(object).toString();
const $bd5e7b1f34144514$var$searchToObject = (search)=>Object.fromEntries(new URLSearchParams(search).entries());
function $bd5e7b1f34144514$export$2e2bcd8739ae039() {
    const location = (0, $h2dLv$useLocation)();
    const name = location.pathname.split("/").reverse()[0];
    const search = $bd5e7b1f34144514$var$searchToObject(location.search);
    const optionsJson = search.opts;
    (0, $h2dLv$useEffect)(()=>{
        document.title = `Debug ${process.env.APP_NAME}: ${name}(${optionsJson || ""})`;
    }, [
        name,
        optionsJson
    ]);
    const { result: spec , error: error  } = (0, $ba2cbc8f2cb18116$export$dd0a697e1782aedd)("__spec");
    const props = {
        spec: spec,
        name: name,
        optionsJson: optionsJson
    };
    return /*#__PURE__*/ (0, $h2dLv$jsx)((0, $h2dLv$muimaterialContainer), {
        maxWidth: false,
        disableGutters: true,
        children: /*#__PURE__*/ (0, $h2dLv$jsxs)((0, $h2dLv$muimaterialBox), {
            sx: {
                display: "flex",
                flexDirection: "row",
                minHeight: "100vh",
                minWidth: "100vw"
            },
            children: [
                /*#__PURE__*/ (0, $h2dLv$jsx)($bd5e7b1f34144514$var$SideNav, {
                    spec: spec
                }),
                /*#__PURE__*/ (0, $h2dLv$jsxs)((0, $h2dLv$muimaterialBox), {
                    sx: {
                        flex: "1 1",
                        p: 2
                    },
                    children: [
                        /*#__PURE__*/ (0, $h2dLv$jsx)((0, $e57fa53a045bcfbf$export$2e2bcd8739ae039), {
                            error: error
                        }),
                        /*#__PURE__*/ (0, $h2dLv$jsx)((0, $h2dLv$ErrorBoundary), {
                            FallbackComponent: (0, $398477c469915369$export$2e2bcd8739ae039),
                            children: /*#__PURE__*/ (0, $h2dLv$jsxs)((0, $h2dLv$Routes), {
                                children: [
                                    /*#__PURE__*/ (0, $h2dLv$jsx)((0, $h2dLv$Route), {
                                        path: "/q/:name",
                                        element: /*#__PURE__*/ (0, $h2dLv$jsx)($bd5e7b1f34144514$var$ExecForm, {
                                            ...props,
                                            type: "query"
                                        }, name),
                                        title: "do a query"
                                    }),
                                    /*#__PURE__*/ (0, $h2dLv$jsx)((0, $h2dLv$Route), {
                                        path: "/c/:name",
                                        element: /*#__PURE__*/ (0, $h2dLv$jsx)($bd5e7b1f34144514$var$ExecForm, {
                                            ...props,
                                            type: "command"
                                        }, name),
                                        title: "do a command"
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
}
function $bd5e7b1f34144514$var$SideNav({ spec: spec  }) {
    return /*#__PURE__*/ (0, $h2dLv$jsxs)((0, $h2dLv$muimaterialBox), {
        sx: {
            display: "flex",
            flexDirection: "column",
            backgroundColor: "primary.dark",
            minWidth: `max(10vw, 175px)`,
            maxWidth: `max(20vw, 400px)`,
            overflowX: "auto"
        },
        children: [
            /*#__PURE__*/ (0, $h2dLv$jsxs)((0, $h2dLv$muimaterialTypography), {
                variant: "h6",
                sx: {
                    my: 2,
                    textAlign: "center"
                },
                children: [
                    "Debug ",
                    process.env.APP_NAME
                ]
            }),
            /*#__PURE__*/ (0, $h2dLv$jsx)($bd5e7b1f34144514$var$SideNavButton, {
                to: `/`,
                icon: /*#__PURE__*/ (0, $h2dLv$jsx)((0, $h2dLv$muiiconsmaterialCottage), {}),
                title: "Home"
            }),
            /*#__PURE__*/ (0, $h2dLv$jsx)($bd5e7b1f34144514$var$SideNavButtonList, {
                name: "Queries",
                types: spec?.queries,
                icon: /*#__PURE__*/ (0, $h2dLv$jsx)((0, $h2dLv$muiiconsmaterialHelpOutline), {}),
                linkPrefix: "/debug/q/"
            }),
            /*#__PURE__*/ (0, $h2dLv$jsx)($bd5e7b1f34144514$var$SideNavButtonList, {
                name: "Commands",
                types: spec?.commands,
                icon: /*#__PURE__*/ (0, $h2dLv$jsx)((0, $h2dLv$muiiconsmaterialKeyboardCommandKeyTwoTone), {}),
                linkPrefix: "/debug/c/"
            })
        ]
    });
}
function $bd5e7b1f34144514$var$SideNavButton({ icon: icon , title: title , subtitle: subtitle , ...props }) {
    if (props.to) props.component = (0, $08b8c86ef070e3a0$export$2e2bcd8739ae039);
    return /*#__PURE__*/ (0, $h2dLv$jsx)((0, $h2dLv$muimaterialListItem), {
        disablePadding: true,
        children: /*#__PURE__*/ (0, $h2dLv$jsxs)((0, $h2dLv$muimaterialListItemButton), {
            ...props,
            children: [
                /*#__PURE__*/ (0, $h2dLv$jsx)((0, $h2dLv$muimaterialListItemIcon), {
                    sx: {
                        minWidth: "30px"
                    },
                    children: icon
                }),
                /*#__PURE__*/ (0, $h2dLv$jsx)((0, $h2dLv$muimaterialListItemText), {
                    primary: title,
                    secondary: subtitle
                })
            ]
        })
    });
}
function $bd5e7b1f34144514$var$SideNavButtonList({ name: name , types: types , icon: icon , linkPrefix: linkPrefix  }) {
    return /*#__PURE__*/ (0, $h2dLv$jsxs)((0, $h2dLv$muimaterialBox), {
        children: [
            /*#__PURE__*/ (0, $h2dLv$jsx)((0, $h2dLv$muimaterialTypography), {
                variant: "h6",
                sx: {
                    pl: 1
                },
                children: name
            }),
            /*#__PURE__*/ (0, $h2dLv$jsx)((0, $h2dLv$muimaterialList), {
                dense: true,
                sx: {
                    pt: 0
                },
                children: Array.isArray(types) ? [
                    ...types
                ].sort().map(({ name: name , args: args  })=>/*#__PURE__*/ (0, $h2dLv$jsx)($bd5e7b1f34144514$var$SideNavButton, {
                        key: name,
                        to: `${linkPrefix}${name}`,
                        icon: icon,
                        title: name,
                        subtitle: args
                    })) : Array(3).fill().map((_, i)=>/*#__PURE__*/ (0, $h2dLv$jsx)((0, $h2dLv$muimaterialSkeleton), {
                        animation: "wave",
                        height: "40px"
                    }, i))
            })
        ]
    });
}
function $bd5e7b1f34144514$var$ExecForm({ spec: spec , type: type , name: name , optionsJson: optionsJson = "{}"  }) {
    const location = (0, $h2dLv$useLocation)();
    const navigate = (0, $h2dLv$useNavigate)();
    const isCommand = type === "command";
    const options = $bd5e7b1f34144514$var$safeJsonParse(optionsJson);
    const optionsJsonIsValid = !(options instanceof Error);
    const submittable = !!(name && optionsJsonIsValid);
    const [execution, setExecution] = (0, $h2dLv$useState)(type === "query" && submittable ? {
        name: name,
        options: options
    } : null);
    const [executionDone, setExecutionDone] = (0, $h2dLv$useState)(false);
    const setOptionsJson = (0, $h2dLv$useCallback)((optionsJson, replace = false)=>{
        // TODO include other existing search params
        const params = {};
        if (optionsJson) params.opts = optionsJson;
        const newSearch = $bd5e7b1f34144514$var$searchToString(params);
        let url = location.pathname;
        if (newSearch) url += "?" + newSearch;
        navigate(url, {
            replace: replace
        });
    }, []);
    const reset = (0, $h2dLv$useCallback)(()=>{
        setOptionsJson(undefined, false);
        setExecution(null);
        setExecutionDone(false);
    }, [
        setOptionsJson
    ]);
    const onSubmit = (0, $h2dLv$useCallback)(()=>{
        if (submittable) setExecution({
            id: Date.now(),
            options: options
        });
    }, [
        name,
        options
    ]);
    const names = spec && (isCommand ? spec.commands : spec.queries) || [];
    const disabled = !!(execution && !executionDone);
    const Exec = isCommand ? $bd5e7b1f34144514$var$ExecuteCommand : $bd5e7b1f34144514$var$ExecuteQuery;
    return /*#__PURE__*/ (0, $h2dLv$jsxs)((0, $h2dLv$muimaterialBox), {
        children: [
            /*#__PURE__*/ (0, $h2dLv$jsx)((0, $1abdbf2868e540b2$export$2e2bcd8739ae039), {
                disabled: disabled,
                onSubmit: onSubmit,
                children: /*#__PURE__*/ (0, $h2dLv$jsxs)((0, $h2dLv$muimaterialStack), {
                    spacing: 2,
                    children: [
                        /*#__PURE__*/ (0, $h2dLv$jsxs)((0, $h2dLv$muimaterialStack), {
                            direction: "row",
                            spacing: 2,
                            children: [
                                /*#__PURE__*/ (0, $h2dLv$jsx)((0, $h2dLv$muimaterialTypography), {
                                    variant: "h4",
                                    children: type
                                }),
                                /*#__PURE__*/ (0, $h2dLv$jsx)((0, $h2dLv$muimaterialSelect), {
                                    value: name,
                                    // onChange={e => setName(e.target.value)}
                                    autoWidth: true,
                                    children: names.map(({ name: name  })=>/*#__PURE__*/ (0, $h2dLv$jsx)((0, $h2dLv$muimaterialMenuItem), {
                                            value: name,
                                            component: (0, $08b8c86ef070e3a0$export$2e2bcd8739ae039),
                                            to: `/debug/${isCommand ? "c" : "q"}/${name}`,
                                            children: name
                                        }, name))
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, $h2dLv$jsx)((0, $h2dLv$muimaterialTextField), {
                            disabled: disabled,
                            label: "options (JSON)",
                            fullWidth: true,
                            multiline: true,
                            value: optionsJson,
                            onChange: (e)=>{
                                setOptionsJson(e.target.value, true);
                            },
                            error: optionsJsonIsValid ? false : true
                        }),
                        /*#__PURE__*/ (0, $h2dLv$jsxs)((0, $33fea69a0e10afc7$export$2e2bcd8739ae039), {
                            sx: {
                                mt: 2
                            },
                            children: [
                                /*#__PURE__*/ (0, $h2dLv$jsx)((0, $h2dLv$muimaterialButton), {
                                    disabled: disabled || !submittable,
                                    variant: "contained",
                                    type: "submit",
                                    autoFocus: true,
                                    children: isCommand ? "execute" : "query"
                                }),
                                /*#__PURE__*/ (0, $h2dLv$jsx)((0, $h2dLv$muimaterialButton), {
                                    disabled: disabled,
                                    variant: "text",
                                    onClick: reset,
                                    children: "reset"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0, $h2dLv$jsx)("hr", {}),
            /*#__PURE__*/ (0, $h2dLv$jsx)((0, $h2dLv$muimaterialBox), {
                children: execution ? /*#__PURE__*/ (0, $h2dLv$jsx)(Exec, {
                    key: execution.id,
                    id: execution.id,
                    name: name,
                    options: execution.options,
                    onComplete () {
                        setExecutionDone(true);
                    }
                }) : null
            })
        ]
    });
}
function $bd5e7b1f34144514$var$ExecuteQuery({ id: id , name: name , options: options , onComplete: onComplete  }) {
    const results = (0, $ba2cbc8f2cb18116$export$dd0a697e1782aedd)(name, options, {
        dedupingInterval: 0,
        revalidateOnMount: true,
        revalidateOnFocus: true
    });
    (0, $h2dLv$useEffect)(()=>{
        if (!results.loading) onComplete();
    }, [
        results.loading
    ]);
    return /*#__PURE__*/ (0, $h2dLv$jsx)($bd5e7b1f34144514$var$Execution, {
        ...results,
        name: name,
        options: options
    });
}
function $bd5e7b1f34144514$var$ExecuteCommand({ name: name , options: options , onComplete: onComplete  }) {
    const results = (0, $ba2cbc8f2cb18116$export$b87ac4c6452497e4)(name, options, {
        onComplete: onComplete
    });
    return /*#__PURE__*/ (0, $h2dLv$jsx)($bd5e7b1f34144514$var$Execution, {
        ...results,
        name: name,
        options: options
    });
}
function $bd5e7b1f34144514$var$Execution({ name: name , options: options , result: result , loading: loading , error: error  }) {
    return /*#__PURE__*/ (0, $h2dLv$jsx)((0, $h2dLv$muimaterialBox), {
        children: loading ? /*#__PURE__*/ (0, $h2dLv$jsx)((0, $h2dLv$muimaterialCircularProgress), {}) : error ? /*#__PURE__*/ (0, $h2dLv$jsx)((0, $e57fa53a045bcfbf$export$2e2bcd8739ae039), {
            error: error
        }) : /*#__PURE__*/ (0, $h2dLv$jsx)((0, $b5643637aedb000b$export$2e2bcd8739ae039), {
            object: result,
            sx: {
                m: 0,
                backgroundColor: "#232323"
            }
        })
    });
}
function $bd5e7b1f34144514$var$Command({ name: name , options: options , ...prop }) {
    const command = (0, $ba2cbc8f2cb18116$export$b87ac4c6452497e4)(name, options);
    return /*#__PURE__*/ (0, $h2dLv$jsxs)(Tile, {
        title: `command: ${name}`,
        ...prop,
        children: [
            /*#__PURE__*/ (0, $h2dLv$jsx)((0, $b5643637aedb000b$export$2e2bcd8739ae039), {
                object: {
                    options: options
                }
            }),
            /*#__PURE__*/ (0, $h2dLv$jsx)((0, $b5643637aedb000b$export$2e2bcd8739ae039), {
                object: command
            })
        ]
    });
}
function $bd5e7b1f34144514$var$safeJsonParse(json) {
    try {
        return JSON.parse(json);
    } catch (error) {
        return error;
    }
}


var $8ea33c689192dd62$exports = {};

$parcel$defineInteropFlag($8ea33c689192dd62$exports);

$parcel$export($8ea33c689192dd62$exports, "default", () => $8ea33c689192dd62$export$2e2bcd8739ae039);


function $8ea33c689192dd62$export$2e2bcd8739ae039() {
    return /*#__PURE__*/ (0, $h2dLv$jsx)("div", {
        children: "Page Not Found"
    });
}



const $3d27138bea64f431$var$root = (0, $h2dLv$reactdomclient).createRoot(document.querySelector("body > main"));
function $3d27138bea64f431$export$b3890eb0ae9dca99(opts = {}) {
    const { Routes: Routes , theme: theme = (0, $c8b71836488e4bbe$export$2e2bcd8739ae039) ,  } = opts;
    $3d27138bea64f431$var$root.render(/*#__PURE__*/ (0, $h2dLv$jsx)($h2dLv$StrictMode, {
        children: /*#__PURE__*/ (0, $h2dLv$jsx)((0, $h2dLv$BrowserRouter), {
            children: /*#__PURE__*/ (0, $h2dLv$jsxs)((0, $h2dLv$ThemeProvider), {
                theme: theme,
                children: [
                    /*#__PURE__*/ (0, $h2dLv$jsx)((0, $h2dLv$CssBaseline), {
                        enableColorScheme: true
                    }),
                    /*#__PURE__*/ (0, $h2dLv$jsxs)(Routes, {
                        children: [
                            /*#__PURE__*/ (0, $h2dLv$jsx)((0, $h2dLv$Route), {
                                path: "/debug/*",
                                element: /*#__PURE__*/ (0, $h2dLv$jsx)((0, $bd5e7b1f34144514$export$2e2bcd8739ae039), {})
                            }),
                            /*#__PURE__*/ (0, $h2dLv$jsx)((0, $h2dLv$Route), {
                                path: "*",
                                element: /*#__PURE__*/ (0, $h2dLv$jsx)((0, $8ea33c689192dd62$export$2e2bcd8739ae039), {})
                            })
                        ]
                    })
                ]
            })
        })
    }));
}


export {$3d27138bea64f431$export$b3890eb0ae9dca99 as render};
//# sourceMappingURL=render.js.map
