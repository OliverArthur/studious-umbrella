module.exports = {
  lintOnSave: 'error',
  pwa: {
    themeColor: '#FDC02D'
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/scss/style.scss";
        `
      }
    }
  }
}
