module.exports ={
  devServer : {
  open : true,
  proxy: {
    '/api': {
      target: "https://ele-interface.herokuapp.com/api/",
      changOrigin: true,
      ws: true,
      pathRewrite: {
        '/api': ""
      }

    }
  }
  }
}