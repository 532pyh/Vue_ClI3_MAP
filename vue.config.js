const fs = require('fs')
let pages = {}
const _configPages = async function () {
  await fs.readdirSync('./src').forEach((val) => {
    pages[val] = {
      // page entry
      entry: `src/${val}/main.js`,
      // 模板来源
      template: `public/${val}.html`,
      // 在 dist/index.html 的输出
      filename: `${val}.html`
    }
  })
}
_configPages() // readdirSync
console.log(pages)
const webpack = require('webpack');
const path = require('path');
function resolve(dir) {
    return path.resolve(__dirname, dir)
}
module.exports = {
    pages: pages,
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                '@': resolve('src'),
                'oneassets': resolve('src/one/assets'),
                'onecss': resolve('src/one/assets/css'),
                'oneimages': resolve('src/one/assets/images'),
                'oneviews': resolve('src/one/views'),
                'onecomponents': resolve('src/one/components'),
                'oneapi': resolve('src/one/api'),
                'onemixins': resolve('src/one/mixins'),
                'onestore': resolve('src/one/store'),
                'oneservice': resolve('src/one/service'),
                
                'twoassets': resolve('src/two/assets'),
                'twocss': resolve('src/two/assets/css'),
                'twoimages': resolve('src/two/assets/images'),
                'twoviews': resolve('src/two/views'),
                'twocomponents': resolve('src/two/components'),
                'twoapi': resolve('src/two/api'),
                'twomixins': resolve('src/two/mixins'),
                'twostore': resolve('src/two/store'),
                'twoservice': resolve('src/two/service'),
            }
        },
        plugins: [
            new webpack.ProvidePlugin({
                $:"jquery",
                jQuery:"jquery",
                "windows.jQuery":"jquery"
            })
        ]
    },
    devServer: {
        port: 8038,
        hot: true,
        open: 'Google Chrome'
    },
    productionSourceMap: false,
}