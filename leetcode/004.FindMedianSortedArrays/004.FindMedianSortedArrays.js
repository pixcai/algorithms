// 解法一
function findMedianSortedArrays1(nums1, nums2) {
  const sumLen = nums1.length + nums2.length
  const targetLen = sumLen >> 1
  const nums = nums1.concat(nums2).sort((a, b) => a - b)

  return targetLen << 1 === sumLen ? (nums[targetLen - 1] + nums[targetLen]) / 2 : nums[targetLen]
}

// 解法二
function findMedianSortedArrays2(nums1, nums2) {
  const sumLen = nums1.length + nums2.length
  const targetLen = sumLen >> 1
  let loop = targetLen + 1
  let i = 0
  let j = 0
  let x, y

  while (loop--) {
    x = y
    if (nums1[i] === undefined) {
      y = nums2[j++]
    } else if (nums2[j] === undefined) {
      y = nums1[i++]
    } else if (nums1[i] < nums2[j]) {
      y = nums1[i++]
    } else {
      y = nums2[j++]
    }
  }

  return targetLen << 1 === sumLen ? (x + y) / 2 : y
}

