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
import Util from './Util/Util'
import DB from './DB/DB'

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

var db = new DB("user");
/*db.insert({
	no: 1,
	name: "a"
});*/
db.find({}, function(err, docs) {
	console.log(docs)
})