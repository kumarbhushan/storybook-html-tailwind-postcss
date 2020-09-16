const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
/**
 * @param themePaths {ThemePaths}
 * @param selectMode {SelectMode}
 * @param selectTarget {SelectTarget}
 * @returns {*[]}
 */
function rules(themePaths, selectMode, selectTarget) {
    return [
        {
            include: [
                themePaths.src,
                themePaths.generated,
                path.resolve(__dirname, '..', 'node_modules', 'debug'),
            ],
        },
        {
            test: /\.(sa|sc|c)ss$/,
            use: [
                {
                    loader: 'style-loader',
                    options: {
                        hmr: true
                    }
                },
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        importLoaders: 1,
                        localIdentName: '[name]__[local]___[hash:base64:5]',
                    },
                },
                'to-string-loader',
                'postcss-loader',
                'sass-loader',
                MiniCssExtractPlugin.loader
            ],
            include: path.resolve(__dirname, "..", "assets/css")
        },
        {
            test: /\.(jpe?g|png|svg|gif)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {},
                },
            ],
        },
        {
            test: /\.(woff2?)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                    },
                },
            ],
        },
        {
            test: /\.stories\.jsx?$/,
            loaders: [require.resolve('@storybook/source-loader')],
            enforce: 'pre',
        }
    ];
}

module.exports.rules = rules;