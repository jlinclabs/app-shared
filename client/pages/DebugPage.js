import {jsx as $dB5vX$jsx, jsxs as $dB5vX$jsxs} from "react/jsx-runtime";
import {useEffect as $dB5vX$useEffect, useState as $dB5vX$useState, useCallback as $dB5vX$useCallback, forwardRef as $dB5vX$forwardRef} from "react";
import {useLocation as $dB5vX$useLocation, Routes as $dB5vX$Routes, Route as $dB5vX$Route, useNavigate as $dB5vX$useNavigate, Link as $dB5vX$Link} from "react-router-dom";
import {ErrorBoundary as $dB5vX$ErrorBoundary} from "react-error-boundary";
import $dB5vX$muimaterialContainer from "@mui/material/Container";
import $dB5vX$muimaterialBox from "@mui/material/Box";
import $dB5vX$muimaterialPaper from "@mui/material/Paper";
import $dB5vX$muimaterialTypography from "@mui/material/Typography";
import $dB5vX$muimaterialStack from "@mui/material/Stack";
import $dB5vX$muimaterialSelect from "@mui/material/Select";
import $dB5vX$muimaterialMenuItem from "@mui/material/MenuItem";
import $dB5vX$muimaterialTextField from "@mui/material/TextField";
import $dB5vX$muimaterialButton from "@mui/material/Button";
import $dB5vX$muimaterialCircularProgress from "@mui/material/CircularProgress";
import $dB5vX$muimaterialList from "@mui/material/List";
import $dB5vX$muimaterialListItem from "@mui/material/ListItem";
import $dB5vX$muimaterialListItemButton from "@mui/material/ListItemButton";
import $dB5vX$muimaterialListItemIcon from "@mui/material/ListItemIcon";
import $dB5vX$muimaterialListItemText from "@mui/material/ListItemText";
import $dB5vX$muimaterialSkeleton from "@mui/material/Skeleton";
import "@mui/material/IconButton";
import "@mui/icons-material/Edit";
import "@mui/icons-material/Close";
import $dB5vX$muiiconsmaterialHelpOutline from "@mui/icons-material/HelpOutline";
import $dB5vX$muiiconsmaterialKeyboardCommandKeyTwoTone from "@mui/icons-material/KeyboardCommandKeyTwoTone";
import $dB5vX$muiiconsmaterialCottage from "@mui/icons-material/Cottage";
import $dB5vX$muimaterialAlert from "@mui/material/Alert";
import $dB5vX$muimaterialLink from "@mui/material/Link";
import $dB5vX$swr from "swr";

function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}



























var $623cbf1c5ba937db$exports = {};

$parcel$defineInteropFlag($623cbf1c5ba937db$exports);

$parcel$export($623cbf1c5ba937db$exports, "default", () => $623cbf1c5ba937db$export$2e2bcd8739ae039);








