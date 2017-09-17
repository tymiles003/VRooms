"use strict";

const axios = require("axios");
const dataUriToBuffer = require("data-uri-to-buffer");

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
    let fileBuffer = dataUriToBuffer(file.data);
    console.log("converted file: ", fileBuffer);

    // Get signed request from server
    axios.post("/sign-s3", { fileName, fileType })
        .then(response => {
            console.log("response: ", response);
            if (response.status === 200) {
                uploadFile(fileBuffer, response.data.signedRequest, response.data.url);
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
            if (response.status === 200) {
                console.log("File uploaded successfully at: ", response.url);
            } else {
                console.log("Could not upload file");
            }
        })
        .catch(error => {
            console.log("error: ", error);
        });
}

module.exports = {
    getSignedRequest
};
