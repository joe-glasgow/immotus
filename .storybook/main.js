const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-material-ui",
  ],
  "framework": "@storybook/react",
  "typescript": {
    check: false,
    checkOptions: {},
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => {
        return prop.parent
            ? /@material-ui/.test(prop.parent.fileName) ||
            !/node_modules/.test(prop.parent.fileName)
            : true;
      },
    },
  },
  "webpackFinal": async (config) => {
    config.resolve.alias['@/'] = path.resolve(__dirname, '../src/')
    config.resolve.alias['@/components'] = path.resolve(__dirname, '../src/components')
    config.resolve.alias['@/fonts'] = path.resolve(__dirname, '../src/fonts')
    config.resolve.alias['@/utils'] = path.resolve(__dirname, '../src/utils')
    config.resolve.alias['@/constants'] = path.resolve(__dirname, '../src/constants')
    config.resolve.alias['@/static'] = path.resolve(__dirname, '../src/static')
    config.resolve.alias['@/theme'] = path.resolve(__dirname, '../src/theme')
    config.resolve.alias['@mui/styled-engine'] = '@mui/styled-engine-sc'
    return config
  }
}