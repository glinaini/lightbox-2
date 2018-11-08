// https://github.com/vuejs/vue-cli/blob/dev/docs/config.md
// TODO: 根据环境配置对应参数
const path = require('path')
const _arguments = process.argv
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
//   .BundleAnalyzerPlugin
const lessOptions = require('./src/less/index')

const devServerProxyTarget = 'https://wbd.api.t.jiabangou.com'
let baseUrl = '/'

if (_arguments[3] === '--prod') {
  process.env.VUE_APP_PUBLISH = 'prod'
  baseUrl = 'https://m.cdn.94lazy.com/'
} else {
  process.env.VUE_APP_PUBLISH = 'test'
}

module.exports = {
  // Project deployment base
  // By default we assume your app will be deployed at the root of a domain,
  // e.g. https://www.my-app.com/
  // If your app is deployed at a sub-path, you will need to specify that
  // sub-path here. For example, if your app is deployed at
  // https://www.foobar.com/my-app/
  // then change this to '/my-app/'
  baseUrl: baseUrl,

  // where to output built files
  outputDir: './target/html',

  // whether to use eslint-loader for lint on save.
  // valid values: true | false | 'error'
  // when set to 'error', lint errors will cause compilation to fail.
  lintOnSave: true,
  assetsDir: 'static',

  // use the full build with in-browser compiler?
  // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
  // compiler: false,

  // tweak internal webpack configuration.
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  // chainWebpack: webpackConfig => {
  //   // output all the assets to a specific directory
  //   // https://github.com/vuejs/vue-cli/issues/1027#issuecomment-375586931
  //   // if (process.env.NODE_ENV === 'production') {
  //   //   webpackConfig.plugin('webpack-report').use(BundleAnalyzerPlugin, [
  //   //     {
  //   //       analyzerMode: 'static'
  //   //     }
  //   //   ])
  //   // }
  // },
  configureWebpack: {
    output: {
      publicPath: baseUrl
    },
    resolve: {
      extensions: ['.js', '.vue', '.less', '.css'],
      alias: {
        common: path.resolve(__dirname, './src/common'),
        components: path.resolve(__dirname, './src/components'),
        utils: path.resolve(__dirname, './src/utils'),
        assets: path.resolve(__dirname, './src/assets')
      }
    }
  },

  // vue-loader options
  // https://vue-loader.vuejs.org/en/options.html
  // vueLoader: {},

  // generate sourceMap for production build?
  productionSourceMap: false,

  // CSS related options
  css: {
    // extract CSS in components into a single CSS file (only in production)
    extract: true,

    // enable CSS source maps?
    sourceMap: false,

    // pass custom options to pre-processor loaders. e.g. to pass options to
    // sass-loader, use { sass: { ... } }
    loaderOptions: {
      less: lessOptions
    },

    // Enable CSS modules for all css / pre-processor files.
    // This option does not affect *.vue files.
    modules: false
  },

  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require('os').cpus().length > 1,

  // split vendors using autoDLLPlugin?
  // can also be an explicit Array of dependencies to include in the DLL chunk.
  // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
  // dll: false,

  // options for the PWA plugin.
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},

  // configure webpack-dev-server behavior
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
    proxy: {
      '/api': {
        target: devServerProxyTarget,
        secure: true
      }
    }, // string | Object
    before: () => {}
  },

  // options for 3rd party plugins
  pluginOptions: {
    // ...
  }
}
