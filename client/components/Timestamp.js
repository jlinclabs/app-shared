import {jsxDEV as $aLgL9$jsxDEV} from "react/jsx-dev-runtime";
import "react";
import $aLgL9$muimaterialTypography from "@mui/material/Typography";




function $f28a375900f42503$export$2e2bcd8739ae039({ at: at , locales: locales , localeOptions: localeOptions , ...props }) {
    const date = new Date(at);
    const value = date.toLocaleDateString(locales, localeOptions) + " " + date.toLocaleTimeString(locales, localeOptions);
    return /*#__PURE__*/ (0, $aLgL9$jsxDEV)((0, $aLgL9$muimaterialTypography), {
        ...props,
        children: value
    }, void 0, false, {
        fileName: "client-src/components/Timestamp.js",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
$f28a375900f42503$export$2e2bcd8739ae039.defaultProps = {
    variant: "body1",
    component: "span"
};


export {$f28a375900f42503$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=Timestamp.js.map
