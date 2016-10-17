import React, {
	Component
} from 'react';
import {
	Text as TextNative
} from 'react-native';

export default class Text extends Component {
	render() {
		return (
			<TextNative onPress = {this.props.onClick} {...this.props}>
				{this.props.children}
			</TextNative>);
	}
}