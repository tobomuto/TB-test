module.exports = {
    publicPath: '/tb-test/',
    css: {
      loaderOptions: {
        sass: {
            additionalData: `@import "@/styles/_variables.scss";`
        }
      }
    }
  };