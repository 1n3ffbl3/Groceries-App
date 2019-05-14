import React from 'react';
import { UIContext } from '../../context';
import styles from './GroceryListView.module.scss';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { Button, RadioButton, Input, List } from '../../components/';

const SearchInput = ({ context }) => {
  return (
    <Input
      placeholder=' '
      type='text'
      onChange={context.handleSearchInput}
      name='searchQuery'
      label={context.isNameSearch ? 'Search by name' : 'Search by category'}
      value={context.searchQuery}
      tag='searchInput'
    />
  );
};

const FilterableList = ({ context, listItems }) => {
  return (
    <div>
      {context.searchQuery ? (
        <List
          items={listItems.filter((grocery) => {
            const searchQuery = context.searchQuery.toLowerCase();
            if (context.isNameSearch) {
              return grocery.name.toLowerCase().includes(searchQuery);
            }

            return grocery.category.toLowerCase().includes(searchQuery);
          })}
        />
      ) : (
        <List items={listItems} />
      )}
    </div>
  );
};

const GroceryListView = () => {
  return (
    <UIContext.Consumer>
      {(uiCtxElements) => (
        <div className={styles.wrapper}>
          <div>
            <RadioButton
              switchFn={uiCtxElements.switchSearch}
              checked={uiCtxElements.isNameSearch}>
              Name
            </RadioButton>
            <RadioButton
              switchFn={uiCtxElements.switchSearch}
              checked={!uiCtxElements.isNameSearch}>
              Category
            </RadioButton>
          </div>

          <SearchInput context={uiCtxElements} />
          <Button onClick={uiCtxElements.openAddItemModal}>Add item</Button>

          <FilterableList
            context={uiCtxElements}
            listItems={uiCtxElements.grocery}
          />
          <div className={styles.label}>
            <label onClick={uiCtxElements.toggleShowCompleted}>Completed</label>
            {uiCtxElements.showCompleted ? <FaAngleDown /> : <FaAngleUp />}
          </div>

          {uiCtxElements.showCompleted ? (
            <div>
              {uiCtxElements.groceryCompleted.length ? (
                <FilterableList
                  context={uiCtxElements}
                  listItems={uiCtxElements.groceryCompleted}
                />
              ) : null}
            </div>
          ) : null}
        </div>
      )}
    </UIContext.Consumer>
  );
};

export default GroceryListView;
