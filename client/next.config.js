const exposedConfigs = {
  trailingSlash: true,
  exportPathMap: async function () {
    const paths = {
      "/": { page: "/" },
      "/control-panel": { page: "/control-panel" },
    };
    return paths;
  },
};
const configuration = Object.assign(exposedConfigs);
module.exports = configuration;
