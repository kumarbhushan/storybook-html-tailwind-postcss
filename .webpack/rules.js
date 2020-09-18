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
            // Extract any SCSS content and minimize
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
                { loader: 'css-loader', options: { importLoaders: 1 } },
                {
                    loader: 'postcss-loader'
                },

            ]
        },
        {
            // Extract any CSS content and minimize
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                { loader: 'css-loader', options: { importLoaders: 1 } },
                { loader: 'postcss-loader' }
            ]
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