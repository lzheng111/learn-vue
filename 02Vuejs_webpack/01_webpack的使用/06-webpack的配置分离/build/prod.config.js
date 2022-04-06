//生产时的依赖
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = webpackMerge(baseConfig,{
  plugins:[
    new UglifyjsWebpackPlugin() //丑化代码
  ]
})
