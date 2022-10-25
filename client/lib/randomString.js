function $c543577956b6bb09$export$2e2bcd8739ae039(length) {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
    const charLength = chars.length;
    let ints = new Uint32Array(length);
    crypto.getRandomValues(ints);
    ints = [
        ...ints
    ];
    let result = "";
    while(ints.length > 0)result += chars.charAt(ints.shift() % charLength);
    return result;
}


export {$c543577956b6bb09$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=randomString.js.map
