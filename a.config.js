

module.exports = {
    target: "web",
    entry: {
        main: "./a.js"
    },
    output: {
        library: "entry_a",
        filename: "a.webpack.js",
        libraryTarget: "umd"
    },
    externals: {
        'b': 'umd entry_b'
    }
};