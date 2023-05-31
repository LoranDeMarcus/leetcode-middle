function subsets(nums) {
  const res = []

  function backtrack(start, curr) {
    res.push([...curr])

    for (let i = start; i < nums.length; i++) {
      curr.push(nums[i])
      backtrack(i + 1, curr)
      curr.pop()
    }
  }

  backtrack(0, [])
  return res
}

console.log(subsets([1, 2, 3])) // [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
console.log(subsets([0])) // [[],[0]]
