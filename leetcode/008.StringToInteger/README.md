### 代码实现
[008.StringToInteger](008.StringToInteger.js)

### 解法一
偷懒的做法，利用`JavaScript`内置函数`parseInt`将字符串解析为整数，然后判断是否溢出即可。

### 解法二
首先得到字符和数字之间的映射关系：
```js
const mappings = new Map()

for (let i = 48; i < 58; i++) {
  mappings.set(String.fromCharCode(i), i - 48)
}
```
将字符`'0'`到`'9'`映射为数字`0`到`9`。然后判断字符串是否以`+`、`-`或数字开头，不是的话说明不是纯数字，就不解析，如果是的话，依次遍历每个字符，从`mappings`中找到对应的整数，然后加到结果上，直到遇到非数字为止，最后判断符号和溢出就行了。
