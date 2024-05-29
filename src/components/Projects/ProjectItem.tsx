import React from 'react';
import { Link } from '../../navigation';
import { HTag } from '@/common';
import { Icon } from '@/common/Icon';
import { IProject } from '@/models/Project.type';

interface IProps {
  project: IProject;
}

const ProjectItem = ({ project }: IProps) => {
  return (
    <li className="border w-full min-w-[320px] border-primary-200 bg-dark-700 p-8 h-fit fadeInSlow" key={project.title}>
      <HTag tag="h5" className="mb-4">
        {project.title}
      </HTag>
      <h5 className="block text-light-400 min-w-[240px] text-start font-bold font-inter text-1xl mb-6">
        {project.desc}
      </h5>
      <div className="flex items-center justify-between">
        <Link href={'/projects/' + project.id} className="text-primary-200 block mt-2" title={project.title}>
          More info
        </Link>
        <div className="flex w-fit gap-3">
          {project.icons.map((icon, index) => (
            <Icon icon={icon.icon} key={index} className={'w-8 ' + `${icon.fill}`} />
          ))}
        </div>
      </div>
    </li>
  );
};

export default ProjectItem;
