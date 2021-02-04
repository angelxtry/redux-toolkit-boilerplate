const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// TODO
// production, staging, development 분리
// 각 상태로 compile 시 header nav에 상태 출력
const mode = process.env.NODE_ENV || 'none';

module.exports = env => {
  return {
    mode,
    entry: {
      app: path.join(__dirname, 'src', 'index.tsx'),
    },
    target: 'web',
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: '/node_modules/',
        },
        {
          test: /\.(css|scss)$/,
          use: [
            {
              loader: 'style-loader', // inject CSS to page
            },
            {
              loader: 'css-loader', // translates CSS into CommonJS modules
            },
          ],
        },
        {
          test: /\.(webp|png|ico)$/,
          loader: 'file-loader',
          options: {
            name: 'images/[name].[ext]?[hash]',
            publicPath: '/',
          },
        },
      ],
    },
    output: {
      filename: '[name].js',
      publicPath: '/',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src', 'index.html'),
        favicon: './src/assets/image/favicon.ico',
        filename: './index.html',
      }),
      new DefinePlugin({
        'process.env': {
          TARGET_ENV: JSON.stringify(env.TARGET_ENV),
        },
      }),
    ],
    devServer: {
      port: 3000,
      historyApiFallback: true,
      index: 'index.html',
      host: '0.0.0.0',
      overlay: true,
      disableHostCheck: true,
    },
  };
};
