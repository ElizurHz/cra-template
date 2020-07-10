const { override, fixBabelImports, addLessLoader, disableEsLint, addDecoratorsLegacy } = require('customize-cra')

module.exports = {
  webpack: override(
    addDecoratorsLegacy(),
    disableEsLint(),
    // fixBabelImports('import', {
    //   libraryName: 'antd',
    //   libraryDirectory: 'es',
    //   style: true
    // })
    // Customize less config
    addLessLoader({
      javascriptEnabled: true,
      modifyVars: {}
    })
  ),
  jest: function(config) {
    if (!config.testPathIgnorePatterns) {
      config.testPathIgnorePatterns = []
    }
    if (!config.coveragePathIgnorePatterns) {
      config.coveragePathIgnorePatterns = []
    }
    const ignorePatterns = []

    config.testPathIgnorePatterns.push(...ignorePatterns)
    config.coveragePathIgnorePatterns.push(...ignorePatterns)
    return config
  }
}
