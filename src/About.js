import React, {
	Component
} from 'react';
import {
	connect
} from 'react-redux';
import {
	bindActionCreators
} from 'redux';
import View from './component/View';
import Text from './component/Text';
import Util from './Util/Util';
import Action from './component/Router/Action';
import Window from './component/Window';
import * as ActionCreators from './redux/actionCreators';

class About extends Component {
	render() {
		const actions = this.props.actions
		return (
			<View style={styles.container}>
		 		<Text style={styles.welcome}>
					About the author
		        </Text> 
		        <Text style={styles.instructions}>
				 	476916922@qq.com
		        </Text>
				<Text onClick={Action.goBack()} style={styles.instructions}>
					go to home
				</Text>
				<Text onClick={()=>actions.addcount(2)} style={styles.instructions}>
					click to add count 2(redux)
				</Text>
				<Text onClick={()=>actions.resetcount()} style={styles.instructions}>
					click to clear(redux)
				</Text>
				<Text style={styles.instructions}>
					{this.props.count}
				</Text>
				<Text onClick={()=>actions.showWindow("aaaaa",function(){console.log(123)})} style={styles.instructions}>
					click to show alert window
				</Text>
				<Window></Window>
		    </View>
		);
	}
}

const styles = Util.jsonRemoveNull({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
		display: !Util.isMobile() ? 'flex' : null,
		flexDirection: !Util.isMobile() ? 'column' : null
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
		display: !Util.isMobile() ? 'block' : null
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
		display: !Util.isMobile() ? 'block' : null
	},
});

export default connect(state => ({
	count: state.countReducer.count
}), dispatch => ({
	actions: bindActionCreators(ActionCreators, dispatch)
}))(About)