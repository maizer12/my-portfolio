import style from './PTag.module.scss';

export const PTag = ({ children }) => {
	return <p className={style.p}>{children}</p>;
};
