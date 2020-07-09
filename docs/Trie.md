# Trie 字典树

一种快速搜索的树状结构。一般是由字母组成叶节点，延伸到底形成完整的单词。又叫前缀树，类似字典一样按顺序从开头查起。

![images/Trie_example.svg](/images/Trie_example.svg)

+ 时间复杂度：O(m)，m 为查询字符串长度
+ 空间复杂度：？

## 使用

```javascript
// 初始化
const root = new Trie();

// 插入单词
root.insert('abc');
// 查询单词
root.find('abc');
// return 'abc' || null
```

## 参考链接

+ [Trie - Wikipedia](https://en.wikipedia.org/wiki/Trie)
