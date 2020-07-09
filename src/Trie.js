class Trie {
    constructor() {
        this.children = {};
        this.value = '';
    }

    /**
     * 向字典树插入单词
     * 
     * @param {string} word 单词
     */
    insert(word) {
        let ptr = this;
        let value = '';

        for (let i = 0, len = word.length; i < len; i++) {
            const alphabet = word[i];
            value += alphabet;

            if (!(alphabet in ptr.children)) {
                ptr.children[alphabet] = new TrieNode(value);
            }

            ptr = ptr.children[alphabet];
        }
    }

    /**
     * 查询字典树
     * 
     * @param {string} word 待查找单词
     * @returns {string|null} 未找到时返回 `null`
     */
    find(word) {
        let ptr = this;

        for (let i = 0, len = word.length; i < len; i++) {
            const alphabet = word[i];

            if (alphabet in ptr.children) {
                ptr = ptr.children[alphabet];
            } else {
                return null;
            }
        }

        return ptr.value;
    }
}

/**
 * 字典树节点
 * 
 * @param {string} value 节点值
 */
export function TrieNode(value) {
    this.children = {};
    this.value = value;
}

export default Trie;
