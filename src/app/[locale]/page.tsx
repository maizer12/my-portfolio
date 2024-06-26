import { Banner } from '../../components/Banner';
import Skills from '../../components/Skills';
import Projects from '../../components/Projects';
import Experience from '../../components/Experience';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
};

interface IProps {
  searchParams: { filter: string; type: string };
}

export default function Home({ searchParams }: IProps) {
  return (
    <>
      <Banner />
      <Experience />
      <Projects filter={searchParams.filter} type={searchParams.type} />
      <Skills />
    </>
  );
}
