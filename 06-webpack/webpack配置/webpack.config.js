const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        // 这里需要引用node里面的path来拼接成绝对路径
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    }
}
