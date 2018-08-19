/* eslint-disable*/
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src/index.tsx')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle[chunkhash].js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss'],
  },
  module: {
    rules: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.tsx?$/,
        include: [path.resolve(__dirname, 'src')],
        exclude: /node_modules/,
        use: [{
            loader: 'babel-loader',
            options: {
              "presets": [
                "env",
                "stage-0",
                "react"
              ]
            },
          },
          'ts-loader?transpileOnly=true'
        ]
      },
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'sass-loader']
        })
      },
      {
        test: /\.svg$/,
        use: [{
            loader: "babel-loader"
          },
          {
            loader: "react-svg-loader",
            options: {
              jsx: true // true outputs JSX tags
            }
          }
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'main[chunkhash].css',
      disable: false,
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    port: 8085
  }
}