import React from 'react';
import style from './banner.module.scss';
import MainButton from '../common/MainButton';

function HomeBanner() {
	return (
		<section className={style.banner}>
			<MainButton>More info</MainButton>
		</section>
	);
}

export default HomeBanner;
