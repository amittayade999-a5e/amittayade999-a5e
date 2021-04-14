const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy("/saveuser", {
      target: "http://65.0.228.14:8080",
      secure: false,
      changeOrigin: true
    })
  );

  
};