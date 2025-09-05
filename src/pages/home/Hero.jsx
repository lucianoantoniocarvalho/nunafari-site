// This component is the first thing on Home Page.

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Hero() {
  const { t } = useTranslation("home/hero");

  return (
    <section className="text-center py-20 bg-gray-100">
      <h1 className="font-poppins text-[4rem] font-extrabold text-[#21A51F]">{t("title")}</h1>
      <p className="text-2xl text-gray-700 mt-4 italic">{t("slogan")}</p>
      <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
        {t("subtitle-part-1")}
      </p>
      <p className="text-lg text-gray-600 mt-1 max-w-2xl mx-auto">
        {t("subtitle-part-2")}
      </p>
      <p className="text-lg text-gray-600 mt-1 max-w-2xl mx-auto">
        {t("subtitle-part-3")}
      </p>
      <div className="mt-8">
        <Link
          to="/about"
          className="bg-green-500 text-white px-6 py-3 rounded-2xl text-lg shadow-md hover:bg-green-600 transition"
        >
          {t("call-to-action")}
        </Link>
      </div>
    </section>
  );
}

export default Hero;
