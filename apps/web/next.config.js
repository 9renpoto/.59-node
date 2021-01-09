const withPreact = require("next-plugin-preact");

module.exports = withPreact({
  redirects() {
    return [
      {
        source: "/",
        destination: "/en",
        permanent: true,
      },
    ];
  },
});
