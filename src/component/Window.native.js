import {
	Modal
} from 'react-native';
import React, {
	Component
} from 'react';
import {
	connect
} from 'react-redux';
import {
	bindActionCreators
} from 'redux';
import * as ActionCreators from '../redux/actionCreators';
import {
	Alert,
	StyleSheet,
	Dimensions
} from 'react-native';
import View from './View';
import Text from './Text';
import Button from './Button';

class Window extends Component {

	render() {
		const actions = this.props.actions
		return (
			<Modal visible={this.props.showAlert} transparent={true} animationType={'none'} onRequestClose={()=>{actions.hideWindow()}}>
				<View style={styles.background}>
					<View style={styles.windowStyle}>
						<Text style={styles.titleStyle}>Alert</Text>
						<Text style={styles.messageStyle}>{this.props.content}</Text>
						<View style={styles.placeholderStyle}></View>
						<View style={styles.buttonsReginStyle}>
							<Button style={styles.buttonstyle} onClick={()=>{this.props.callback();actions.hideWindow();}}>
								<Text>OK</Text>
							</Button>
							<Button style={styles.buttonstyle} onClick={()=>{actions.hideWindow();}}>
								<Text>Cancel</Text>
							</Button>
						</View>
					</View>
				</View>
			</Modal>
		)
	}
}

export default connect(state => ({
	showAlert: state.alertReducer.showAlert,
	content: state.alertReducer.alertContent,
	callback: state.alertReducer.alertCallback
}), dispatch => ({
	actions: bindActionCreators(ActionCreators, dispatch)
}))(Window)

const styles = StyleSheet.create({
	background: {
		'backgroundColor': 'rgba(94, 110, 141, 0.6)',
		'flex': 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonstyle: {
		flex: 1,
		'backgroundColor': 'rgb(255, 255, 255)',
	},
	titleStyle: {
		color: 'rgb(35,177,214)',
		fontSize: 20,
		marginLeft: 5
	},
	messageStyle: {
		marginLeft: 5
	},
	buttonsReginStyle: {
		flexDirection: 'row'
	},
	placeholderStyle: {
		height: 20
	},
	windowStyle: {
		justifyContent: 'center',
		'backgroundColor': 'rgb(255, 255, 255)',
		flex: 0,
		width: Math.min(Dimensions.get('window').width * 0.8, 300)
	}
});