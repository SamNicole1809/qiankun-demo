const { name } = require('./package.json')

const port = 6662

module.exports = {
    devServer: {
        port,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    configureWebpack: {
        output: {
            library: '${name} - [name]',
            libraryTarget: 'umd',
            jsonpFunction: 'webpackJsonp_${name}'
        }
    }
}