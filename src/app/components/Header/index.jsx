import style from './header.module.scss';
import { menu } from './_config.js';
import Link from 'next/link';
import Language from './Language';

const Header = () => {
	return (
		<header className={style.header}>
			<div className={style.header__inner + ' container'}>
				<h2 className={style.logo}>
					<a href='/'>Logo</a>
				</h2>
				<nav className={style.menu}>
					<ul className={style.menu__items}>
						{menu.map(e => (
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

export default Header;
