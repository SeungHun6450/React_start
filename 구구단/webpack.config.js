const path = require('path');
const webpack  = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'eval',  // hidden-source-map, 프로덕션시
  resolve: {
    extensions: ['.jsx','.js'],
  },

  entry: {
    app: './client',
  },
  module: { // loader
    rules: [{
      test: /\.jsx?/,
      loader: 'babel-loader',
      options: {
        // presets: ['@babel/preset-env', '@babel/preset-react'],
        presets: [
          ['@babel/preset-env', {
            targets: { // 세부 설정 가능 (browserslist 참고)
              browsers: ['> 5% in KR', 'last 2 chrome versions']
            },
            debug: true,
          }],
          '@babel/preset-react'
        ],
        plugins: [],
      },
    }],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({ debug: true}),  // loader에 debug:true넣어줌
  ],
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist'),
  },
}