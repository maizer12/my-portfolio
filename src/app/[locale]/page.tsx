import { Banner } from '../../components/Banner';
import Skills from '../../components/Skills';
import Projects from '../../components/Projects';
import Experience from '../../components/Experience';
import Dropdown from '@/common/Dropdown';

export default function Home({ searchParams }: { searchParams: { filter: string } }) {
  return (
    <main>
      <Banner />
      <Experience />
      <Projects filter={searchParams.filter} />
      <Skills />
    </main>
  );
}
