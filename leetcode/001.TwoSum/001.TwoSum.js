// 解法一
function twoSum1(nums, target) {
  for (let i = 0, N = nums.length; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
}

// 解法二
function twoSum2(nums, target) {
  for (let i = 0, N = nums.length; i < N; i++) {
    const j = nums.indexOf(target - nums[i]);

    if (j !== -1) {
      return [i, j]
    }
  }
}

// 解法三
function twoSum3(nums, target) {
  const hash = new Map()

  nums.forEach((num, key) => hash.set(num, key))

  for (let i = 0, N = nums.length; i < N; i++) {
    const value = target - nums[i]
    const j = hash.get(value)

    if (hash.has(value) && j !== i) {
      return [i, j]
    }
  }
}

