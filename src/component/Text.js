import React, {
	Component
} from 'react';

export default class Text extends Component {
	replaceLineBreak(cont) {
		if (cont instanceof Array) {
			var count = 0;
			return cont.map(v => v == "\n" ? <br key={'n'+count++}/> : v);
		}
		return cont;
	}
	render() {
		return (
			<a {...this.props}>{this.replaceLineBreak(this.props.children)}</a>
		);
	}
}