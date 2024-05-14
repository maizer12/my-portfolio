import { HTag } from '@/common';
import MainButton from '@/common/MainButton';
import Link from 'next/link';
import DropdownMenu from '../../common/Dropdown';
import { projectsArr } from './constants';
import { Icon } from '@/common/Icon';
import { Warning } from '@/common/Warning';
import { OctagonAlert } from 'lucide-react';

interface IProps {
  filter?: string;
}

const Projects = ({ filter }: IProps) => {
  const items = filter?.length
    ? projectsArr.filter((e) => !!e.technologies.find((name) => name.toUpperCase() === filter.toUpperCase()))
    : projectsArr;

  return (
    <section className="py-32 bg-main">
      <div className="container relative z-2">
        <div className="mb-16 max-w-[1324px]">
          <div className="flex justify-between  mx-auto mb-12">
            <HTag tag="h2" className="text-center">
              My Projects:
            </HTag>
            <DropdownMenu />
          </div>
          <Warning className="mb-7">
            <OctagonAlert className="inline mr-2" />
            Please be aware that the projects listed below are pet projects, as I am currently only able to add personal
            projects to this section. Each project showcases different skills and technologies I've worked with. For
            professional experience and more detailed information, please refer to the other sections of my portfolio.
          </Warning>
          <ul className="max-w-[1224px] mx-auto flex gap-3">
            <li className="border-primary-200 bg-primary-700 border w-fit min-w-[78px] rounded-md text-light-900 flex justify-center py-1">
              All
            </li>
            <li className="border-primary-200 border w-fit min-w-[78px] rounded-md text-light-900 flex justify-center py-1 px-3">
              Web Application
            </li>
          </ul>
        </div>
        <ul className="flex-wrap gap-6 max-w-[1224px] mx-auto flex">
          {items.map((e) => (
            <li className="border w-full max-w-[380px] min-w-[320px] border-primary-200 bg-dark-700 p-8" key={e.title}>
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
