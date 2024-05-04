import Link from 'next/link';
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
      <Skills />
      <AboutMe />
      <Projects />
    </main>
  );
}
