module.exports = {

    validAnagramSlow: function (firstStr, secondStr) {
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
     * Compare anagrams
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
};
