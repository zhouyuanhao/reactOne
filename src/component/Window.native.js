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
	Alert
} from 'react-native';
import View from './View';
import Text from './Text';

class Window extends Component {

	render() {
		const actions = this.props.actions
		var background = {
			'backgroundColor': 'rgba(94, 110, 141, 0.6)',
			'flex': 1
		}
		if (this.props.showAlert) {
			Alert.alert('Alert', this.props.content, [{
				text: 'Ok',
				onPress: () => {
					this.props.callback();
					actions.hideWindow();
				}
			}, {
				text: 'Cancel',
				onPress: () => {
					actions.hideWindow();
				}
			}])
		}
		return (
			<Modal visible={false} onRequestClose={()=>{actions.hideWindow()}}/>
			/*<Modal visible={this.props.showAlert} transparent={true} animationType={'none'} onRequestClose={()=>{actions.hideWindow()}}>
				<View style={background}>
					<Text >{this.props.content}</Text>
					<Text onClick={()=>{this.props.callback();actions.hideWindow();}}>OK</Text>
					<Text onClick={()=>{actions.hideWindow();}}>Cancel</Text>
				</View>
			</Modal>*/
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