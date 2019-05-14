import { localStorageKeys } from './StorageKeys';

export class GroceryService {
  fetchArrayByKey(key) {
    const groceries = localStorage.getItem(key);
    return groceries ? JSON.parse(groceries) : [];
  }

  setByKey(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getAllGroceries() {
    return this.fetchArrayByKey(localStorageKeys.grocery);
  }

  getAllCompletedGroceries() {
    return this.fetchArrayByKey(localStorageKeys.groceryCompleted);
  }

  addGroceryItem(newItem) {
    const grocery = this.fetchArrayByKey(localStorageKeys.grocery);

    grocery.push(newItem);

    this.setByKey(localStorageKeys.grocery, grocery);

    return grocery;
  }

  updateGroceryItem(item) {
    const grocery = this.fetchArrayByKey(localStorageKeys.grocery);
    const groceryCompleted = this.fetchArrayByKey(
      localStorageKeys.groceryCompleted
    );
    const groceryItem = grocery.find((g) => g.name === item.name);
    const groceryItemIndex = grocery.findIndex((g) => g.name === item.name);

    groceryItem.price = item.price;
    groceryItem.buyer = item.buyer;
    groceryItem.isBought = true;

    grocery.splice(groceryItemIndex, 1);
    groceryCompleted.push(groceryItem);

    this.setByKey(localStorageKeys.grocery, grocery);
    this.setByKey(localStorageKeys.groceryCompleted, groceryCompleted);

    return new UpdateResult(grocery, groceryCompleted);
  }

  deleteGroceryItem(name) {
    const grocery = this.fetchArrayByKey(localStorageKeys.grocery);
    const groceryItemIndex = grocery.findIndex((g) => g.name === name);

    grocery.splice(groceryItemIndex, 1);

    this.setByKey(localStorageKeys.grocery, grocery);

    return grocery;
  }
}

class UpdateResult {
  constructor(grocery, groceryCompleted) {
    this.grocery = grocery;
    this.groceryCompleted = groceryCompleted;
  }
}
