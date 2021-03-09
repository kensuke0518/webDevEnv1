module.exports = {
    mode: 'development',
    entry: {
        'index': './src/js/index.js', //'index'がoutputの[name]になる
    },
    output: {
        path: `${__dirname}/docs/js`,
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                            ]
                        }
                    }
                ]
            }
        ]
    },
    target: ["web", "es5"],
};
