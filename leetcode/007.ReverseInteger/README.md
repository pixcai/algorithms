### 代码实现
[007.ReverseInteger](007.ReverseInteger.js)

### 解题思路
依次取个位、十位、百位......的值，在与当前值相加前，将结果乘以十倍，达到左移的效果：
```js
let y = 0
let n = x

while (n) {
  y *= 10
  y += (n % 10)
  n = ~~(n / 10)
}
```
比如数字`123`，执行的流程如下：

- `y *= 10`，得到`y = 0`
- `y += (123 % 10)`，得到`y = 3`
- `n = ~~(123 / 10)`，得到`n = 12`
- `y *= 10`，得到`y = 30`
- `y += (12 % 10)`，得到`y = 32`
- `n = ~~(12 / 10)`，得到`n = 1`
- `y *= 10`，得到`y = 320`
- `y += (1 % 10)`，得到`y = 321`
- `n = ~~(1 / 10)`，得到`n = 0`，跳出循环

于是得到了无符号整数值，但是题目说明了结果需要是32位有符号整数，因此还需要加上符号以及判断是否溢出：
```js
if (y > 2147483647 || y < -2147483648) {
  return 0
}
```
最后返回相应的结果：`return x < 0 ? -y : y`，就得到了题目的解。
