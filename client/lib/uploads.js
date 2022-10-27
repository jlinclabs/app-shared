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


export {$33c0128acbec5ff2$export$a5575dbeeffdad98 as uploadFile};
//# sourceMappingURL=uploads.js.map
