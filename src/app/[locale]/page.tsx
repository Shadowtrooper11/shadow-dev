import {useTranslations} from 'next-intl';
import { projectData } from '@/src/data/projects';
import ProjectGrid from '@/src/components/ProjectGrid';
import { Link } from '@/src/i18n/navigation';
import { GradientSpinnerA } from '@/src/components/GradientSpinner';

export default function Home() {
  const t = useTranslations('Home');
  return (
    <div className="text-center">
      <section className="bg-[url(/freepik.jpg)] bg-center bg-cover to-neutral-800 text-white py-20">
        <div className="max-w-7xl mx-auto min-h-96 md:h-124 flex flex-col justify-center">
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-gray-400">{t('title')}</span><span className="text-yellow-600">{t('titlep2')}</span><span className="text-gray-200">{t('titlep3')}</span>
          </h1>
          <div>
            <p className="text-xl mb-6 p-2 bg-white/5 border border-white/20 inline-block rounded-lg max-w-3xl">
              {t('introText')}
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative overflow-hidden rounded-lg p-0.5 hover:scale-105 transform transition duration-300">
                <GradientSpinnerA theme="blue" />
                <Link href="/contact" className="relative flex bg-sky-900 text-white p-2 rounded-lg hover:bg-sky-800 transition duration-300">
                  <span className="text-lg font-semibold text-gray-200 hover:text-white">{t('startProject')}</span>
                </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white/5">
        <div className="max-w-7xl mx-auto min-h-96 md:h-124">
            <h3 className="text-3xl font-bold px-2 pt-10 py-4">
              {t('projects')}
            </h3>
            <ProjectGrid />
        </div>
      </section>
      <section>
        <div className="max-w-7xl mx-auto min-h-96 md:h-124 flex flex-col justify-center">

        </div>
      </section>
    </div>
  );
}