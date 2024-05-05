import { HTag } from '../../common/HTag';
import Image from 'next/image';
import bannerImg from '../../../public/bg-test.webp';
import style from './Banner.module.scss';
import { PTag } from '../../common/PTag';
import MainButton from '../../common/MainButton';
import cn from 'classnames';
import BannerLinks from './BannerLinks';

export const Banner = () => {
  return (
    <section className={style.banner + ' pt-18 bg-main'}>
      <div className={cn(style.content, 'max-w-[1220px]')}>
        <div className={style.text}>
          <div>
            <p className="text-primary-200 font-inter font-bold">Hello, I'm:</p>
            <HTag tag="h1" className="my-1">
              Vasil Bazhiv
            </HTag>
            <p className="text-light-900 font-inter">Front-End Developer</p>
          </div>
          <PTag className="mb-3 mt-[-12px]">
            Hi! My name is <span className="text-primary-200">Vasil</span>, I'm a
            <span className="text-primary-200"> Front-End developer</span> with over
            <span className="text-primary-200"> 3 years of experience</span>, including commercial work. Ready to
            <span className="text-primary-200"> join your team</span> and create quality websites and applications.
          </PTag>
          <MainButton>More info</MainButton>
          <BannerLinks />
        </div>

        <Image src={bannerImg.src} width={619} height={567} />
        {/* <Image src={bannerImg.src} width={619} height={567} /> */}
      </div>
    </section>
  );
};
