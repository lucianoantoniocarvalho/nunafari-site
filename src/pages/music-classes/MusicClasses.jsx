import { useTranslation } from "react-i18next";

export default function MusicClasses() {
  const { t } = useTranslation("music-classes");

  return (
    <div className="page music-classes">
      <h1>{t("title")}</h1>
      <p>{t("text")}</p>
      <p><strong>{t("call-to-action")}</strong></p>
    </div>
  );
}
