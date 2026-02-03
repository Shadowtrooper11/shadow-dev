import {useTranslations} from 'next-intl';
 
export default function Home() {
  const t = useTranslations('Home');
  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold">{t('title')}</h1>
      <img src="/shadowhexlogo.svg" alt="Shadow Logo" className="mx-auto my-8 size-100" />
      <p>{t('subtitle')}</p>
    </div>
  );
}