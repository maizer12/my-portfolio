import { HTag } from '../../common/HTag';
import Image from 'next/image';
import bannerImg from '../../../public/bg-test.webp';
import style from './Banner.module.scss';
import { PTag } from '../../common/PTag';
import MainButton from '../../common/MainButton';
import cn from 'classnames';

export const Banner = () => {
  return (
    <section className={style.banner + ' pt-18'}>
      <div className={cn(style.content, 'max-w-[1220px]')}>
        <div className={style.text}>
          <HTag tag="h1">Front-End Developer</HTag>
          <PTag>
            Hi! My name is Vasil, I'm a frontend developer with over 2 years of experience, including commercial work.
            Ready to join your team and create quality websites and applications.
          </PTag>
          <MainButton>More info</MainButton>
        </div>

        <Image src={bannerImg.src} width={619} height={567} />
        {/* <Image src={bannerImg.src} width={619} height={567} /> */}
      </div>
    </section>
  );
};
