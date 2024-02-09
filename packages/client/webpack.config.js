const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        static: './dist',
        compress: true,
        port: 3000,
    },
    entry: './src/index.tsx',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: `./static/index.html`,
        }),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(css|scss)$/i,
                use: ['style-loader', {
                    loader: 'css-loader',
                    options: {
                      modules: true,
                    },
                  }, 'postcss-loader'],
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
              },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
    resolve: {
        alias: {
            '@ui':path.resolve(__dirname,'src/shared/UIkit' ),
            '@lib':path.resolve(__dirname,'src/shared/lib' ),
            '@api':path.resolve(__dirname,'src/shared/api' ),
            '@features':path.resolve(__dirname,'src/features' ),
            '@widgets':path.resolve(__dirname,'src/widgets' ),
            '@entities':path.resolve(__dirname,'src/entities' ),
        },
        extensions: ['.js', '.jsx', '.tsx', '.ts', '.scss', '.css', '.json', '.svg']
    }
};
