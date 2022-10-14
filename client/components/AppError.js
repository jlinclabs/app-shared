import {jsxDEV as $2GvjJ$jsxDEV} from "react/jsx-dev-runtime";
import "react";
import $2GvjJ$muimaterialContainer from "@mui/material/Container";
import $2GvjJ$muimaterialPaper from "@mui/material/Paper";
import $2GvjJ$muimaterialTypography from "@mui/material/Typography";
import $2GvjJ$muimaterialBox from "@mui/material/Box";
import $2GvjJ$muimaterialAlert from "@mui/material/Alert";
import $2GvjJ$muimaterialButton from "@mui/material/Button";









function $398477c469915369$export$2e2bcd8739ae039({ error: error , resetErrorBoundary: resetErrorBoundary  }) {
    return /*#__PURE__*/ (0, $2GvjJ$jsxDEV)((0, $2GvjJ$muimaterialContainer), {
        maxWidth: "lg",
        children: /*#__PURE__*/ (0, $2GvjJ$jsxDEV)((0, $2GvjJ$muimaterialPaper), {
            elevation: 3,
            role: "alert",
            sx: {
                m: 3,
                p: 3
            },
            children: [
                /*#__PURE__*/ (0, $2GvjJ$jsxDEV)((0, $2GvjJ$muimaterialAlert), {
                    severity: "error",
                    children: "App Error"
                }, void 0, false, {
                    fileName: "client-src/components/AppError.js",
                    lineNumber: 17,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, $2GvjJ$jsxDEV)((0, $2GvjJ$muimaterialBox), {
                    component: "pre",
                    sx: {
                        overflow: "scroll"
                    },
                    children: [
                        /*#__PURE__*/ (0, $2GvjJ$jsxDEV)((0, $2GvjJ$muimaterialTypography), {
                            variant: "h4",
                            children: error.message
                        }, void 0, false, {
                            fileName: "client-src/components/AppError.js",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, $2GvjJ$jsxDEV)("br", {}, void 0, false, {
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
                /*#__PURE__*/ (0, $2GvjJ$jsxDEV)((0, $2GvjJ$muimaterialButton), {
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


export {$398477c469915369$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=AppError.js.map
