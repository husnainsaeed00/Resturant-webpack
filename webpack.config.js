const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html', // Output file name
        template: './src/index.html', // Path to your HTML template
        chunks: ['index'], // Specify which chunks (entry points) to include in this HTML file
      }),
      new HtmlWebpackPlugin({
        filename: 'about.html',
        template: './src/about.html',
        chunks: ['about'],
      }),
      new HtmlWebpackPlugin({
        filename: 'menu.html',
        template: './src/menu.html',
        chunks: ['menu'],
      }),
      // Add more instances for other HTML files if needed
    ],
  },
};