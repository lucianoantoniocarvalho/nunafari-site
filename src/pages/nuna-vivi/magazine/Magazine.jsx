import { useTranslation } from "react-i18next";
import Magazine000 from "./magazine-000/Magazine000";

export default function Magazine() {
  const { t } = useTranslation("/about");

  return (
    <main className="about-page main-content max-w-4xl mx-auto px-4 py-8">
      {/* título principal */}
      <h1 className="text-3xl font-bold mb-8">{t("title")}</h1>

      <Magazine000 />
    </main>
  );
}
