import { Inika } from 'next/font/google';
import { Header, Footer } from '../../layout';
import '../../assets/styles/global.scss';
import './global.css';
import { Metadata } from 'next';
import { ReactNode } from 'react';

const inter = Inika({ subsets: ['latin'], weight: '700' });

export const metadata: Metadata = {
  title: 'Home',
  description: 'Generated by create next app',
  icons: {
    icon: '/logo.png',
  },
};

interface IProps {
  children: ReactNode;
  params: { locale: string };
}

export default function RootLayout({ children, params: { locale } }: IProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        params: {locale}
        <Header />
        <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}