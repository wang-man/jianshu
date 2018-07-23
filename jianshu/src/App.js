import React, { Component } from 'react';
import Header from './common/header'
import store from './store/index'
import {Provider} from 'react-redux';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="app">
					<Header />
				</div>
			</Provider>
		); 
	}
}

export default App;
