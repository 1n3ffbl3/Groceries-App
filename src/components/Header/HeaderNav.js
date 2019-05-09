import React from 'react';
import styles from './HeaderNav.module.scss';
import { NavLink } from 'react-router-dom';
import { FaList } from 'react-icons/fa';
import { FaUtensils } from 'react-icons/fa';
import { FaChartPie } from 'react-icons/fa';

const HeaderNav = () => {
	return (
		<nav>
			<ul className={styles.wrapper}>
				<li className={styles.navItem}>
					<NavLink
						exact
						className={styles.navItemLink}
						activeClassName={styles.navItemLinkActive}
						to="/">
						<FaList/> List
					</NavLink>
				</li>
				<li className={styles.navItem}>
					<NavLink
						exact
						className={styles.navItemLink}
						activeClassName={styles.navItemLinkActive}
						to="/recipes">
						<FaUtensils/> Recipes
					</NavLink>
				</li>
				<li className={styles.navItem}>
					<NavLink
						exact
						className={styles.navItemLink}
						activeClassName={styles.navItemLinkActive}
						to="/stats">
						<FaChartPie/> Stats
					</NavLink>
				</li>
			</ul>
		</nav >
	);
};

export default HeaderNav;