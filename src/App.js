import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

import {ProductContext} from './contexts/ProductContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item])
	};
	return (
		<div className="App">
			<Navigation cart={cart} />

			{/* Routes */}
			{/* Wrap all of your components/routes in `App.js` inside of `ProductContext.Provider` component. */}
			{/* the value prop we'll pass in the products state, and an addItem function that will allow us to add books to the cart.*/}
			<ProductContext.Provider value={{products, addItem}}>
				<Route exact path="/">
					{/* we're providing our products state and addItem function we can simplify our products route a bit.*/}
					<Products />
				</Route>
			</ ProductContext.Provider>

			<Route path="/cart">
				<ShoppingCart cart={cart} />
			</Route>
		</div>
	);
}

export default App;
