import {jsx as $lX2A1$jsx} from "react/jsx-runtime";
import "react";
import $lX2A1$muimaterialTypography from "@mui/material/Typography";




function $9543f803220eb590$export$2e2bcd8739ae039({ at: at , locales: locales , localeOptions: localeOptions , ...props }) {
    const date = new Date(at);
    const value = date.toLocaleDateString(locales, localeOptions) + " " + date.toLocaleTimeString(locales, localeOptions);
    return /*#__PURE__*/ (0, $lX2A1$jsx)((0, $lX2A1$muimaterialTypography), {
        ...props,
        children: value
    });
}
$9543f803220eb590$export$2e2bcd8739ae039.defaultProps = {
    variant: "body1",
    component: "span"
};


export {$9543f803220eb590$export$2e2bcd8739ae039 as default};
