function countPrimeNumbers() {
	for (let i = 2; i <= 100; i++) {
		var prime = true;
		for (let j = 2; j < i; j++) {
			if (i % j == 0) {
				prime = false;
			}
		}
		if (prime == true) {
			console.log(i);
		}
	}
}

const t0 = performance.now();
countPrimeNumbers();
const t1 = performance.now();
console.log(`Execution time of printing countPrimeNumbers was ${t1 - t0} milliseconds.`);
