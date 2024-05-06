import style from './header.module.scss';
import { menu } from './_config';
import Link from 'next/link';
import Language from './Language';
import Image from 'next/image';

export const Header = () => {
  return (
    <header className="py-2 bg-dark-900 fixed top-0 w-full z-10">
      <div className="flex items-center justify-between container">
        <h2 className={style.logo}>
          <Link href="/">
            <Image src="/logo.png" width={60} height={60} alt="logo" />
          </Link>
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
