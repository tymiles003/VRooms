import imageCompression from "browser-image-compression";
const MAX_TN_SIZE_MB = 0.5;
const MAX_360_SIZE_MB = 2;
const MAX_TN_WIDTH_OR_HEIGHT = 450;
const MAX_360_WIDTH_OR_HEIGHT = 4096;

module.exports = {
    /**
     * Compresses and resizes thumbnail image
     */
    compressThumbnail: (file, cb) => {
        imageCompression(file, MAX_TN_SIZE_MB, MAX_TN_WIDTH_OR_HEIGHT)
            .then(compressedFile => {
                cb(compressedFile);
            })
    },

    /**
     * Compresses and resizes 360 panorama
     */
    compress360: (file, cb) => {
        imageCompression(file, MAX_360_SIZE_MB, MAX_360_WIDTH_OR_HEIGHT)
        .then(compressedFile => {
            cb(compressedFile);
        })
    }
};