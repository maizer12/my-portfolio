'use client';
import CIcon from '@coreui/icons-react';

interface IProps {
  icon: string | string[];
  className?: string;
}

export const Icon = ({ icon, className = '' }: IProps) => {
  return <CIcon icon={icon} size="xxl" className={'mb-1 ' + className} />;
};
