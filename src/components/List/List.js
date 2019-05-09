import React from 'react';
import PropTypes from 'prop-types';
import styles from './List.module.scss';
import ListItem from './ListItem';

const List = ({ items }) => {
	return (
		<ul className={styles.itemsWrapper}>
			{items.map((item, index) => (
				<ListItem {...item} key={index} />
			))}
		</ul>
	);
};

List.propTypes = {
	items: PropTypes.array,
};

List.defaultProps = {
	items: [],
};
export default List;