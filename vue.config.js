/*const { defineConfig } = require('@vue/cli-service')*/
/*common.js的暴露*/
/*修改vue.config.js时需要重新启动npm*/
module.exports = ({
  pages:{
    index: {
      entry: 'src/main.js'
    }
  },
  lintOnSave:false, //关闭语法检查
  //开启代理服务器 方式一(1.不能开启多个代理 2.不能灵活控制走不走代理)
  /*devServer:{
    proxy:'http://localhost:5000'
  }*/
  //开启代理服务器 方式二
  devServer:{
    proxy: {
      '/atguigu': {
        target: 'http://localhost:5000',
        pathRewrite: {'^/atguigu':''},
        ws: true, //用于支持websocket
        changeOrigin: true //用于控制请求头中的host值
      },
      '/demo': {
        target: 'http://localhost:5001',
        pathRewrite: {'^/demo':''},
        /*ws: true, //用于支持websocket
        changeOrigin: true //用于控制请求头中的host值*/
      },
    }
  }
})
