// @ts-check

const withPreact = require("next-plugin-preact");
const { GA_TRACKING_ID } = process.env;

/**
 * @type {import('next').NextConfig}
 */
const config = {
  productionBrowserSourceMaps: true,
  env: {
    GA_TRACKING_ID,
  },
};

module.exports = withPreact(config);
