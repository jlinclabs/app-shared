var $4r123$reactjsxruntime = require("react/jsx-runtime");
var $4r123$react = require("react");
var $4r123$gunavatar = require("gun-avatar");




function $cd9ea8a2978060cf$export$2e2bcd8739ae039({ pub: pub , size: size = 200 , ...props }) {
    console.log((0, $4r123$gunavatar.gunAvatar));
    const src = $4r123$react.useMemo(()=>{
        try {
            return (0, $4r123$gunavatar.gunAvatar)({
                pub: pub,
                size: size
            });
        } catch (error) {
            console.error(error);
            return "";
        }
    }, [
        pub,
        size
    ]);
    return /*#__PURE__*/ (0, $4r123$reactjsxruntime.jsx)("img", {
        ...props,
        src: src
    });
}


