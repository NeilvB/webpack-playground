const path = require('path'); // you have to use older commonJS require inside webpack config files
// const TerserPlugin = require('terser-webpack-plugin');  included by default
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js', // usually imports all other dependencies
  output: {
    // result of build, created first time
    filename: 'bundle[contenthash].js',
    // path for the above, created first time
    path: path.resolve(__dirname, './dist'),
    // the above two create the path and file you should point your e.g. index.html at
    publicPath: ''
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,  // I think this is how WP knows whether to apply this rule to the file
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.css$/,  // I think this is how WP knows whether to apply this rule to the file
        use: [
          MiniCssExtractPlugin.loader, 'css-loader' // use both loaders  - ordered?
        ]
      },
      {
        test: /\.scss$/,  // I think this is how WP knows whether to apply this rule to the file
        use: [
          MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' // WP loads from RIGHT TO LEFT - pipeline concept
        ]
      },
      {
        test: /\.js$/,  // I think this is how WP knows whether to apply this rule to the file
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ '@babel/env' ],
            plugins: [ 'transform-class-properties' ]
          }
        }
      }
    ]
  },
  plugins: [
    // new TerserPlugin(),  included by default
    new MiniCssExtractPlugin({
      filename: 'styles[contenthash].css'
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Woo Party',
      filename: 'custom_filename.html',
      meta: {
        viewport: 'width=device-width, initial-scale=1'
      }
    })
  ]
}