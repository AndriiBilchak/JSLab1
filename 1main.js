function isInteger(num) {
    return Number.isInteger(num);
}

console.log(isInteger(1));
console.log(isInteger(1.5));
console.log(isInteger(-0.5));

function findPrimes(a, b) {
    function isPrime(n) {
        if (n < 2) return false;
        for (let i = 2; i * i <= n; i++) {
            if (n % i === 0) return false;
        }
        return true;
    }

    for (let i = a; i <= b; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}

findPrimes(10, 50);