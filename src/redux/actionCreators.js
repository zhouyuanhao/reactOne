export function addcount(count) {
	return {
		type: 'ADD_COUNT',
		count
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