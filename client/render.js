import {jsx as $4feO0$jsx, jsxs as $4feO0$jsxs} from "react/jsx-runtime";
import {StrictMode as $4feO0$StrictMode, useEffect as $4feO0$useEffect, useState as $4feO0$useState, useCallback as $4feO0$useCallback, forwardRef as $4feO0$forwardRef} from "react";
import "react-dom/client";
import {BrowserRouter as $4feO0$BrowserRouter, Route as $4feO0$Route, useLocation as $4feO0$useLocation, Routes as $4feO0$Routes, useNavigate as $4feO0$useNavigate, Link as $4feO0$Link} from "react-router-dom";
import {ThemeProvider as $4feO0$ThemeProvider, CssBaseline as $4feO0$CssBaseline} from "@mui/material";
import {createTheme as $4feO0$createTheme} from "@mui/material/styles";
import {ErrorBoundary as $4feO0$ErrorBoundary} from "react-error-boundary";
import $4feO0$muimaterialContainer from "@mui/material/Container";
import $4feO0$muimaterialBox from "@mui/material/Box";
import $4feO0$muimaterialPaper from "@mui/material/Paper";
import $4feO0$muimaterialTypography from "@mui/material/Typography";
import $4feO0$muimaterialStack from "@mui/material/Stack";
import $4feO0$muimaterialSelect from "@mui/material/Select";
import $4feO0$muimaterialMenuItem from "@mui/material/MenuItem";
import $4feO0$muimaterialTextField from "@mui/material/TextField";
import $4feO0$muimaterialButton from "@mui/material/Button";
import $4feO0$muimaterialCircularProgress from "@mui/material/CircularProgress";
import $4feO0$muimaterialList from "@mui/material/List";
import $4feO0$muimaterialListItem from "@mui/material/ListItem";
import $4feO0$muimaterialListItemButton from "@mui/material/ListItemButton";
import $4feO0$muimaterialListItemIcon from "@mui/material/ListItemIcon";
import $4feO0$muimaterialListItemText from "@mui/material/ListItemText";
import $4feO0$muimaterialSkeleton from "@mui/material/Skeleton";
import "@mui/material/IconButton";
import "@mui/icons-material/Edit";
import "@mui/icons-material/Close";
import $4feO0$muiiconsmaterialHelpOutline from "@mui/icons-material/HelpOutline";
import $4feO0$muiiconsmaterialKeyboardCommandKeyTwoTone from "@mui/icons-material/KeyboardCommandKeyTwoTone";
import $4feO0$muiiconsmaterialCottage from "@mui/icons-material/Cottage";
import $4feO0$muimaterialAlert from "@mui/material/Alert";
import $4feO0$muimaterialLink from "@mui/material/Link";
import $4feO0$swr from "swr";

function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}





var $da546089315e6731$exports = {};

$parcel$defineInteropFlag($da546089315e6731$exports);

$parcel$export($da546089315e6731$exports, "default", () => $da546089315e6731$export$2e2bcd8739ae039);

const $da546089315e6731$var$darkTheme = (0, $4feO0$createTheme)({
    palette: {
        mode: "dark"
    }
});
var $da546089315e6731$export$2e2bcd8739ae039 = $da546089315e6731$var$darkTheme;


var $4da4492bbdf2ba52$exports = {};

$parcel$defineInteropFlag($4da4492bbdf2ba52$exports);

$parcel$export($4da4492bbdf2ba52$exports, "default", () => $4da4492bbdf2ba52$export$2e2bcd8739ae039);



























var $623cbf1c5ba937db$exports = {};

$parcel$defineInteropFlag($623cbf1c5ba937db$exports);

$parcel$export($623cbf1c5ba937db$exports, "default", () => $623cbf1c5ba937db$export$2e2bcd8739ae039);








