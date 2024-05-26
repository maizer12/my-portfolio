'use client';
import { HTag } from '../../common';
import { Icon } from '@/common/Icon';
import { defaultText, SkillsArr } from './constants';
import { useState } from 'react';

const Skills = () => {
  const [desc, setDesc] = useState(defaultText);

  const hoverCard = (str: string) => {
    setDesc('');
    setTimeout(() => {
      setDesc(str);
    }, 10);
  };

  return (
    <section className="bg-dark-700 py-16 md:py-32 p-3">
      <HTag tag="h2" className="text-center mb-4">
        My Skills:
      </HTag>
      <div className="max-w-[1200px] mx-auto w-full md:flex justify-between mt-16">
        <div className="mb-8">
          <HTag tag="h5" className="mb-4">
            Description:
          </HTag>
          {!!desc && (
            <h5 className="block text-light-400 min-w-[240px] text-start font-bold font-inter text-1xl fadeInSlow">
              {desc}
            </h5>
          )}
        </div>
        <ul className="flex gap-7 flex-wrap max-w-[670px] w-fit justify-center">
          {SkillsArr.map((e, i) => (
            <li
              className="bg-dark-900 w-32 rounded-[5px] border border-dark-400 h-32 flex justify-center items-center hover:border-primary-200 transform transition-transform duration-500 hover:scale-110"
              onMouseEnter={() => hoverCard(e.desc)}
              onMouseLeave={() => hoverCard(defaultText)}
              key={i}
            >
              <Icon
                icon={e.icon}
                className="w-14 fill-primary-200 transform transition-transform duration-500 hover:fill-white hover:scale-110"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
