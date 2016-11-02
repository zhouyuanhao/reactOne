export function addcount(count) {
	return {
		type: 'ADD_COUNT',
		count
	}
};

export function resetcount() {
	return {
		type: 'RESET_COUNT'
	}
};

export function showWindow(content, callback) {
	return {
		type: 'SHOW_WINDOW',
		content,
		callback
	}
};

export function hideWindow() {
	return {
		type: 'HIDE_WINDOW',
	}
};

export const requestPosts = url => ({
	type: 'REQUEST_POSTS',
	url
})

export const receivePosts = (url, json) => ({
	type: 'RECEIVE_POSTS',
	url,
	json: JSON.stringify(json),
	receivedAt: Date.now()
})

const fetchPosts = url => dispatch => {
	dispatch(requestPosts(url))
	return fetch(url)
		.then(response => response.json())
		.then(json => dispatch(receivePosts(url, json)))
}

export const fetchAjax = url => (dispatch, getState) => {
	return dispatch(fetchPosts(url))
}