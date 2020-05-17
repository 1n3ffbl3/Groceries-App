import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import styles from './Dropdown.module.scss';

const CategoryDropdown = ({ onChange }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Select category');

  useEffect(() => {
    onChange(selectedCategory);
  }, [selectedCategory]);

  return (
    <Dropdown
      className={styles.wrapper}
      isOpen={dropdownOpen}
      toggle={() => setDropdownOpen(!dropdownOpen)}
      required>
      <DropdownToggle caret>{selectedCategory}</DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={() => setSelectedCategory('Vegetable')}>
          Vegetable
        </DropdownItem>
        <DropdownItem onClick={() => setSelectedCategory('Fruit')}>
          Fruit
        </DropdownItem>
        <DropdownItem onClick={() => setSelectedCategory('Meat')}>
          Meat
        </DropdownItem>
        <DropdownItem onClick={() => setSelectedCategory('Bakery')}>
          Bakery
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

CategoryDropdown.propTypes = {
  onChange: PropTypes.func
};

export default CategoryDropdown;
