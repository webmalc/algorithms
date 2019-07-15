class HashTable {

    /**
     * the constructor O(1)
     * @param {int} key - the size of the hash table
     */
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }


    /**
     * Transform a string to a hash O(1)
     * @param {string} key - the sting to convert
     * @return {int} the result hash
     */
    _hash(key) {
        let total = 0;
        let PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * PRIME + value) % this.keyMap.length;
        }
        return total;
    }


    /**
     * Add a value to the hash table O(1)
     * @param {string} key - the key
     * @param {*} value - the value to add
     */
    set(key, value) {
        let index = this._hash(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }

    /**
     * Retrieve the value by the key from the hash table O(1)
     * @param {string} key - the key
     * @return {*} the result value
     */
    get(key) {
        let index = this._hash(key);
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1];
                }
            }
        }
        return undefined;
    }

    /**
     * Get all keys from the hash table O(n)
     * @return {Array} the keys array
     */
    keys() {
        let keysArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!keysArr.includes(this.keyMap[i][j][0])) {
                        keysArr.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }
        return keysArr;
    }

    /**
     * Get all values from the hash table O(n)
     * @return {Array} the values array
     */
    values() {
        let valuesArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!valuesArr.includes(this.keyMap[i][j][1])) {
                        valuesArr.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }
        return valuesArr;
    }
}

module.exports = HashTable;