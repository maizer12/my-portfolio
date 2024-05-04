import { HTag, PTag } from '@/common';
import style from './Projects.module.scss';
import img from '../../../public/dim.jpg';
import Image from 'next/image';
import MainButton from '@/common/MainButton';
import Skill from './Skill';
import Link from 'next/link';

const Projects = () => {
  return (
    <section className="py-32 bg-main">
      <div className="container relative z-2">
        <HTag tag="h2" className="text-center mb-24">
          My Projects:
        </HTag>
        <ul className="flex-wrap gap-6 max-w-[1424px] mx-auto flex">
          <li className="border w-full max-w-[380px] min-w-[320px] border-primary-200 bg-dark-700 p-8">
            <HTag tag="h5" className="mb-4">
              DevFlow:
            </HTag>
            <h5 className="block text-light-400 min-w-[240px] text-start font-bold font-inter text-1xl mb-6">
              Trabalhei como instrutor conteudista em frontend na Digital House, o trabalho consistia em criar conteúdos
              para as aulas de especialização frontend.
            </h5>
            <div className="flex items-center justify-between ">
              <Link href="/" className="text-primary-200 block mt-2">
                More info
              </Link>
              <Skill />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
