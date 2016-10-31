import {
	createStore,
	applyMiddleware
} from 'redux';
import thunk from 'redux-thunk'

const init = {
	count: 0,
	showAlert: false
};
const reducer = (state = init, action) => {
	switch (action.type) {
		case 'ADD_COUNT':
			return {
				...state,
				count: state.count + action.count
			};
		case 'SHOW_WINDOW':
			return {
				...state,
				showAlert: true,
				alertContent: action.content,
				alertCallback: action.callback
			};
		case 'HIDE_WINDOW':
			return {
				...state,
				showAlert: false
			};
		case 'RECEIVE_POSTS':
			return {
				...state,
				json: action.json
			}
		default:
			return state;
	}
};

const reduxStore = createStore(reducer, applyMiddleware(thunk));
export default reduxStore;