const path = require('path')

module.exports = {
  entry:'./src/main.js',
  output:{
    path:path.resolve(__dirname,'dist'),   //动态获取路径
    filename:'bundle.js',
    publicPath:'dist/'
},
  module: {
    rules: [
      {
        test: /\.css$/,
        //css-loader只负责加载，不负责解析
        //style-loader负责将样式添加到DOM中
        //使用多个loader时，是从右到左的
        use: ['style-loader','css-loader']
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              //如果加载的图片小于limit时，会将图片编译成base64字符串形式
              //当加载的图片大于limit时，需要使用file-loader模块进行加载
              limit: 13000,
              name:'img/[name].[hash:8].[ext]'
            },
          }
        ]
      },
      {
        test: /\.js$/,
        // exclude:排除
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}