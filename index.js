import {jsx as $9C1r0$jsx, jsxs as $9C1r0$jsxs} from "react/jsx-runtime";
import {StrictMode as $9C1r0$StrictMode, useEffect as $9C1r0$useEffect, useState as $9C1r0$useState, useCallback as $9C1r0$useCallback, forwardRef as $9C1r0$forwardRef} from "react";
import $9C1r0$reactdomclient from "react-dom/client";
import {BrowserRouter as $9C1r0$BrowserRouter, Route as $9C1r0$Route, useLocation as $9C1r0$useLocation, Routes as $9C1r0$Routes, useNavigate as $9C1r0$useNavigate, Link as $9C1r0$Link} from "react-router-dom";
import {ThemeProvider as $9C1r0$ThemeProvider, CssBaseline as $9C1r0$CssBaseline} from "@mui/material";
import {createTheme as $9C1r0$createTheme} from "@mui/material/styles";
import {ErrorBoundary as $9C1r0$ErrorBoundary} from "react-error-boundary";
import $9C1r0$muimaterialContainer from "@mui/material/Container";
import $9C1r0$muimaterialBox from "@mui/material/Box";
import $9C1r0$muimaterialPaper from "@mui/material/Paper";
import $9C1r0$muimaterialTypography from "@mui/material/Typography";
import $9C1r0$muimaterialStack from "@mui/material/Stack";
import $9C1r0$muimaterialSelect from "@mui/material/Select";
import $9C1r0$muimaterialMenuItem from "@mui/material/MenuItem";
import $9C1r0$muimaterialTextField from "@mui/material/TextField";
import $9C1r0$muimaterialButton from "@mui/material/Button";
import $9C1r0$muimaterialCircularProgress from "@mui/material/CircularProgress";
import $9C1r0$muimaterialList from "@mui/material/List";
import $9C1r0$muimaterialListItem from "@mui/material/ListItem";
import $9C1r0$muimaterialListItemButton from "@mui/material/ListItemButton";
import $9C1r0$muimaterialListItemIcon from "@mui/material/ListItemIcon";
import $9C1r0$muimaterialListItemText from "@mui/material/ListItemText";
import $9C1r0$muimaterialSkeleton from "@mui/material/Skeleton";
import "@mui/material/IconButton";
import "@mui/icons-material/Edit";
import "@mui/icons-material/Close";
import $9C1r0$muiiconsmaterialHelpOutline from "@mui/icons-material/HelpOutline";
import $9C1r0$muiiconsmaterialKeyboardCommandKeyTwoTone from "@mui/icons-material/KeyboardCommandKeyTwoTone";
import $9C1r0$muiiconsmaterialCottage from "@mui/icons-material/Cottage";
import $9C1r0$muimaterialAlert from "@mui/material/Alert";
import $9C1r0$muimaterialLink from "@mui/material/Link";
import $9C1r0$swr from "swr";







const $1d8cbae82c05f940$var$darkTheme = (0, $9C1r0$createTheme)({
    palette: {
        mode: "dark"
    }
});
var $1d8cbae82c05f940$export$2e2bcd8739ae039 = $1d8cbae82c05f940$var$darkTheme;




































