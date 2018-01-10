### 代码实现
[035.SearchInsertPosition](035.SearchInsertPosition.js)

### 解法一
将目标数放入数组，然后对数组进行排序，找到目标数所在的索引返回即可。

### 解法二
考虑三种情况：

- 目标数比数组第一个数还小
- 目标数比数组最后一个数还大
- 目标数处于数组中间

对于第一和第二种情况，直接判断即可：
```js
const N = nums.length

if (!N || target <= nums[0]) {
  return 0
} else if (target > nums[N - 1]) {
  return N
}
```
如果目标数处于数组中间，那么依次判断它处于哪两个相邻的数之间，就可以得到它所在的位置：
```js
for (let i = 0; i < N - 1; i++) {
  if (nums[i] < target && target <= nums[i + 1]) {
    return i + 1
  }
}
```
