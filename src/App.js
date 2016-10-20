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
import Main from './Main';
import About from './About';
import reduxStore from './redux/reduxStore'

export default class App extends Component {
	render() {
		return (
			<Provider store={reduxStore}>
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