function $3d719368a5899ee3$export$2e2bcd8739ae039({ error: error , resetErrorBoundary: resetErrorBoundary  }) {
    return /*#__PURE__*/ (0, $9C1r0$jsx)((0, $9C1r0$muimaterialContainer), {
        maxWidth: "lg",
        children: /*#__PURE__*/ (0, $9C1r0$jsxs)((0, $9C1r0$muimaterialPaper), {
            elevation: 3,
            role: "alert",
            sx: {
                m: 3,
                p: 3
            },
            children: [
                /*#__PURE__*/ (0, $9C1r0$jsx)((0, $9C1r0$muimaterialAlert), {
                    severity: "error",
                    children: "App Error"
                }),
                /*#__PURE__*/ (0, $9C1r0$jsxs)((0, $9C1r0$muimaterialBox), {
                    component: "pre",
                    sx: {
                        overflow: "scroll"
                    },
                    children: [
                        /*#__PURE__*/ (0, $9C1r0$jsx)((0, $9C1r0$muimaterialTypography), {
                            variant: "h4",
                            children: error.message
                        }),
                        /*#__PURE__*/ (0, $9C1r0$jsx)("br", {}),
                        error.stack
                    ]
                }),
                /*#__PURE__*/ (0, $9C1r0$jsx)((0, $9C1r0$muimaterialButton), {
                    variant: "contained",
                    onClick: resetErrorBoundary,
                    children: "Try again"
                })
            ]
        })
    });
}






const $221b7e10b88f4f3b$var$Link = /*#__PURE__*/ $9C1r0$forwardRef(({ ...props }, ref)=>{
    props.component = "a";
    if (props.to) props.component = (0, $9C1r0$Link);
    if (props.to && props.to.startsWith("http")) {
        props.href = props.to;
        delete props.to;
        props.rel = props.rel || "noopener noreferrer";
        props.target = props.target || "_blank";
        props.component = "a";
    }
    return /*#__PURE__*/ (0, $9C1r0$jsx)((0, $9C1r0$muimaterialLink), {
        ...props,
        ref: ref
    });
});
$221b7e10b88f4f3b$var$Link.displayName = "Link";
var $221b7e10b88f4f3b$export$2e2bcd8739ae039 = $221b7e10b88f4f3b$var$Link;





function $b65149095c15705d$export$2e2bcd8739ae039({ disabled: disabled , children: children , onSubmit: onSubmit , ...props }) {
    const _onSubmit = $9C1r0$useCallback((event)=>{
        event.preventDefault();
        if (disabled || !onSubmit) return;
        const formData = new FormData(event.currentTarget);
        onSubmit(event, formData);
    }, [
        disabled,
        onSubmit
    ]);
    return /*#__PURE__*/ (0, $9C1r0$jsx)((0, $9C1r0$muimaterialBox), {
        component: "form",
        disabled: disabled,
        ...props,
        onSubmit: _onSubmit,
        children: children
    });
}





function $cf41b83118593c41$export$2e2bcd8739ae039({ children: children , ...props }) {
    return /*#__PURE__*/ (0, $9C1r0$jsx)((0, $9C1r0$muimaterialStack), {
        spacing: 2,
        direction: "row-reverse",
        alignItems: "center",
        ...props,
        children: children
    });
}





const $16b11e6140cc6f3e$var$ErrorMessage = ({ error: error , ...props })=>{
    if (!error) return null;
    return /*#__PURE__*/ (0, $9C1r0$jsx)((0, $9C1r0$muimaterialAlert), {
        severity: "error",
        ...props,
        children: error.message
    });
};
var $16b11e6140cc6f3e$export$2e2bcd8739ae039 = $16b11e6140cc6f3e$var$ErrorMessage;







const $8815a487b798908e$var$noop = ()=>{};
function $8815a487b798908e$export$2e2bcd8739ae039() {
    let setState = (0, $9C1r0$useState)()[1];
    (0, $9C1r0$useEffect)(()=>()=>{
            setState = $8815a487b798908e$var$noop;
        }, []);
    return (0, $9C1r0$useCallback)(()=>{
        setState({});
    }, []);
}


