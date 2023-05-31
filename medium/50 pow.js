function myPow(x, n) {
  if (n === 0) {
    return 1;
  }
  if (n < 0) {
    n = -n;
    x = 1 / x;
  }
  return (n % 2 === 0) ? myPow(x * x, n / 2) : x * myPow(x * x, (n - 1) / 2);
}

console.log(myPow(2, 10)) // 1024.00000
console.log(myPow(2.1, 3)) // 9.26100
console.log(myPow(2, -2)) // 0.25000
