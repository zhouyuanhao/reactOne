import {
	Route,
	Router
} from './component/Router/Router';

import React, {
	Component
} from 'react';
import Main from './Main';
import About from './About';

export default class App extends Component {
	render() {
		return (
			<Router>
				<Route path="/" component={Main} hideNavBar={true}/>
				<Route path="/about" component={About}/>
			</Router>
		);
	}
}

fetch("http://10.0.0.106:8080/json").then(function(res) {
	res.json().then(function(data) {
		console.log(data)
	})
})