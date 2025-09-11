import { useTranslation } from 'react-i18next';

export default function Title() {
  const { t } = useTranslation("/nuna-vivi/magazine/title");

  return (
    <h1
      className="text-4xl font-normal"
      dangerouslySetInnerHTML={{ __html: t('title') }}
    />
  );
}
