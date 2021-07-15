const path = require('path');

module.exports = {
  name: 'word-relay-setting', // 내가 마음대로 name 작성
  node: 'development',  // 실 서비스 시 : production
  devtool : 'eval',

  entry: {
    app: ['./client.jsx'],
  },  // 입력
  output : {
    path: path.join(__dirname, 'dist'), // 현재 폴더 경로 C:\Users\user\Desktop\React\lecture\dist 를 자동으로 만들어줌
    filename: 'app.js'
  },  // 출력
}