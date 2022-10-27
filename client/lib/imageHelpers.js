var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
function $77f8f4e7680be876$export$7a50b206cdbe4a00({ canvasWidth: canvasWidth , canvasHeight: canvasHeight , imageHeight: imageHeight , imageWidth: imageWidth  }) {
    let drawnWidth, drawnHeight, x, y;
    if (imageHeight < canvasHeight && imageWidth < canvasWidth) {
        drawnWidth = imageWidth;
        drawnHeight = imageHeight;
        x = (canvasWidth - drawnWidth) / 2;
        y = (canvasHeight - drawnHeight) / 2;
    } else if (imageWidth / canvasWidth > imageHeight / canvasHeight) {
        drawnWidth = canvasHeight / imageHeight * imageWidth;
        drawnHeight = canvasHeight;
        x = (canvasWidth - drawnWidth) / 2;
        y = 0;
    } else {
        drawnWidth = canvasWidth;
        drawnHeight = canvasWidth / imageWidth * imageHeight;
        x = 0;
        y = (canvasHeight - drawnHeight) / 2;
    }
    return {
        x: x,
        y: y,
        drawnWidth: drawnWidth,
        drawnHeight: drawnHeight
    };
}
function $77f8f4e7680be876$export$ac3b5a2068e99322({ canvasWidth: canvasWidth , canvasHeight: canvasHeight , imageHeight: imageHeight , imageWidth: imageWidth  }) {
    let drawnWidth, drawnHeight;
    if (imageHeight < canvasHeight && imageWidth < canvasWidth) {
        drawnWidth = imageWidth;
        drawnHeight = imageHeight;
    } else {
        const ratio = imageHeight / canvasHeight > imageWidth / canvasWidth ? imageHeight / canvasHeight : imageWidth / canvasWidth;
        drawnWidth = imageWidth / ratio;
        drawnHeight = imageHeight / ratio;
    }
    const x = drawnWidth < canvasWidth ? (canvasWidth - drawnWidth) / 2 : 0;
    const y = drawnHeight < canvasHeight ? (canvasHeight - drawnHeight) / 2 : 0;
    return {
        x: x,
        y: y,
        drawnWidth: drawnWidth,
        drawnHeight: drawnHeight
    };
}
function $77f8f4e7680be876$export$e23a5860bdbd2a15(file) {
    return new Promise((resolve, reject)=>{
        const reader = new $parcel$global.FileReader();
        reader.onload = ()=>{
            resolve(reader.result);
        };
        reader.onerror = ()=>{
            reject(reader.error);
        };
        reader.readAsDataURL(file);
    });
}
function $77f8f4e7680be876$export$fe58198efe02b173(src) {
    return new Promise((resolve, reject)=>{
        const image = new $parcel$global.Image();
        image.onload = function() {
            resolve(image);
        };
        image.onerror = function(error) {
            if (!(error instanceof Error)) {
                console.error(error);
                error = new Error(`Error loading image`);
            }
            reject(error);
        };
        image.setAttribute("crossOrigin", "anonymous");
        image.src = src;
    });
}
function $77f8f4e7680be876$export$ccb86a7570dd177(image, options = {}) {
    const { type: type = "image/png" , encoderOptions: encoderOptions ,  } = options;
    const canvas = $parcel$global.document.createElement("canvas");
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0);
    return canvas.toDataURL(type, encoderOptions);
}
async function $77f8f4e7680be876$export$7beea4af782414c4(image, options = {}) {
    if (!image.src.match(/data:image\/(gif|webp)/)) return image;
    const src = $77f8f4e7680be876$export$ccb86a7570dd177(image, options);
    return await $77f8f4e7680be876$export$fe58198efe02b173(src);
}
async function $77f8f4e7680be876$export$4128de1b6b235a86(file) {
    return await $77f8f4e7680be876$export$fe58198efe02b173(await $77f8f4e7680be876$export$e23a5860bdbd2a15(file));
}
async function $77f8f4e7680be876$export$b423874dd89ac031({ image: image , dataUri: dataUri , height: height , width: width , resizeTo: resizeTo , type: type = "image/png" , encoderOptions: encoderOptions ,  }) {
    if (dataUri) image = await $77f8f4e7680be876$export$fe58198efe02b173(dataUri);
    const onResize = resizeTo === "fill" ? $77f8f4e7680be876$export$7a50b206cdbe4a00 : $77f8f4e7680be876$export$ac3b5a2068e99322;
    const canvas = $parcel$global.document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext("2d");
    const { x: x , y: y , drawnWidth: drawnWidth , drawnHeight: drawnHeight  } = onResize({
        canvasWidth: width,
        canvasHeight: height,
        imageHeight: image.height,
        imageWidth: image.width
    });
    context.drawImage(image, x, y, drawnWidth, drawnHeight);
    return canvas.toDataURL(type, encoderOptions);
}
const $77f8f4e7680be876$export$ab60a79d24b56990 = (height, width)=>`${height / width * 100}%`;


export {$77f8f4e7680be876$export$7a50b206cdbe4a00 as resizeToFill, $77f8f4e7680be876$export$ac3b5a2068e99322 as resizeToFit, $77f8f4e7680be876$export$e23a5860bdbd2a15 as fileToImageDataURL, $77f8f4e7680be876$export$fe58198efe02b173 as loadImage, $77f8f4e7680be876$export$ccb86a7570dd177 as imageToDataURL, $77f8f4e7680be876$export$7beea4af782414c4 as deanimateImage, $77f8f4e7680be876$export$4128de1b6b235a86 as fileToImage, $77f8f4e7680be876$export$b423874dd89ac031 as resizeImage, $77f8f4e7680be876$export$ab60a79d24b56990 as aspectRatioToTopPadding};
//# sourceMappingURL=imageHelpers.js.map
