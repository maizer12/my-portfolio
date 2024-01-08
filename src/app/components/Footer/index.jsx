import styles from './footer.module.scss'
import Image from 'next/image'

function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__inner + ' container'}>
				<p className={styles.footer__text}>2023 MyApp. All rights reserved</p>
				<div className={styles.social}>
					<Image src='/vk.png' width={25} height={25} className={styles.icon} alt='vk.com' />
					<Image src='/inst.png' width={25} height={25} className={styles.icon} alt='instagram' />
					<Image src='/twitter.png' width={25} height={25} className={styles.icon} alt='twitter' />
					<Image src='/yt.png' width={25} height={25} className={styles.icon} alt='youtube' />
				</div>
			</div>
		</footer>
	)
}

export default Footer
