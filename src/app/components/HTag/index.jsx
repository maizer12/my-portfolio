import style from './HTag.module.scss';

export const HTag = ({ tag, children }) => {
	switch (tag) {
		case 'h1':
			return <h1 className={style.h1}>{children}</h1>;
	}
};
