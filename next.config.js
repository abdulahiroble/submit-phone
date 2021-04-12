const withImages = require("next-images");

module.exports = withImages({
  exportPathMap: function () {
    return {
      "/": { page: "/" },
    };
  },
}
);