import Vue from "vue";
import store from "../store";
import * as io from "socket.io-client";
import VueSocketIO from "vue-socket.io";

export default Vue.use(
  new VueSocketIO({
    debug: false,
    connection: io("http://localhost:5000/"),
    vuex: {
      store,
      actionPrefix: "SOCKET_",
      mutationPrefix: "SOCKET_"
    }
  })
);
