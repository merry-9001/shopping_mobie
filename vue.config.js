module.exports = {
    devServer: {
        proxy: {
            '/shopping_api': {
                target: 'http://120.27.1.3',
                // target: 'http://localhost:8000',
                changeOrigin: true,
            }
        }
    }
}