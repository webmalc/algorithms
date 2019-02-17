module.exports = {

    /**
     * Count unique values in the ordered array via loop O(n^2)
     * @param {array} source - the ordered array with integers
     * @return {int} number of unique values in the array
     */
    countUniqueValuesLoop: function (source) {
        let result = [];
        for (let val of source) {
            if (result.indexOf(val) === -1) {
                result.push(val);
            }
        }
        return result.length;
    },

    /**
     * Count unique values in the ordered array via pointers O(n)
     * @param {array} source - the ordered array with integers
     * @return {int} number of unique values in the array
     */
    countUniqueValues: function (source) {
        if (!source.length) {
            return 0; 
        }
        let i = 0;
        let result = 1;
        while (i < source.length - 1) {
            if (source[i+1] != source[i]) {
                result++; 
            } 
            i++;
        }
        return result;
    },

    /**
     * Count unique values in the ordered array via pointers O(n) v2
     * @param {array} source - the ordered array with integers
     * @return {int} number of unique values in the array
     */
    countUniqueValuesV2: function (source) {
        if (source.length === 0) {
            return 0;
        } 
        var i = 0;
        for (let j = 1; j < source.length; j++) {
            if (source[i] !== source[j]) {
                i++;
                source[i] = source[j];
            }
        }
        return i + 1;
    },

    /**
     * Count unique values in the ordered array via Set O(n)
     * @param {array} source - the ordered array with integers
     * @return {int} number of unique values in the array
     */
    countUniqueValuesSet: function (source) {
        let set = new Set(source); 
        return set.size;
    },
};
