let path = require("path")
var webpack = require('webpack')
var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
  entry: {
    index: path.join(__dirname, './src/index.js')
  }, // 项目入口文件
  output: { // 配置输出选项
      path: path.join(__dirname, './dist'), // 配置输出的路径
      filename: '[name].min.js' // 配置输出的文件名
  },
  mode:"development",
  module: { // 用来配置第三方loader模块的
    rules: [ // 文件的匹配规则
      {test: /\.jsx?$/, exclude: /node-modules/, loader: 'babel-loader'},
      { test: /\.(less|css)$/, loader: 'style-loader!css-loader!less-loader' },
      {  // 处理 字体文件的 loader 
        test: /\.(ttf|eot|svg|woff|woff2)$/,
        exclude: path.resolve(__dirname, './src/icons'),
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name]-[hash:5].min.[ext]',
              limit: 5000, // fonts file size < 5KB, use 'base64'; else, output svg file 
              outputPath: 'font',
              publicPath: 'font'
            }
          }
        ] 
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        include: path.resolve(__dirname, './src/icons'),
        options: {
          symbolId:'icon-[name]'
        }
      }
    ],
  },
  plugins:[ // 添加plugins节点配置插件
    new htmlWebpackPlugin({
      filename:'index.html',//自动生成的HTML文件的名称
      template:path.join(__dirname, './index.html'),//模板路径
      chunks: ['index']
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  }
}