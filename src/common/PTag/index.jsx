import { ReactNode } from 'react';
import style from './PTag.module.scss';

// interface IProps {
//   children: ReactNode;
// }

export const PTag = ({ children, className }) => {
  return <p className={style.p + ' ' + className}>{children}</p>;
};
