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