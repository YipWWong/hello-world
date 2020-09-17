//function to sum two number and return result

const Sum = (a, b) => {
	//remove falsy value except '0'
	if ((!a && a !== 0) || (!b && b !== 0)) {
		throw new Error('Input value must be truthy.');
	} else {
		//check number and finite
		if (
			typeof a === 'number' &&
			typeof b === 'number' &&
			Number.isFinite(a) &&
			Number.isFinite(b)
		) {
			//floating point
			if (
				a.toString().indexOf('.') !== -1 &&
				b.toString().indexOf('.') !== -1
			) {
				let decIdx;
				let aDecIdx =
					a.toString().length - 1 - a.toString().indexOf('.');
				let bDecIdx =
					b.toString().length - 1 - b.toString().indexOf('.');
				aDecIdx >= bDecIdx
					? (decIdx = a.toString().indexOf('.'))
					: (decIdx = b.toString().indexOf('.'));

				return parseFloat((a + b).toFixed(decIdx));
			} else {
				return a + b;
			}
		} else {
			throw new Error('Input must be a number and is finite.');
		}
	}
};

module.exports = Sum;

Sum(2.2, 3.1);
