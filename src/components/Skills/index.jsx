import { HTag } from '@/src/common';
import style from './Skills.module.scss';
import NextIcon from '../../../public/next-icon.png'

const Skills = () => {
	return (
		<section className={style.skills}>
			<div className={style.inner + ' container'}>
				<HTag tag='h2' className={style.title}>
					My Skills [Front-END]:
				</HTag>
				<ul className={style.items}>
					<li className={style.item}>
						<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' alt='' />
						<HTag tag='h5' >React</HTag>
					</li>
					<li className={style.item}>
						<img src='https://www.bairesdev.com/wp-content/uploads/2020/07/redux.svg' alt='' />
						<HTag tag='h5' >Redux</HTag>
					</li>
					<li className={style.item}>
						<img src={NextIcon.src} alt='' />
						<HTag tag='h5' >Next</HTag>
					</li>
					<li className={style.item}>
						<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png' alt='' />
						<HTag tag='h5' >Vue</HTag>
					</li>
					<li className={style.item}>
						<img src='https://rock-the-prototype.com/wp-content/uploads/2023/06/VueX.png' alt='' />
						<HTag tag='h5' >VueX</HTag>
					</li>
				</ul>
				<HTag tag='h2' className={style.title}>
					My Skills [Front-END]:
				</HTag>
				<ul className={style.items}>
					<li className={style.item}>
						<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' alt='' />
						<HTag tag='h5' >React</HTag>
					</li>
					<li className={style.item}>
						<img src='https://www.bairesdev.com/wp-content/uploads/2020/07/redux.svg' alt='' />
						<HTag tag='h5' >Redux</HTag>
					</li>
					<li className={style.item}>
						<img src={NextIcon.src} alt='' />
						<HTag tag='h5' >Next</HTag>
					</li>
					<li className={style.item}>
						<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png' alt='' />
						<HTag tag='h5' >Vue</HTag>
					</li>
					<li className={style.item}>
						<img src='https://rock-the-prototype.com/wp-content/uploads/2023/06/VueX.png' alt='' />
						<HTag tag='h5' >VueX</HTag>
					</li>
					<li className={style.item}>
						<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' alt='' />
						<HTag tag='h5' >React</HTag>
					</li>
				</ul>
				<HTag tag='h2' className={style.title}>
					My Skills [Front-END]:
				</HTag>
				<ul className={style.items}>
					<li className={style.item}>
						<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' alt='' />
						<HTag tag='h5' >React</HTag>
					</li>
					<li className={style.item}>
						<img src='https://www.bairesdev.com/wp-content/uploads/2020/07/redux.svg' alt='' />
						<HTag tag='h5' >Redux</HTag>
					</li>
					<li className={style.item}>
						<img src={NextIcon.src} alt='' />
						<HTag tag='h5' >Next</HTag>
					</li>
					<li className={style.item}>
						<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png' alt='' />
						<HTag tag='h5' >Vue</HTag>
					</li>
					<li className={style.item}>
						<img src='https://rock-the-prototype.com/wp-content/uploads/2023/06/VueX.png' alt='' />
						<HTag tag='h5' >VueX</HTag>
					</li>
					<li className={style.item}>
						<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' alt='' />
						<HTag tag='h5' >React</HTag>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Skills;
