import React, { Component } from 'react';
import Header from './common/header'
import store from './store/index'
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/home'
import Detail from './pages/detail/loadable'
import Login from './pages/login'

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<div className="app">
						<Header />
						<Route path='/' exact component={Home}></Route>
						<Route path='/detail/:id' exact component={Detail}></Route>
						<Route path='/login' exact component={Login}></Route>
					</div>
				</BrowserRouter>
			</Provider>
		); 
	}
}

export default App;
