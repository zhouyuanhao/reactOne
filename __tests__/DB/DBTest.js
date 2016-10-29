import DB from '../../src/DB/DB';
var db = new DB(); //global db test case order sensitive

//[]
it('db insert and find basic function', () => {
	var a = {
		a: 1
	};
	db.insert(a);
	return new Promise(function(resolve, reject) {
		return db.find(a, a, (err, data) => {
			resolve(data)
		});
	}).then(data => {
		expect(data.length).toBe(1);
		expect(data[0].a).toBe(1);
	});
});

//[{a:1}]
it('db insert and count basic function', () => {
	var a = {
		a: 1
	};
	db.insert(a);
	return new Promise(function(resolve, reject) {
		return db.count(a, (err, num) => {
			resolve(num)
		});
	}).then(data => {
		expect(data).toBe(2);
	});
});

//[{a:1},{a:1}]
it('db multi update basic function', () => {
	var a = {
		a: 1
	};
	var b = {
		a: 2
	};
	return new Promise(function(resolve, reject) {
		return db.update(a, b, {
			multi: 1
		}, (err, num) => {
			resolve(num)
		});
	}).then(data => {
		expect(data).toBe(2);
	});
});


////[{a:2},{a:2}]
it('db single update basic function', () => {
	var a = {
		a: 2
	};
	var b = {
		$set: {
			b: 1
		}
	};
	return new Promise(function(resolve, reject) {
		return db.update(a, b, {}, (err, num) => {
			resolve(num)
		});
	}).then(data => {
		expect(data).toBe(1);
	});
});

//[{a:2,b:1},{a:2}]
it('db remove basic function', () => {
	var a = {
		a: 2
	};
	return new Promise(function(resolve, reject) {
		return db.remove(a, {
			multi: 1
		}, (err, num) => {
			resolve(num)
		});
	}).then(data => {
		expect(data).toBe(2);
	});
});

//[]