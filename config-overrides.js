const {override, fixBabelImports, addLessLoader} = require('customize-cra');

module.exports = override(
    //使用babel-plugin-import
    fixBabelImports('import', {
      // 针对antd实现按需打包，根据import引入的打包相关样式
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,//自动打包相关的样式
    }),
    addLessLoader({
      javascriptEnabled: true,
      //改变默认主题颜色
      modifyVars: {'@primary-color': '#1DA57A'}
    })
);