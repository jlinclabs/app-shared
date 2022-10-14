import {jsx as $2GvjJ$jsx, jsxs as $2GvjJ$jsxs} from "react/jsx-runtime";
import "react";
import $2GvjJ$muimaterialContainer from "@mui/material/Container";
import $2GvjJ$muimaterialPaper from "@mui/material/Paper";
import $2GvjJ$muimaterialTypography from "@mui/material/Typography";
import $2GvjJ$muimaterialBox from "@mui/material/Box";
import $2GvjJ$muimaterialAlert from "@mui/material/Alert";
import $2GvjJ$muimaterialButton from "@mui/material/Button";









function $398477c469915369$export$2e2bcd8739ae039({ error: error , resetErrorBoundary: resetErrorBoundary  }) {
    return /*#__PURE__*/ (0, $2GvjJ$jsx)((0, $2GvjJ$muimaterialContainer), {
        maxWidth: "lg",
        children: /*#__PURE__*/ (0, $2GvjJ$jsxs)((0, $2GvjJ$muimaterialPaper), {
            elevation: 3,
            role: "alert",
            sx: {
                m: 3,
                p: 3
            },
            children: [
                /*#__PURE__*/ (0, $2GvjJ$jsx)((0, $2GvjJ$muimaterialAlert), {
                    severity: "error",
                    children: "App Error"
                }),
                /*#__PURE__*/ (0, $2GvjJ$jsxs)((0, $2GvjJ$muimaterialBox), {
                    component: "pre",
                    sx: {
                        overflow: "scroll"
                    },
                    children: [
                        /*#__PURE__*/ (0, $2GvjJ$jsx)((0, $2GvjJ$muimaterialTypography), {
                            variant: "h4",
                            children: error.message
                        }),
                        /*#__PURE__*/ (0, $2GvjJ$jsx)("br", {}),
                        error.stack
                    ]
                }),
                /*#__PURE__*/ (0, $2GvjJ$jsx)((0, $2GvjJ$muimaterialButton), {
                    variant: "contained",
                    onClick: resetErrorBoundary,
                    children: "Try again"
                })
            ]
        })
    });
}


export {$398477c469915369$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=AppError.js.map
