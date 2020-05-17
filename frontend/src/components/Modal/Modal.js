import React from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.scss';

const Modal = ({ handleCloseModal, children }) => {
  return (
    <div className={styles.wrapper}>
      <button onClick={handleCloseModal} className={styles.closeButton}>
        x
      </button>
      {children}
    </div>
  );
};

Modal.propTypes = {
  handleCloseModal: PropTypes.func.isRequired
};

export default Modal;
