'use strict';

var Platform = {
	OS: 'web',
	get Version() {
		return navigator.userAgent;
	},
	select: (obj: Object) => obj.android,
	isMobile: false
};

module.exports = Platform;