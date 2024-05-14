import { Banner } from '../../components/Banner';
import Skills from '../../components/Skills';
import Projects from '../../components/Projects';
import Experience from '../../components/Experience';
import Dropdown from '@/common/Dropdown';

export default function Home({ params, searchParams }: any) {
  console.log(searchParams);
  return (
    <main>
      <Banner />
      <Experience />
      <Projects />
      <Skills />
      {/* <AboutMe /> */}
    </main>
  );
}
