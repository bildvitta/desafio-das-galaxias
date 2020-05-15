function isPrime(num) {
  for (var i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
}

function primeNumbers(num) {
  const result = [];
  // Checking n numbers
  for (let n = 1; n <= num; n++) if (isPrime(n)) result.push(n);

  return result;
}
