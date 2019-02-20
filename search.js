module.exports = {

    /**
     * Linear search O(n)
     * @param {array} arr - array for search in
     * @param {*} val - value to search
     * @return {int} index of element (-1 if not found)
     */
    linearSearch: function (arr, val) {
        for (let i=0; i < arr.length; i++ ) {
            if (arr[i] === val) {
                return i;
            }
        }
        return -1;
    }
};
