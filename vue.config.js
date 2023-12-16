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
    }
}