function aVeryBigSum(ar) {
	let sum = 0;

	for ( let index = 0; index < ar.length; index += 1 ) {
		sum += ar[index];
	}

	return sum;
}

console.log(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]));
console.log(aVeryBigSum([10, 20, 30, 40, 50]));
