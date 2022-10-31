import {jsx as $iZiBo$jsx, jsxs as $iZiBo$jsxs} from "react/jsx-runtime";
import $iZiBo$muimaterialTypography from "@mui/material/Typography";
import $iZiBo$muimaterialList from "@mui/material/List";
import $iZiBo$muimaterialListItem from "@mui/material/ListItem";
import $iZiBo$muimaterialListItemButton from "@mui/material/ListItemButton";
import $iZiBo$muimaterialListItemIcon from "@mui/material/ListItemIcon";
import $iZiBo$muimaterialListItemText from "@mui/material/ListItemText";
import $iZiBo$muimaterialSkeleton from "@mui/material/Skeleton";
import {forwardRef as $iZiBo$forwardRef} from "react";
import {Link as $iZiBo$Link} from "react-router-dom";
import $iZiBo$muimaterialLink from "@mui/material/Link";
import $iZiBo$muimaterialAlert from "@mui/material/Alert";

function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}








var $08b8c86ef070e3a0$exports = {};

$parcel$defineInteropFlag($08b8c86ef070e3a0$exports);

$parcel$export($08b8c86ef070e3a0$exports, "default", () => $08b8c86ef070e3a0$export$2e2bcd8739ae039);




const $08b8c86ef070e3a0$var$Link = /*#__PURE__*/ $iZiBo$forwardRef(({ ...props }, ref)=>{
    props.component = "a";
    if (props.to) props.component = (0, $iZiBo$Link);
    if (props.to && props.to.startsWith("http")) {
        props.href = props.to;
        delete props.to;
        props.rel = props.rel || "noopener noreferrer";
        props.target = props.target || "_blank";
        props.component = "a";
    }
    return /*#__PURE__*/ (0, $iZiBo$jsx)((0, $iZiBo$muimaterialLink), {
        ...props,
        ref: ref
    });
});
$08b8c86ef070e3a0$var$Link.displayName = "Link";
var $08b8c86ef070e3a0$export$2e2bcd8739ae039 = $08b8c86ef070e3a0$var$Link;


var $e57fa53a045bcfbf$exports = {};

$parcel$defineInteropFlag($e57fa53a045bcfbf$exports);

$parcel$export($e57fa53a045bcfbf$exports, "default", () => $e57fa53a045bcfbf$export$2e2bcd8739ae039);



const $e57fa53a045bcfbf$var$ErrorMessage = ({ error: error , ...props })=>{
    if (!error) return null;
    return /*#__PURE__*/ (0, $iZiBo$jsx)((0, $iZiBo$muimaterialAlert), {
        severity: "error",
        ...props,
        children: error.message
    });
};
var $e57fa53a045bcfbf$export$2e2bcd8739ae039 = $e57fa53a045bcfbf$var$ErrorMessage;


function $fc958af85eab674d$export$2e2bcd8739ae039({ loading: loading , error: error , members: members , skeletonLength: skeletonLength = 4 , skeletonHeight: skeletonHeight = 118 , skeletonWidth: skeletonWidth = "auto" , emptyMessage: emptyMessage = `this list is empty.` , onEmpty: onEmpty = /*#__PURE__*/ (0, $iZiBo$jsx)($fc958af85eab674d$var$EmptyMessage, {
    children: emptyMessage
}) , onLoading: onLoading = /*#__PURE__*/ (0, $iZiBo$jsx)($fc958af85eab674d$var$SkeletonMembers, {
    skeletonLength: skeletonLength,
    skeletonHeight: skeletonHeight,
    skeletonWidth: skeletonWidth
}) ,  }) {
    return /*#__PURE__*/ (0, $iZiBo$jsx)((0, $iZiBo$muimaterialList), {
        spacing: 1,
        children: error ? /*#__PURE__*/ (0, $iZiBo$jsx)((0, $e57fa53a045bcfbf$export$2e2bcd8739ae039), {
            error: error
        }) : !loading && members ? members.length === 0 ? onEmpty : members.map((m, index)=>/*#__PURE__*/ (0, $iZiBo$jsx)($fc958af85eab674d$var$ListMember, {
                key: index,
                ...m
            })) : onLoading
    });
}
function $fc958af85eab674d$var$EmptyMessage({ children: children  }) {
    return /*#__PURE__*/ (0, $iZiBo$jsx)((0, $iZiBo$muimaterialTypography), {
        sx: {
            textAlign: "center",
            fontStyle: "italic"
        },
        children: children
    });
}
function $fc958af85eab674d$var$ListMember({ href: href , icon: icon , text: text , subtext: subtext  }) {
    return /*#__PURE__*/ (0, $iZiBo$jsx)((0, $iZiBo$muimaterialListItem), {
        disablePadding: true,
        sx: {
            mb: 1
        },
        children: /*#__PURE__*/ (0, $iZiBo$jsxs)((0, $iZiBo$muimaterialListItemButton), {
            component: href ? (0, $08b8c86ef070e3a0$export$2e2bcd8739ae039) : undefined,
            to: href,
            children: [
                icon && /*#__PURE__*/ (0, $iZiBo$jsx)((0, $iZiBo$muimaterialListItemIcon), {
                    children: icon
                }),
                /*#__PURE__*/ (0, $iZiBo$jsx)((0, $iZiBo$muimaterialListItemText), {
                    primary: text,
                    secondary: subtext
                })
            ]
        })
    });
}
function $fc958af85eab674d$var$SkeletonMembers({ skeletonLength: skeletonLength , skeletonHeight: skeletonHeight , skeletonWidth: skeletonWidth  }) {
    return Array(skeletonLength).fill().map((_, i)=>/*#__PURE__*/ (0, $iZiBo$jsx)((0, $iZiBo$muimaterialSkeleton), {
            variant: "rounded",
            height: skeletonHeight,
            width: skeletonWidth,
            sx: {
                mb: 1
            }
        }, i));
}


export {$fc958af85eab674d$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=LoadingList.js.map
