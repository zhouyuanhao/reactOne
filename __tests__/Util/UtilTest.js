import Util from '../../src/Util/Util';


it('should remove null property in json correctly', () => {
	var ori = {
		a: null,
		b: 1,
		c: {
			a: 'a',
			b: null,
			c: undefined
		}
	};
	var exp = JSON.stringify({
		b: 1,
		c: {
			a: 'a'
		}
	});
	expect(JSON.stringify(Util.jsonRemoveNull(ori))).toBe(exp);
});

it('should convert / into root', () => {
	expect(Util.path2key("/")).toBe("root");
});

it('should convert /path/file into path_file', () => {
	expect(Util.path2key("/path/file")).toBe("path_file");
});