const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
                @import "@/assets/scss/_global.scss";
                @import "@/assets/scss/_colors.scss";
                @import "@/assets/scss/_variables.scss";
                @import "@/assets/scss/_mixins.scss";
                `,
      },
    },
  },
});
