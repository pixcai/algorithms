### 代码实现
[058.LengthOfLastWord](058.LengthOfLastWord.js)

### 解题思路
由于题目明确给出了字符串是以空格分隔的，所以可以直接用`JavaScript`中字符串自带的方法`split`进行切分，然后弹出数组中最后一个单词取长度即可。唯一需要注意的是句子前后可能有空格，所以`split`之前要`trim`一次。
