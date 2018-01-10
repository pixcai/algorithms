// 解法一
function searchInsert1(nums, target) {
  return nums.concat(target).sort((a, b) => a - b).indexOf(target)
}

// 解法二
function searchInsert2(nums, target) {
  const N = nums.length

  if (!N || target <= nums[0]) {
    return 0
  } else if (target > nums[N - 1]) {
    return N
  } else {
    for (let i = 0; i < N - 1; i++) {
      if (nums[i] < target && target <= nums[i + 1]) {
        return i + 1
      }
    }
  }
}
