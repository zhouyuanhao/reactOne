import React, {
	Component
} from 'react';

export default class Text extends Component {
	render() {
		if (this.props.children instanceof Array) {
			return (
				<a style={this.props.style}>{this.props.children.map(v=>v=="\n"?<br/>:v)}<br/></a>
			);
		}
		return (
			<a style={this.props.style}>{this.props.children}<br/></a>
		);
	}
}