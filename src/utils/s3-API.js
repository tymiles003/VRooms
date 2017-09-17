"use strict";

const axios = require("axios");

/**
 *  Gets the temporary signed request from the app.
 *  If request successful, continue to upload the file using this signed
 *  request.
 */
function getSignedRequest(file) {
    console.log(">>> getSignedRequest");
    console.log("file: ", file);

    let fileName = file.fileName;
    let fileType = file.fileName.split(".")[1];
    console.log("fileName: ", fileName);
    console.log("fileType: ", fileType);

    // Convert file data to blob from dataURI
    let fileBlob = dataURItoBlob(file.data);
    console.log("converted file: ", fileBlob);

    // Get signed request from server
    axios.post("/sign-s3", { fileName, fileType })
        .then(response => {
            console.log("response: ", response);
            if (response.status === 200) {
                uploadFile(fileBlob, response.data.signedRequest, response.data.url);
            } else {
                console.log("Could not get signed URL.");
            }
        })
        .catch(error => {
            console.log("error: ", error);
        });
}

/** 
 * Uploads a file to our S3 bucket once we have a signed request
 */
function uploadFile(file, signedRequest, url) {
    console.log(">>> uploadFile");
    console.log("file: ", file);
    console.log("signedRequest: ", signedRequest);
    console.log("url: ", url);

    // Make PUT request to S3 using our signed request
    axios.put(signedRequest, file)
        .then(response => {
            console.log("upload response: ", response);
            if (response.status === 200) {
                console.log("File uploaded successfully to: ", url);
                alert ("File uploaded successfully to: " + url);
            } else {
                console.log("Could not upload file");
            }
        })
        .catch(error => {
            console.log("error: ", error);
        });
}

/**
 * Helper function to convert dataURI to blob for sending over ajax
 */
function dataURItoBlob(dataURI) {
    // convert base64 to raw binary data held in a string
    // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
    let byteString = atob(dataURI.split(',')[1]);

    // separate out the mime component
    let mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    // write the bytes of the string to an ArrayBuffer
    let ab = new ArrayBuffer(byteString.length);
    let ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ab], { type: mimeString });
}

module.exports = {
    getSignedRequest
};