const $dbb86b1f0c28f375$var$STATES = [
    "idle",
    "pending",
    "resolved",
    "rejected"
];
function $dbb86b1f0c28f375$export$2e2bcd8739ae039(asyncFunction, config = {}) {
    const { callOnMount: callOnMount , onSuccess: onSuccess , onFailure: onFailure , onComplete: onComplete  } = config;
    const forceUpdate = (0, $8815a487b798908e$export$2e2bcd8739ae039)();
    const [ctx] = (0, $9C1r0$useState)({});
    const setState = (state)=>{
        ctx.state = $dbb86b1f0c28f375$var$STATES[state];
        $dbb86b1f0c28f375$var$STATES.forEach((name, index)=>{
            ctx[name] = index === state;
        });
        forceUpdate();
    };
    if (ctx.state === undefined) setState(0);
    ctx.call = (0, $9C1r0$useCallback)((...args)=>{
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
    (0, $9C1r0$useEffect)(()=>{
        if (callOnMount && ctx.state === $dbb86b1f0c28f375$var$STATES["0"]) ctx.call();
    }, [
        ctx.call,
        callOnMount,
        ctx.state
    ]);
    return ctx;
}


async function $547bc5953d37859e$export$a1c549e76b7f385e(name, options = {}) {
    const params = new URLSearchParams(options);
    return await $547bc5953d37859e$var$apiFetch("GET", `/api/${name}?${params}`);
}
async function $547bc5953d37859e$export$df781a4386db1cc8(name, options) {
    return await $547bc5953d37859e$var$apiFetch("POST", `/api/${name}`, options);
}
window.cqrs = {
    query: $547bc5953d37859e$export$a1c549e76b7f385e,
    command: $547bc5953d37859e$export$df781a4386db1cc8
};
async function $547bc5953d37859e$var$apiFetch(method, path, body, tries = 0) {
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
        await $547bc5953d37859e$var$wait(500);
        return $547bc5953d37859e$var$apiFetch(method, path, body, tries + 1);
    }
    const { result: result , error: error  } = await res.json();
    if (error) throw new Error(error.message);
    return result || null;
}
const $547bc5953d37859e$var$wait = (ms)=>new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        }, ms);
    });
