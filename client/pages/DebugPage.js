import {jsxDEV as $d8gED$jsxDEV} from "react/jsx-dev-runtime";
import {useEffect as $d8gED$useEffect, useState as $d8gED$useState, useCallback as $d8gED$useCallback, forwardRef as $d8gED$forwardRef} from "react";
import {useLocation as $d8gED$useLocation, Routes as $d8gED$Routes, Route as $d8gED$Route, useNavigate as $d8gED$useNavigate, Link as $d8gED$Link} from "react-router-dom";
import {ErrorBoundary as $d8gED$ErrorBoundary} from "react-error-boundary";
import $d8gED$muimaterialContainer from "@mui/material/Container";
import $d8gED$muimaterialBox from "@mui/material/Box";
import $d8gED$muimaterialPaper from "@mui/material/Paper";
import $d8gED$muimaterialTypography from "@mui/material/Typography";
import $d8gED$muimaterialStack from "@mui/material/Stack";
import $d8gED$muimaterialSelect from "@mui/material/Select";
import $d8gED$muimaterialMenuItem from "@mui/material/MenuItem";
import $d8gED$muimaterialTextField from "@mui/material/TextField";
import $d8gED$muimaterialButton from "@mui/material/Button";
import $d8gED$muimaterialCircularProgress from "@mui/material/CircularProgress";
import $d8gED$muimaterialList from "@mui/material/List";
import $d8gED$muimaterialListItem from "@mui/material/ListItem";
import $d8gED$muimaterialListItemButton from "@mui/material/ListItemButton";
import $d8gED$muimaterialListItemIcon from "@mui/material/ListItemIcon";
import $d8gED$muimaterialListItemText from "@mui/material/ListItemText";
import $d8gED$muimaterialSkeleton from "@mui/material/Skeleton";
import "@mui/material/IconButton";
import "@mui/icons-material/Edit";
import "@mui/icons-material/Close";
import $d8gED$muiiconsmaterialHelpOutline from "@mui/icons-material/HelpOutline";
import $d8gED$muiiconsmaterialKeyboardCommandKeyTwoTone from "@mui/icons-material/KeyboardCommandKeyTwoTone";
import $d8gED$muiiconsmaterialCottage from "@mui/icons-material/Cottage";
import $d8gED$muimaterialAlert from "@mui/material/Alert";
import $d8gED$muimaterialLink from "@mui/material/Link";
import $d8gED$swr from "swr";

function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}



























var $398477c469915369$exports = {};

$parcel$defineInteropFlag($398477c469915369$exports);

$parcel$export($398477c469915369$exports, "default", () => $398477c469915369$export$2e2bcd8739ae039);








