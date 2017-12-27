### 代码实现
[002.AddTwoNumbers](002.AddTwoNumbers.js)

### 解题思路
最简单暴力的方法是遍历链表，转换成数值，然后计算、取整、取余，但是这非常麻烦，如果能直接将节点相加那是最方便的。

考虑以下情况：

- 两个空链表相加

此时情况最简单，返回结果也是空链表。所以：
```js
let result = null
```
- 一个空链表**L1**和另一个非空链表**L2**相加

结果直接等于**L2**。同理，如果**L2**为空，**L1**不为空，结果等于**L1**。所以，有：
```js
if (L1 && !L2) {
  result = L1
} else if (!L1 && L2) {
  result = L2
}
```
- 两个非空链表相加

这时需要判断两数之和是否进位，所以：
```js
let result = null

if (L1 && L2) {
  result = new ListNode(L1.val + L2.val)

  if (result.val > 9) {
    result.next = addTwoNumbers(
      new ListNode(1),
      addTwoNumbers(L1.next, L2.next)
    )
  } else {
    result.next = addTwoNumbers(L1.next, L2.next)
  }
  result.val = result.val % 10
}
```
如果节点之和大于9，则在下一次计算时将结果加1，得到一个新节点，否则，只计算下一次的节点之和。

这里没有过度关注数值，而是以节点为单位进行操作，大大简化了计算的难度，同时利用了一个小技巧：递归，减少了冗余代码，使功能得以复用。但是数据量太大的话，递归不是一个好的解决方案，容易造成栈溢出。
