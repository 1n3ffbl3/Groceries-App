import React from 'react';
import PropTypes from 'prop-types';
import styles from './RadioButton.module.scss';

const RadioButton = ({ children, checked, switchFn }) => { 
	return (
		<label className={styles.radio}>
			<input
				type="radio"
				checked={checked}
				onChange={switchFn}
			/>
			<div className={styles.radioButton} />
			{children}
		</label>
	);
};

RadioButton.propTypes = {
	switchFn: PropTypes.func,
	checked: PropTypes.bool
};

export default RadioButton;