function $398477c469915369$export$2e2bcd8739ae039({ error: error , resetErrorBoundary: resetErrorBoundary  }) {
    return /*#__PURE__*/ (0, $d8gED$jsxDEV)((0, $d8gED$muimaterialContainer), {
        maxWidth: "lg",
        children: /*#__PURE__*/ (0, $d8gED$jsxDEV)((0, $d8gED$muimaterialPaper), {
            elevation: 3,
            role: "alert",
            sx: {
                m: 3,
                p: 3
            },
            children: [
                /*#__PURE__*/ (0, $d8gED$jsxDEV)((0, $d8gED$muimaterialAlert), {
                    severity: "error",
                    children: "App Error"
                }, void 0, false, {
                    fileName: "client-src/components/AppError.js",
                    lineNumber: 17,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, $d8gED$jsxDEV)((0, $d8gED$muimaterialBox), {
                    component: "pre",
                    sx: {
                        overflow: "scroll"
                    },
                    children: [
                        /*#__PURE__*/ (0, $d8gED$jsxDEV)((0, $d8gED$muimaterialTypography), {
                            variant: "h4",
                            children: error.message
                        }, void 0, false, {
                            fileName: "client-src/components/AppError.js",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, $d8gED$jsxDEV)("br", {}, void 0, false, {
                            fileName: "client-src/components/AppError.js",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this),
                        error.stack
                    ]
                }, void 0, true, {
                    fileName: "client-src/components/AppError.js",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, $d8gED$jsxDEV)((0, $d8gED$muimaterialButton), {
                    variant: "contained",
                    onClick: resetErrorBoundary,
                    children: "Try again"
                }, void 0, false, {
                    fileName: "client-src/components/AppError.js",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "client-src/components/AppError.js",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "client-src/components/AppError.js",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}


var $08b8c86ef070e3a0$exports = {};

$parcel$defineInteropFlag($08b8c86ef070e3a0$exports);

$parcel$export($08b8c86ef070e3a0$exports, "default", () => $08b8c86ef070e3a0$export$2e2bcd8739ae039, (v) => $08b8c86ef070e3a0$export$2e2bcd8739ae039 = v);




const $08b8c86ef070e3a0$var$Link = /*#__PURE__*/ $d8gED$forwardRef(({ ...props }, ref)=>{
    props.component = "a";
    if (props.to) props.component = (0, $d8gED$Link);
    if (props.to && props.to.startsWith("http")) {
        props.href = props.to;
        delete props.to;
        props.rel = props.rel || "noopener noreferrer";
        props.target = props.target || "_blank";
        props.component = "a";
    }
    return /*#__PURE__*/ (0, $d8gED$jsxDEV)((0, $d8gED$muimaterialLink), {
        ...props,
        ref: ref
    }, void 0, false, {
        fileName: "client-src/components/Link.js",
        lineNumber: 17,
        columnNumber: 10
    }, undefined);
});
$08b8c86ef070e3a0$var$Link.displayName = "Link";
var $08b8c86ef070e3a0$export$2e2bcd8739ae039 = $08b8c86ef070e3a0$var$Link;


var $1abdbf2868e540b2$exports = {};

$parcel$defineInteropFlag($1abdbf2868e540b2$exports);

$parcel$export($1abdbf2868e540b2$exports, "default", () => $1abdbf2868e540b2$export$2e2bcd8739ae039);



function $1abdbf2868e540b2$export$2e2bcd8739ae039({ disabled: disabled , children: children , onSubmit: onSubmit , ...props }) {
    const _onSubmit = $d8gED$useCallback((event)=>{
        event.preventDefault();
        if (disabled || !onSubmit) return;
        const formData = new FormData(event.currentTarget);
        onSubmit(event, formData);
    }, [
        disabled,
        onSubmit
    ]);
    return /*#__PURE__*/ (0, $d8gED$jsxDEV)((0, $d8gED$muimaterialBox), {
        component: "form",
        disabled: disabled,
        ...props,
        onSubmit: _onSubmit,
        children: children
    }, void 0, false, {
        fileName: "client-src/components/Form.js",
        lineNumber: 16,
        columnNumber: 10
    }, this);
}


var $33fea69a0e10afc7$exports = {};

$parcel$defineInteropFlag($33fea69a0e10afc7$exports);

$parcel$export($33fea69a0e10afc7$exports, "default", () => $33fea69a0e10afc7$export$2e2bcd8739ae039);



function $33fea69a0e10afc7$export$2e2bcd8739ae039({ children: children , ...props }) {
    return /*#__PURE__*/ (0, $d8gED$jsxDEV)((0, $d8gED$muimaterialStack), {
        spacing: 2,
        direction: "row-reverse",
        alignItems: "center",
        ...props,
        children: children
    }, void 0, false, {
        fileName: "client-src/components/ButtonRow.js",
        lineNumber: 5,
        columnNumber: 10
    }, this);
}


var $e57fa53a045bcfbf$exports = {};

$parcel$defineInteropFlag($e57fa53a045bcfbf$exports);

$parcel$export($e57fa53a045bcfbf$exports, "default", () => $e57fa53a045bcfbf$export$2e2bcd8739ae039, (v) => $e57fa53a045bcfbf$export$2e2bcd8739ae039 = v);



const $e57fa53a045bcfbf$var$ErrorMessage = ({ error: error , ...props })=>{
    if (!error) return null;
    return /*#__PURE__*/ (0, $d8gED$jsxDEV)((0, $d8gED$muimaterialAlert), {
        severity: "error",
        ...props,
        children: error.message
    }, void 0, false, {
        fileName: "client-src/components/ErrorMessage.js",
        lineNumber: 6,
        columnNumber: 10
    }, undefined);
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
    let setState = (0, $d8gED$useState)()[1];
    (0, $d8gED$useEffect)(()=>()=>{
            setState = $b6a953b0721d86c6$var$noop;
        }, []);
    return (0, $d8gED$useCallback)(()=>{
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
    const [ctx] = (0, $d8gED$useState)({});
    const setState = (state)=>{
        ctx.state = $27954de794c56674$var$STATES[state];
        $27954de794c56674$var$STATES.forEach((name, index)=>{
            ctx[name] = index === state;
        });
        forceUpdate();
    };
    if (ctx.state === undefined) setState(0);
    ctx.call = (0, $d8gED$useCallback)((...args)=>{
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
    (0, $d8gED$useEffect)(()=>{
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
    const { data: result , error: error , mutate: mutate  } = (0, $d8gED$swr)(swrKey, {
        ...config,
        fetcher: $ba2cbc8f2cb18116$export$a1c549e76b7f385e
    });
    const loading = typeof result === "undefined" && !error;
    const reload = (0, $d8gED$useCallback)(()=>{
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
    (0, $d8gED$useEffect)(()=>{
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
    return /*#__PURE__*/ (0, $d8gED$jsxDEV)((0, $d8gED$muimaterialBox), {
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
    }, void 0, false, {
        fileName: "client-src/components/InspectObject.js",
        lineNumber: 17,
        columnNumber: 10
    }, this);
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
    const location = (0, $d8gED$useLocation)();
    const name = location.pathname.split("/").reverse()[0];
    const search = $bd5e7b1f34144514$var$searchToObject(location.search);
    const optionsJson = search.opts;
    (0, $d8gED$useEffect)(()=>{
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
    return /*#__PURE__*/ (0, $d8gED$jsxDEV)((0, $d8gED$muimaterialContainer), {
        maxWidth: false,
        disableGutters: true,
        children: /*#__PURE__*/ (0, $d8gED$jsxDEV)((0, $d8gED$muimaterialBox), {
            sx: {
                display: "flex",
                flexDirection: "row",
                minHeight: "100vh",
                minWidth: "100vw"
            },
            children: [
                /*#__PURE__*/ (0, $d8gED$jsxDEV)($bd5e7b1f34144514$var$SideNav, {
                    spec: spec
                }, void 0, false, {
                    fileName: "client-src/pages/DebugPage.js",
                    lineNumber: 67,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, $d8gED$jsxDEV)((0, $d8gED$muimaterialBox), {
                    sx: {
                        flex: "1 1",
                        p: 2
                    },
                    children: [
                        /*#__PURE__*/ (0, $d8gED$jsxDEV)((0, $e57fa53a045bcfbf$exports.default), {
                            error: error
                        }, void 0, false, {
                            fileName: "client-src/pages/DebugPage.js",
                            lineNumber: 69,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, $d8gED$jsxDEV)((0, $d8gED$ErrorBoundary), {
                            FallbackComponent: (0, $398477c469915369$export$2e2bcd8739ae039),
                            children: /*#__PURE__*/ (0, $d8gED$jsxDEV)((0, $d8gED$Routes), {
                                children: [
                                    /*#__PURE__*/ (0, $d8gED$jsxDEV)((0, $d8gED$Route), {
                                        path: "/q/:name",
                                        element: /*#__PURE__*/ (0, $d8gED$jsxDEV)($bd5e7b1f34144514$var$ExecForm, {
                                            ...props,
                                            type: "query"
                                        }, name, false, void 0, void 0),
                                        title: "do a query"
                                    }, void 0, false, {
                                        fileName: "client-src/pages/DebugPage.js",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, $d8gED$jsxDEV)((0, $d8gED$Route), {
                                        path: "/c/:name",
                                        element: /*#__PURE__*/ (0, $d8gED$jsxDEV)($bd5e7b1f34144514$var$ExecForm, {
                                            ...props,
                                            type: "command"
                                        }, name, false, void 0, void 0),
                                        title: "do a command"
                                    }, void 0, false, {
                                        fileName: "client-src/pages/DebugPage.js",
                                        lineNumber: 77,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "client-src/pages/DebugPage.js",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "client-src/pages/DebugPage.js",
                            lineNumber: 70,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "client-src/pages/DebugPage.js",
                    lineNumber: 68,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "client-src/pages/DebugPage.js",
            lineNumber: 61,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "client-src/pages/DebugPage.js",
        lineNumber: 60,
        columnNumber: 10
    }, this);
}
function $bd5e7b1f34144514$var$SideNav({ spec: spec  }) {
    return /*#__PURE__*/ (0, $d8gED$jsxDEV)((0, $d8gED$muimaterialBox), {
        sx: {
            display: "flex",
            flexDirection: "column",
            backgroundColor: "primary.dark",
            minWidth: `max(10vw, 175px)`,
            maxWidth: `max(20vw, 400px)`,
            overflowX: "auto"
        },
        children: [
            /*#__PURE__*/ (0, $d8gED$jsxDEV)((0, $d8gED$muimaterialTypography), {
                variant: "h6",
                sx: {
                    my: 2,
                    textAlign: "center"
                },
                children: [
                    "Debug ",
                    process.env.APP_NAME
                ]
            }, void 0, true, {
                fileName: "client-src/pages/DebugPage.js",
                lineNumber: 98,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, $d8gED$jsxDEV)($bd5e7b1f34144514$var$SideNavButton, {
                to: `/`,
                icon: /*#__PURE__*/ (0, $d8gED$jsxDEV)((0, $d8gED$muiiconsmaterialCottage), {}, void 0, false, void 0, void 0),
                title: "Home"
            }, void 0, false, {
                fileName: "client-src/pages/DebugPage.js",
                lineNumber: 104,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, $d8gED$jsxDEV)($bd5e7b1f34144514$var$SideNavButtonList, {
                name: "Queries",
                types: spec?.queries,
                icon: /*#__PURE__*/ (0, $d8gED$jsxDEV)((0, $d8gED$muiiconsmaterialHelpOutline), {}, void 0, false, void 0, void 0),
                linkPrefix: "/debug/q/"
            }, void 0, false, {
                fileName: "client-src/pages/DebugPage.js",
                lineNumber: 109,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, $d8gED$jsxDEV)($bd5e7b1f34144514$var$SideNavButtonList, {
                name: "Commands",
                types: spec?.commands,
                icon: /*#__PURE__*/ (0, $d8gED$jsxDEV)((0, $d8gED$muiiconsmaterialKeyboardCommandKeyTwoTone), {}, void 0, false, void 0, void 0),
                linkPrefix: "/debug/c/"
            }, void 0, false, {
                fileName: "client-src/pages/DebugPage.js",
                lineNumber: 115,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "client-src/pages/DebugPage.js",
        lineNumber: 90,
        columnNumber: 10
    }, this);
}
function $bd5e7b1f34144514$var$SideNavButton({ icon: icon , title: title , subtitle: subtitle , ...props }) {
    if (props.to) props.component = (0, $08b8c86ef070e3a0$exports.default);
    return /*#__PURE__*/ (0, $d8gED$jsxDEV)((0, $d8gED$muimaterialListItem), {
        disablePadding: true,
        children: /*#__PURE__*/ (0, $d8gED$jsxDEV)((0, $d8gED$muimaterialListItemButton), {
            ...props,
            children: [
                /*#__PURE__*/ (0, $d8gED$jsxDEV)((0, $d8gED$muimaterialListItemIcon), {
                    sx: {
                        minWidth: "30px"
                    },
                    children: icon
                }, void 0, false, {
                    fileName: "client-src/pages/DebugPage.js",
                    lineNumber: 128,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, $d8gED$jsxDEV)((0, $d8gED$muimaterialListItemText), {
                    primary: title,
                    secondary: subtitle
                }, void 0, false, {
                    fileName: "client-src/pages/DebugPage.js",
                    lineNumber: 131,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "client-src/pages/DebugPage.js",
            lineNumber: 127,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "client-src/pages/DebugPage.js",
        lineNumber: 126,
        columnNumber: 10
    }, this);
}
function $bd5e7b1f34144514$var$SideNavButtonList({ name: name , types: types , icon: icon , linkPrefix: linkPrefix  }) {
    return /*#__PURE__*/ (0, $d8gED$jsxDEV)((0, $d8gED$muimaterialBox), {
        children: [
            /*#__PURE__*/ (0, $d8gED$jsxDEV)((0, $d8gED$muimaterialTypography), {
                variant: "h6",
                sx: {
                    pl: 1
                },
                children: name
            }, void 0, false, {
                fileName: "client-src/pages/DebugPage.js",
                lineNumber: 138,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, $d8gED$jsxDEV)((0, $d8gED$muimaterialList), {
                dense: true,
                sx: {
                    pt: 0
                },
                children: Array.isArray(types) ? [
                    ...types
                ].sort().map(({ name: name , args: args  })=>/*#__PURE__*/ (0, $d8gED$jsxDEV)($bd5e7b1f34144514$var$SideNavButton, {
                        key: name,
                        to: `${linkPrefix}${name}`,
                        icon: icon,
                        title: name,
                        subtitle: args
                    }, void 0, false, {
                        fileName: "client-src/pages/DebugPage.js",
                        lineNumber: 142,
                        columnNumber: 11
                    }, this)) : Array(3).fill().map((_, i)=>/*#__PURE__*/ (0, $d8gED$jsxDEV)((0, $d8gED$muimaterialSkeleton), {
                        animation: "wave",
                        height: "40px"
                    }, i, false, {
                        fileName: "client-src/pages/DebugPage.js",
                        lineNumber: 151,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "client-src/pages/DebugPage.js",
                lineNumber: 139,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "client-src/pages/DebugPage.js",
        lineNumber: 137,
        columnNumber: 10
    }, this);
}
function $bd5e7b1f34144514$var$ExecForm({ spec: spec , type: type , name: name , optionsJson: optionsJson = "{}"  }) {
    const location = (0, $d8gED$useLocation)();
    const navigate = (0, $d8gED$useNavigate)();
    const isCommand = type === "command";
    const options = $bd5e7b1f34144514$var$safeJsonParse(optionsJson);
    const optionsJsonIsValid = !(options instanceof Error);
    const submittable = !!(name && optionsJsonIsValid);
    const [execution, setExecution] = (0, $d8gED$useState)(type === "query" && submittable ? {
        name: name,
        options: options
    } : null);
    const [executionDone, setExecutionDone] = (0, $d8gED$useState)(false);
    const setOptionsJson = (0, $d8gED$useCallback)((optionsJson, replace = false)=>{
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
    const reset = (0, $d8gED$useCallback)(()=>{
        setOptionsJson(undefined, false);
        setExecution(null);
        setExecutionDone(false);
    }, [
        setOptionsJson
    ]);
    const onSubmit = (0, $d8gED$useCallback)(()=>{
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
    return /*#__PURE__*/ (0, $d8gED$jsxDEV)((0, $d8gED$muimaterialBox), {
        children: [
            /*#__PURE__*/ (0, $d8gED$jsxDEV)((0, $1abdbf2868e540b2$export$2e2bcd8739ae039), {
                disabled: disabled,
                onSubmit: onSubmit,
                children: /*#__PURE__*/ (0, $d8gED$jsxDEV)((0, $d8gED$muimaterialStack), {
                    spacing: 2,
                    children: [
                        /*#__PURE__*/ (0, $d8gED$jsxDEV)((0, $d8gED$muimaterialStack), {
                            direction: "row",
                            spacing: 2,
                            children: [
                                /*#__PURE__*/ (0, $d8gED$jsxDEV)((0, $d8gED$muimaterialTypography), {
                                    variant: "h4",
                                    children: type
                                }, void 0, false, {
                                    fileName: "client-src/pages/DebugPage.js",
                                    lineNumber: 208,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, $d8gED$jsxDEV)((0, $d8gED$muimaterialSelect), {
                                    value: name,
                                    // onChange={e => setName(e.target.value)}
                                    autoWidth: true,
                                    children: names.map(({ name: name  })=>/*#__PURE__*/ (0, $d8gED$jsxDEV)((0, $d8gED$muimaterialMenuItem), {
                                            value: name,
                                            component: (0, $08b8c86ef070e3a0$exports.default),
                                            to: `/debug/${isCommand ? "c" : "q"}/${name}`,
                                            children: name
                                        }, name, false, {
                                            fileName: "client-src/pages/DebugPage.js",
                                            lineNumber: 215,
                                            columnNumber: 15
                                        }, this))
                                }, void 0, false, {
                                    fileName: "client-src/pages/DebugPage.js",
                                    lineNumber: 209,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "client-src/pages/DebugPage.js",
                            lineNumber: 207,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, $d8gED$jsxDEV)((0, $d8gED$muimaterialTextField), {
                            disabled: disabled,
                            label: "options (JSON)",
                            fullWidth: true,
                            multiline: true,
                            value: optionsJson,
                            onChange: (e)=>{
                                setOptionsJson(e.target.value, true);
                            },
                            error: optionsJsonIsValid ? false : true
                        }, void 0, false, {
                            fileName: "client-src/pages/DebugPage.js",
                            lineNumber: 224,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, $d8gED$jsxDEV)((0, $33fea69a0e10afc7$export$2e2bcd8739ae039), {
                            sx: {
                                mt: 2
                            },
                            children: [
                                /*#__PURE__*/ (0, $d8gED$jsxDEV)((0, $d8gED$muimaterialButton), {
                                    disabled: disabled || !submittable,
                                    variant: "contained",
                                    type: "submit",
                                    autoFocus: true,
                                    children: isCommand ? "execute" : "query"
                                }, void 0, false, {
                                    fileName: "client-src/pages/DebugPage.js",
                                    lineNumber: 234,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, $d8gED$jsxDEV)((0, $d8gED$muimaterialButton), {
                                    disabled: disabled,
                                    variant: "text",
                                    onClick: reset,
                                    children: "reset"
                                }, void 0, false, {
                                    fileName: "client-src/pages/DebugPage.js",
                                    lineNumber: 241,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "client-src/pages/DebugPage.js",
                            lineNumber: 233,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "client-src/pages/DebugPage.js",
                    lineNumber: 206,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "client-src/pages/DebugPage.js",
                lineNumber: 205,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, $d8gED$jsxDEV)("hr", {}, void 0, false, {
                fileName: "client-src/pages/DebugPage.js",
                lineNumber: 249,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, $d8gED$jsxDEV)((0, $d8gED$muimaterialBox), {
                children: execution ? /*#__PURE__*/ (0, $d8gED$jsxDEV)(Exec, {
                    key: execution.id,
                    id: execution.id,
                    name: name,
                    options: execution.options,
                    onComplete () {
                        setExecutionDone(true);
                    }
                }, void 0, false, {
                    fileName: "client-src/pages/DebugPage.js",
                    lineNumber: 252,
                    columnNumber: 11
                }, this) : null
            }, void 0, false, {
                fileName: "client-src/pages/DebugPage.js",
                lineNumber: 250,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "client-src/pages/DebugPage.js",
        lineNumber: 204,
        columnNumber: 10
    }, this);
}
function $bd5e7b1f34144514$var$ExecuteQuery({ id: id , name: name , options: options , onComplete: onComplete  }) {
    const results = (0, $ba2cbc8f2cb18116$export$dd0a697e1782aedd)(name, options, {
        dedupingInterval: 0,
        revalidateOnMount: true,
        revalidateOnFocus: true
    });
    (0, $d8gED$useEffect)(()=>{
        if (!results.loading) onComplete();
    }, [
        results.loading
    ]);
    return /*#__PURE__*/ (0, $d8gED$jsxDEV)($bd5e7b1f34144514$var$Execution, {
        ...results,
        name: name,
        options: options
    }, void 0, false, {
        fileName: "client-src/pages/DebugPage.js",
        lineNumber: 275,
        columnNumber: 10
    }, this);
}
function $bd5e7b1f34144514$var$ExecuteCommand({ name: name , options: options , onComplete: onComplete  }) {
    const results = (0, $ba2cbc8f2cb18116$export$b87ac4c6452497e4)(name, options, {
        onComplete: onComplete
    });
    return /*#__PURE__*/ (0, $d8gED$jsxDEV)($bd5e7b1f34144514$var$Execution, {
        ...results,
        name: name,
        options: options
    }, void 0, false, {
        fileName: "client-src/pages/DebugPage.js",
        lineNumber: 280,
        columnNumber: 10
    }, this);
}
function $bd5e7b1f34144514$var$Execution({ name: name , options: options , result: result , loading: loading , error: error  }) {
    return /*#__PURE__*/ (0, $d8gED$jsxDEV)((0, $d8gED$muimaterialBox), {
        children: loading ? /*#__PURE__*/ (0, $d8gED$jsxDEV)((0, $d8gED$muimaterialCircularProgress), {}, void 0, false, {
            fileName: "client-src/pages/DebugPage.js",
            lineNumber: 287,
            columnNumber: 11
        }, this) : error ? /*#__PURE__*/ (0, $d8gED$jsxDEV)((0, $e57fa53a045bcfbf$exports.default), {
            error: error
        }, void 0, false, {
            fileName: "client-src/pages/DebugPage.js",
            lineNumber: 289,
            columnNumber: 13
        }, this) : /*#__PURE__*/ (0, $d8gED$jsxDEV)((0, $b5643637aedb000b$export$2e2bcd8739ae039), {
            object: result,
            sx: {
                m: 0,
                backgroundColor: "#232323"
            }
        }, void 0, false, {
            fileName: "client-src/pages/DebugPage.js",
            lineNumber: 290,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "client-src/pages/DebugPage.js",
        lineNumber: 284,
        columnNumber: 10
    }, this);
}
function $bd5e7b1f34144514$var$Command({ name: name , options: options , ...prop }) {
    const command = (0, $ba2cbc8f2cb18116$export$b87ac4c6452497e4)(name, options);
    return /*#__PURE__*/ (0, $d8gED$jsxDEV)(Tile, {
        title: `command: ${name}`,
        ...prop,
        children: [
            /*#__PURE__*/ (0, $d8gED$jsxDEV)((0, $b5643637aedb000b$export$2e2bcd8739ae039), {
                object: {
                    options: options
                }
            }, void 0, false, {
                fileName: "client-src/pages/DebugPage.js",
                lineNumber: 305,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, $d8gED$jsxDEV)((0, $b5643637aedb000b$export$2e2bcd8739ae039), {
                object: command
            }, void 0, false, {
                fileName: "client-src/pages/DebugPage.js",
                lineNumber: 306,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "client-src/pages/DebugPage.js",
        lineNumber: 304,
        columnNumber: 10
    }, this);
}
function $bd5e7b1f34144514$var$safeJsonParse(json) {
    try {
        return JSON.parse(json);
    } catch (error) {
        return error;
    }
}


export {$bd5e7b1f34144514$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=DebugPage.js.map
