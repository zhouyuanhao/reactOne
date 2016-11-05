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
	Modal
} from 'react-bootstrap';
import Button from './Button'

class Window extends Component {
	close = () => {
		this.props.actions.hideWindow()
	}
	render() {
		const actions = this.props.actions
		return (
			<Modal show={this.props.showAlert} onHide={this.close}>
				<Modal.Header closeButton>
					<Modal.Title>Alert</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{this.props.content}
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={()=>{this.props.callback(); this.close(); }}>OK</Button>
					<Button onClick={()=>{this.close(); }}>Close</Button>
				</Modal.Footer>
			</Modal>
		);
	}
}

//Redux
export default connect(state => ({
	showAlert: state.alertReducer.showAlert,
	content: state.alertReducer.alertContent,
	callback: state.alertReducer.alertCallback
}), dispatch => ({
	actions: bindActionCreators(ActionCreators, dispatch)
}))(Window)