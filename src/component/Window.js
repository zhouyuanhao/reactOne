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
	Button,
	Modal
} from 'react-bootstrap';

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
					<Button onClick={this.close}>Close</Button>
				</Modal.Footer>
			</Modal>
		);
	}
}

//Redux
export default connect(state => ({
	showAlert: state.showAlert,
	content: state.alertContent,
	callback: state.alertCallback
}), dispatch => ({
	actions: bindActionCreators(ActionCreators, dispatch)
}))(Window)