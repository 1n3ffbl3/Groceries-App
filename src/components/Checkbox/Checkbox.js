import React from 'react';
import PropTypes from 'prop-types';
import styles from './Checkbox.module.scss';

const Checkbox = ({ type, name, checked, disabled, onChange }) => { 
	return (
		<label className={styles.container}>
			<input
				type={type}
				name={name}
				checked={checked}
				onChange={onChange}
				disabled={disabled}/>
			<span className={styles.checkmark}></span>
		</label>
	)
};

Checkbox.propTypes = {
	type: PropTypes.string,
	name: PropTypes.string.isRequired,
	checked: PropTypes.bool,
	onChange: PropTypes.func.isRequired,
	disabled: PropTypes.bool,
};

Checkbox.defaultProps = {
	type: 'checkbox',
	checked: false,
	disabled: false,
};

export default Checkbox;