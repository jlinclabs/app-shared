import {jsxDEV as $1cKDT$jsxDEV} from "react/jsx-dev-runtime";
import {Component as $1cKDT$Component} from "react";
import $1cKDT$muimaterialContainer from "@mui/material/Container";
import $1cKDT$muimaterialPaper from "@mui/material/Paper";
import $1cKDT$muimaterialTypography from "@mui/material/Typography";
import $1cKDT$muimaterialBox from "@mui/material/Box";
import $1cKDT$muimaterialAlert from "@mui/material/Alert";
import $1cKDT$muimaterialButton from "@mui/material/Button";

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
    return /*#__PURE__*/ (0, $1cKDT$jsxDEV)((0, $1cKDT$muimaterialContainer), {
        maxWidth: "lg",
        children: /*#__PURE__*/ (0, $1cKDT$jsxDEV)((0, $1cKDT$muimaterialPaper), {
            elevation: 3,
            role: "alert",
            sx: {
                m: 3,
                p: 3
            },
            children: [
                /*#__PURE__*/ (0, $1cKDT$jsxDEV)((0, $1cKDT$muimaterialAlert), {
                    severity: "error",
                    children: "App Error"
                }, void 0, false, {
                    fileName: "client-src/components/AppError.js",
                    lineNumber: 17,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, $1cKDT$jsxDEV)((0, $1cKDT$muimaterialBox), {
                    component: "pre",
                    sx: {
                        overflow: "scroll"
                    },
                    children: [
                        /*#__PURE__*/ (0, $1cKDT$jsxDEV)((0, $1cKDT$muimaterialTypography), {
                            variant: "h4",
                            children: error.message
                        }, void 0, false, {
                            fileName: "client-src/components/AppError.js",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, $1cKDT$jsxDEV)("br", {}, void 0, false, {
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
                /*#__PURE__*/ (0, $1cKDT$jsxDEV)((0, $1cKDT$muimaterialButton), {
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


class $2db3f843c0804b10$export$2e2bcd8739ae039 extends $1cKDT$Component {
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
            return /*#__PURE__*/ (0, $1cKDT$jsxDEV)(Component, {
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


export {$2db3f843c0804b10$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=ErrorBoundary.js.map
