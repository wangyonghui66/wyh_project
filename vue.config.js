const Timestamp = new Date().getTime();
const path = require('path')

const resolve = dir => path.join(__dirname, dir)

module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    output: {
      filename: `[name].${Timestamp}.js`,
      chunkFilename: `[name].${Timestamp}.js`
    },
  },
  // devServer: {
  //   proxy: 'http://qa3-m.testxinfei.cn',
  //   open: true,
  // },
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        import: ['./src/theme'],
      },
    },
  },
  chainWebpack: config => {
    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          resources: ['./src/styles/func.scss', './src/styles/variables.scss']
        })
        .end()
    })
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true,
    },
  },
};
