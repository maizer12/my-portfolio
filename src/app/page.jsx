import Link from 'next/link';
import HomeBanner from './HomeBanner';
import { Banner } from './components/Banner';

export default async function Home() {
	return (
		<main>
			<Banner />
		</main>
	);
}
