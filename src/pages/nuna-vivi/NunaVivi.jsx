import { useTranslation } from "react-i18next";
import Magazine from "./magazine/Magazine";

export default function NunaVivi() {
  const { t } = useTranslation("/nuna-vivi/nuna-vivi");

  return (
    <main className="about-page main-content max-w-4xl mx-auto px-4 py-8">
      {/* <h1 className="text-[40pt] font-bold font-['Poppins'] text-[#21a51f]">{t("title")}</h1> */}
      <Magazine />
    </main>
  );
}
