'use client';
import { HTag } from '../../common';
import style from './Skills.module.scss';
import NextIcon from '../../../public/next-icon.png';
import { Icon } from '@/common/Icon';
import { SkillsArr } from './constants';
// import 'swiper/css';

const Skills = () => {
  return (
    <section className="bg-dark-900 py-32">
      <HTag tag="h2" className="text-center mb-4">
        My Skills:
      </HTag>
      <div className="max-w-[1200px] mx-auto w-full flex justify-between mt-16">
        <div className="">
          <HTag tag="h5" className="mb-4">
            Description:
          </HTag>
          <h5 className="block text-light-400 min-w-[240px] text-start font-bold font-inter text-1xl">
            *passe o cursor do mouse no card para ler*
          </h5>
        </div>
        <ul className="flex gap-7 flex-wrap max-w-[670px]">
          {SkillsArr.map((e, i) => (
            <li
              className="bg-dark-700 w-32 rounded-[5px] border border-dark-400 h-32 flex justify-center items-center hover:border-primary-200 duration-500"
              key={i}
            >
              <Icon icon={e} className="w-16 h-34" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
