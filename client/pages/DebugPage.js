import {jsx as $d8gED$jsx, jsxs as $d8gED$jsxs} from "react/jsx-runtime";
import {useEffect as $d8gED$useEffect, useState as $d8gED$useState, useCallback as $d8gED$useCallback, forwardRef as $d8gED$forwardRef} from "react";
import {useLocation as $d8gED$useLocation, Routes as $d8gED$Routes, Route as $d8gED$Route, useNavigate as $d8gED$useNavigate, Link as $d8gED$Link} from "react-router-dom";
import {ErrorBoundary as $d8gED$ErrorBoundary} from "react-error-boundary";
import $d8gED$muimaterialContainer from "@mui/material/Container";
import $d8gED$muimaterialBox from "@mui/material/Box";
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
import $d8gED$muiiconsmaterialHelpOutline from "@mui/icons-material/HelpOutline";
import $d8gED$muiiconsmaterialKeyboardCommandKeyTwoTone from "@mui/icons-material/KeyboardCommandKeyTwoTone";
import $d8gED$muiiconsmaterialCottage from "@mui/icons-material/Cottage";
import $d8gED$muimaterialPaper from "@mui/material/Paper";
import $d8gED$muimaterialAlert from "@mui/material/Alert";
import $d8gED$muimaterialLink from "@mui/material/Link";
import $d8gED$swr from "swr";

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























var $398477c469915369$exports = {};

$parcel$defineInteropFlag($398477c469915369$exports);

$parcel$export($398477c469915369$exports, "default", () => $398477c469915369$export$2e2bcd8739ae039);








