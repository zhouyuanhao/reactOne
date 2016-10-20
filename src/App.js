import {
	Route,
	Router
} from './component/Router/Router';
import React, {
	Component
} from 'react';
import {
	Provider
} from 'react-redux';
import {
	createStore
} from 'redux';
import Main from './Main';
import About from './About';


const init = {
	count: 0
};
const reducer = (state = init, action) => {
	switch (action.type) {
		case 'ADD_COUNT':
			console.log(state);
			return {
				count: state.count + action.count
			};
		default:
			return state;
	}
};

export default class App extends Component {
	render() {
		return (
			<Provider store={createStore(reducer)}>
				<Router>
					<Route path="/" component={Main} hideNavBar={true}/>
					<Route path="/about" component={About}/>
				</Router>
			</Provider>
		);
	}
}

fetch("http://10.0.0.106:8080/json").then(function(res) {
	res.json().then(function(data) {
		console.log(data)
	})
})