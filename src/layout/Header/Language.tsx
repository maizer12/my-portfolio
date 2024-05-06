'use client';
import React from 'react';
import style from './header.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Language() {
  const pathname = usePathname();
  const check = (lan: string) => pathname.search(lan) >= 0;
  return (
    <div className={style.language}>
      <Link href="ua" className={check('ua') ? style.language__active : ''}>
        UA
      </Link>
      <Link href="en" className={check('en') ? style.language__active : ''}>
        UE
      </Link>
    </div>
  );
}

export default Language;
