const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        proxy: {
            '/api': {
                target: 'https://focusinfo.ru/overwatch-prog-rating/api',
                pathRewrite: { '^/api': '' },
                changeOrigin: true,
                secure: false,
            },
        },
    },
    publicPath: process.env.NODE_ENV === 'production' ? '/overwatch-prog-rating/' : '/',
});
