module.exports = {
  publicPath: './',
  // 生产环境是否生成 sourceMap 文件
 productionSourceMap: false,
 // css相关配置
  css: {  // 配置屏幕自适应 px2rem
    loaderOptions: {
      css: {
        // options here will be passed to css-loader
      },
      postcss: {
        // options here will be passed to postcss-loader
        plugins: [require("postcss-px2rem")({
          remUnit: 75,
          'baseDpr': 2
        })]
      }
    }
  },
  // 开发环境跨域设置
  devServer: {
    // 设置主机地址
    // host: '192.168.0.114',
    host: '127.0.0.1',
    port: 8089,
    // 设置代理
    proxy: {
      './api': {
        target: 'http://47.112.21.206:8001',// 远程
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }

  }
}

//  当你遇到1px的边框时，通常容易发现页面缺失部分边框，这时你可以使用/*no*/语法来屏蔽该属性转换，例如：
//border: 1px solid red; /*no*/
 // 由于字体的特殊性，我们在编译font-size属性时，通常不使用rem单位，这时候你可以这样使用：
//font-size: 24px; /*px*/ 
//直接写px，编译后会直接转化成rem ---- 除开下面两种情况，其他长度用这个
//在px后面添加;/*no*/，不会转化px，会原样输出。 --- 一般border需用这个
//在px后面添加;/*px*/, 会根据dpr的不同，生成三套代码。----一般字体需用这个
