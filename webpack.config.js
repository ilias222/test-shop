const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    filename: "bild.js",
    assetModuleFilename: 'files/[name][ext]'
  },
  mode:'development',

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      filename: 'cheking.html',
      template: './src/cheking.html',
      inject: 'body',
      minify: true
    }),
    new HtmlWebpackPlugin({
      filename: 'product.html',
      template: './src/product.html',
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      filename: 'shoping_card.html',
      template: './src/shoping_card.html',
      inject: 'body',
      minify: true
    }),
    new HtmlWebpackPlugin({
      filename: 'single_page.html',
      template: './src/single_page.html',
      inject: 'body',
      minify: true
    }),
  ],
  module: {
    rules:[ 
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        { 
          test: /\.html$/, 
          loader: 'html-loader' 
        },
    ],
  },
};