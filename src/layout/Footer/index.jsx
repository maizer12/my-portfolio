import styles from './footer.module.scss';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="bg-dark-700 py-1">
      <div className={styles.footer__inner + ' container'}>
        <p className="text-md text-light-900">©2023 MyApp. All rights reserved</p>
      </div>
    </footer>
  );
};
