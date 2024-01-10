import { HTag, PTag } from '@/src/common';
import style from './Projects.module.scss';
import img from '../../../public/dim.jpg';
import MainButton from '@/src/common/MainButton';

const Projects = () => {
	return (
		<section className={style.projects}>
			<div className='container'>
				<HTag tag='h2'>Latest projects:</HTag>
				<ul className={style.items}>
					<li className={style.item}>
						<div className={style.image}>
							<img src={img.src} alt='' className='' />
						</div>
						<HTag tag='h5'>Dim interior:</HTag>
						<PTag>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, repudiandae omnis molestiae consequuntur eaque consectetur cupiditate ut neque similique? Asperiores quo alias earum et tempore, veniam sequi repellat ratione laboriosam?</PTag>
						<button>More info</button>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Projects;
