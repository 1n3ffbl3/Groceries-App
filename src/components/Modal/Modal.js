import React from 'react';
import styles from './Modal.module.scss';
import Form from '../Form/Form';


const Modal = ({ handleCloseModal }) => (
	<div className={styles.wrapper}>
		<button onClick={handleCloseModal} className={styles.closeButton}>x</button>
		<h2 className={styles.header}>ADD NEW ITEM</h2>
		<Form />
	</div>
);

export default Modal;