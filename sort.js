module.exports = {

    /**
     * Bubble sort O(n^2)
     * @param {array} arr - array for sorting
     * @return {array} sorted array
     */
    bubbleSort: function (arr) {
        let swap = false;
        for (let i = arr.length; i > 0; i--) {
            swap = false;
            for (let j = 0; j < i - 1; j++) {
                if (arr[j] > arr[j+1]) {
                    [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                    swap = true;
                }
            }
            if (!swap) {
                break;
            }
        }
        return arr;
    }
};
