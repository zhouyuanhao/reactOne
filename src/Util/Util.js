import Platform from '../component/Platform';

const Util = {
	isDesktop: function() {
		return !Platform.isMobile
	},
	isMobile: function() {
		return Platform.isMobile
	},
	isIOS: function() {
		return Platform.OS == 'ios'
	},
	isAndroid: function() {
		return Platform.OS == 'android'
	},
	isDesktop: function() {
		return Platform.OS == 'desktop'
	},
	isWeb: function() {
		return Platform.OS == 'web'
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
	},
	path2key: function(path) {
		if (path == null) {
			console.error('path is null')
		}
		if (path == '/') {
			return "root";
		};
		if (path.startsWith('/')) {
			path = path.replace('/', '');
		};
		var key = path.replace(/\//g, "_");
		return key;
	}
}
export default Util;