import Link from 'next/link';
import HomeBanner from './HomeBanner';
import { Banner } from '../components/Banner';
import Skills from '../components/Skills';

export default function Home({ params }) {
	return (
		<main>
			<Banner />
			<Skills />
		</main>
	);
}
