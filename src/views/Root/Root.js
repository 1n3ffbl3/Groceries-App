import React, { Component } from 'react';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppContext from '../../context';
import { Form, FormTypes, Modal, Header } from '../../components/index';
import { GroceryService } from './GroceryService';
import { StatisticsView, RecipesListView, GroceryListView } from '../index';

class Root extends Component {
	state = {
		isModalOpen: false,
		formType: FormTypes.addItem,
		grocery: [],
		searchQuery: '',
		groceryCompleted: [],
		itemUnderEdition: '',
		isNameSearch: true,
		showCompleted: true
	};

	groceryService = new GroceryService();

	componentWillMount = () => {
		this.setState({
			grocery: this.groceryService.getAllGroceries(),
			groceryCompleted: this.groceryService.getAllCompletedGroceries()
		});
	};

	closeModal = () => {
		this.setState({
			isModalOpen: false,
			itemUnderEdition: null
		});
	};

	openAddItemModal = () => {
		this.setState({
			isModalOpen: true,
			formType: FormTypes.addItem
		});
	};

	addItem = (event, newItem) => {
		event.preventDefault();
		const grocery = this.groceryService.addGroceryItem(newItem);

		this.setState({
			grocery: grocery,
		});

		this.closeModal();
	};

	deleteItem = (name) => {
		const grocery = this.groceryService.deleteGroceryItem(name);

		this.setState({
			grocery: grocery
		});
	};

	updateItem = (event, item) => {
		event.preventDefault();
		const updateResult = this.groceryService.updateGroceryItem(item);

		this.setState({
			grocery: updateResult.grocery,
			groceryCompleted: updateResult.groceryCompleted,
		});

		this.closeModal();
	};

	handleSearchInput = (event) => {
		const searchQuery = event.target.value;
		this.setState({
			searchQuery: searchQuery
		});
	};

	markAsCompleted = (name) => {
		this.setState({
			isModalOpen: true,
			formType: FormTypes.addPrice,
			itemUnderEdition: name
		});
	};

	switchSearch = () => {
		this.setState((prevState) => ({
			isNameSearch: !prevState.isNameSearch
		}));
	};

	toggleShowCompleted = () => {
		this.setState((prevState) => ({
			showCompleted: !prevState.showCompleted
		}));
	};

	render() {
		const { isModalOpen, formType, itemUnderEdition } = this.state;
		const contextElements = {
			addItem: this.addItem,
			updateItem: this.updateItem,
			deleteItem: this.deleteItem,
			handleSearchInput: this.handleSearchInput,
			markAsCompleted: this.markAsCompleted,
			openAddItemModal: this.openAddItemModal,
			switchSearch: this.switchSearch,
			toggleShowCompleted: this.toggleShowCompleted,
			...this.state
		};

		return (
			<BrowserRouter>
				<AppContext.Provider value={contextElements}>
					<Header />
					<main className="container">
						<Switch>
							<Route exact path="/" component={GroceryListView}></Route>
							<Route path="/recipes" component={RecipesListView}></Route>
							<Route path="/stats" component={StatisticsView}></Route>
						</Switch>
					</main>
					{isModalOpen && <Modal handleCloseModal={this.closeModal}>
						<Form formType={formType} name={itemUnderEdition} />
					</Modal>}
				</AppContext.Provider>
			</BrowserRouter>
		);
	};
};

export default Root;