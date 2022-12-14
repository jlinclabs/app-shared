import {useRef as $k2sx6$useRef, useMemo as $k2sx6$useMemo, useCallback as $k2sx6$useCallback, useEffect as $k2sx6$useEffect, useState as $k2sx6$useState} from "react";

function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $27954de794c56674$exports = {};

$parcel$defineInteropFlag($27954de794c56674$exports);

$parcel$export($27954de794c56674$exports, "default", () => $27954de794c56674$export$2e2bcd8739ae039);


var $b6a953b0721d86c6$exports = {};

$parcel$defineInteropFlag($b6a953b0721d86c6$exports);

$parcel$export($b6a953b0721d86c6$exports, "default", () => $b6a953b0721d86c6$export$2e2bcd8739ae039);

const $b6a953b0721d86c6$var$noop = ()=>{};
function $b6a953b0721d86c6$export$2e2bcd8739ae039() {
    let setState = (0, $k2sx6$useState)()[1];
    (0, $k2sx6$useEffect)(()=>()=>{
            setState = $b6a953b0721d86c6$var$noop;
        }, []);
    return (0, $k2sx6$useCallback)(()=>{
        setState({});
    }, []);
}


const $27954de794c56674$var$STATES = [
    "idle",
    "pending",
    "resolved",
    "rejected"
];
function $27954de794c56674$export$2e2bcd8739ae039(asyncFunction, config = {}) {
    const { callOnMount: callOnMount , onSuccess: onSuccess , onFailure: onFailure , onComplete: onComplete  } = config;
    const callbacks = (0, $k2sx6$useRef)();
    Object.assign(callbacks, {
        onSuccess: onSuccess,
        onFailure: onFailure,
        onComplete: onComplete
    });
    const forceUpdate = (0, $b6a953b0721d86c6$export$2e2bcd8739ae039)();
    const ctx = (0, $k2sx6$useMemo)(()=>({}), [
        asyncFunction,
        callOnMount
    ]);
    ctx.call = (0, $k2sx6$useCallback)((...args)=>{
        if (ctx.promise) throw new Error(`already executing`);
        const setState = (state)=>{
            ctx.state = $27954de794c56674$var$STATES[state];
            $27954de794c56674$var$STATES.forEach((name, index)=>{
                ctx[name] = index === state;
            });
            forceUpdate();
        };
        ctx.promise = new Promise((resolve, reject)=>{
            asyncFunction(...args).then(resolve, reject);
        }).then(async (result)=>{
            delete ctx.promise;
            ctx.result = result;
            setState(2);
            if (callbacks.onSuccess) await callbacks.onSuccess(result);
            return result;
        }, async (error)=>{
            delete ctx.promise;
            ctx.error = error;
            if (callbacks.onFailure) await callbacks.onFailure(error);
            setState(3);
            return error;
        }).then(async (result)=>{
            if (callbacks.onComplete) await callbacks.onComplete(result);
        });
        setState(1);
        return ctx.promise;
    }, [
        ctx
    ]);
    (0, $k2sx6$useEffect)(()=>{
        if (callOnMount && ctx.idle) ctx.call();
    }, [
        ctx
    ]);
    return ctx;
}


var $33c0128acbec5ff2$exports = {};

$parcel$export($33c0128acbec5ff2$exports, "uploadFile", () => $33c0128acbec5ff2$export$a5575dbeeffdad98);
async function $33c0128acbec5ff2$export$a5575dbeeffdad98(file) {
    const maxFileSize = $33c0128acbec5ff2$export$a5575dbeeffdad98.MAX_FILE_SIZE_IN_MB || 200;
    if (!file) throw new Error(`file is required`);
    if (file.size > maxFileSize * 1000000) throw new Error(`"${file.name}" is too big. Please select a file smaller ` + `than ${maxFileSize}mb.`);
    const formData = new FormData();
    formData.append("file", file);
    const response = await fetch(`/api/uploads`, {
        method: "POST",
        body: formData
    });
    if (!response.ok) throw new Error(`file upload failed ${response.statusCode}`);
    const { error: error , url: url  } = await response.json();
    if (error) throw new Error(error);
    return url;
}
$33c0128acbec5ff2$export$a5575dbeeffdad98.MAX_FILE_SIZE_IN_MB = 200;


function $c2186b616e7fc8e1$export$25a37a5353d087d9(config) {
    return (0, $27954de794c56674$export$2e2bcd8739ae039)((0, $33c0128acbec5ff2$export$a5575dbeeffdad98), config);
}


export {$c2186b616e7fc8e1$export$25a37a5353d087d9 as useUploadFile};
//# sourceMappingURL=useUploadFile.js.map
