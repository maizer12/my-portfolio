import cn from 'classnames';
import style from './HTag.module.scss';

export const HTag = ({ tag, children, className }) => {
	const classNames = cn(style[tag], style.title, className);

	switch (tag) {
		case 'h1':
			return <h1 className={classNames}>{children}</h1>;
		case 'h2':
			return <h2 className={classNames}>{children}</h2>;
		case 'h5':
			return <h5 className={classNames}>{children}</h5>;
	}
};
