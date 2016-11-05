import React, {
	Component
} from 'react';
import {
	Button as ButtonBS,
} from 'react-bootstrap';

export default class Button extends Component {
	render() {
		return (
			<ButtonBS {...this.props}>{this.props.children}</ButtonBS>
		);
	}
}