function $623cbf1c5ba937db$export$2e2bcd8739ae039({ error: error , resetErrorBoundary: resetErrorBoundary  }) {
    return /*#__PURE__*/ (0, $dB5vX$jsx)((0, $dB5vX$muimaterialContainer), {
        maxWidth: "lg",
        children: /*#__PURE__*/ (0, $dB5vX$jsxs)((0, $dB5vX$muimaterialPaper), {
            elevation: 3,
            role: "alert",
            sx: {
                m: 3,
                p: 3
            },
            children: [
                /*#__PURE__*/ (0, $dB5vX$jsx)((0, $dB5vX$muimaterialAlert), {
                    severity: "error",
                    children: "App Error"
                }),
                /*#__PURE__*/ (0, $dB5vX$jsxs)((0, $dB5vX$muimaterialBox), {
                    component: "pre",
                    sx: {
                        overflow: "scroll"
                    },
                    children: [
                        /*#__PURE__*/ (0, $dB5vX$jsx)((0, $dB5vX$muimaterialTypography), {
                            variant: "h4",
                            children: error.message
                        }),
                        /*#__PURE__*/ (0, $dB5vX$jsx)("br", {}),
                        error.stack
                    ]
                }),
                /*#__PURE__*/ (0, $dB5vX$jsx)((0, $dB5vX$muimaterialButton), {
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




const $3e26572ec1ad1291$var$Link = /*#__PURE__*/ $dB5vX$forwardRef(({ ...props }, ref)=>{
    props.component = "a";
    if (props.to) props.component = (0, $dB5vX$Link);
    if (props.to && props.to.startsWith("http")) {
        props.href = props.to;
        delete props.to;
        props.rel = props.rel || "noopener noreferrer";
        props.target = props.target || "_blank";
        props.component = "a";
    }
    return /*#__PURE__*/ (0, $dB5vX$jsx)((0, $dB5vX$muimaterialLink), {
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
    const _onSubmit = $dB5vX$useCallback((event)=>{
        event.preventDefault();
        if (disabled || !onSubmit) return;
        const formData = new FormData(event.currentTarget);
        onSubmit(event, formData);
    }, [
        disabled,
        onSubmit
    ]);
    return /*#__PURE__*/ (0, $dB5vX$jsx)((0, $dB5vX$muimaterialBox), {
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
    return /*#__PURE__*/ (0, $dB5vX$jsx)((0, $dB5vX$muimaterialStack), {
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
    return /*#__PURE__*/ (0, $dB5vX$jsx)((0, $dB5vX$muimaterialAlert), {
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
    let setState = (0, $dB5vX$useState)()[1];
    (0, $dB5vX$useEffect)(()=>()=>{
            setState = $8e5aa45bd2bf2df3$var$noop;
        }, []);
    return (0, $dB5vX$useCallback)(()=>{
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
    const [ctx] = (0, $dB5vX$useState)({});
    const setState = (state)=>{
        ctx.state = $2e683807ce90e650$var$STATES[state];
        $2e683807ce90e650$var$STATES.forEach((name, index)=>{
            ctx[name] = index === state;
        });
        forceUpdate();
    };
    if (ctx.state === undefined) setState(0);
    ctx.call = (0, $dB5vX$useCallback)((...args)=>{
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
    (0, $dB5vX$useEffect)(()=>{
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
    const { data: result , error: error , mutate: mutate  } = (0, $dB5vX$swr)(swrKey, {
        ...config,
        fetcher: $7f5c6f790c4cfcc9$export$a1c549e76b7f385e
    });
    const loading = typeof result === "undefined" && !error;
    const reload = (0, $dB5vX$useCallback)(()=>{
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
    (0, $dB5vX$useEffect)(()=>{
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
    return /*#__PURE__*/ (0, $dB5vX$jsx)((0, $dB5vX$muimaterialBox), {
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
    const location = (0, $dB5vX$useLocation)();
    const name = location.pathname.split("/").reverse()[0];
    const search = $4da4492bbdf2ba52$var$searchToObject(location.search);
    const optionsJson = search.opts;
    (0, $dB5vX$useEffect)(()=>{
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
    return /*#__PURE__*/ (0, $dB5vX$jsx)((0, $dB5vX$muimaterialContainer), {
        maxWidth: false,
        disableGutters: true,
        children: /*#__PURE__*/ (0, $dB5vX$jsxs)((0, $dB5vX$muimaterialBox), {
            sx: {
                display: "flex",
                flexDirection: "row",
                minHeight: "100vh",
                minWidth: "100vw"
            },
            children: [
                /*#__PURE__*/ (0, $dB5vX$jsx)($4da4492bbdf2ba52$var$SideNav, {
                    spec: spec
                }),
                /*#__PURE__*/ (0, $dB5vX$jsxs)((0, $dB5vX$muimaterialBox), {
                    sx: {
                        flex: "1 1",
                        p: 2
                    },
                    children: [
                        /*#__PURE__*/ (0, $dB5vX$jsx)((0, $79fa5d701d61042d$export$2e2bcd8739ae039), {
                            error: error
                        }),
                        /*#__PURE__*/ (0, $dB5vX$jsx)((0, $dB5vX$ErrorBoundary), {
                            FallbackComponent: (0, $623cbf1c5ba937db$export$2e2bcd8739ae039),
                            children: /*#__PURE__*/ (0, $dB5vX$jsxs)((0, $dB5vX$Routes), {
                                children: [
                                    /*#__PURE__*/ (0, $dB5vX$jsx)((0, $dB5vX$Route), {
                                        path: "/q/:name",
                                        element: /*#__PURE__*/ (0, $dB5vX$jsx)($4da4492bbdf2ba52$var$ExecForm, {
                                            ...props,
                                            type: "query"
                                        }, name),
                                        title: "do a query"
                                    }),
                                    /*#__PURE__*/ (0, $dB5vX$jsx)((0, $dB5vX$Route), {
                                        path: "/c/:name",
                                        element: /*#__PURE__*/ (0, $dB5vX$jsx)($4da4492bbdf2ba52$var$ExecForm, {
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
    return /*#__PURE__*/ (0, $dB5vX$jsxs)((0, $dB5vX$muimaterialBox), {
        sx: {
            display: "flex",
            flexDirection: "column",
            backgroundColor: "primary.dark",
            minWidth: `max(10vw, 175px)`,
            maxWidth: `max(20vw, 400px)`,
            overflowX: "auto"
        },
        children: [
            /*#__PURE__*/ (0, $dB5vX$jsxs)((0, $dB5vX$muimaterialTypography), {
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
            /*#__PURE__*/ (0, $dB5vX$jsx)($4da4492bbdf2ba52$var$SideNavButton, {
                to: `/`,
                icon: /*#__PURE__*/ (0, $dB5vX$jsx)((0, $dB5vX$muiiconsmaterialCottage), {}),
                title: "Home"
            }),
            /*#__PURE__*/ (0, $dB5vX$jsx)($4da4492bbdf2ba52$var$SideNavButtonList, {
                name: "Queries",
                types: spec?.queries,
                icon: /*#__PURE__*/ (0, $dB5vX$jsx)((0, $dB5vX$muiiconsmaterialHelpOutline), {}),
                linkPrefix: "/debug/q/"
            }),
            /*#__PURE__*/ (0, $dB5vX$jsx)($4da4492bbdf2ba52$var$SideNavButtonList, {
                name: "Commands",
                types: spec?.commands,
                icon: /*#__PURE__*/ (0, $dB5vX$jsx)((0, $dB5vX$muiiconsmaterialKeyboardCommandKeyTwoTone), {}),
                linkPrefix: "/debug/c/"
            })
        ]
    });
}
function $4da4492bbdf2ba52$var$SideNavButton({ icon: icon , title: title , subtitle: subtitle , ...props }) {
    if (props.to) props.component = (0, $3e26572ec1ad1291$export$2e2bcd8739ae039);
    return /*#__PURE__*/ (0, $dB5vX$jsx)((0, $dB5vX$muimaterialListItem), {
        disablePadding: true,
        children: /*#__PURE__*/ (0, $dB5vX$jsxs)((0, $dB5vX$muimaterialListItemButton), {
            ...props,
            children: [
                /*#__PURE__*/ (0, $dB5vX$jsx)((0, $dB5vX$muimaterialListItemIcon), {
                    sx: {
                        minWidth: "30px"
                    },
                    children: icon
                }),
                /*#__PURE__*/ (0, $dB5vX$jsx)((0, $dB5vX$muimaterialListItemText), {
                    primary: title,
                    secondary: subtitle
                })
            ]
        })
    });
}
function $4da4492bbdf2ba52$var$SideNavButtonList({ name: name , types: types , icon: icon , linkPrefix: linkPrefix  }) {
    return /*#__PURE__*/ (0, $dB5vX$jsxs)((0, $dB5vX$muimaterialBox), {
        children: [
            /*#__PURE__*/ (0, $dB5vX$jsx)((0, $dB5vX$muimaterialTypography), {
                variant: "h6",
                sx: {
                    pl: 1
                },
                children: name
            }),
            /*#__PURE__*/ (0, $dB5vX$jsx)((0, $dB5vX$muimaterialList), {
                dense: true,
                sx: {
                    pt: 0
                },
                children: Array.isArray(types) ? [
                    ...types
                ].sort().map(({ name: name , args: args  })=>/*#__PURE__*/ (0, $dB5vX$jsx)($4da4492bbdf2ba52$var$SideNavButton, {
                        key: name,
                        to: `${linkPrefix}${name}`,
                        icon: icon,
                        title: name,
                        subtitle: args
                    })) : Array(3).fill().map((_, i)=>/*#__PURE__*/ (0, $dB5vX$jsx)((0, $dB5vX$muimaterialSkeleton), {
                        animation: "wave",
                        height: "40px"
                    }, i))
            })
        ]
    });
}
function $4da4492bbdf2ba52$var$ExecForm({ spec: spec , type: type , name: name , optionsJson: optionsJson = "{}"  }) {
    const location = (0, $dB5vX$useLocation)();
    const navigate = (0, $dB5vX$useNavigate)();
    const isCommand = type === "command";
    const options = $4da4492bbdf2ba52$var$safeJsonParse(optionsJson);
    const optionsJsonIsValid = !(options instanceof Error);
    const submittable = !!(name && optionsJsonIsValid);
    const [execution, setExecution] = (0, $dB5vX$useState)(type === "query" && submittable ? {
        name: name,
        options: options
    } : null);
    const [executionDone, setExecutionDone] = (0, $dB5vX$useState)(false);
    const setOptionsJson = (0, $dB5vX$useCallback)((optionsJson, replace = false)=>{
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
    const reset = (0, $dB5vX$useCallback)(()=>{
        setOptionsJson(undefined, false);
        setExecution(null);
        setExecutionDone(false);
    }, [
        setOptionsJson
    ]);
    const onSubmit = (0, $dB5vX$useCallback)(()=>{
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
    return /*#__PURE__*/ (0, $dB5vX$jsxs)((0, $dB5vX$muimaterialBox), {
        children: [
            /*#__PURE__*/ (0, $dB5vX$jsx)((0, $6252030698aa3768$export$2e2bcd8739ae039), {
                disabled: disabled,
                onSubmit: onSubmit,
                children: /*#__PURE__*/ (0, $dB5vX$jsxs)((0, $dB5vX$muimaterialStack), {
                    spacing: 2,
                    children: [
                        /*#__PURE__*/ (0, $dB5vX$jsxs)((0, $dB5vX$muimaterialStack), {
                            direction: "row",
                            spacing: 2,
                            children: [
                                /*#__PURE__*/ (0, $dB5vX$jsx)((0, $dB5vX$muimaterialTypography), {
                                    variant: "h4",
                                    children: type
                                }),
                                /*#__PURE__*/ (0, $dB5vX$jsx)((0, $dB5vX$muimaterialSelect), {
                                    value: name,
                                    // onChange={e => setName(e.target.value)}
                                    autoWidth: true,
                                    children: names.map(({ name: name  })=>/*#__PURE__*/ (0, $dB5vX$jsx)((0, $dB5vX$muimaterialMenuItem), {
                                            value: name,
                                            component: (0, $3e26572ec1ad1291$export$2e2bcd8739ae039),
                                            to: `/debug/${isCommand ? "c" : "q"}/${name}`,
                                            children: name
                                        }, name))
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, $dB5vX$jsx)((0, $dB5vX$muimaterialTextField), {
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
                        /*#__PURE__*/ (0, $dB5vX$jsxs)((0, $eba81024cd2a8d60$export$2e2bcd8739ae039), {
                            sx: {
                                mt: 2
                            },
                            children: [
                                /*#__PURE__*/ (0, $dB5vX$jsx)((0, $dB5vX$muimaterialButton), {
                                    disabled: disabled || !submittable,
                                    variant: "contained",
                                    type: "submit",
                                    autoFocus: true,
                                    children: isCommand ? "execute" : "query"
                                }),
                                /*#__PURE__*/ (0, $dB5vX$jsx)((0, $dB5vX$muimaterialButton), {
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
            /*#__PURE__*/ (0, $dB5vX$jsx)("hr", {}),
            /*#__PURE__*/ (0, $dB5vX$jsx)((0, $dB5vX$muimaterialBox), {
                children: execution ? /*#__PURE__*/ (0, $dB5vX$jsx)(Exec, {
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
    (0, $dB5vX$useEffect)(()=>{
        if (!results.loading) onComplete();
    }, [
        results.loading
    ]);
    return /*#__PURE__*/ (0, $dB5vX$jsx)($4da4492bbdf2ba52$var$Execution, {
        ...results,
        name: name,
        options: options
    });
}
function $4da4492bbdf2ba52$var$ExecuteCommand({ name: name , options: options , onComplete: onComplete  }) {
    const results = (0, $7f5c6f790c4cfcc9$export$b87ac4c6452497e4)(name, options, {
        onComplete: onComplete
    });
    return /*#__PURE__*/ (0, $dB5vX$jsx)($4da4492bbdf2ba52$var$Execution, {
        ...results,
        name: name,
        options: options
    });
}
function $4da4492bbdf2ba52$var$Execution({ name: name , options: options , result: result , loading: loading , error: error  }) {
    return /*#__PURE__*/ (0, $dB5vX$jsx)((0, $dB5vX$muimaterialBox), {
        children: loading ? /*#__PURE__*/ (0, $dB5vX$jsx)((0, $dB5vX$muimaterialCircularProgress), {}) : error ? /*#__PURE__*/ (0, $dB5vX$jsx)((0, $79fa5d701d61042d$export$2e2bcd8739ae039), {
            error: error
        }) : /*#__PURE__*/ (0, $dB5vX$jsx)((0, $41fd2a28aa9166e0$export$2e2bcd8739ae039), {
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
    return /*#__PURE__*/ (0, $dB5vX$jsxs)(Tile, {
        title: `command: ${name}`,
        ...prop,
        children: [
            /*#__PURE__*/ (0, $dB5vX$jsx)((0, $41fd2a28aa9166e0$export$2e2bcd8739ae039), {
                object: {
                    options: options
                }
            }),
            /*#__PURE__*/ (0, $dB5vX$jsx)((0, $41fd2a28aa9166e0$export$2e2bcd8739ae039), {
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


export {$4da4492bbdf2ba52$export$2e2bcd8739ae039 as default};
