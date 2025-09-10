import { useTranslation } from "react-i18next";
import Magazine from "./magazine/Magazine";

export default function NunaVivi() {
  const { t } = useTranslation("/about");

  return (
    <main className="about-page main-content max-w-4xl mx-auto px-4 py-8">
      {/* título principal */}
      <h1 className="text-3xl font-bold mb-8">{t("title")}</h1>

      {/* seção 1 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{t("title-section-1")}</h2>
        <div
          className="prose prose-blue prose-lg max-w-none space-y-4"
          dangerouslySetInnerHTML={{
            __html: `
              <p>${t("p-s1-1")}</p>
              <p>${t("p-s1-2")}</p>
              <p>${t("p-s1-3")}</p>
            `,
          }}
        />
      </section>

      <Magazine />
    </main>
  );
}