function $623cbf1c5ba937db$export$2e2bcd8739ae039({ error: error , resetErrorBoundary: resetErrorBoundary  }) {
    return /*#__PURE__*/ (0, $4feO0$jsx)((0, $4feO0$muimaterialContainer), {
        maxWidth: "lg",
        children: /*#__PURE__*/ (0, $4feO0$jsxs)((0, $4feO0$muimaterialPaper), {
            elevation: 3,
            role: "alert",
            sx: {
                m: 3,
                p: 3
            },
            children: [
                /*#__PURE__*/ (0, $4feO0$jsx)((0, $4feO0$muimaterialAlert), {
                    severity: "error",
                    children: "App Error"
                }),
                /*#__PURE__*/ (0, $4feO0$jsxs)((0, $4feO0$muimaterialBox), {
                    component: "pre",
                    sx: {
                        overflow: "scroll"
                    },
                    children: [
                        /*#__PURE__*/ (0, $4feO0$jsx)((0, $4feO0$muimaterialTypography), {
                            variant: "h4",
                            children: error.message
                        }),
                        /*#__PURE__*/ (0, $4feO0$jsx)("br", {}),
                        error.stack
                    ]
                }),
                /*#__PURE__*/ (0, $4feO0$jsx)((0, $4feO0$muimaterialButton), {
                    variant: "contained",
                    onClick: resetErrorBoundary,
                    children: "Try again"
                })
            ]
        })
    });
}


var $3e26572ec1ad1291$exports = {};

$parcel$defineInteropFlag($3e26572ec1ad1291$exports);

$parcel$export($3e26572ec1ad1291$exports, "default", () => $3e26572ec1ad1291$export$2e2bcd8739ae039);




const $3e26572ec1ad1291$var$Link = /*#__PURE__*/ $4feO0$forwardRef(({ ...props }, ref)=>{
    props.component = "a";
    if (props.to) props.component = (0, $4feO0$Link);
    if (props.to && props.to.startsWith("http")) {
        props.href = props.to;
        delete props.to;
        props.rel = props.rel || "noopener noreferrer";
        props.target = props.target || "_blank";
        props.component = "a";
    }
    return /*#__PURE__*/ (0, $4feO0$jsx)((0, $4feO0$muimaterialLink), {
        ...props,
        ref: ref
    });
});
$3e26572ec1ad1291$var$Link.displayName = "Link";
var $3e26572ec1ad1291$export$2e2bcd8739ae039 = $3e26572ec1ad1291$var$Link;


var $6252030698aa3768$exports = {};

$parcel$defineInteropFlag($6252030698aa3768$exports);

$parcel$export($6252030698aa3768$exports, "default", () => $6252030698aa3768$export$2e2bcd8739ae039);



function $6252030698aa3768$export$2e2bcd8739ae039({ disabled: disabled , children: children , onSubmit: onSubmit , ...props }) {
    const _onSubmit = $4feO0$useCallback((event)=>{
        event.preventDefault();
        if (disabled || !onSubmit) return;
        const formData = new FormData(event.currentTarget);
        onSubmit(event, formData);
    }, [
        disabled,
        onSubmit
    ]);
    return /*#__PURE__*/ (0, $4feO0$jsx)((0, $4feO0$muimaterialBox), {
        component: "form",
        disabled: disabled,
        ...props,
        onSubmit: _onSubmit,
        children: children
    });
}


var $eba81024cd2a8d60$exports = {};

$parcel$defineInteropFlag($eba81024cd2a8d60$exports);

$parcel$export($eba81024cd2a8d60$exports, "default", () => $eba81024cd2a8d60$export$2e2bcd8739ae039);



function $eba81024cd2a8d60$export$2e2bcd8739ae039({ children: children , ...props }) {
    return /*#__PURE__*/ (0, $4feO0$jsx)((0, $4feO0$muimaterialStack), {
        spacing: 2,
        direction: "row-reverse",
        alignItems: "center",
        ...props,
        children: children
    });
}


var $79fa5d701d61042d$exports = {};

$parcel$defineInteropFlag($79fa5d701d61042d$exports);

$parcel$export($79fa5d701d61042d$exports, "default", () => $79fa5d701d61042d$export$2e2bcd8739ae039);



