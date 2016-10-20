import {
	createStore
} from 'redux';

const init = {
	count: 0
};
const reducer = (state = init, action) => {
	switch (action.type) {
		case 'ADD_COUNT':
			console.log(state);
			return {
				count: state.count + action.count
			};
		default:
			return state;
	}
};

const reduxStore = createStore(reducer);
export default reduxStore;