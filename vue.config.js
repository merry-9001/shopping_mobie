module.exports = {
    // publicPath: 'shopping',
    devServer: {
        proxy: {
            '/shopping_api': {
                target: 'http://47.96.175.28',
                // target: 'http://localhost:8000',
                changeOrigin: true,
            }
        }
    }
}