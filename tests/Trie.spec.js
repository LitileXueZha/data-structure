/**
 * 断言文档：https://github.com/avajs/ava/blob/HEAD/docs/03-assertions.md
 * 调试测试文件：https://github.com/avajs/ava/blob/HEAD/docs/recipes/debugging-with-vscode.md
 */
const ava = require('ava');

// const Trie = require('../src/Trie.js').default;
const { default: Trie, TrieNode } = require('../src/Trie.js');

ava('Trie_字典树是否正常初始化', (t) => {
    t.notThrows(() => new Trie());
    t.notThrows(() => new Trie(11));
    t.notThrows(() => new Trie({}));
});

const WORDS = ['to', 'A', 'tea', 'ted', 'inn', 'ten'];
ava('Trie_字典树是否正常插入', (t) => {
    const root = new Trie();

    WORDS.forEach((w) => {
        t.notThrows(() => root.insert(w));
    });

    const expectTrie = {
        value: '',
        children: {
            A: new TrieNode('A'),
            t: {
                value: 't',
                children: {
                    o: new TrieNode('to'),
                    e: {
                        value: 'te',
                        children: {
                            a: new TrieNode('tea'),
                            d: new TrieNode('ted'),
                            n: new TrieNode('ten'),
                        },
                    },
                },
            },
            i: {
                value: 'i',
                children: {
                    n: {
                        value: 'in',
                        children: {
                            n: new TrieNode('inn'),
                        },
                    },
                },
            },
        },
    };
    Object.setPrototypeOf(expectTrie, Trie.prototype);
    Object.setPrototypeOf(expectTrie.children.t, TrieNode.prototype);
    Object.setPrototypeOf(expectTrie.children.i, TrieNode.prototype);
    Object.setPrototypeOf(expectTrie.children.t.children.e, TrieNode.prototype);
    Object.setPrototypeOf(expectTrie.children.i.children.n, TrieNode.prototype);

    t.deepEqual(root, expectTrie);
});
ava('Trie_字典树是否准确查询', (t) => {
    const root = new Trie();
    const results = {
        to: 'to',
        tea: 'tea',
        A: 'A',
        inn: 'inn',
    };
    const noResults = {
        ta: null,
        a: null,
        innn: null,
    };

    WORDS.forEach((w) => root.insert(w));
    // 正确查询
    Object.keys(results).forEach((key) => {
        t.is(root.find(key), results[key]);
    });
    // 找不到
    Object.keys(noResults).forEach((key) => {
        t.is(root.find(key), noResults[key]);
    });
});
