import {jsxDEV as $h2dLv$jsxDEV} from "react/jsx-dev-runtime";
import $h2dLv$react, {Component as $h2dLv$Component} from "react";
import $h2dLv$reactdomclient from "react-dom/client";
import {BrowserRouter as $h2dLv$BrowserRouter} from "react-router-dom";
import {ThemeProvider as $h2dLv$ThemeProvider, CssBaseline as $h2dLv$CssBaseline} from "@mui/material";
import {createTheme as $h2dLv$createTheme} from "@mui/material/styles";
import {gray as $h2dLv$gray} from "@mui/material/colors";
import $h2dLv$muimaterialContainer from "@mui/material/Container";
import $h2dLv$muimaterialPaper from "@mui/material/Paper";
import $h2dLv$muimaterialTypography from "@mui/material/Typography";
import $h2dLv$muimaterialBox from "@mui/material/Box";
import $h2dLv$muimaterialAlert from "@mui/material/Alert";
import $h2dLv$muimaterialButton from "@mui/material/Button";

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
        mode: "dark",
        primary: {
            main: $h2dLv$gray[600]
        },
        secondary: {
            main: $h2dLv$gray[400]
        }
    }
});
var $c8b71836488e4bbe$export$2e2bcd8739ae039 = $c8b71836488e4bbe$var$darkTheme;


var $2db3f843c0804b10$exports = {};

$parcel$defineInteropFlag($2db3f843c0804b10$exports);

$parcel$export($2db3f843c0804b10$exports, "default", () => $2db3f843c0804b10$export$2e2bcd8739ae039);


var $398477c469915369$exports = {};

$parcel$defineInteropFlag($398477c469915369$exports);

$parcel$export($398477c469915369$exports, "default", () => $398477c469915369$export$2e2bcd8739ae039);








function $398477c469915369$export$2e2bcd8739ae039({ error: error , resetErrorBoundary: resetErrorBoundary  }) {
    return /*#__PURE__*/ (0, $h2dLv$jsxDEV)((0, $h2dLv$muimaterialContainer), {
        maxWidth: "lg",
        children: /*#__PURE__*/ (0, $h2dLv$jsxDEV)((0, $h2dLv$muimaterialPaper), {
            elevation: 3,
            role: "alert",
            sx: {
                m: 3,
                p: 3
            },
            children: [
                /*#__PURE__*/ (0, $h2dLv$jsxDEV)((0, $h2dLv$muimaterialAlert), {
                    severity: "error",
                    children: "App Error"
                }, void 0, false, {
                    fileName: "client-src/components/AppError.js",
                    lineNumber: 17,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, $h2dLv$jsxDEV)((0, $h2dLv$muimaterialBox), {
                    component: "pre",
                    sx: {
                        overflow: "scroll"
                    },
                    children: [
                        /*#__PURE__*/ (0, $h2dLv$jsxDEV)((0, $h2dLv$muimaterialTypography), {
                            variant: "h4",
                            children: error.message
                        }, void 0, false, {
                            fileName: "client-src/components/AppError.js",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, $h2dLv$jsxDEV)("br", {}, void 0, false, {
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
                /*#__PURE__*/ (0, $h2dLv$jsxDEV)((0, $h2dLv$muimaterialButton), {
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


class $2db3f843c0804b10$export$2e2bcd8739ae039 extends $h2dLv$Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    static getDerivedStateFromError(error) {
        return {
            error: error
        };
    }
    componentDidCatch(error, errorInfo) {
        console.error("ErrorBoundary caught", {
            error: error,
            errorInfo: errorInfo
        });
    // TODO post errors to server for logging
    }
    render() {
        const { error: error  } = this.state;
        if (error) {
            const Component = this.props.component || (0, $398477c469915369$export$2e2bcd8739ae039);
            return /*#__PURE__*/ (0, $h2dLv$jsxDEV)(Component, {
                error: error
            }, void 0, false, {
                fileName: "client-src/components/ErrorBoundary.js",
                lineNumber: 23,
                columnNumber: 14
            }, this);
        }
        return this.props.children;
    }
}



const $3d27138bea64f431$var$root = (0, $h2dLv$reactdomclient).createRoot(document.querySelector("body > main"));
function $3d27138bea64f431$export$b3890eb0ae9dca99(opts = {}) {
    const { Routes: Routes , theme: theme = (0, $c8b71836488e4bbe$export$2e2bcd8739ae039) ,  } = opts;
    $3d27138bea64f431$var$root.render(/*#__PURE__*/ (0, $h2dLv$jsxDEV)((0, $h2dLv$react).StrictMode, {
        children: /*#__PURE__*/ (0, $h2dLv$jsxDEV)((0, $h2dLv$ThemeProvider), {
            theme: theme,
            children: [
                /*#__PURE__*/ (0, $h2dLv$jsxDEV)((0, $h2dLv$CssBaseline), {
                    enableColorScheme: true
                }, void 0, false, {
                    fileName: "client-src/render.js",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, $h2dLv$jsxDEV)((0, $2db3f843c0804b10$export$2e2bcd8739ae039), {
                    onError: (error)=>/*#__PURE__*/ (0, $h2dLv$jsxDEV)((0, $398477c469915369$export$2e2bcd8739ae039), {
                            error: error
                        }, void 0, false, void 0, void 0),
                    children: /*#__PURE__*/ (0, $h2dLv$jsxDEV)((0, $h2dLv$BrowserRouter), {
                        children: /*#__PURE__*/ (0, $h2dLv$jsxDEV)(Routes, {}, void 0, false, {
                            fileName: "client-src/render.js",
                            lineNumber: 23,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "client-src/render.js",
                        lineNumber: 22,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "client-src/render.js",
                    lineNumber: 21,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "client-src/render.js",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "client-src/render.js",
        lineNumber: 18,
        columnNumber: 5
    }, this));
}


export {$3d27138bea64f431$export$b3890eb0ae9dca99 as render};
//# sourceMappingURL=render.js.map
