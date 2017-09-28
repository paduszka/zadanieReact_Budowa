module.exports = {
  entry: "./js/app.jsx",
  output: { filename: "./js/out.js" },
  watch: true,
  devServer: {
    inline: true,
    contentBase: './',
    port: 8080
},
  module: {
  loaders: [
      {
      test: /\.jsx$/, exclude: /node_modules/,
      loader: 'babel-loader',
      query: { presets: ['es2015', 'stage-2','react'] }
      }
    ]
  }
}
