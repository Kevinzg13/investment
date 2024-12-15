const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack');


module.exports = defineConfig({
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
      }),
    ],
    resolve: {
      fallback: {
        buffer: require.resolve('buffer/'),
      },
    },
  },

  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
})

