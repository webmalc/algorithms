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
    },

    /**
     * Binary search O(logn)
     * @param {array} arr - sorted array for search
     * @param {*} val - value to search
     * @return {int} index of element (-1 if not found)
     */
    binarySearch: function (arr, val) {
        var start = 0;
        var end = arr.length - 1;
        var middle = Math.floor(start / 2);
        while(arr[middle] !== val && start <= end) {
            if(val < arr[middle]) {
                end = middle - 1; 
            }
            else {
                start = middle + 1;
            }
            middle = Math.floor((start + end) / 2);
        }
        return arr[middle] === val ? middle : -1;
    }
};
