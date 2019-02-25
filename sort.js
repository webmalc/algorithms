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
    },

    /**
     * Selection sort O(n^2)
     * @param {array} arr - array for sorting
     * @return {array} sorted array
     */
    selectionSort: function (arr) {
        for (let i = 0; i < arr.length; i++) {
            let min = i;
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[min] > arr[j]) {
                    min = j;
                }
            }
            if (i !== min) {
                [arr[i], arr[min]] = [arr[min], arr[i]];
            } 
        }

        return arr;
    },

    /**
     * Insertion sort O(n^2)
     * @param {array} arr - array for sorting
     * @return {array} sorted array
     */
    insertionSort: function (arr) {
        let current;
        for(var i = 1; i < arr.length; i++){
            current = arr[i];
            for(var j = i - 1; j >= 0 && arr[j] > current; j--) {
                arr[j+1] = arr[j];
            }
            arr[j+1] = current;
        }
        return arr;
    },

    /**
     * Insertion sort V2 O(n^2)
     * @param {array} arr - array for sorting
     * @return {array} sorted array
     */
    insertionSortV2: function (arr) {
        let current;
        for(var i = 1; i < arr.length; i++){
            current = arr[i];
            let j = i - 1;
            while (j >=0 && current < arr[j]) {
                arr[j+1] = arr[j];
                j--;
            }
            arr[j+1] = current;
        }
        return arr;
    },
};