function $547bc5953d37859e$export$dd0a697e1782aedd(name, options = {}, config) {
    const swrKey = name ? [
        name,
        options
    ] : null;
    const { data: result , error: error , mutate: mutate  } = (0, $9C1r0$swr)(swrKey, {
        ...config,
        fetcher: $547bc5953d37859e$export$a1c549e76b7f385e
    });
    const loading = typeof result === "undefined" && !error;
    const reload = (0, $9C1r0$useCallback)(()=>{
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
function $547bc5953d37859e$export$194d0c7cb6792e23(name, config) {
    return (0, $dbb86b1f0c28f375$export$2e2bcd8739ae039)((options)=>$547bc5953d37859e$export$df781a4386db1cc8(name, options), config);
}
function $547bc5953d37859e$export$b87ac4c6452497e4(name, options, config) {
    const command = $547bc5953d37859e$export$194d0c7cb6792e23(name, config);
    (0, $9C1r0$useEffect)(()=>{
        if (command.idle) command.call(options);
    }, [
        name,
        options
    ]);
    return command;
}





function $a90d367abe915609$export$2e2bcd8739ae039({ object: object , sx: sx , ...props }) {
    let string;
    if (typeof object === "function") string = object.toString();
    else if (typeof object === "undefined") string = "undefined";
    else try {
        string = $a90d367abe915609$var$inspect(object);
    } catch (error) {
        string = `ERROR: ${error}`;
    }
    return /*#__PURE__*/ (0, $9C1r0$jsx)((0, $9C1r0$muimaterialBox), {
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
function $a90d367abe915609$var$inspect(object, indentation = 2) {
    return JSON.stringify(object, $a90d367abe915609$var$replaceUndefinedWithUndefinedString, indentation).replace(/"UNDEFINEDPLACEHOLDER"/g, "undefined");
}
const $a90d367abe915609$var$replaceUndefinedWithUndefinedString = (k, v)=>{
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
const $41990060447d9349$var$defaultExec = ()=>({
        isCommand: false,
        name: "",
        optionsJson: "{}"
    });
const $41990060447d9349$var$searchToString = (object)=>new URLSearchParams(object).toString();
const $41990060447d9349$var$searchToObject = (search)=>Object.fromEntries(new URLSearchParams(search).entries());
function $41990060447d9349$export$2e2bcd8739ae039() {
    const location = (0, $9C1r0$useLocation)();
    const name = location.pathname.split("/").reverse()[0];
    const search = $41990060447d9349$var$searchToObject(location.search);
    const optionsJson = search.opts;
    (0, $9C1r0$useEffect)(()=>{
        document.title = `Debug ${undefined}: ${name}(${optionsJson || ""})`;
    }, [
        name,
        optionsJson
    ]);
    const { result: spec , error: error  } = (0, $547bc5953d37859e$export$dd0a697e1782aedd)("__spec");
    const props = {
        spec: spec,
        name: name,
        optionsJson: optionsJson
    };
    return /*#__PURE__*/ (0, $9C1r0$jsx)((0, $9C1r0$muimaterialContainer), {
        maxWidth: false,
        disableGutters: true,
        children: /*#__PURE__*/ (0, $9C1r0$jsxs)((0, $9C1r0$muimaterialBox), {
            sx: {
                display: "flex",
                flexDirection: "row",
                minHeight: "100vh",
                minWidth: "100vw"
            },
            children: [
                /*#__PURE__*/ (0, $9C1r0$jsx)($41990060447d9349$var$SideNav, {
                    spec: spec
                }),
                /*#__PURE__*/ (0, $9C1r0$jsxs)((0, $9C1r0$muimaterialBox), {
                    sx: {
                        flex: "1 1",
                        p: 2
                    },
                    children: [
                        /*#__PURE__*/ (0, $9C1r0$jsx)((0, $16b11e6140cc6f3e$export$2e2bcd8739ae039), {
                            error: error
                        }),
                        /*#__PURE__*/ (0, $9C1r0$jsx)((0, $9C1r0$ErrorBoundary), {
                            FallbackComponent: (0, $3d719368a5899ee3$export$2e2bcd8739ae039),
                            children: /*#__PURE__*/ (0, $9C1r0$jsxs)((0, $9C1r0$Routes), {
                                children: [
                                    /*#__PURE__*/ (0, $9C1r0$jsx)((0, $9C1r0$Route), {
                                        path: "/q/:name",
                                        element: /*#__PURE__*/ (0, $9C1r0$jsx)($41990060447d9349$var$ExecForm, {
                                            ...props,
                                            type: "query"
                                        }, name),
                                        title: "do a query"
                                    }),
                                    /*#__PURE__*/ (0, $9C1r0$jsx)((0, $9C1r0$Route), {
                                        path: "/c/:name",
                                        element: /*#__PURE__*/ (0, $9C1r0$jsx)($41990060447d9349$var$ExecForm, {
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
function $41990060447d9349$var$SideNav({ spec: spec  }) {
    return /*#__PURE__*/ (0, $9C1r0$jsxs)((0, $9C1r0$muimaterialBox), {
        sx: {
            display: "flex",
            flexDirection: "column",
            backgroundColor: "primary.dark",
            minWidth: `max(10vw, 175px)`,
            maxWidth: `max(20vw, 400px)`,
            overflowX: "auto"
        },
        children: [
            /*#__PURE__*/ (0, $9C1r0$jsxs)((0, $9C1r0$muimaterialTypography), {
                variant: "h6",
                sx: {
                    my: 2,
                    textAlign: "center"
                },
                children: [
                    "Debug ",
                    undefined
                ]
            }),
            /*#__PURE__*/ (0, $9C1r0$jsx)($41990060447d9349$var$SideNavButton, {
                to: `/`,
                icon: /*#__PURE__*/ (0, $9C1r0$jsx)((0, $9C1r0$muiiconsmaterialCottage), {}),
                title: "Home"
            }),
            /*#__PURE__*/ (0, $9C1r0$jsx)($41990060447d9349$var$SideNavButtonList, {
                name: "Queries",
                types: spec?.queries,
                icon: /*#__PURE__*/ (0, $9C1r0$jsx)((0, $9C1r0$muiiconsmaterialHelpOutline), {}),
                linkPrefix: "/debug/q/"
            }),
            /*#__PURE__*/ (0, $9C1r0$jsx)($41990060447d9349$var$SideNavButtonList, {
                name: "Commands",
                types: spec?.commands,
                icon: /*#__PURE__*/ (0, $9C1r0$jsx)((0, $9C1r0$muiiconsmaterialKeyboardCommandKeyTwoTone), {}),
                linkPrefix: "/debug/c/"
            })
        ]
    });
}
function $41990060447d9349$var$SideNavButton({ icon: icon , title: title , subtitle: subtitle , ...props }) {
    if (props.to) props.component = (0, $221b7e10b88f4f3b$export$2e2bcd8739ae039);
    return /*#__PURE__*/ (0, $9C1r0$jsx)((0, $9C1r0$muimaterialListItem), {
        disablePadding: true,
        children: /*#__PURE__*/ (0, $9C1r0$jsxs)((0, $9C1r0$muimaterialListItemButton), {
            ...props,
            children: [
                /*#__PURE__*/ (0, $9C1r0$jsx)((0, $9C1r0$muimaterialListItemIcon), {
                    sx: {
                        minWidth: "30px"
                    },
                    children: icon
                }),
                /*#__PURE__*/ (0, $9C1r0$jsx)((0, $9C1r0$muimaterialListItemText), {
                    primary: title,
                    secondary: subtitle
                })
            ]
        })
    });
}
function $41990060447d9349$var$SideNavButtonList({ name: name , types: types , icon: icon , linkPrefix: linkPrefix  }) {
    return /*#__PURE__*/ (0, $9C1r0$jsxs)((0, $9C1r0$muimaterialBox), {
        children: [
            /*#__PURE__*/ (0, $9C1r0$jsx)((0, $9C1r0$muimaterialTypography), {
                variant: "h6",
                sx: {
                    pl: 1
                },
                children: name
            }),
            /*#__PURE__*/ (0, $9C1r0$jsx)((0, $9C1r0$muimaterialList), {
                dense: true,
                sx: {
                    pt: 0
                },
                children: Array.isArray(types) ? [
                    ...types
                ].sort().map(({ name: name , args: args  })=>/*#__PURE__*/ (0, $9C1r0$jsx)($41990060447d9349$var$SideNavButton, {
                        key: name,
                        to: `${linkPrefix}${name}`,
                        icon: icon,
                        title: name,
                        subtitle: args
                    })) : Array(3).fill().map((_, i)=>/*#__PURE__*/ (0, $9C1r0$jsx)((0, $9C1r0$muimaterialSkeleton), {
                        animation: "wave",
                        height: "40px"
                    }, i))
            })
        ]
    });
}
function $41990060447d9349$var$ExecForm({ spec: spec , type: type , name: name , optionsJson: optionsJson = "{}"  }) {
    const location = (0, $9C1r0$useLocation)();
    const navigate = (0, $9C1r0$useNavigate)();
    const isCommand = type === "command";
    const options = $41990060447d9349$var$safeJsonParse(optionsJson);
    const optionsJsonIsValid = !(options instanceof Error);
    const submittable = !!(name && optionsJsonIsValid);
    const [execution, setExecution] = (0, $9C1r0$useState)(type === "query" && submittable ? {
        name: name,
        options: options
    } : null);
    const [executionDone, setExecutionDone] = (0, $9C1r0$useState)(false);
    const setOptionsJson = (0, $9C1r0$useCallback)((optionsJson, replace = false)=>{
        // TODO include other existing search params
        const params = {};
        if (optionsJson) params.opts = optionsJson;
        const newSearch = $41990060447d9349$var$searchToString(params);
        let url = location.pathname;
        if (newSearch) url += "?" + newSearch;
        navigate(url, {
            replace: replace
        });
    }, []);
    const reset = (0, $9C1r0$useCallback)(()=>{
        setOptionsJson(undefined, false);
        setExecution(null);
        setExecutionDone(false);
    }, [
        setOptionsJson
    ]);
    const onSubmit = (0, $9C1r0$useCallback)(()=>{
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
    const Exec = isCommand ? $41990060447d9349$var$ExecuteCommand : $41990060447d9349$var$ExecuteQuery;
    return /*#__PURE__*/ (0, $9C1r0$jsxs)((0, $9C1r0$muimaterialBox), {
        children: [
            /*#__PURE__*/ (0, $9C1r0$jsx)((0, $b65149095c15705d$export$2e2bcd8739ae039), {
                disabled: disabled,
                onSubmit: onSubmit,
                children: /*#__PURE__*/ (0, $9C1r0$jsxs)((0, $9C1r0$muimaterialStack), {
                    spacing: 2,
                    children: [
                        /*#__PURE__*/ (0, $9C1r0$jsxs)((0, $9C1r0$muimaterialStack), {
                            direction: "row",
                            spacing: 2,
                            children: [
                                /*#__PURE__*/ (0, $9C1r0$jsx)((0, $9C1r0$muimaterialTypography), {
                                    variant: "h4",
                                    children: type
                                }),
                                /*#__PURE__*/ (0, $9C1r0$jsx)((0, $9C1r0$muimaterialSelect), {
                                    value: name,
                                    // onChange={e => setName(e.target.value)}
                                    autoWidth: true,
                                    children: names.map(({ name: name  })=>/*#__PURE__*/ (0, $9C1r0$jsx)((0, $9C1r0$muimaterialMenuItem), {
                                            value: name,
                                            component: (0, $221b7e10b88f4f3b$export$2e2bcd8739ae039),
                                            to: `/debug/${isCommand ? "c" : "q"}/${name}`,
                                            children: name
                                        }, name))
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, $9C1r0$jsx)((0, $9C1r0$muimaterialTextField), {
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
                        /*#__PURE__*/ (0, $9C1r0$jsxs)((0, $cf41b83118593c41$export$2e2bcd8739ae039), {
                            sx: {
                                mt: 2
                            },
                            children: [
                                /*#__PURE__*/ (0, $9C1r0$jsx)((0, $9C1r0$muimaterialButton), {
                                    disabled: disabled || !submittable,
                                    variant: "contained",
                                    type: "submit",
                                    autoFocus: true,
                                    children: isCommand ? "execute" : "query"
                                }),
                                /*#__PURE__*/ (0, $9C1r0$jsx)((0, $9C1r0$muimaterialButton), {
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
            /*#__PURE__*/ (0, $9C1r0$jsx)("hr", {}),
            /*#__PURE__*/ (0, $9C1r0$jsx)((0, $9C1r0$muimaterialBox), {
                children: execution ? /*#__PURE__*/ (0, $9C1r0$jsx)(Exec, {
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
function $41990060447d9349$var$ExecuteQuery({ id: id , name: name , options: options , onComplete: onComplete  }) {
    const results = (0, $547bc5953d37859e$export$dd0a697e1782aedd)(name, options, {
        dedupingInterval: 0,
        revalidateOnMount: true,
        revalidateOnFocus: true
    });
    (0, $9C1r0$useEffect)(()=>{
        if (!results.loading) onComplete();
    }, [
        results.loading
    ]);
    return /*#__PURE__*/ (0, $9C1r0$jsx)($41990060447d9349$var$Execution, {
        ...results,
        name: name,
        options: options
    });
}
function $41990060447d9349$var$ExecuteCommand({ name: name , options: options , onComplete: onComplete  }) {
    const results = (0, $547bc5953d37859e$export$b87ac4c6452497e4)(name, options, {
        onComplete: onComplete
    });
    return /*#__PURE__*/ (0, $9C1r0$jsx)($41990060447d9349$var$Execution, {
        ...results,
        name: name,
        options: options
    });
}
function $41990060447d9349$var$Execution({ name: name , options: options , result: result , loading: loading , error: error  }) {
    return /*#__PURE__*/ (0, $9C1r0$jsx)((0, $9C1r0$muimaterialBox), {
        children: loading ? /*#__PURE__*/ (0, $9C1r0$jsx)((0, $9C1r0$muimaterialCircularProgress), {}) : error ? /*#__PURE__*/ (0, $9C1r0$jsx)((0, $16b11e6140cc6f3e$export$2e2bcd8739ae039), {
            error: error
        }) : /*#__PURE__*/ (0, $9C1r0$jsx)((0, $a90d367abe915609$export$2e2bcd8739ae039), {
            object: result,
            sx: {
                m: 0,
                backgroundColor: "#232323"
            }
        })
    });
}
function $41990060447d9349$var$Command({ name: name , options: options , ...prop }) {
    const command = (0, $547bc5953d37859e$export$b87ac4c6452497e4)(name, options);
    return /*#__PURE__*/ (0, $9C1r0$jsxs)(Tile, {
        title: `command: ${name}`,
        ...prop,
        children: [
            /*#__PURE__*/ (0, $9C1r0$jsx)((0, $a90d367abe915609$export$2e2bcd8739ae039), {
                object: {
                    options: options
                }
            }),
            /*#__PURE__*/ (0, $9C1r0$jsx)((0, $a90d367abe915609$export$2e2bcd8739ae039), {
                object: command
            })
        ]
    });
}
function $41990060447d9349$var$safeJsonParse(json) {
    try {
        return JSON.parse(json);
    } catch (error) {
        return error;
    }
}




function $92aa693e75f6db35$export$2e2bcd8739ae039() {
    return /*#__PURE__*/ (0, $9C1r0$jsx)("div", {
        children: "Page Not Found"
    });
}



// import App from './App'
// import reportWebVitals from './reportWebVitals'
const $c57fd1ab40560fb6$var$root = (0, $9C1r0$reactdomclient).createRoot(document.querySelector("body > main"));
function $c57fd1ab40560fb6$export$2e2bcd8739ae039(opts = {}) {
    const { Routes: Routes , theme: theme = (0, $1d8cbae82c05f940$export$2e2bcd8739ae039) ,  } = opts;
    $c57fd1ab40560fb6$var$root.render(/*#__PURE__*/ (0, $9C1r0$jsx)($9C1r0$StrictMode, {
        children: /*#__PURE__*/ (0, $9C1r0$jsx)((0, $9C1r0$BrowserRouter), {
            children: /*#__PURE__*/ (0, $9C1r0$jsxs)((0, $9C1r0$ThemeProvider), {
                theme: theme,
                children: [
                    /*#__PURE__*/ (0, $9C1r0$jsx)((0, $9C1r0$CssBaseline), {
                        enableColorScheme: true
                    }),
                    /*#__PURE__*/ (0, $9C1r0$jsxs)(Routes, {
                        children: [
                            /*#__PURE__*/ (0, $9C1r0$jsx)((0, $9C1r0$Route), {
                                path: "/debug/*",
                                element: /*#__PURE__*/ (0, $9C1r0$jsx)((0, $41990060447d9349$export$2e2bcd8739ae039), {})
                            }),
                            /*#__PURE__*/ (0, $9C1r0$jsx)((0, $9C1r0$Route), {
                                path: "*",
                                element: /*#__PURE__*/ (0, $9C1r0$jsx)((0, $92aa693e75f6db35$export$2e2bcd8739ae039), {})
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


export {$c57fd1ab40560fb6$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=index.js.map
