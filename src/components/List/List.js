import React from 'react';
import PropTypes from 'prop-types';
import styles from './List.module.scss';
import ListItem from './ListItem';

const List = ({ items }) => {
	return (
		<ul className={styles.itemsWrapper}>
			{items.map((item) => (
				<ListItem {...item} key={item.name}/>
			))}
		</ul>
	);
};

List.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object),
};

List.defaultProps = {
	items: [],
};
export default List;