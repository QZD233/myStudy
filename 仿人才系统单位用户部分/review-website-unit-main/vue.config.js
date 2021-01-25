const BASEURL = 'http://www.chai233.cn:8082'
module.exports = {
  devServer: {
    port: 8080,
    proxy: BASEURL
  }
}
