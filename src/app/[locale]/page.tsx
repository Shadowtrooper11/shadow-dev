import {useTranslations} from 'next-intl';
import { projectData } from '@/src/data/projects';
import ProjectGrid from '@/src/components/ProjectGrid';

export default function Home() {
  const t = useTranslations('Home');
  return (
    <div className="text-center">
      <section>
        <p></p>
      </section>
      <section className="bg-white/5">
        <div className="max-w-7xl mx-auto">
            <h3 className="text-3xl font-bold px-4">
              {t('projects')}
            </h3>
            <ProjectGrid />
        </div>
      </section>
      <section>
        <p></p>
      </section>
    </div>
  );
}