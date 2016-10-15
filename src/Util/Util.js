const Util = {
	isDesktop: function(val) {
		return !window.location ? null : val
	},
	isMobile: function(val) {
		return !window.location ? val : null
	},
	jsonRemoveNull: function(json) {
		if (!(json instanceof Object)) {
			return json;
		}
		for (var obj in json) {
			if (json[obj] == null) {
				delete json[obj];
				continue;
			}
			if (json[obj] instanceof Object) {
				this.jsonRemoveNull(json[obj])
				continue;
			}
		}
		return json;
	}
}
export default Util;