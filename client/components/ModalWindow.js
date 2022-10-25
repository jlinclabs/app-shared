import {jsx as $afM6r$jsx} from "react/jsx-runtime";
import $afM6r$muimaterialModal from "@mui/material/Modal";
import $afM6r$muimaterialBox from "@mui/material/Box";
import $afM6r$muimaterialFade from "@mui/material/Fade";
import $afM6r$muimaterialBackdrop from "@mui/material/Backdrop";






function $c8efea60c53ad719$export$2e2bcd8739ae039({ open: open , onClose: onClose , children: children , ...props }) {
    return /*#__PURE__*/ (0, $afM6r$jsx)((0, $afM6r$muimaterialModal), {
        open: open,
        onClose: onClose,
        closeAfterTransition: true,
        BackdropComponent: (0, $afM6r$muimaterialBackdrop),
        BackdropProps: {
            timeout: 500
        },
        ...props,
        children: /*#__PURE__*/ (0, $afM6r$jsx)((0, $afM6r$muimaterialFade), {
            in: open,
            children: /*#__PURE__*/ (0, $afM6r$jsx)((0, $afM6r$muimaterialBox), {
                sx: {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 400,
                    bgcolor: "background.paper",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    borderRadius: 5,
                    boxShadow: 24,
                    p: 2
                },
                children: children
            })
        })
    });
}


export {$c8efea60c53ad719$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=ModalWindow.js.map
