### 代码实现
[078.SortColors](078.SortColors.js)

### 解法一
利用冒泡排序，将数字从小到大排列，得出结果。

### 解法二
因为只有三种颜色，所以可以利用一个长度为3的数组保存各颜色总数：
```js
const color = [0, 0, 0]
const index = 0
```
然后计算各颜色总数：
```js
for (let i = 0; i < nums.length; i++) {
  color[nums[i]] += 1
}
```
得到总数后，根据数组索引和各颜色的总数，依次填充每一项，直到为零，这样整个`nums`就按顺序依次排列好了。
```js
for (let i = 0; i < nums.length; i++) {
  while (color[index] === 0) {
    index++
  }
  nums[i] = index
  color[index] -= 1
}
```
