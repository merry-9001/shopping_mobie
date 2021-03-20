module.exports = {
    publicPath: './',
    devServer: {
        proxy: {
            '/shopping_api': {
                // target: 'http://47.96.175.28',
                target: 'http://118.25.8.143',
                changeOrigin: true,
            }
        }
    }
}