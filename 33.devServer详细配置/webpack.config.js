const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/*
   

*/
module.exports = {
  entry: './src/js/index.js',
  output: {
    //文件名称 ： 指定名称和目录
    filename: 'js/[name].js',
    //输出文件目录 所有输出资源的公共目录
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  mode: 'development',
  devServer: {
    //运行代码的目录
    contentBase: resolve(__dirname, 'build'),

    //监视此目录下的文件，一旦文件变化就会reload
    watchContentBase: true,

    //监视的选项
    watchOptions: {
      //忽略文件
      ignored: /node_modules/
    },
    //启动gzip压缩
    compress: true,

    //端口号
    port: 5000,

    //域名
    host: 'localhost',

    //自动打开浏览器
    open: true,

    //开启HMR功能
    hot: true,

    //不要显示启动服务器日志信息
    clientLogLevel: 'none',

    //除了基本启动信息其他内容不要打印
    quiet: true,

    //如果出错 不要全屏提示
    overlay: false,

    //服务器代理 解决开发环境的跨域问题
    proxy: {
      // 一旦devserver5000服务器接受到/api/xxx的请求，就会把请求转发到另一个服务器3000
      '/api': {
        target: 'http://localhost:3000',
        // 发送请求时，请求路径重写：将/api/xxx => /xxx 去掉api
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
};
