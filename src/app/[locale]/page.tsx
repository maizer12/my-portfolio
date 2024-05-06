import { Banner } from '../../components/Banner';
import Skills from '../../components/Skills';
import AboutMe from '../../components/AboutMe';
import Projects from '../../components/Projects';
import Experience from '../../components/Experience';
import { useTranslations } from 'next-intl';

export default function Home({ params }) {
  const t = useTranslations('Index');
  console.log(t('title'));
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
