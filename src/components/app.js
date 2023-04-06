import { h, Component, render } from 'preact';
import { Router } from 'preact-router';
import Header from './header';
import Footer from './footer';
import ShopProvider from '../context/shopContext';
import Home from '../routes/home';
import Impressum from '../routes/impressum';
import Datenschutz from '../routes/datenschutz';
import ProductPage from '../routes/products';
import AsyncRoute from 'preact-async-route';


const App = () => (
	<div id="app">
		<ShopProvider>
		<Header />
		<main>
			<Router>
				<Home path="/" />
	                       	<AsyncRoute
    path="/products/passion-female"
    getComponent={() => import('../routes/products').then(module => module.default)}
  />
		<AsyncRoute
    path="/products/passion-female-bottle"
    getComponent={() => import('../routes/products').then(module => module.default)}
  />
	                         
				<Impressum path="/impressum" />
				<Datenschutz path="/datenschutz" />
			</Router>
		</main>
		<Footer />
		</ShopProvider>
	</div>
);
export default App;

