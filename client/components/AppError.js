import {jsx as $bqtAQ$jsx, jsxs as $bqtAQ$jsxs} from "react/jsx-runtime";
import "react";
import $bqtAQ$muimaterialContainer from "@mui/material/Container";
import $bqtAQ$muimaterialPaper from "@mui/material/Paper";
import $bqtAQ$muimaterialTypography from "@mui/material/Typography";
import $bqtAQ$muimaterialBox from "@mui/material/Box";
import $bqtAQ$muimaterialAlert from "@mui/material/Alert";
import $bqtAQ$muimaterialButton from "@mui/material/Button";









function $623cbf1c5ba937db$export$2e2bcd8739ae039({ error: error , resetErrorBoundary: resetErrorBoundary  }) {
    return /*#__PURE__*/ (0, $bqtAQ$jsx)((0, $bqtAQ$muimaterialContainer), {
        maxWidth: "lg",
        children: /*#__PURE__*/ (0, $bqtAQ$jsxs)((0, $bqtAQ$muimaterialPaper), {
            elevation: 3,
            role: "alert",
            sx: {
                m: 3,
                p: 3
            },
            children: [
                /*#__PURE__*/ (0, $bqtAQ$jsx)((0, $bqtAQ$muimaterialAlert), {
                    severity: "error",
                    children: "App Error"
                }),
                /*#__PURE__*/ (0, $bqtAQ$jsxs)((0, $bqtAQ$muimaterialBox), {
                    component: "pre",
                    sx: {
                        overflow: "scroll"
                    },
                    children: [
                        /*#__PURE__*/ (0, $bqtAQ$jsx)((0, $bqtAQ$muimaterialTypography), {
                            variant: "h4",
                            children: error.message
                        }),
                        /*#__PURE__*/ (0, $bqtAQ$jsx)("br", {}),
                        error.stack
                    ]
                }),
                /*#__PURE__*/ (0, $bqtAQ$jsx)((0, $bqtAQ$muimaterialButton), {
                    variant: "contained",
                    onClick: resetErrorBoundary,
                    children: "Try again"
                })
            ]
        })
    });
}


export {$623cbf1c5ba937db$export$2e2bcd8739ae039 as default};
