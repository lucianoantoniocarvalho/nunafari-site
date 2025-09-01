import { useTranslation } from "react-i18next";

export default function SpanishSpeakers() {
  const { t } = useTranslation("portuguese-classes/spanish-speakers");

  return (
    <section className="page music-classes px-4 md:px-16 lg:px-32 py-8">
      <h1 className="text-3xl font-bold mb-6">{t("title")}</h1>
      <p className="mb-4">{t("text")}</p>
      <p className="mb-4 font-semibold">{t("call-to-action")}</p>
    </section>
  );
}