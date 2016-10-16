/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
	Component
} from 'react';
import {
	Router,
	Route,
	hashHistory
} from 'react-router';
import {
	render
} from 'react-dom'
import App from './src/App'

render(
	<App/>,
	document.getElementById('example')
);