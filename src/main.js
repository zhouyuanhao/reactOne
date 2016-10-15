import React, {
	Component
} from 'react';
import View from './component/View'
import Text from './component/Text'
import Util from './Util/Util'

export default class Main extends Component {
	render() {
		return (
			<View style={styles.container}>
		        <Text style={styles.welcome}>
		          Welcome to React Native!
		        </Text> 
		        <Text style={styles.instructions}>
		          To get started, edit 'src/main.js'
		        </Text>
		        <Text style={styles.instructions}>
		          Mobile can select reload to reload,{'\n'}
		          Desktop need to webpack --watch
		        </Text>
		    </View>
		);
	}
}
const util = Util.call();

const styles = util.jsonRemoveNull({
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
		display: util.isDesktop('block')
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
		display: util.isDesktop('block')
	},
});