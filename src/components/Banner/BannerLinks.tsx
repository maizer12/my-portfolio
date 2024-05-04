'use client';
import React from 'react';
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';
import Link from 'next/link';

const BannerLinks = () => {
  return (
    <div className="flex gap-4">
      <Link href="/" className="border w-11 h-11 flex justify-center items-center border-primary-700 bg-dark-900">
        <CIcon icon={icon.cibLinkedin} size="xxl" className="fill-primary-200  w-6" />
      </Link>
      <Link href="/" className="border w-11 h-11 flex justify-center items-center border-primary-700 bg-dark-900">
        <CIcon icon={icon.cibTelegram} size="xxl" className="fill-primary-200  w-6" />
      </Link>
      <Link href="/" className="border w-11 h-11 flex justify-center items-center border-primary-700 bg-dark-900">
        <CIcon icon={icon.cibGithub} size="xxl" className="fill-primary-200  w-6" />
      </Link>
    </div>
  );
};

export default BannerLinks;
