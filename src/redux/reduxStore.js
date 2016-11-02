import {
	createStore,
	applyMiddleware,
	combineReducers
} from 'redux';
import thunk from 'redux-thunk'

const applydefault = (val, defVal) => {
	if (val == null) {
		return defVal;
	}
	return val;
}

const countReducer = (state = {
	count: 0
}, action) => {
	switch (action.type) {
		case 'ADD_COUNT':
			return {
				...state,
				count: state.count + action.count
			};
		case 'RESET_COUNT':
			return {
				...state,
				count: 0
			};
		default:
			return state;
	}
};

const alertReducer = (state = {
	showAlert: false
}, action) => {
	switch (action.type) {
		case 'SHOW_WINDOW':
			return {
				...state,
				showAlert: true,
				alertContent: action.content,
				alertCallback: applydefault(action.callback, function() {})
			};
		case 'HIDE_WINDOW':
			return {
				...state,
				showAlert: false
			};
		default:
			return state;
	}
};

const ajaxReducer = (state = {}, action) => {
	switch (action.type) {
		case 'RECEIVE_POSTS':
			return {
				...state,
				json: action.json
			}
		default:
			return state;
	}
};

const reducer = combineReducers({
	countReducer,
	alertReducer,
	ajaxReducer
})

const reduxStore = createStore(reducer, applyMiddleware(thunk));
export default reduxStore;