import { useTranslation } from "react-i18next"; //This has to be in all pages.

export default function About() {
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

      {/* seção 2 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{t("title-section-2")}</h2>
        <div
          className="prose prose-lg space-y-4"
          dangerouslySetInnerHTML={{
            __html: `
              <p>${t("p-s2-1")}</p>
              <p>${t("p-s2-2")}</p>
              <p>${t("p-s2-3")}</p>
            `,
          }}
        />
      </section>

      {/* seção 3 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{t("title-section-3")}</h2>
        <div
          className="prose prose-lg space-y-4"
          dangerouslySetInnerHTML={{
            __html: `
              <p>${t("p-s3-1")}</p>
              <p>${t("p-s3-2")}</p>
            `,
          }}
        />
      </section>

      {/* seção 4 */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">{t("title-section-4")}</h2>
        <div
          className="prose prose-lg space-y-4"
          dangerouslySetInnerHTML={{
            __html: `<p>${t("p-s4-1")}</p>`,
          }}
        />
      </section>
    </main>
  );
}

//export default About;
