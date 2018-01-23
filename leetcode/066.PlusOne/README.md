### 代码实现
[066.PlusOne](066.PlusOne.js)

### 解题思路
首先，设置一个标志`done`表示当前数字是否已经计算过，如果没有计算过，则计算一次，如果已经计算过，则直接放入结果中，所以：
```js
for (let i = digits.length - 1, done = false; i >= 0; i--) {
  if (!done) {

  } else {
    result.unshift(digits[i])
  }
}
```
在计算时，判断计算后的数字是否小于10，如果小于10，直接把计算后的数字放入结果中，并且设置`done = true`表示完成了此次计算，如果大于等于10，则取余，但是不设置`done`，因为当前数字进位了，下一个数字必须进行计算。因此：
```js
if (!done) {
  if (++digits[i] < 10) {
    done = true
    result.unshift(digits[i])
  } else {
    result.unshift(digits[i] % 10)
    if (i === 0) {
      result.unshift(1)
    }
  }
}
```
