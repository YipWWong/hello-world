const chai = require('chai');
const assert = chai.assert;
const fn = require('./index.js');

describe('Test function sum of two numbers', () => {
	it('fn is a function', () => {
		assert.isFunction(fn, 'fn is a function');
	});

	it('Return value is a number', () => {
		assert.isNumber(fn(12, 20), 'is a number');
	});

	it('Correct value returned', () => {
		assert.strictEqual(
			fn(12, 20),
			32,
			'Input & Output needs to be strictly equal.'
		);
	});

	it('Wrong value returned', () => {
		assert.notStrictEqual(
			fn(12, 20),
			33,
			'Input & Output is not strictly equal.'
		);
	});

	it('Input values other than numbers', () => {
		assert.throws(
			() => {
				fn('seven', 'eight');
			},
			Error,
			'Input must be a number and is finite.'
		);
		assert.throws(
			() => {
				fn([ 2 ], [ 3 ]);
			},
			Error,
			'Input must be a number and is finite.'
		);
	});

	it("Falsy value except number '0'", () => {
		assert.throws(
			() => {
				fn(null, null);
			},
			Error,
			'Input value must be truthy.'
		);
		assert.throws(
			() => {
				fn(undefined, undefined);
			},
			Error,
			'Input value must be truthy.'
		);
		assert.throws(
			() => {
				fn(false, false);
			},
			Error,
			'Input value must be truthy.'
		);
		assert.throws(
			() => {
				fn(NaN, NaN);
			},
			Error,
			'Input value must be truthy.'
		);
		assert.throws(
			() => {
				fn(NaN, 16);
			},
			Error,
			'Input value must be truthy.'
		);
		assert.isNumber(fn(16, 0), 'Function accepts 0 as input');
	});

	it('Floating point calculation', () => {
		assert.strictEqual(
			fn(2.2, 3.1),
			parseFloat('5.3'),
			'Result should strictly equal'
		);
	});
});

/* Test function sum of two numbers
    √ fn is a function
    √ Return value is a number
    √ Correct value returned
    √ Wrong value returned
    √ Input values other than numbers
    √ Falsy value except number '0'
    √ Floating point calculation


  7 passing (31ms) */
