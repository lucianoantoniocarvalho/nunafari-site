import { useTranslation } from "react-i18next";
import Contacts from "./Contacts.jsx";

export default function Footer() {
  const { t } = useTranslation("/contacts");

  return (
    <div className="bg-[#21A51F]">
      <Contacts />
    </div>
  );
}