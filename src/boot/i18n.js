import { boot } from "quasar/wrappers";
import DE from "../i18n/DE.json";
import FR from "../i18n/FR.json";
import { userStore } from "stores/store";

const store = userStore();

export default boot(({ app }) => {
  // Create i18n instance with options
  const i18n = setI18n({
    locale: "de",
    messages: {
      fr: FR,
      de: DE,
    },
  });
  // Set i18n instance on app
  // app.use(i18n);
});
