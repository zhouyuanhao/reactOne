import React, {
	Component
} from 'react';
import {
	Router as ReactRouter,
	Route as ReactRoute,
	hashHistory
} from 'react-router'


class Route extends Component {
	render() {
		return (
			<ReactRoute>
				{this.props.children}
			</ReactRoute>
		);
	}
}

class Router extends Component {
	render() {
		return (
			<ReactRouter history={hashHistory}>
				{this.props.children}
			</ReactRouter>
		);
	}
}

export {
	Route,
	Router
};