import { HTag, PTag } from '@/common';
import MainButton from '@/common/MainButton';
import { projectsArr } from './constants';
import { Warning } from '@/common/Warning';
import { OctagonAlert } from 'lucide-react';
import { useTranslations } from 'next-intl';
import ProjectItem from './ProjectItem';
import ProjectDropdown from './ProjectDropdown';
import ProjectFIlter from './ProjectFIlter';

interface IProps {
  filter?: string;
  type?: string;
}

const Projects = ({ filter, type }: IProps) => {
  const t = useTranslations('projects');

  const items = projectsArr.filter((e) => {
    const filterMatch = !filter || e.technologies.some((name) => name.toUpperCase() === filter.toUpperCase());

    const typeMatch = !type || e.type.toUpperCase() === type.toUpperCase();

    return filterMatch && typeMatch;
  });

  return (
    <section className="py-32 bg-main">
      <div className="container relative z-2">
        <div className="mb-16 max-w-[1324px] mx-auto">
          <div className="flex justify-between  mx-auto mb-12">
            <HTag tag="h2" className="text-center">
              {t('title')}
            </HTag>
            <ProjectDropdown filter={filter || ''} />
          </div>
          <Warning className="mb-7">
            <OctagonAlert className="inline mr-2" />
            {t('warning')}
          </Warning>
          <ProjectFIlter type={type || ''} />
        </div>
        {!items.length && (
          <PTag className="text-center min-h-[240px] flex items-center justify-center fadeInSlow">{t('notFound')}</PTag>
        )}
        <ul className="flex-wrap gap-6 max-w-[1224px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 w-fit justify-center">
          {items.map((e) => (
            <ProjectItem project={e} key={e.id} />
          ))}
        </ul>
        <div className="mx-auto w-fit mt-12">
          <MainButton>More Project</MainButton>
        </div>
      </div>
    </section>
  );
};

export default Projects;
