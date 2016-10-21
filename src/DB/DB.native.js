'use strict'

let Datastore = require('react-native-local-mongodb');

export default function DB(name) {
	let ds = null;
	if (name != null) {
		ds = new Datastore({
			filename: name,
			autoload: true
		});
	} else {
		ds = new Datastore();
	}

	this.insert = function(json) {
		ds.insert(json);
	}

	this.find = function(query, callback) {
		ds.find(query, callback);
	}
	return this;
}