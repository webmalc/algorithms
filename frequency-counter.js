module.exports = {

    /**
     * Compare anagrams O(n^2)
     * @param {string} firstStr - The first anagram
     * @param {string} secondStr - The second anagram
     * @return {boolean}
     */
    validAnagramLoop: function (firstStr, secondStr) {
        if(firstStr.length !== secondStr.length){
            return false;
        }
        for (let char of firstStr) {
            let index = secondStr.indexOf(char);
            if(index === -1) {
                return false;
            }
            secondStr = secondStr.substr(0, index) + secondStr.substr(index + 1);
        }
        return true;
    },

    /**
     * Compare anagrams as arrays O(nlogn)
     * @param {string} firstStr - The first anagram
     * @param {string} secondStr - The second anagram
     * @return {boolean}
     */
    validAnagramAsArrays: function (firstStr, secondStr) {
        if(firstStr.length !== secondStr.length){
            return false;
        }
        let firstArray = firstStr.split('').sort();
        let secondArray = secondStr.split('').sort();

        return JSON.stringify(firstArray)==JSON.stringify(secondArray);
    },

    /**
     * Compare anagrams O(n)
     * @param {string} firstStr - The first anagram
     * @param {string} secondStr - The second anagram
     * @return {boolean}
     */
    validAnagram: function (firstStr, secondStr) {
        if(firstStr.length !== secondStr.length){
            return false;
        }
        let counter = function(str) {
            let result = {};
            for (let char of str) {
                result[char] = (result[char] || 0) + 1;
            }
            return result;
        };
        let firstCounter = counter(firstStr);
        let secondCounter = counter(secondStr);

        for (let key in firstCounter) {
            if (firstCounter[key] != secondCounter[key]) {
                return false;
            }
        }
        return true;
    },

    /**
     * Compare anagrams O(n) v2
     * @param {string} firstStr - The first anagram
     * @param {string} secondStr - The second anagram
     * @return {boolean}
     */
    validAnagramV2: function (firstStr, secondStr) {
        if(firstStr.length !== secondStr.length){
            return false;
        }
        let lookup = {};
        for (let char of firstStr) {
            lookup[char] = (lookup[char] || 0) + 1;
        }

        for (let char of secondStr) {
            if (!lookup[char]) {
                return false;
            } else {
                lookup[char]--;
            }
        }
        return true;
    },
};
