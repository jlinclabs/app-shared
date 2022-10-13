import {jsx as $1cKDT$jsx, jsxs as $1cKDT$jsxs} from "react/jsx-runtime";
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
    return /*#__PURE__*/ (0, $1cKDT$jsx)((0, $1cKDT$muimaterialContainer), {
        maxWidth: "lg",
        children: /*#__PURE__*/ (0, $1cKDT$jsxs)((0, $1cKDT$muimaterialPaper), {
            elevation: 3,
            role: "alert",
            sx: {
                m: 3,
                p: 3
            },
            children: [
                /*#__PURE__*/ (0, $1cKDT$jsx)((0, $1cKDT$muimaterialAlert), {
                    severity: "error",
                    children: "App Error"
                }),
                /*#__PURE__*/ (0, $1cKDT$jsxs)((0, $1cKDT$muimaterialBox), {
                    component: "pre",
                    sx: {
                        overflow: "scroll"
                    },
                    children: [
                        /*#__PURE__*/ (0, $1cKDT$jsx)((0, $1cKDT$muimaterialTypography), {
                            variant: "h4",
                            children: error.message
                        }),
                        /*#__PURE__*/ (0, $1cKDT$jsx)("br", {}),
                        error.stack
                    ]
                }),
                /*#__PURE__*/ (0, $1cKDT$jsx)((0, $1cKDT$muimaterialButton), {
                    variant: "contained",
                    onClick: resetErrorBoundary,
                    children: "Try again"
                })
            ]
        })
    });
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
            return /*#__PURE__*/ (0, $1cKDT$jsx)(Component, {
                error: error
            });
        }
        return this.props.children;
    }
}


export {$2db3f843c0804b10$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=ErrorBoundary.js.map
