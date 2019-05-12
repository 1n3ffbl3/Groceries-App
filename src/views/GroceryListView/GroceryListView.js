import React from 'react';
import AppContext from '../../context';
import styles from './GroceryListView.module.scss';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { Button, RadioButton, Input, List } from '../../components/';

const SearchInput = ({ context }) => { 
	return (
		<Input
			placeholder=" "
			type="text"
			onChange={context.handleSearchInput}
			name="searchQuery"
			label={context.isNameSearch ? 'Search by name' : 'Search by category'}
			value={context.searchQuery}
			tag="searchInput"/>
	);
};

const FilterableList = ({ context, listItems }) => { 
	return (
		<div>
			{
				context.searchQuery ? (
					<List items={listItems.filter((grocery) => {
						const searchQuery = context.searchQuery.toLowerCase();
						if (context.isNameSearch) {
							return grocery.name.toLowerCase().includes(searchQuery);
						}

						return grocery.category.toLowerCase().includes(searchQuery);
					})} />
				) : (
						<List items={listItems}/>
					)
			}
		</div>
	);
};

const GroceryListView = () => {
	return (
		<AppContext.Consumer>
			{(context) => (
				<div className={styles.wrapper}>
					<div>
						<RadioButton
							switchFn={context.switchSearch}
							checked={context.isNameSearch}>
							Name
						</RadioButton>
						<RadioButton
							switchFn={context.switchSearch}
							checked={!context.isNameSearch}>
							Category
						</RadioButton>
					</div>

					<SearchInput context={context}/>
					<Button onClick={context.openAddItemModal}>Add item</Button>

					<FilterableList context={context} listItems={context.grocery}/>
					<div className={styles.label}>
						<label onClick={context.toggleShowCompleted}>Completed</label>
						{
							context.showCompleted ? (<FaAngleDown />) : (<FaAngleUp/>)
						}
					</div>

					{context.showCompleted ? (
						<div>
							{context.groceryCompleted.length ? (
								<FilterableList context={context} listItems={context.groceryCompleted}/>
							) : (
									null
								)}
						</div>) : (null)
					}
				</div>
			)}
		</AppContext.Consumer>
	);
};

export default GroceryListView;