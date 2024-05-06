import { Banner } from '../../components/Banner';
import Skills from '../../components/Skills';
import Projects from '../../components/Projects';
import Experience from '../../components/Experience';
import { useTranslations } from 'next-intl';

export default function Home() {
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
