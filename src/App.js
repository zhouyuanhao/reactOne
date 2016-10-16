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