const $79fa5d701d61042d$var$ErrorMessage = ({ error: error , ...props })=>{
    if (!error) return null;
    return /*#__PURE__*/ (0, $4feO0$jsx)((0, $4feO0$muimaterialAlert), {
        severity: "error",
        ...props,
        children: error.message
    });
};
var $79fa5d701d61042d$export$2e2bcd8739ae039 = $79fa5d701d61042d$var$ErrorMessage;


var $7f5c6f790c4cfcc9$exports = {};

$parcel$export($7f5c6f790c4cfcc9$exports, "fetchQuery", () => $7f5c6f790c4cfcc9$export$a1c549e76b7f385e);
$parcel$export($7f5c6f790c4cfcc9$exports, "fetchCommand", () => $7f5c6f790c4cfcc9$export$df781a4386db1cc8);
$parcel$export($7f5c6f790c4cfcc9$exports, "useQuery", () => $7f5c6f790c4cfcc9$export$dd0a697e1782aedd);
$parcel$export($7f5c6f790c4cfcc9$exports, "useCommand", () => $7f5c6f790c4cfcc9$export$194d0c7cb6792e23);
$parcel$export($7f5c6f790c4cfcc9$exports, "useCommandOnMount", () => $7f5c6f790c4cfcc9$export$b87ac4c6452497e4);


var $2e683807ce90e650$exports = {};

$parcel$defineInteropFlag($2e683807ce90e650$exports);

$parcel$export($2e683807ce90e650$exports, "default", () => $2e683807ce90e650$export$2e2bcd8739ae039);


var $8e5aa45bd2bf2df3$exports = {};

$parcel$defineInteropFlag($8e5aa45bd2bf2df3$exports);

$parcel$export($8e5aa45bd2bf2df3$exports, "default", () => $8e5aa45bd2bf2df3$export$2e2bcd8739ae039);

