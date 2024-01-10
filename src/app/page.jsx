import Link from 'next/link';
import HomeBanner from './HomeBanner';
import { Banner } from '../components/Banner';
import Skills from '../components/Skills';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects'

export default function Home({ params }) {
	return (
		<main>
			<Banner />
			<Skills />
			<AboutMe />
			<Projects />
		</main>
	);
}
