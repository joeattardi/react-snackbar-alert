exports.onCreateWebpackConfig = function onCreateWebpackConfig({ actions, stage, loaders }) {
  if (stage === 'develop') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-hot-loader/,
            use: [
              loaders.js()
            ]
          }
        ]
      }
    })
  }
};
