const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    browser_version_control: './src/classical-App/browser_version_control/index.ts',
    trim_list_items: './src/classical-App/trim_list_items/index.ts',
    trim_search_results: './src/classical-App/trim_search_results/index.ts',
    list_experience_control: './src/classical-App/list_experience_control/index.ts',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};
