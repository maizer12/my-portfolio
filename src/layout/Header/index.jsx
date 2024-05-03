import style from './header.module.scss';
import { menu } from './_config.js';
import Link from 'next/link';
import Language from './Language';

export const Header = () => {
  return (
    <header className="p-4 bg-dark-900 fixed top-0 w-full z-10">
      <div className="flex items-center justify-between container">
        <h2 className={style.logo}>
          <a href="/">Logo</a>
        </h2>
        <nav className={style.menu}>
          <ul className={style.menu__items}>
            {menu.map((e) => (
              <li className={style.menu__item} key={e.id}>
                <Link href={e.url} className={style.menu__link}>
                  {e.title}
                </Link>
              </li>
            ))}
          </ul>
          <Language />
        </nav>
      </div>
    </header>
  );
};
