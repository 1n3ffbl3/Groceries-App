import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './ListItem.module.scss';
import { Checkbox } from '../';
import { MultipleContextConsumer } from '../../context';
import { FaTrash } from 'react-icons/fa';

const ItemInfo = ({ isBought, label, value }) => {
  return (
    <div className={styles.info}>
      {!isBought && (
        <Fragment>
          <h3 className={styles.item}>{label}: </h3>
          <h3 className={styles.item}>{value}</h3>
        </Fragment>
      )}
      {isBought && (
        <Fragment>
          <h3 className={styles.itemBought}>{label}: </h3>
          <h3 className={styles.itemBought}>{value}</h3>
        </Fragment>
      )}
    </div>
  );
};

const ListItem = ({ name, quantity, isBought }) => {
  const subWrapperClass = !isBought
    ? styles.subWrapper
    : styles.subWrapperCompleted;
  return (
    <MultipleContextConsumer.Consumer>
      {(uiCtx, itemCtx) => (
        <li className={styles.wrapper}>
          <div className={subWrapperClass}>
            <div className={styles.infoWrapper}>
              <ItemInfo isBought={isBought} label='Name' value={name} />
              <ItemInfo isBought={isBought} label='Quantity' value={quantity} />
            </div>
            <div className={styles.checkbox}>
              <Checkbox
                name='completed'
                checked={isBought ? true : false}
                onChange={() => uiCtx.markAsCompleted(name)}
              />
            </div>
            <div className={styles.remove}>
              {!isBought ? (
                <FaTrash onClick={() => itemCtx.deleteItem(name)} />
              ) : null}
            </div>
          </div>
        </li>
      )}
    </MultipleContextConsumer.Consumer>
  );
};

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  isBought: PropTypes.bool
};

export default ListItem;
