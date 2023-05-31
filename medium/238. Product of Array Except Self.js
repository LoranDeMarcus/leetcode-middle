function productExceptSelf(nums) {
  const n = nums.length;
  const output = new Array(n);

  let product = 1;
  for (let i = 0; i < n; i++) {
    output[i] = product;
    product *= nums[i];
  }

  product = 1;
  for (let i = n - 1; i >= 0; i--) {
    output[i] *= product;
    product *= nums[i];
  }

  return output;
}

console.log(productExceptSelf([1,2,3,4])) // [24,12,8,6]
console.log(productExceptSelf([-1,1,0,-3,3])) // [0,0,9,0,0]
