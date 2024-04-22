import { boot } from "quasar/wrappers";

export default boot(({ app }) => {
  // Create i18n instance with options
  const i18n = createI18n({
    locale: "ja",
    fallbackLocale: "en",
    messages: {
      en: {
        message: {
          hello: "hello world",
        },
      },
      ja: {
        message: {
          hello: "こんにちは、世界",
        },
      },
    },
  });
  // Set i18n instance on app
  app.use(i18n);
});
