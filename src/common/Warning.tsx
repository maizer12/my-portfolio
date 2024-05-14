import React, { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  className?: string;
}

export const Warning = ({ className = '', children }: IProps) => {
  return <div className={'bg-black/60 p-4 text-light-900 ' + className}>{children}</div>;
};
