'use strict';

var Platform = {
	OS: window.location.hostname == "" ? "desktop" : "web",
	get Version() {
		return navigator.userAgent;
	},
	select: (obj: Object) => obj.android,
	isMobile: false
};

module.exports = Platform;