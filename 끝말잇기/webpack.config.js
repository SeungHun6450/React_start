// webpack.config.js에서 다 돌아간다
// node 이용 경로
const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  name: 'word-relay-setting', // 내가 마음대로 name 작성
  mode: 'development',  // 실 서비스 시 : production
  devtool : 'eval',
  resolve: {
    extensions: ['.js', '.jsx']
  },

  // ★★★
  // 입력, wordreply.jsx + client.jsx
  entry: {
    // './WordRelay.jsx'를 안쓰는 이유 : 이미 client.jsx에서 WordRelay.jsx를 불러온다
    app: ['./client' ],
  },  
  
  module: {
    rules: [{
      // 여러 규칙을 적용할 것이기에 배열형태
      test: /\.jsx?/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', {
            targets: {
              browsers: ['> 1% in KR']
            },
            debug: true,
          }],
          '@babel/preset-react'
        ],
        plugins: [
          '@babel/plugin-proposal-class-properties',
          'react-refresh/babel',
        ],
      },
    }]
  },
  plugins: [
    new RefreshWebpackPlugin()
  ],

  // 출력
  output : {
    path: path.join(__dirname, 'dist'), // 현재 폴더 경로 C:\Users\user\Desktop\React\lecture\dist 를 자동으로 만들어줌
    filename: 'app.js',
    // publicPath: '/dist/',
  },
  devServer: {
    // publicPath: '/dist/',
    hot: true,
  },
}