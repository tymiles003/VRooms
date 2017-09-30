const path = require("path");

module.exports = {
    // This is the entry point or start of our react applicaton
    entry: "./src/App.js",

    // The plain compiled Javascript will be output into this file
    output: {
		filename: "public/bundle.js",
    },

    resolve: {
        extensions: ["", ".js", ".jsx"],
        modulesDirectories: [path.resolve(__dirname, "node_modules")]
    },
    resolveLoader: {
        root: path.resolve(__dirname, "node_modules")
    },

    // This section desribes the transformations we will perform
    module: {
        // noParse: ["/node_modules/aframe/dist/aframe-master.js"],
        loaders: [
            {
                // Only working with files that in in a .js or .jsx extension
                test: /\.jsx?$/,
                // Webpack will only process files in our src folder. This avoids processing
                // node modules and server files unnecessarily
                include: /src/,
                exclude: path.resolve(__dirname, "node_modules"),
                loader: "babel",
                query: {
                    // These are the specific transformations we'll be using.
                    presets: ["react", "es2015", "stage-2"]
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    },
    // This lets us debug our react code in chrome dev tools. Errors will have lines and file names
    // Without this the console says all errors are coming from just coming from bundle.js
    devtool: "eval-source-map"
};
