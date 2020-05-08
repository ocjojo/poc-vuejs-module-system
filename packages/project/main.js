import { createApp } from "vue";
import App from "poc-core";
import Mod2 from "poc-module2";

const app = createApp(App, {
  // mod: "Mod2",
});

app.component("Mod2", Mod2);

app.mount("#app");
