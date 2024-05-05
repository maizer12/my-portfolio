import styles from './footer.module.scss';
import Image from 'next/image';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark-700 py-1">
      <div className={styles.footer__inner + ' container'}>
        <p className="text-md text-light-900">Copyright ©{year} MyApp. All rights reserved</p>
      </div>
    </footer>
  );
};
