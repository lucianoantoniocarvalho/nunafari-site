import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation("/contacts");

  return (
    <div>
      <h1 className="text-2xl font-bold mb-1">{t("title")}</h1>
      <p>{t("whatsapp")}</p>
      <p>{t("e-mail-1")}</p>
      <p>{t("e-mail-2")}</p>
    </div>
  );
}