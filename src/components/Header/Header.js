import React from 'react';
import styles from './Header.module.scss';
import HeaderNav from './HeaderNav';

const Header = () => {
	return(
		<header className={styles.wrapper}>
			<h1 className={styles.title}>Groceries App</h1>
			<div className={styles.iconWrapper}>
				<span className={styles.icon}>
					<HeaderNav />
				</span>
			</div>
		</header>
	);
};

export default Header;