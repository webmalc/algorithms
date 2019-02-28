module.exports = {

    /**
     * Bubble sort O(n^2)
     * @param {array} arr - array for sorting
     * @return {array} sorted array
     */
    bubbleSort: function(arr) {
        let swap = false;
        for (let i = arr.length; i > 0; i--) {
            swap = false;
            for (let j = 0; j < i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
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
    selectionSort: function(arr) {
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
    insertionSort: function(arr) {
        let current;
        for (var i = 1; i < arr.length; i++) {
            current = arr[i];
            for (var j = i - 1; j >= 0 && arr[j] > current; j--) {
                arr[j + 1] = arr[j];
            }
            arr[j + 1] = current;
        }
        return arr;
    },

    /**
     * Insertion sort V2 O(n^2)
     * @param {array} arr - array for sorting
     * @return {array} sorted array
     */
    insertionSortV2: function(arr) {
        let current;
        for (var i = 1; i < arr.length; i++) {
            current = arr[i];
            let j = i - 1;
            while (j >= 0 && current < arr[j]) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = current;
        }
        return arr;
    },

    /**
     * Merge arrays O(n)
     * @param {array} first - first sorted array 
     * @param {array} second - second sorted array
     * @return {array} sorted array
     */
    mergeArrays: function(first, second) {
        let results = [];
        let i = 0;
        let j = 0;
        while (i < first.length && j < second.length) {
            if (second[j] > first[i]) {
                results.push(first[i]);
                i++;
            } else {
                results.push(second[j]);
                j++;
            }
        }
        while (i < first.length) {
            results.push(first[i]);
            i++;
        }
        while (j < second.length) {
            results.push(second[j]);
            j++;
        }
        return results;
    },

    /**
     * Merge sort O(nlogn)
     * @param {array} arr - array for sorting
     * @return {array} sorted array
     */
    mergeSort: function(arr) {
        if (arr.length <= 1) {
            return arr;
        }
        let middle = Math.floor(arr.length / 2);
        let left = module.exports.mergeSort(arr.slice(0, middle));
        let right = module.exports.mergeSort(arr.slice(middle));

        return module.exports.mergeArrays(left, right);
    },


    /**
     * Reorder array around the pivot element O(n)
     * @param {array} arr - array for reordering
     * @param {int} start - the start index
     * @param {int} end - the end index 
     * @return {int} index of the pivot element
     */
    reoderPivotArray: function(arr, start = 0, end = arr.length) {
        const swap = (arr, idx1, idx2) => {
            [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
        };
        let pivot = arr[start];
        let swapIndex = start;

        for (let i = start + 1; i <= end; i++) {
            if (pivot > arr[i]) {
                swapIndex++;
                swap(arr, swapIndex, i);
            }
        }
        swap(arr, start, swapIndex);

        return swapIndex;
    },

    /**
     * Quick sort O(nlogn)
     * @param {array} arr - array for sorting
     * @return {array} sorted array
     */
    quickSort: function(arr, left = 0, right = arr.length - 1) {
        if (left < right) {
            let pivotIndex = module.exports.reoderPivotArray(arr, left, right);
            module.exports.quickSort(arr, left, pivotIndex - 1);
            module.exports.quickSort(arr, pivotIndex + 1, right);
        }
        return arr;
    },

    /**
     * Get the digit by its position (ex. 1235, 1 = 3) 
     * @param {int} num - number to search
     * @param {int} i - position of digit
     * @return {int} digit on position i
     */
    getDigit: function(num, i) {
        return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
    },

    /**
     * Get the number of digits in the number (ex. 1233 - 4)
     * @param {int} num - number to count
     * @return {int} number of digit
     */
    digitCount: function(num) {
        if (num === 0) {
            return 1;
        }
        return Math.floor(Math.log10(Math.abs(num))) + 1;
    },

    /**
     * Find the length of the longest number in the array
     * @param {array} nums - array of nums
     * @return {int} length
     */
    mostDigits: function(nums) {
        let maxDigits = 0;
        let m = module.exports;
        for (let i = 0; i < nums.length; i++) {
            maxDigits = Math.max(maxDigits, m.digitCount(nums[i]));
        }
        return maxDigits;
    },

    /**
     * Radix sort O(nk)
     * @param {array} nums - array of numbers for sorting
     * @return {array} sorted array
     */
    radixSort: function(nums) {
        let m = module.exports;
        let maxDigitCount = m.mostDigits(nums);
        for (let k = 0; k < maxDigitCount; k++) {
            let storage = Array.from({
                length: 10
            }, () => []);
            for (let i = 0; i < nums.length; i++) {
                let digit = m.getDigit(nums[i], k);
                storage[digit].push(nums[i]);
            }
            nums = [].concat(...storage);
        }
        return nums;
    },

};