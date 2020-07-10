/** 空节点值 */
const NONE = null;

export default class Trie {
    constructor() {
        this.children = {};
        this.value = NONE;
    }

    /**
     * 向字典树插入一对值
     * 
     * @param {string} key 查询键，由字母组成
     * @param {any} value 存储值
     */
    insert(key, value) {
        let ptr = this;

        for (let i = 0, len = key.length; i < len; i++) {
            const alphabet = key[i];

            if (!(alphabet in ptr.children)) {
                ptr.children[alphabet] = new TrieNode();
            }

            ptr = ptr.children[alphabet];
        }
        ptr.value = value;
    }

    /**
     * 查询字典树
     * 
     * @param {string} key 查询键
     * @returns {any|null} 未找到时返回 `null`
     */
    find(key) {
        let ptr = this;

        for (let i = 0, len = key.length; i < len; i++) {
            const alphabet = key[i];

            if (alphabet in ptr.children) {
                ptr = ptr.children[alphabet];
            } else {
                return NONE;
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
export function TrieNode(value = NONE) {
    this.children = {};
    this.value = value;
}
