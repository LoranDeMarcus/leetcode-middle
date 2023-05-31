function topKFrequent(nums, k) {
  const frequencyMap = {}

  for (let num of nums) {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1
  }

  const frequencyArray = Object.entries(frequencyMap)

  frequencyArray.sort((a, b) => b[1] - a[1])

  const topKElements = frequencyArray.slice(0, k)

  return topKElements.map(entry => Number(entry[0]))
}

const nums = [1, 1, 1, 2, 2, 3]
const k = 2
const result = topKFrequent(nums, k)
console.log(result) // [1, 2]
