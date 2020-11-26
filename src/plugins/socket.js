import Vue from "vue";
import store from "../store";
import VueSocketIO from "vue-socket.io";

export default Vue.use(
  new VueSocketIO({
    debug: false,
    connection: "https://synx-pass-server.herokuapp.com/",
    vuex: {
      store,
      actionPrefix: "SOCKET_",
      mutationPrefix: "SOCKET_"
    }
  })
);
