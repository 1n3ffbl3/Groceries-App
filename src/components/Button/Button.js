import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ children, secondary, ...props }) => {
	const buttonClass = secondary ? styles.secondary : styles.button;
	return (
		<Fragment>
			<button className={buttonClass} {...props}>
				{children}
			</button>
		</Fragment>
	);
};

Button.propTypes = {
	secondary: PropTypes.bool,
};

Button.defaultProps = {
	secondary: null,
};

export default Button;