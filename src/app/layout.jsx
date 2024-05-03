import { Inika } from 'next/font/google';
import { Header, Footer } from '../layout';
import '../assets/styles/global.scss';
import './global.css';

const inter = Inika({ subsets: ['latin'], weight: '700', weight: '400' });

export const metadata = {
  title: 'Home',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
