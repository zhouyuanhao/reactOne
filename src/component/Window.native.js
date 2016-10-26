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
import View from './View';
import Text from './Text';

class Window extends Component {

	render() {
		const actions = this.props.actions
		var background = {
			'backgroundColor': 'rgba(94, 110, 141, 0.6)',
			'flex': 1
		}
		return (
			<Modal visible={this.props.showAlert} transparent={true} animationType={false} onRequestClose={()=>{actions.hideWindow()}}>
				<View style={background}>
					<Text >{this.props.content}}</Text>
					<Text onClick={()=>{this.props.callback();actions.hideWindow();}}>OK</Text>
					<Text onClick={()=>{actions.hideWindow();}}>Cancel</Text>
				</View>
			</Modal>
		)
	}
}

export default connect(state => ({
	showAlert: state.showAlert,
	content: state.alertContent,
	callback: state.alertCallback
}), dispatch => ({
	actions: bindActionCreators(ActionCreators, dispatch)
}))(Window)