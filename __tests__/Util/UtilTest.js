import Util from '../../src/Util/Util';

it('renders correctly', () => {
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