const $8e5aa45bd2bf2df3$var$noop = ()=>{};
function $8e5aa45bd2bf2df3$export$2e2bcd8739ae039() {
    let setState = (0, $4feO0$useState)()[1];
    (0, $4feO0$useEffect)(()=>()=>{
            setState = $8e5aa45bd2bf2df3$var$noop;
        }, []);
    return (0, $4feO0$useCallback)(()=>{
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
    const [ctx] = (0, $4feO0$useState)({});
    const setState = (state)=>{
        ctx.state = $2e683807ce90e650$var$STATES[state];
        $2e683807ce90e650$var$STATES.forEach((name, index)=>{
            ctx[name] = index === state;
        });
        forceUpdate();
    };
    if (ctx.state === undefined) setState(0);
    ctx.call = (0, $4feO0$useCallback)((...args)=>{
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
    (0, $4feO0$useEffect)(()=>{
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
    const { data: result , error: error , mutate: mutate  } = (0, $4feO0$swr)(swrKey, {
        ...config,
        fetcher: $7f5c6f790c4cfcc9$export$a1c549e76b7f385e
    });
    const loading = typeof result === "undefined" && !error;
    const reload = (0, $4feO0$useCallback)(()=>{
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
    (0, $4feO0$useEffect)(()=>{
        if (command.idle) command.call(options);
    }, [
        name,
        options
    ]);
    return command;
}


var $41fd2a28aa9166e0$exports = {};

$parcel$defineInteropFlag($41fd2a28aa9166e0$exports);

$parcel$export($41fd2a28aa9166e0$exports, "default", () => $41fd2a28aa9166e0$export$2e2bcd8739ae039);



function $41fd2a28aa9166e0$export$2e2bcd8739ae039({ object: object , sx: sx , ...props }) {
    let string;
    if (typeof object === "function") string = object.toString();
    else if (typeof object === "undefined") string = "undefined";
    else try {
        string = $41fd2a28aa9166e0$var$inspect(object);
    } catch (error) {
        string = `ERROR: ${error}`;
    }
    return /*#__PURE__*/ (0, $4feO0$jsx)((0, $4feO0$muimaterialBox), {
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
function $41fd2a28aa9166e0$var$inspect(object, indentation = 2) {
    return JSON.stringify(object, $41fd2a28aa9166e0$var$replaceUndefinedWithUndefinedString, indentation).replace(/"UNDEFINEDPLACEHOLDER"/g, "undefined");
}
const $41fd2a28aa9166e0$var$replaceUndefinedWithUndefinedString = (k, v)=>{
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
const $4da4492bbdf2ba52$var$defaultExec = ()=>({
        isCommand: false,
        name: "",
        optionsJson: "{}"
    });
const $4da4492bbdf2ba52$var$searchToString = (object)=>new URLSearchParams(object).toString();
const $4da4492bbdf2ba52$var$searchToObject = (search)=>Object.fromEntries(new URLSearchParams(search).entries());
function $4da4492bbdf2ba52$export$2e2bcd8739ae039() {
    const location = (0, $4feO0$useLocation)();
    const name = location.pathname.split("/").reverse()[0];
    const search = $4da4492bbdf2ba52$var$searchToObject(location.search);
    const optionsJson = search.opts;
    (0, $4feO0$useEffect)(()=>{
        document.title = `Debug ${process.env.APP_NAME}: ${name}(${optionsJson || ""})`;
    }, [
        name,
        optionsJson
    ]);
    const { result: spec , error: error  } = (0, $7f5c6f790c4cfcc9$export$dd0a697e1782aedd)("__spec");
    const props = {
        spec: spec,
        name: name,
        optionsJson: optionsJson
    };
    return /*#__PURE__*/ (0, $4feO0$jsx)((0, $4feO0$muimaterialContainer), {
        maxWidth: false,
        disableGutters: true,
        children: /*#__PURE__*/ (0, $4feO0$jsxs)((0, $4feO0$muimaterialBox), {
            sx: {
                display: "flex",
                flexDirection: "row",
                minHeight: "100vh",
                minWidth: "100vw"
            },
            children: [
                /*#__PURE__*/ (0, $4feO0$jsx)($4da4492bbdf2ba52$var$SideNav, {
                    spec: spec
                }),
                /*#__PURE__*/ (0, $4feO0$jsxs)((0, $4feO0$muimaterialBox), {
                    sx: {
                        flex: "1 1",
                        p: 2
                    },
                    children: [
                        /*#__PURE__*/ (0, $4feO0$jsx)((0, $79fa5d701d61042d$export$2e2bcd8739ae039), {
                            error: error
                        }),
                        /*#__PURE__*/ (0, $4feO0$jsx)((0, $4feO0$ErrorBoundary), {
                            FallbackComponent: (0, $623cbf1c5ba937db$export$2e2bcd8739ae039),
                            children: /*#__PURE__*/ (0, $4feO0$jsxs)((0, $4feO0$Routes), {
                                children: [
                                    /*#__PURE__*/ (0, $4feO0$jsx)((0, $4feO0$Route), {
                                        path: "/q/:name",
                                        element: /*#__PURE__*/ (0, $4feO0$jsx)($4da4492bbdf2ba52$var$ExecForm, {
                                            ...props,
                                            type: "query"
                                        }, name),
                                        title: "do a query"
                                    }),
                                    /*#__PURE__*/ (0, $4feO0$jsx)((0, $4feO0$Route), {
                                        path: "/c/:name",
                                        element: /*#__PURE__*/ (0, $4feO0$jsx)($4da4492bbdf2ba52$var$ExecForm, {
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
function $4da4492bbdf2ba52$var$SideNav({ spec: spec  }) {
    return /*#__PURE__*/ (0, $4feO0$jsxs)((0, $4feO0$muimaterialBox), {
        sx: {
            display: "flex",
            flexDirection: "column",
            backgroundColor: "primary.dark",
            minWidth: `max(10vw, 175px)`,
            maxWidth: `max(20vw, 400px)`,
            overflowX: "auto"
        },
        children: [
            /*#__PURE__*/ (0, $4feO0$jsxs)((0, $4feO0$muimaterialTypography), {
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
            /*#__PURE__*/ (0, $4feO0$jsx)($4da4492bbdf2ba52$var$SideNavButton, {
                to: `/`,
                icon: /*#__PURE__*/ (0, $4feO0$jsx)((0, $4feO0$muiiconsmaterialCottage), {}),
                title: "Home"
            }),
            /*#__PURE__*/ (0, $4feO0$jsx)($4da4492bbdf2ba52$var$SideNavButtonList, {
                name: "Queries",
                types: spec?.queries,
                icon: /*#__PURE__*/ (0, $4feO0$jsx)((0, $4feO0$muiiconsmaterialHelpOutline), {}),
                linkPrefix: "/debug/q/"
            }),
            /*#__PURE__*/ (0, $4feO0$jsx)($4da4492bbdf2ba52$var$SideNavButtonList, {
                name: "Commands",
                types: spec?.commands,
                icon: /*#__PURE__*/ (0, $4feO0$jsx)((0, $4feO0$muiiconsmaterialKeyboardCommandKeyTwoTone), {}),
                linkPrefix: "/debug/c/"
            })
        ]
    });
}
function $4da4492bbdf2ba52$var$SideNavButton({ icon: icon , title: title , subtitle: subtitle , ...props }) {
    if (props.to) props.component = (0, $3e26572ec1ad1291$export$2e2bcd8739ae039);
    return /*#__PURE__*/ (0, $4feO0$jsx)((0, $4feO0$muimaterialListItem), {
        disablePadding: true,
        children: /*#__PURE__*/ (0, $4feO0$jsxs)((0, $4feO0$muimaterialListItemButton), {
            ...props,
            children: [
                /*#__PURE__*/ (0, $4feO0$jsx)((0, $4feO0$muimaterialListItemIcon), {
                    sx: {
                        minWidth: "30px"
                    },
                    children: icon
                }),
                /*#__PURE__*/ (0, $4feO0$jsx)((0, $4feO0$muimaterialListItemText), {
                    primary: title,
                    secondary: subtitle
                })
            ]
        })
    });
}
function $4da4492bbdf2ba52$var$SideNavButtonList({ name: name , types: types , icon: icon , linkPrefix: linkPrefix  }) {
    return /*#__PURE__*/ (0, $4feO0$jsxs)((0, $4feO0$muimaterialBox), {
        children: [
            /*#__PURE__*/ (0, $4feO0$jsx)((0, $4feO0$muimaterialTypography), {
                variant: "h6",
                sx: {
                    pl: 1
                },
                children: name
            }),
            /*#__PURE__*/ (0, $4feO0$jsx)((0, $4feO0$muimaterialList), {
                dense: true,
                sx: {
                    pt: 0
                },
                children: Array.isArray(types) ? [
                    ...types
                ].sort().map(({ name: name , args: args  })=>/*#__PURE__*/ (0, $4feO0$jsx)($4da4492bbdf2ba52$var$SideNavButton, {
                        key: name,
                        to: `${linkPrefix}${name}`,
                        icon: icon,
                        title: name,
                        subtitle: args
                    })) : Array(3).fill().map((_, i)=>/*#__PURE__*/ (0, $4feO0$jsx)((0, $4feO0$muimaterialSkeleton), {
                        animation: "wave",
                        height: "40px"
                    }, i))
            })
        ]
    });
}
function $4da4492bbdf2ba52$var$ExecForm({ spec: spec , type: type , name: name , optionsJson: optionsJson = "{}"  }) {
    const location = (0, $4feO0$useLocation)();
    const navigate = (0, $4feO0$useNavigate)();
    const isCommand = type === "command";
    const options = $4da4492bbdf2ba52$var$safeJsonParse(optionsJson);
    const optionsJsonIsValid = !(options instanceof Error);
    const submittable = !!(name && optionsJsonIsValid);
    const [execution, setExecution] = (0, $4feO0$useState)(type === "query" && submittable ? {
        name: name,
        options: options
    } : null);
    const [executionDone, setExecutionDone] = (0, $4feO0$useState)(false);
    const setOptionsJson = (0, $4feO0$useCallback)((optionsJson, replace = false)=>{
        // TODO include other existing search params
        const params = {};
        if (optionsJson) params.opts = optionsJson;
        const newSearch = $4da4492bbdf2ba52$var$searchToString(params);
        let url = location.pathname;
        if (newSearch) url += "?" + newSearch;
        navigate(url, {
            replace: replace
        });
    }, []);
    const reset = (0, $4feO0$useCallback)(()=>{
        setOptionsJson(undefined, false);
        setExecution(null);
        setExecutionDone(false);
    }, [
        setOptionsJson
    ]);
    const onSubmit = (0, $4feO0$useCallback)(()=>{
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
    const Exec = isCommand ? $4da4492bbdf2ba52$var$ExecuteCommand : $4da4492bbdf2ba52$var$ExecuteQuery;
    return /*#__PURE__*/ (0, $4feO0$jsxs)((0, $4feO0$muimaterialBox), {
        children: [
            /*#__PURE__*/ (0, $4feO0$jsx)((0, $6252030698aa3768$export$2e2bcd8739ae039), {
                disabled: disabled,
                onSubmit: onSubmit,
                children: /*#__PURE__*/ (0, $4feO0$jsxs)((0, $4feO0$muimaterialStack), {
                    spacing: 2,
                    children: [
                        /*#__PURE__*/ (0, $4feO0$jsxs)((0, $4feO0$muimaterialStack), {
                            direction: "row",
                            spacing: 2,
                            children: [
                                /*#__PURE__*/ (0, $4feO0$jsx)((0, $4feO0$muimaterialTypography), {
                                    variant: "h4",
                                    children: type
                                }),
                                /*#__PURE__*/ (0, $4feO0$jsx)((0, $4feO0$muimaterialSelect), {
                                    value: name,
                                    // onChange={e => setName(e.target.value)}
                                    autoWidth: true,
                                    children: names.map(({ name: name  })=>/*#__PURE__*/ (0, $4feO0$jsx)((0, $4feO0$muimaterialMenuItem), {
                                            value: name,
                                            component: (0, $3e26572ec1ad1291$export$2e2bcd8739ae039),
                                            to: `/debug/${isCommand ? "c" : "q"}/${name}`,
                                            children: name
                                        }, name))
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, $4feO0$jsx)((0, $4feO0$muimaterialTextField), {
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
                        /*#__PURE__*/ (0, $4feO0$jsxs)((0, $eba81024cd2a8d60$export$2e2bcd8739ae039), {
                            sx: {
                                mt: 2
                            },
                            children: [
                                /*#__PURE__*/ (0, $4feO0$jsx)((0, $4feO0$muimaterialButton), {
                                    disabled: disabled || !submittable,
                                    variant: "contained",
                                    type: "submit",
                                    autoFocus: true,
                                    children: isCommand ? "execute" : "query"
                                }),
                                /*#__PURE__*/ (0, $4feO0$jsx)((0, $4feO0$muimaterialButton), {
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
            /*#__PURE__*/ (0, $4feO0$jsx)("hr", {}),
            /*#__PURE__*/ (0, $4feO0$jsx)((0, $4feO0$muimaterialBox), {
                children: execution ? /*#__PURE__*/ (0, $4feO0$jsx)(Exec, {
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
function $4da4492bbdf2ba52$var$ExecuteQuery({ id: id , name: name , options: options , onComplete: onComplete  }) {
    const results = (0, $7f5c6f790c4cfcc9$export$dd0a697e1782aedd)(name, options, {
        dedupingInterval: 0,
        revalidateOnMount: true,
        revalidateOnFocus: true
    });
    (0, $4feO0$useEffect)(()=>{
        if (!results.loading) onComplete();
    }, [
        results.loading
    ]);
    return /*#__PURE__*/ (0, $4feO0$jsx)($4da4492bbdf2ba52$var$Execution, {
        ...results,
        name: name,
        options: options
    });
}
function $4da4492bbdf2ba52$var$ExecuteCommand({ name: name , options: options , onComplete: onComplete  }) {
    const results = (0, $7f5c6f790c4cfcc9$export$b87ac4c6452497e4)(name, options, {
        onComplete: onComplete
    });
    return /*#__PURE__*/ (0, $4feO0$jsx)($4da4492bbdf2ba52$var$Execution, {
        ...results,
        name: name,
        options: options
    });
}
function $4da4492bbdf2ba52$var$Execution({ name: name , options: options , result: result , loading: loading , error: error  }) {
    return /*#__PURE__*/ (0, $4feO0$jsx)((0, $4feO0$muimaterialBox), {
        children: loading ? /*#__PURE__*/ (0, $4feO0$jsx)((0, $4feO0$muimaterialCircularProgress), {}) : error ? /*#__PURE__*/ (0, $4feO0$jsx)((0, $79fa5d701d61042d$export$2e2bcd8739ae039), {
            error: error
        }) : /*#__PURE__*/ (0, $4feO0$jsx)((0, $41fd2a28aa9166e0$export$2e2bcd8739ae039), {
            object: result,
            sx: {
                m: 0,
                backgroundColor: "#232323"
            }
        })
    });
}
function $4da4492bbdf2ba52$var$Command({ name: name , options: options , ...prop }) {
    const command = (0, $7f5c6f790c4cfcc9$export$b87ac4c6452497e4)(name, options);
    return /*#__PURE__*/ (0, $4feO0$jsxs)(Tile, {
        title: `command: ${name}`,
        ...prop,
        children: [
            /*#__PURE__*/ (0, $4feO0$jsx)((0, $41fd2a28aa9166e0$export$2e2bcd8739ae039), {
                object: {
                    options: options
                }
            }),
            /*#__PURE__*/ (0, $4feO0$jsx)((0, $41fd2a28aa9166e0$export$2e2bcd8739ae039), {
                object: command
            })
        ]
    });
}
function $4da4492bbdf2ba52$var$safeJsonParse(json) {
    try {
        return JSON.parse(json);
    } catch (error) {
        return error;
    }
}


var $645baca380923c2c$exports = {};

$parcel$defineInteropFlag($645baca380923c2c$exports);

$parcel$export($645baca380923c2c$exports, "default", () => $645baca380923c2c$export$2e2bcd8739ae039);


function $645baca380923c2c$export$2e2bcd8739ae039() {
    return /*#__PURE__*/ (0, $4feO0$jsx)("div", {
        children: "Page Not Found"
    });
}



function $3dd63f87890e3432$export$b3890eb0ae9dca99(opts = {}) {
    const { Routes: Routes , theme: theme = (0, $da546089315e6731$export$2e2bcd8739ae039) ,  } = opts;
    root.render(/*#__PURE__*/ (0, $4feO0$jsx)($4feO0$StrictMode, {
        children: /*#__PURE__*/ (0, $4feO0$jsx)((0, $4feO0$BrowserRouter), {
            children: /*#__PURE__*/ (0, $4feO0$jsxs)((0, $4feO0$ThemeProvider), {
                theme: theme,
                children: [
                    /*#__PURE__*/ (0, $4feO0$jsx)((0, $4feO0$CssBaseline), {
                        enableColorScheme: true
                    }),
                    /*#__PURE__*/ (0, $4feO0$jsxs)(Routes, {
                        children: [
                            /*#__PURE__*/ (0, $4feO0$jsx)((0, $4feO0$Route), {
                                path: "/debug/*",
                                element: /*#__PURE__*/ (0, $4feO0$jsx)((0, $4da4492bbdf2ba52$export$2e2bcd8739ae039), {})
                            }),
                            /*#__PURE__*/ (0, $4feO0$jsx)((0, $4feO0$Route), {
                                path: "*",
                                element: /*#__PURE__*/ (0, $4feO0$jsx)((0, $645baca380923c2c$export$2e2bcd8739ae039), {})
                            })
                        ]
                    })
                ]
            })
        })
    }));
} // // If you want to start measuring performance in your app, pass a function
 // // to log results (for example: reportWebVitals(console.log))
 // // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 // reportWebVitals(console.log)


export {$3dd63f87890e3432$export$b3890eb0ae9dca99 as render};
