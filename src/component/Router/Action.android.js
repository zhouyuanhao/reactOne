import {
	Actions
} from 'react-native-router-flux';
import Util from '../../Util/Util';

Actions.go = function(path) {
	return Actions[Util.path2key(path)]
}
Actions.goBack = function() {
	return Actions.pop;
}

export default Actions;