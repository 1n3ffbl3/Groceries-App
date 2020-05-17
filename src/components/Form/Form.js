import React, { useState } from 'react';
import styles from './Form.module.scss';
import { ItemContext } from '../../context';
import { Button, CategoryDropdown, Input, InputType } from '../';

export const FormTypes = {
  addItem: 'addItem',
  addPrice: 'addPrice'
};

const AddGroceryItemForm = () => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [category, setCategory] = useState('');

  return (
    <ItemContext.Consumer>
      {(context) => {
        return (
          <div className={styles.wrapper}>
            <h2 className={styles.header}>ADD NEW ITEM</h2>
            <form
              className={styles.form}
              onSubmit={(event) =>{
                context.addItem(event, {name, quantity, category})
              }
               
              }>
              <Input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type='text'
                name='name'
                label='Add item'
                tag={InputType.input}
                required
              />
              <Input
                onChange={(e) => setQuantity(e.target.value)}
                value={quantity}
                type='number'
                name='quantity'
                label='Quantity'
                tag={InputType.input}
                required
              />
              <CategoryDropdown onChange={(value) => setCategory(value)} />
              <Button secondary>Save</Button>
            </form>
          </div>
        );
      }}
    </ItemContext.Consumer>
  );
};

const AddPriceItemForm = ({ name }) => {
  const [price, setPrice] = useState('');
  const [buyer, setBuyer] = useState('');

  return (
    <ItemContext.Consumer>
      {(context) => {
        return (
          <div className={styles.wrapper}>
            <h2 className={styles.header}>ADD PRICE OF ONE ITEM</h2>
            <form
              className={styles.form}
              onSubmit={(event) => context.updateItem(event, { price, buyer, name })}>
              <Input
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                type='number'
                name='price'
                label='3€'
                tag={InputType.input}
                required
              />
              <Input
                onChange={(e) => setBuyer(e.target.value)}
                value={buyer}
                type='text'
                name='buyer'
                label='Who'
                tag={InputType.input}
                required
              />
              <Button secondary>Save</Button>
            </form>
          </div>
        );
      }}
    </ItemContext.Consumer>
  );
};

const Form = ({ formType, name }) => {
  if (formType === FormTypes.addItem) {
    return <AddGroceryItemForm />;
  }

  if (formType === FormTypes.addPrice) {
    return <AddPriceItemForm name={name} />;
  }
};

export default Form;
