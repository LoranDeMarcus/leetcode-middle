function reverse(x) {
  let result = parseInt(x.toString().split('').reverse().join('').toString())

  if (result > Math.pow(2, 31)) {
    return 0
  } else {
    return result * Math.sign(x)
  }
}

console.log(reverse(123)) // 321
console.log(reverse(-123)) // -321
console.log(reverse(120))  // 21
console.log(reverse(2147483647)) // 0, bigger than 2^31 - 1
