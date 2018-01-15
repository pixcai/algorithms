### 代码实现
[100.SameTree](100.SameTree.js)

### 解题思路
如果两棵树的相同位置都有节点，则判断节点的值是否相等，如果相等，则继续判断左右节点的值是否也相等：
```js
if (p && q) {
  return (p.val === q.val) && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}
```
如果条件不成立，那么只有当它们都为空的时候才相等：
```js
return (p === null) && (q === null)
```
