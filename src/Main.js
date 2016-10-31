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
import * as ActionCreators from './redux/actionCreators';

class Main extends Component {
	propTypes: {
		count: React.PropTypes.number
	}
	render() {
		const actions = this.props.actions
		return (
			<View style={styles.container}>
		        <Text style={styles.welcome}>
		          Welcome to React One!
		        </Text> 
		        <Text style={styles.instructions}>
		          To get started, edit 'src/main.js'
		        </Text>
		        <Text style={styles.instructions}>
		          Mobile can select reload to reload,{'\n'}
		          Desktop need to webpack --watch
		        </Text>
				<Text onClick={Action.go("/about")} style={styles.instructions}>
					go to about
				</Text>
				<Text onClick={()=>actions.addcount(1)} style={styles.instructions}>
					click to add count 1(redux)
				</Text>
				<Text style={styles.instructions}>
					{this.props.count}
				</Text>
				<Text onClick={()=>actions.fetchAjax(Util.serverHost() + "/json")} style={styles.instructions}>
					call ajax {this.props.json}
				</Text>
		    </View>
		);
	}
}

const styles = Util.jsonRemoveNull({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
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
	count: state.count,
	json: state.json
}), dispatch => ({
	actions: bindActionCreators(ActionCreators, dispatch)
}))(Main)