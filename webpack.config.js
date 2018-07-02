const path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  devtool: process.env.NODE_ENV === 'development' && 'eval-source-map',
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
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.join(__dirname, 'src')],
        exclude: ['node_modules'],
        use: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ]
      },
    ]
  },
};
