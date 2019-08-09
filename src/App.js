import React from "react";
import "./App.css";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  return (
    <main>
      <header>{t("TITLE")}</header>
      <article>
        <p>{t("HELLO_HOUSE")}</p>
        <p>{t("HELLO_CITY")}</p>
        <p>{t("HELLO_COUNTRY")}</p>
        <p>{t("HELLO_WORLD")}</p>
      </article>
    </main>
  );
}

export default App;
