### 代码实现
[744.FindSmallestLetterGreaterThanTarget](744.FindSmallestLetterGreaterThanTarget.js)

### 解题思路
首先，按照题目要求，如果目标数比第一个数要小或者大于等于最后一个数，则结果等于第一个数，因此：
```js
const N = letters.length - 1

if (target < letters[0] || target >= letters[N]) {
  return letters[0]
}
```
由于数组是已排序的，如果不符合上述情况，则从两头开始往中间收缩，高效率找到符合要求的数：
```js
for (let i = 1, j = N - 1; i <= j; i--, j++) {
  if (target < letters[i]) {
    return letters[i]
  }
  if (target >= letters[j]) {
    return letters[j + 1]
  }
}
```
