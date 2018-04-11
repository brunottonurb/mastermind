const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  context: path.join(__dirname, 'src'),
  devtool: 'source-map',
  devServer: {
    contentBase: './www'
  },
  entry: [
    './main.js',
  ],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js',
  },
  plugins: [
    new BundleAnalyzerPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      }
    ]
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
  },
};
