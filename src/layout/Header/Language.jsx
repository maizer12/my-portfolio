import React from 'react';
import style from './header.module.scss';

function Language() {
	return (
		<div className={style.language}>
			<button className={style.language__active}>UA</button>
			<button>UE</button>
		</div>
	);
}

export default Language;
