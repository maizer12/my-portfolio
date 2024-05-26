import { Banner } from '../../components/Banner';
import Skills from '../../components/Skills';
import Projects from '../../components/Projects';
import Experience from '../../components/Experience';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
};

export default function Home({ searchParams }: { searchParams: { filter: string } }) {
  return (
    <>
      <Banner />
      <Experience />
      <Projects filter={searchParams.filter} />
      <Skills />
    </>
  );
}
