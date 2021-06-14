/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`);

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "~assets": path.resolve(__dirname, `src/assets`),
        "~components": path.resolve(__dirname, `src/components`),
        "~context": path.resolve(__dirname, `src/context`),
        "~hooks": path.resolve(__dirname, `src/hooks`),
        "~node_modules": path.resolve(__dirname, `node_modules`),
        "~plugins": path.resolve(__dirname, `plugins`),
        "~utils": path.resolve(__dirname, `src/utils`),
      }
    }
  });
};