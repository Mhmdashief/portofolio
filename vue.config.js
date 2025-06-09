const { defineConfig } = require('@vue/cli-service')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/portofolio/'  // <-- DIUBAH MENJADI NAMA YANG BENAR
    : '/'
}
