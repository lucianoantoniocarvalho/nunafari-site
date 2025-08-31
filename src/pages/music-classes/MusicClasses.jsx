import React from "react";
import { useTranslation } from "react-i18next";

export default function MusicClasses() {
  const { t } = useTranslation();

  return (
    <div className="page music-classes">
      <h1>{t("music-classes.title")}</h1>
      <p>{t("music-classes.text")}</p>
      <p><strong>{t("music-classes.call-to-action")}</strong></p>
    </div>
  );
}
