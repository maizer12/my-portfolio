import { HTag } from '../../common/HTag';
import Image from 'next/image';
import bannerImg from '../../../public/bg-test.webp';
import style from './Banner.module.scss';
import { PTag } from '../../common/PTag';
import MainButton from '../../common/MainButton';
import cn from 'classnames';
import BannerLinks from './BannerLinks';
import { useTranslations } from 'next-intl';

export const Banner = () => {
  const t = useTranslations('banner');

  return (
    <section className={style.banner + ' pt-18 bg-main'}>
      <div className={cn(style.content, 'max-w-[1220px]')}>
        <div className={style.text}>
          <div>
            <p className="text-primary-200 font-inter font-bold">Hello, I'm:</p>
            <HTag tag="h1" className="my-1" title="Full Name">
              {t('fullName')}
            </HTag>
            <p className="text-light-900 font-inter">{t('role')}</p>
          </div>
          <PTag className="mb-3 mt-[-12px]" htmlContent={t.raw('description')} title="Little text about Me!" />
          <MainButton>{t('btnText')}</MainButton>
          <BannerLinks />
        </div>
        <Image
          src={bannerImg.src}
          width={619}
          height={567}
          alt="Developer picture"
          title="Developer picture!"
          data-twe-toggle="tooltip"
        />
      </div>
    </section>
  );
};
