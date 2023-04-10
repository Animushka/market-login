const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  filenameHashing: false,
  configureWebpack: {
    output: {
      libraryTarget: 'system'
    },
  },
  transpileDependencies: [
    'quasar'
  ],

  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  },
  devServer: {
    host : "localhost",
    port: 8092,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  }
});
