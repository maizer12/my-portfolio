import React from 'react';
import style from './header.module.scss';
import { getMenu } from './_config';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export const Menu = () => {
  const t = useTranslations('menu');
  const menu = getMenu(t);

  return (
    <ul className="md:flex mt-8 md:gap-5 md:mt-0">
      {menu.map((e) => (
        <li className={style.menu__item} key={e.id}>
          <Link href={e.url} className={style.menu__link + ' text-dark-900 mb-2 block text-xl md:mb-0'}>
            {e.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
