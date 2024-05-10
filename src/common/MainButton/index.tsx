import { ReactNode } from 'react';
import style from './mainButton.module.scss';

interface IProps {
  children: ReactNode;
}

function MainButton({ children }: IProps) {
  return (
    <button className={style.button + ' ' + style.new}>
      <span>{children}</span>
    </button>
  );
}

export default MainButton;
