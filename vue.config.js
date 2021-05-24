/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
 module.exports = {
    pwa: {
        themeColor: "#1a1a1a",
        //name: "CodeLuna",
        manifestOptions: {
            name: "CodeLuna",
            short_name: "Luna"
        }
    },
    devServer: {
        proxy: {
          "^/ra": {
            target: "https://youtu.be/dQw4w9WgXcQ",
            ws: true,
            changeOrigin: true
          },
          "^/ra2": {
              target: "https://youtu.be/dQw4w9WgXcQ"
          }
        }
      }
}
  