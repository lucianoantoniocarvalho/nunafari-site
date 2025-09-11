import { useTranslation } from "react-i18next";

export default function Magazine000() {
  const { t: tEditorial } = useTranslation("nuna-vivi/magazine/number-000/editorial");
  const { t: tManifesto } = useTranslation("nuna-vivi/magazine/number-000/manifesto-0000");

  return (
    <section className="magazine-section max-w-4xl mx-auto px-4 py-8">
      {/* Moldura para a seção "Editorial" */}
      <div className="border border-gray-300 rounded-lg p-6 mb-8">
        <div
          className="[&>h2]:text-[28pt] [&>h2]:font-bold [&>h2]:font-['Poppins'] [&>h2]:text-[#154515] [&>h2]:mb-6"
          dangerouslySetInnerHTML={{ __html: tEditorial("section") }}
        />
        <div
          className="[&>h3]:text-[24pt] [&>h3]:font-bold [&>h3]:font-['Poppins'] [&>h3]:text-[#154515] [&>h3]:mb-4"
          dangerouslySetInnerHTML={{ __html: tEditorial("title") }}
        />
        <div
          className="[&>p]:mb-4 [&>p]:text-[16px] [&>p]:leading-relaxed"
          dangerouslySetInnerHTML={{ __html: tEditorial("text") }}
        />
      </div>

      {/* Moldura para a seção "Manifesto" */}
      <div className="border border-gray-300 rounded-lg p-6 mb-8">
        <div
          className="[&>h2]:text-[28pt] [&>h2]:font-bold [&>h2]:font-['Poppins'] [&>h2]:text-[#154515] [&>h2]:mb-6"
          dangerouslySetInnerHTML={{ __html: tManifesto("title") }}
        />
        <div
          className="[&>p]:mb-4 [&>p]:text-[16px] [&>p]:leading-relaxed"
          dangerouslySetInnerHTML={{ __html: tManifesto("text") }}
        />
      </div>
    </section>
  );
}
