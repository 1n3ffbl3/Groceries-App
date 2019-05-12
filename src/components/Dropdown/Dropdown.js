import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import styles from './Dropdown.module.scss';

class CategoryDropdown extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.onCategorySelected = this.onCategorySelected.bind(this);
		this.state = {
			dropdownOpen: false
		};
	}

	toggle() {
		this.setState((prevState) => ({
			dropdownOpen: !prevState.dropdownOpen
		}));
	}

	onCategorySelected(value) {
		const { onChange } = this.props;
		this.setState({
			selectedCategory: value
		});
		onChange(value);
	}

	render() {
		const { selectedCategory } = this.state;
		return (
			<Dropdown
				className={styles.wrapper}
				isOpen={this.state.dropdownOpen}
				toggle={this.toggle}
				required>
				<DropdownToggle caret>
					{selectedCategory ? selectedCategory : 'Select category'}
				</DropdownToggle>
				<DropdownMenu>
					<DropdownItem onClick={() => this.onCategorySelected('Vegetable')}>Vegetable</DropdownItem>
					<DropdownItem onClick={() => this.onCategorySelected('Fruit')}>Fruit</DropdownItem>
					<DropdownItem onClick={() => this.onCategorySelected('Meat')}>Meat</DropdownItem>
					<DropdownItem onClick={() => this.onCategorySelected('Bakery')}>Bakery</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		);
	}
};

CategoryDropdown.propTypes = {
	onChange: PropTypes.func,
};

export default CategoryDropdown;