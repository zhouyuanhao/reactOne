import {
	createStore
} from 'redux';

const init = {
	count: 0,
	showAlert: false
};
const reducer = (state = init, action) => {
	var tempState = Object.create(state)
	switch (action.type) {
		case 'ADD_COUNT':
			return Object.assign(tempState, {
				count: state.count + action.count
			});
		case 'SHOW_WINDOW':
			return Object.assign(tempState, {
				showAlert: true,
				alertContent: action.content,
				alertCallback: action.callback
			});
		case 'HIDE_WINDOW':
			return Object.assign(tempState, {
				showAlert: false,
			})
	}
	return tempState;
};

const reduxStore = createStore(reducer);
export default reduxStore;