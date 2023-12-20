module.exports = {
    devServer: {
        proxy: {
            '/api': {    //1
                target: 'http://localhost:8080',
                pathRewrite: {    //3
                    '^/api': ''
                }
            }
        }
    },
    chainWebpack: (config) => {
        config.module
          .rule("mjs")
          .test(/\.mjs$/)
          .type("javascript/auto")
          .include.add(/node_modules/)
          .end();
      },
}