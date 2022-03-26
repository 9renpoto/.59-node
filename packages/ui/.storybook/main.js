const path = require("path");

module.exports = {
  stories: [path.join(process.cwd(), "./src/**/*.stories.@(ts|tsx)")],
  typescript: {
    reactDocgen: 'react-docgen',
  },
};
