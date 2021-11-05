

module.exports = {
    target: "web",
    entry: {
        main: "./b.js"
    },
    output: {
        library: "entry_b",
        filename: "b.webpack.js",
        libraryTarget: "umd"
    },
};