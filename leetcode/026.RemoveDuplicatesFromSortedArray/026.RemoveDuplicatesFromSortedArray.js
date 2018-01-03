function removeDuplicates(nums) {
  let i = -1

  if (nums.length > 1) {
    for (let j = 1, k = 0; j < nums.length; j++) {
      if (nums[j] !== nums[k]) {
        if (i !== -1) {
          nums[i++] = nums[j]
        }
        k++
      } else if (i === -1) {
        i = j
      }
    }
    if (i !== -1) {
      nums.splice(i)
    }
  }

  return nums.length
}

