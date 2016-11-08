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
			<TouchableHighlight onPress = {this.props.onClick} style={[styles.container,this.props.style]} underlayColor="rgb(200, 200, 200)" 
			 activeOpacity={0.5}  >
				<View style={[styles.view,this.props.viewStyle]}>
					{this.props.children}
				</View>
			</TouchableHighlight>);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'rgb(230, 230, 230)',
		borderStyle: 'solid',
		borderWidth: 1


	},
	view: {
		alignItems: 'center',
		marginLeft: 5,
		marginRight: 5,
		marginTop: 5,
		marginBottom: 5,
	}

});