import React, {
	Component
} from 'react';
import {
	TouchableHighlight,
	StyleSheet,
	View
} from 'react-native';

export default class Button extends Component {
	setNativeProps(nativeProps) {
		this._root.setNativeProps(nativeProps);
	}
	render() {
		return (
			<TouchableHighlight onPress = {this.props.onClick} style={styles.container} underlayColor="rgb(200, 200, 200)" 
			 activeOpacity={0.5}  {...this.props}>
				<View>
					{this.props.children}
				</View>
			</TouchableHighlight>);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'rgb(230, 230, 230)',
	},
});