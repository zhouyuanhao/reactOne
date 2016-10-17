import React, {
	Component
} from 'react';
import View from './component/View'
import Text from './component/Text'
import Util from './Util/Util'
import Action from './component/Router/Action'

export default class About extends Component {
	render() {
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