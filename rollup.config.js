// 导入依赖
const  terser = require('@rollup/plugin-terser')
const commonjs = require('@rollup/plugin-commonjs')
// tsconfig.json合并选项
// 一般来说默认使用项目的tsconfig.json，如果有个别需要修改的如下，可以在此修改
const override = { compilerOptions: { module: 'ESNext' } }
module.exports = {
  // 项目入口
  input: 'tt.js',
  // 打包后的出口和设置
  output: {
    file: 'dist/app.min.js',
    format: 'cjs',
    sourcemap: true,
    exports: 'default',
  },
  // 使用的插件
  // 注意，这里的插件使用是有顺序的，先把ts编译为js，然后查找依赖，最后压缩
  plugins: [ commonjs(), terser()]
}
