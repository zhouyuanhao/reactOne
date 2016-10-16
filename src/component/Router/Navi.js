import React, {
	Component
} from 'react';

export default class Navi extends Component {
	render() {
		return (
			<a style={this.props.style} href={"#"+this.props.target}>
				{this.props.children}
			</a>
		);
	}
}