### 代码实现
[004.FindMedianSortedArrays](004.FindMedianSortedArrays.js)

### 解法一
直接将两个数组合并然后重新排序，找到位于中间的元素，计算中值就可以了。

### 解法二
由于给定的数组已经排序过了，所以找出中值最多只需
```js
const sumLen = nums1.length + nums2.length
const targetLen = sumLen >> 1
let loop = targetLen + 1
```
此处的`loop`步，也就是比长度和的平均值多一步，即可找出中值。查找的关键是比较两个数组的值，用一个变量`y`保存当前的值，用一个变量`x`保存先前的值，以提高效率，因此：
```js
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
```
通过变量`y`把当前较小的值保存下来，直到遇到中间的那一个值为止，于是结果就能算出来了。
