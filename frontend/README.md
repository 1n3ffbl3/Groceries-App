# Groceries App

App which allows you to create a list of items to buy.

Checkout here the app: https://groceries-app.mizgierm.now.sh/

### Current project status:

1. You can:
	- add new item to the shopping list and specify its name and quantity
	- delete an item, if you made a mistake by adding it to the list
	- browse through the shopping list of items to buy and already bought ones
	- mark an item as bought and specify its cost and who bought it
	- search for your items by name or category (vegetable, fruit, meat, bakery)

 2. Next release (v2):
	- view some kind of statistics (e.g. how much money was spent this month, how much each user spent, ...)
	- recipe page contains list of recipes. It is possible to click on recipe and add all its items to 'to buy' list
	- app suggests recipes based on your shopping list
	- possibility to add all recipe ingredients to shopping list
	- fixing potential bugs

3. Next release (v3):
	- remainders can be added to specific items (e.g. using google calendar API)

### How to run

Clone repository on your computer
```
git clone https://github.com/1n3ffbl3/Groceries-App.git
```

Ensure that you have either npm or yarn installed.

Run 'yarn' to install dependencies and 'yarn start' to start the application.
```
yarn 
yarn start
```

Application is available on localhost:3000

### Technical aspects

The app use localStorage to store data. If you run the app on your browser in multiple tabs, it will share data between those tabs after actions on each tab (adding new item / marking as bought / deleting an item).

It is worth to checkout 'GroceryService' file to see, how above operations are done.

### Supported cases for multiple users

- User1 will be aliased as U1
- User2 will be aliased as U2

I assume that U1 and U2 are using same computer and browser, but different tabs.

- U1 adds an item to 'to buy' list. For U2 change is visible only after:
	- refresh of the page 
	- adding new item (adding an item fetches all items from storage)
- U1 updates an item and marks it as completed. U2 sees change only after:
	- refresh of the page
	- add new item 
	- deletes any existing 'to buy' item (which is not this one)
- U1 deletes an item. U2 sees change only after:
	- refresh of the page
	- add new item 
	- deletes any existing 'to buy' item (which is not this one)

Case when U1 marks item as completed, but didn't finish filling in information
(price and buyer) and in the same time U2 deletes same item, is currently not supported.

### To be proud 

- using sass in efficient way (reducing redundant css)
- using localStorage to save data inside browser to support multiple users
- reducing redundant code by making reusable components
- effectively using React Context API, which is a lighter alternative to redux, which makes app less complex
- finishing first version of application in specified time (3.5 days)
with all features of first release
- fixing unexpected bugs