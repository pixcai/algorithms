### 代码实现
[083.RemoveDuplicatesFromSortedList](083.RemoveDuplicatesFromSortedList.js)

### 解题思路
因为链表已经排序过了，只有相邻节点的值才会相同，所以只要挨个比较相邻的节点，如果两个节点的值相同，就把后一个节点从链表中移除，剩下当前这个就可以了。
