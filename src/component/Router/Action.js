const Action = {
	go: function(path) {
		return function() {
			window.location.href = "#" + path
		}
	},
	goBack: function(path) {
		return function() {
			history.go(-1);
		}
	},
	goForward: function(path) {
		return function() {
			history.forward();
		}
	}
}

export default Action;