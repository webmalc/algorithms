module.exports = {

    /**
     * Find maximum sum of the subarray with the given length via loop O(n^2)
     * @param {array} arr - the unordered array with integers
     * @param {int} size -length of the subarray
     * @return {int}
     */
    maxSubarraySumLoop: function (arr, size) {
        if (arr.length < size) {
            return null;
        }
        let result = 0;
        for (let i = 0; i < arr.length - size + 1; i++) {
            let tempSum = 0;
            for (let j = 0; j < size; j++) {
                tempSum += arr[j + i];
            } 
            result = tempSum > result ? tempSum : result; 
        }
        return result;
    },

    /**
     * Find maximum sum of the subarray with the given length
     * via the sliding window algorithm O(n)
     * @param {array} arr - the unordered array with integers
     * @param {int} max -length of the subarray
     * @return {int}
     */
    maxSubarraySum: function (arr, size) {
        let maxSum = 0;
        let tempSum = 0;
        if (arr.length < size) return null;
        for (let i = 0; i < size; i++) {
            maxSum += arr[i];
        }
        tempSum = maxSum;
        for (let i = size; i < arr.length; i++) {
            tempSum = tempSum - arr[i - size] + arr[i];
            maxSum = Math.max(maxSum, tempSum);
        }
        return maxSum;
    },
};
