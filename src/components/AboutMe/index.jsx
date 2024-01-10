import { HTag, PTag } from '@/src/common';
import style from './AboutMe.module.scss';

const AboutMe = () => {
	return (
		<section className={style.about}>
			<div className='container'>
				<HTag tag='h2'>About Me:</HTag>
				<PTag>
					I am a frontend developer with two years of experience, a full year of which has been successful commercial experience. My skills cover HTML, SCSS, CSS, JavaScript, and libraries and frameworks such as React, Vue, Redux, Next.js, TypeScript. I am familiar with build tools such as Webpack and Gulp, and actively use the Git version control system. Throughout my career, I have regularly updated my skills by taking courses and learning new technologies. I am also constantly expanding my professional horizons by reading specialized books. Determination and resilience are key traits of my character. I strive for constant growth and development, I am sure that gradually moving forward, I will be able to achieve my goal - to become an experienced senor developer. My ultimate goal is to become a Senor Developer and I am working towards this by building experience, deepening my knowledge and actively applying it to
					commercial projects.
				</PTag>
			</div>
		</section>
	);
};

export default AboutMe;
