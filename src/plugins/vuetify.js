import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: { customProperties: true },
    themes: {
      light: {
        anchor: "#dd5745",
        primary: "#ffffff",
        secondary: "#dd5745",
        error: "#ffffff"
      }
    }
  },
  icons: {
    iconfont: "mdiSvg"
  }
});
