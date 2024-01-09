import style from './mainButton.module.scss'

function MainButton({ children }) {
	return (
		<button className={style.button + ' ' + style.new}>
			<span>{children}</span>
		</button>
	)
}

export default MainButton
