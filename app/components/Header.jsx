const Header = () => {
	return (
		<header className='header'>
			<div className='header__inner container'>
				<h2 className='logo'>
					<a href='/'>Logo</a>
				</h2>
				<nav className='menu'>
					<ul className='menu__items'>
						<li className='menu__item'>
							<a href='/' className='menu__link'>
								Home
							</a>
						</li>
						<li className='menu__item'>
							<a href='/about' className='menu__link'>
								About
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header
