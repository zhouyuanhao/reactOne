import React, {
	Component
} from 'react';

export default class View extends Component {
	render() {
		return (
			<div {...this.props}>
				{this.props.children}
			</div>
		);
	}
}