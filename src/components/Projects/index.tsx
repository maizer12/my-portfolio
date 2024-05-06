import { HTag } from '@/common';
import MainButton from '@/common/MainButton';
import Link from 'next/link';
import DropdownMenu from '../../common/dropdown-menu';
import { projectsArr } from './constants';
import { Icon } from '@/common/Icon';

const Projects = () => {
  return (
    <section className="py-32 bg-main">
      <div className="container relative z-2">
        <div className="flex mb-24 justify-between max-w-[1324px] mx-auto">
          <HTag tag="h2" className="text-center">
            My Projects:
          </HTag>
          <DropdownMenu />
        </div>

        <ul className="flex-wrap gap-6 max-w-[1224px] mx-auto flex">
          {projectsArr.map((e) => (
            <li className="border w-full max-w-[380px] min-w-[320px] border-primary-200 bg-dark-700 p-8">
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
