import React, {
	Component
} from 'react';
import {
	Router as RouterNative,
	Scene as SceneNative
} from 'react-native-router-flux';
import Util from '../../Util/Util';

class Route extends SceneNative {}

class Router extends Component {
	render() {
		return (
			<RouterNative>
				{this.props.children.map(route => {
					return route2Scene(route);
				})}
			</RouterNative>
		);
	}
}
//nest not tested
function route2Scene(route) {
	if (route.props.path) {
		return (
			<Route key={Util.path2key(route.props.path)} {...route.props}>
				{route.props.children?(route.props.children.map(childRoute => {
					route2Scene(childRoute);
				})):undefined}
			</Route>
		)
	}
	return route;
}

export {
	Route,
	Router
};