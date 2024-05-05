import { Banner } from '../components/Banner';
import Skills from '../components/Skills';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import Experience from '../components/Experience';

export default function Home({ params }) {
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