function $398477c469915369$export$2e2bcd8739ae039({ error: error , resetErrorBoundary: resetErrorBoundary  }) {
    return /*#__PURE__*/ (0, $d8gED$jsx)((0, $d8gED$muimaterialContainer), {
        maxWidth: "lg",
        children: /*#__PURE__*/ (0, $d8gED$jsxs)((0, $d8gED$muimaterialPaper), {
            elevation: 3,
            role: "alert",
            sx: {
                m: 3,
                p: 3
            },
            children: [
                /*#__PURE__*/ (0, $d8gED$jsx)((0, $d8gED$muimaterialAlert), {
                    severity: "error",
                    children: "App Error"
                }),
                /*#__PURE__*/ (0, $d8gED$jsxs)((0, $d8gED$muimaterialBox), {
                    component: "pre",
                    sx: {
                        overflow: "scroll"
                    },
                    children: [
                        /*#__PURE__*/ (0, $d8gED$jsx)((0, $d8gED$muimaterialTypography), {
                            variant: "h4",
                            children: error.message
                        }),
                        /*#__PURE__*/ (0, $d8gED$jsx)("br", {}),
                        error.stack
                    ]
                }),
                /*#__PURE__*/ (0, $d8gED$jsx)((0, $d8gED$muimaterialButton), {
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
    return /*#__PURE__*/ (0, $d8gED$jsx)((0, $d8gED$muimaterialLink), {
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
    const _onSubmit = $d8gED$useCallback((event)=>{
        event.preventDefault();
        if (disabled || !onSubmit) return;
        const formData = new FormData(event.currentTarget);
        onSubmit(event, formData);
    }, [
        disabled,
        onSubmit
    ]);
    return /*#__PURE__*/ (0, $d8gED$jsx)((0, $d8gED$muimaterialBox), {
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
    return /*#__PURE__*/ (0, $d8gED$jsx)((0, $d8gED$muimaterialStack), {
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
    return /*#__PURE__*/ (0, $d8gED$jsx)((0, $d8gED$muimaterialAlert), {
        severity: "error",
        ...props,
        children: error.message
    });
};
var $e57fa53a045bcfbf$export$2e2bcd8739ae039 = $e57fa53a045bcfbf$var$ErrorMessage;


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
            if (onComplete) onComplete(result);
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
    const { data: result , error: error , mutate: mutate  } = (0, $d8gED$swr)(swrKey, {
        ...config,
        fetcher: $80d64c4521a01cab$export$a1c549e76b7f385e
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
function $80d64c4521a01cab$export$194d0c7cb6792e23(name, config) {
    return (0, $27954de794c56674$export$2e2bcd8739ae039)((options)=>$80d64c4521a01cab$export$df781a4386db1cc8(name, options), config);
}
function $80d64c4521a01cab$export$b87ac4c6452497e4(name, options, config) {
    const command = $80d64c4521a01cab$export$194d0c7cb6792e23(name, config);
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
    return /*#__PURE__*/ (0, $d8gED$jsx)((0, $d8gED$muimaterialBox), {
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


const $bd5e7b1f34144514$var$searchToString = (object)=>new URLSearchParams(object).toString();
const $bd5e7b1f34144514$var$searchToObject = (search)=>Object.fromEntries(new URLSearchParams(search).entries());
function $bd5e7b1f34144514$export$2e2bcd8739ae039({ appName: appName  }) {
    const location = (0, $d8gED$useLocation)();
    const name = location.pathname.split("/").reverse()[0];
    const search = $bd5e7b1f34144514$var$searchToObject(location.search);
    const optionsJson = search.opts;
    (0, $d8gED$useEffect)(()=>{
        document.title = `Debug ${appName}: ${name}(${optionsJson || ""})`;
    }, [
        name,
        optionsJson
    ]);
    const { result: spec , error: error  } = (0, $80d64c4521a01cab$export$dd0a697e1782aedd)("debug.getQueriesAndCommands");
    const props = {
        spec: spec,
        name: name,
        optionsJson: optionsJson
    };
    return /*#__PURE__*/ (0, $d8gED$jsx)((0, $d8gED$muimaterialContainer), {
        maxWidth: false,
        disableGutters: true,
        children: /*#__PURE__*/ (0, $d8gED$jsxs)((0, $d8gED$muimaterialBox), {
            sx: {
                display: "flex",
                flexDirection: "row",
                minHeight: "100vh",
                minWidth: "100vw"
            },
            children: [
                /*#__PURE__*/ (0, $d8gED$jsx)($bd5e7b1f34144514$var$SideNav, {
                    appName: appName,
                    spec: spec
                }),
                /*#__PURE__*/ (0, $d8gED$jsxs)((0, $d8gED$muimaterialBox), {
                    sx: {
                        flex: "1 1",
                        p: 2
                    },
                    children: [
                        /*#__PURE__*/ (0, $d8gED$jsx)((0, $e57fa53a045bcfbf$export$2e2bcd8739ae039), {
                            error: error
                        }),
                        /*#__PURE__*/ (0, $d8gED$jsx)((0, $d8gED$ErrorBoundary), {
                            onError: (0, $398477c469915369$export$2e2bcd8739ae039),
                            children: /*#__PURE__*/ (0, $d8gED$jsxs)((0, $d8gED$Routes), {
                                children: [
                                    /*#__PURE__*/ (0, $d8gED$jsx)((0, $d8gED$Route), {
                                        path: "/q/:name",
                                        element: /*#__PURE__*/ (0, $d8gED$jsx)($bd5e7b1f34144514$var$ExecForm, {
                                            ...props,
                                            type: "query"
                                        }, name),
                                        title: "do a query"
                                    }),
                                    /*#__PURE__*/ (0, $d8gED$jsx)((0, $d8gED$Route), {
                                        path: "/c/:name",
                                        element: /*#__PURE__*/ (0, $d8gED$jsx)($bd5e7b1f34144514$var$ExecForm, {
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
function $bd5e7b1f34144514$var$SideNav({ appName: appName , spec: spec  }) {
    return /*#__PURE__*/ (0, $d8gED$jsxs)((0, $d8gED$muimaterialBox), {
        sx: {
            display: "flex",
            flexDirection: "column",
            backgroundColor: "primary.dark",
            minWidth: `max(10vw, 175px)`,
            maxWidth: `max(20vw, 400px)`,
            overflowX: "auto"
        },
        children: [
            /*#__PURE__*/ (0, $d8gED$jsxs)((0, $d8gED$muimaterialTypography), {
                variant: "h6",
                sx: {
                    my: 2,
                    textAlign: "center"
                },
                children: [
                    "Debug ",
                    appName
                ]
            }),
            /*#__PURE__*/ (0, $d8gED$jsx)($bd5e7b1f34144514$var$SideNavButton, {
                to: `/`,
                icon: /*#__PURE__*/ (0, $d8gED$jsx)((0, $d8gED$muiiconsmaterialCottage), {}),
                title: "Home"
            }),
            /*#__PURE__*/ (0, $d8gED$jsx)($bd5e7b1f34144514$var$SideNavButtonList, {
                name: "Queries",
                tree: spec?.queries,
                icon: /*#__PURE__*/ (0, $d8gED$jsx)((0, $d8gED$muiiconsmaterialHelpOutline), {}),
                linkPrefix: "/debug/q/"
            }),
            /*#__PURE__*/ (0, $d8gED$jsx)($bd5e7b1f34144514$var$SideNavButtonList, {
                name: "Commands",
                tree: spec?.commands,
                icon: /*#__PURE__*/ (0, $d8gED$jsx)((0, $d8gED$muiiconsmaterialKeyboardCommandKeyTwoTone), {}),
                linkPrefix: "/debug/c/"
            })
        ]
    });
}
function $bd5e7b1f34144514$var$SideNavButton({ icon: icon , title: title , subtitle: subtitle , ...props }) {
    if (props.to) props.component = (0, $08b8c86ef070e3a0$export$2e2bcd8739ae039);
    return /*#__PURE__*/ (0, $d8gED$jsx)((0, $d8gED$muimaterialListItem), {
        disablePadding: true,
        children: /*#__PURE__*/ (0, $d8gED$jsxs)((0, $d8gED$muimaterialListItemButton), {
            ...props,
            children: [
                /*#__PURE__*/ (0, $d8gED$jsx)((0, $d8gED$muimaterialListItemIcon), {
                    sx: {
                        minWidth: "30px"
                    },
                    children: icon
                }),
                /*#__PURE__*/ (0, $d8gED$jsx)((0, $d8gED$muimaterialListItemText), {
                    primary: title,
                    secondary: subtitle
                })
            ]
        })
    });
}
function $bd5e7b1f34144514$var$SideNavButtonList({ name: name , tree: tree , icon: icon , linkPrefix: linkPrefix  }) {
    const objectToNodes = (obj)=>{
        const nodes = [];
        for(const key in obj){
            if (key.startsWith("__")) continue;
            const value = obj[key];
            const node = value && value.name && value.source ? /*#__PURE__*/ (0, $d8gED$jsx)($bd5e7b1f34144514$var$SideNavButton, {
                key: key,
                to: `${linkPrefix}${key}`,
                icon: icon,
                title: key,
                subtitle: value.args
            }) : /*#__PURE__*/ (0, $d8gED$jsx)("div", {
                children: "DOWN"
            });
            nodes.push(node);
        }
        return nodes;
    };
    const list = tree ? objectToNodes(tree) : Array(3).fill("").map((_, i)=>/*#__PURE__*/ (0, $d8gED$jsx)((0, $d8gED$muimaterialSkeleton), {
            animation: "wave",
            height: "40px"
        }, i));
    return /*#__PURE__*/ (0, $d8gED$jsxs)((0, $d8gED$muimaterialBox), {
        children: [
            /*#__PURE__*/ (0, $d8gED$jsx)((0, $d8gED$muimaterialTypography), {
                variant: "h6",
                sx: {
                    pl: 1
                },
                children: name
            }),
            /*#__PURE__*/ (0, $d8gED$jsx)((0, $d8gED$muimaterialList), {
                dense: true,
                sx: {
                    pt: 0
                },
                children: list
            })
        ]
    });
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
    const procedures = spec && Object.values(isCommand ? spec.commands : spec.queries) || [];
    const disabled = !!(execution && !executionDone);
    const Exec = isCommand ? $bd5e7b1f34144514$var$ExecuteCommand : $bd5e7b1f34144514$var$ExecuteQuery;
    return /*#__PURE__*/ (0, $d8gED$jsxs)((0, $d8gED$muimaterialBox), {
        children: [
            /*#__PURE__*/ (0, $d8gED$jsx)((0, $1abdbf2868e540b2$export$2e2bcd8739ae039), {
                disabled: disabled,
                onSubmit: onSubmit,
                children: /*#__PURE__*/ (0, $d8gED$jsxs)((0, $d8gED$muimaterialStack), {
                    spacing: 2,
                    children: [
                        /*#__PURE__*/ (0, $d8gED$jsxs)((0, $d8gED$muimaterialStack), {
                            direction: "row",
                            spacing: 2,
                            children: [
                                /*#__PURE__*/ (0, $d8gED$jsx)((0, $d8gED$muimaterialTypography), {
                                    variant: "h4",
                                    children: type
                                }),
                                /*#__PURE__*/ (0, $d8gED$jsx)((0, $d8gED$muimaterialSelect), {
                                    value: name,
                                    autoWidth: true,
                                    children: procedures.map(({ name: name  })=>/*#__PURE__*/ (0, $d8gED$jsx)((0, $d8gED$muimaterialMenuItem), {
                                            value: name,
                                            component: (0, $08b8c86ef070e3a0$export$2e2bcd8739ae039),
                                            to: `/debug/${isCommand ? "c" : "q"}/${name}`,
                                            children: name
                                        }, name))
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, $d8gED$jsx)((0, $d8gED$muimaterialTextField), {
                            disabled: disabled,
                            label: "options (JSON)",
                            fullWidth: true,
                            multiline: true,
                            value: optionsJson,
                            onChange: (e)=>{
                                setOptionsJson(e.target.value, true);
                            },
                            error: !optionsJsonIsValid
                        }),
                        /*#__PURE__*/ (0, $d8gED$jsxs)((0, $33fea69a0e10afc7$export$2e2bcd8739ae039), {
                            sx: {
                                mt: 2
                            },
                            children: [
                                /*#__PURE__*/ (0, $d8gED$jsx)((0, $d8gED$muimaterialButton), {
                                    disabled: disabled || !submittable,
                                    variant: "contained",
                                    type: "submit",
                                    autoFocus: true,
                                    children: isCommand ? "execute" : "query"
                                }),
                                /*#__PURE__*/ (0, $d8gED$jsx)((0, $d8gED$muimaterialButton), {
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
            /*#__PURE__*/ (0, $d8gED$jsx)("hr", {}),
            /*#__PURE__*/ (0, $d8gED$jsx)((0, $d8gED$muimaterialBox), {
                children: execution ? /*#__PURE__*/ (0, $d8gED$jsx)(Exec, {
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
function $bd5e7b1f34144514$var$ExecuteQuery({ name: name , options: options , onComplete: onComplete  }) {
    const results = (0, $80d64c4521a01cab$export$dd0a697e1782aedd)(name, options, {
        dedupingInterval: 0,
        revalidateOnMount: true,
        revalidateOnFocus: true
    });
    (0, $d8gED$useEffect)(()=>{
        if (!results.loading) onComplete();
    }, [
        results.loading
    ]);
    return /*#__PURE__*/ (0, $d8gED$jsx)($bd5e7b1f34144514$var$Execution, {
        ...results,
        name: name,
        options: options
    });
}
function $bd5e7b1f34144514$var$ExecuteCommand({ name: name , options: options , onComplete: onComplete  }) {
    const results = (0, $80d64c4521a01cab$export$b87ac4c6452497e4)(name, options, {
        onComplete: onComplete
    });
    return /*#__PURE__*/ (0, $d8gED$jsx)($bd5e7b1f34144514$var$Execution, {
        ...results,
        name: name,
        options: options
    });
}
function $bd5e7b1f34144514$var$Execution({ result: result , loading: loading , error: error  }) {
    return /*#__PURE__*/ (0, $d8gED$jsx)((0, $d8gED$muimaterialBox), {
        children: loading ? /*#__PURE__*/ (0, $d8gED$jsx)((0, $d8gED$muimaterialCircularProgress), {}) : error ? /*#__PURE__*/ (0, $d8gED$jsx)((0, $e57fa53a045bcfbf$export$2e2bcd8739ae039), {
            error: error
        }) : /*#__PURE__*/ (0, $d8gED$jsx)((0, $b5643637aedb000b$export$2e2bcd8739ae039), {
            object: result,
            sx: {
                m: 0,
                backgroundColor: "#232323"
            }
        })
    });
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
