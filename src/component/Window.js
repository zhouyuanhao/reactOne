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

class Window extends Component {
	render() {
		const actions = this.props.actions

		var background = {
			'visibility': this.props.showAlert == true ? '' : 'hidden ',
			'position': 'absolute',
			'backgroundColor': 'rgba(94, 110, 141, 0.6)',
			'left': 0,
			'top': 0,
			'width': '100%',
			'height': '100%',
			'zIndex': 1000
		}
		var window = {
			'position': 'relative',
			'backgroundColor': 'rgba(255, 255, 255)',
			'background': '#FFF',
			'textAlign': 'center',
			'margin': '4em auto',
			'width': '50%',
			'height': '40%',
			'zIndex': 2000
		}
		var ok = {};
		var cancel = {};
		return (
			<div style={background} >
				<div style={window}>
					<p>{this.props.content}</p>
					<ul >
						<li><a style={ok} onClick={()=>{this.props.callback();actions.hideWindow();}}>OK</a></li>
						<li><a style={cancel} onClick={()=>{actions.hideWindow()}}>Cancel</a></li>
					</ul>
				</div> 
			</div>);
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