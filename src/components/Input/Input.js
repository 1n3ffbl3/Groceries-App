import React from 'react';
import styles from './Input.module.scss';
import PropTypes from 'prop-types';

export const InputType = {
  input: 'standardInput',
  search: 'searchInput'
};

const Input = ({ tag: Tag, name, type, label, maxLength, ...props }) => {
  const inputClass =
    Tag !== InputType.search ? styles.input : styles.searchInput;
  return (
    <div className={styles.inputWrapper}>
      <input
        className={inputClass}
        type={type}
        name={name}
        id={name}
        placeholder=' '
        maxLength={maxLength}
        {...props}
      />
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <div className={styles.inputBar} />
    </div>
  );
};

Input.propTypes = {
  tag: PropTypes.oneOf(['standardInput', 'searchInput']),
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  maxLength: PropTypes.number
};

Input.defaultProps = {
  tag: 'input',
  maxLength: 20
};

export default Input;
