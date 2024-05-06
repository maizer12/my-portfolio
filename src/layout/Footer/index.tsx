import styles from './footer.module.scss';
import Image from 'next/image';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 py-1">
      <div className={styles.footer__inner + ' container'}>
        <p className="text-md text-light-900">Copyright ©{year} my portfolio. All rights reserved</p>
        <div className="flex"></div>
      </div>
    </footer>
  );
};
