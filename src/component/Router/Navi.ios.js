import React, {
	Component
} from 'react';
import {
	View as ViewNative
} from 'react-native';
import {
	Actions
} from 'react-native-router-flux';
import Util from '../../Util/Util';
import Text from '../Text'

export default class Navi extends Component {
	render() {
		return (
			<ViewNative>
				<Text style={this.props.style} onPress={Actions[Util.path2key(this.props.target)]}>
					{this.props.children}
				</Text>
			</ViewNative>
		);
	}
}