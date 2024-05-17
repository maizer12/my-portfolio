import { HTag } from '@/common';
import MainButton from '@/common/MainButton';
import Link from 'next/link';
import DropdownMenu from '../../common/Dropdown';
import { projectsArr } from './constants';
import { Icon } from '@/common/Icon';
import { Warning } from '@/common/Warning';
import { OctagonAlert } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Badge from '@/common/Badge';

interface IProps {
  filter?: string;
}

const Projects = ({ filter }: IProps) => {
  const t = useTranslations('projects');

  const items = filter?.length
    ? projectsArr.filter((e) => !!e.technologies.find((name) => name.toUpperCase() === filter.toUpperCase()))
    : projectsArr;

  return (
    <section className="py-32 bg-main">
      <div className="container relative z-2">
        <div className="mb-16 max-w-[1324px] mx-auto">
          <div className="flex justify-between  mx-auto mb-12">
            <HTag tag="h2" className="text-center">
              {t('title')}
            </HTag>
            <DropdownMenu />
          </div>
          <Warning className="mb-7">
            <OctagonAlert className="inline mr-2" />
            {t('warning')}
          </Warning>
          <ul className="max-w-[1224px] mx-auto flex gap-3">
            <Badge isActive={true}>All</Badge>
            <Badge>Web Application</Badge>
          </ul>
        </div>
        <ul className="flex-wrap gap-6 max-w-[1224px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 w-fit justify-center">
          {items.map((e) => (
            <li className="border w-full min-w-[320px] border-primary-200 bg-dark-700 p-8" key={e.title}>
              <HTag tag="h5" className="mb-4">
                {e.title}
              </HTag>
              <h5 className="block text-light-400 min-w-[240px] text-start font-bold font-inter text-1xl mb-6">
                {e.desc}
              </h5>
              <div className="flex items-center justify-between ">
                <Link href="/" className="text-primary-200 block mt-2">
                  More info
                </Link>
                <div className="flex w-fit gap-3">
                  {e.icons.map((e, i) => (
                    <Icon icon={e.icon} key={i} className={'w-8 ' + `${e.fill}`} />
                  ))}
                </div>
              </div>
            </li>
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
