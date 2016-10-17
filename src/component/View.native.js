import React, {
	Component
} from 'react';
import {
	View as ViewNative
} from 'react-native';

export default class Text extends Component {
	render() {
		return (
			<ViewNative onPress = {this.props.onClick} {...this.props}>
				{this.props.children}
			</ViewNative>);
	}
}