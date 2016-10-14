import React, {
	Component
} from 'react';

export default class Text extends Component {
	render() {
		return (
			<a style={this.props.style}>{this.props.children}<br/></a>
		);
	}
}