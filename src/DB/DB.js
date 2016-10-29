'use strict'

let Datastore = require('nedb');

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

	this.find = function(query, fields, callback) {
		ds.find(query, fields, callback);
	}

	this.count = function(query, callback) {
		ds.count(query, callback);
	}

	this.update = function(query, set, props, callback) {
		ds.update(query, set, props, callback);
	}

	this.remove = function(query, props, callback) {
		ds.remove(query, props, callback);
	}

	return this;
}