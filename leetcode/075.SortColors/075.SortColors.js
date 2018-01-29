// 解法一
function sortColors(nums) {
  for (let i = 0, N = nums.length; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      nums[i] ^= nums[j]
      nums[j] ^= nums[i]
      nums[i] ^= nums[j]
    }
  }
}

// 解法二
function sortColors(nums) {
  const color = [0, 0, 0]
  const index = 0

  for (let i = 0; i < nums.length; i++) {
    color[nums[i]] += 1
  }
  for (let i = 0; i < nums.length; i++) {
    while (color[index] === 0) {
      index++
    }
    nums[i] = index
    color[index] -= 1
  }
}

