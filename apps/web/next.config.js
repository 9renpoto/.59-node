// @ts-check

const withPreact = require("next-plugin-preact");
const {
  NODE_ENV,
  VERCEL_GITHUB_COMMIT_SHA,
  VERCEL_GITLAB_COMMIT_SHA,
  VERCEL_BITBUCKET_COMMIT_SHA,
  GA_TRACKING_ID,
} = process.env;

const COMMIT_SHA = VERCEL_GITHUB_COMMIT_SHA ||
  VERCEL_GITLAB_COMMIT_SHA ||
  VERCEL_BITBUCKET_COMMIT_SHA;

/**
 * @type {import('next').NextConfig}
 */
const config = {
  productionBrowserSourceMaps: true,
  env: {
    // Make the COMMIT_SHA available to the client so that Sentry events can be
    // marked for the release they belong to. It may be undefined if running
    // outside of Vercel
    NEXT_PUBLIC_COMMIT_SHA: COMMIT_SHA,
    GA_TRACKING_ID,
  },
};

module.exports = withPreact(config);
