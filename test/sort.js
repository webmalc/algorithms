const assert = require('assert');
let sort = require('../sort');
let utils = require('./utils');

describe('sort', function() {


    let sortNative = function(arr) {
        return [...arr].sort((a, b) => a - b);
    };

    let doTest = function(func) {
        let large = Array.from({
            length: 10000
        }, () => Math.floor(Math.random() * 10000));
        let largeSorted = sortNative(large);
        assert.deepEqual(func([23, 10, 3, 4, 5]), [3, 4, 5, 10, 23]);
        assert.deepEqual(func([10, 23]), [10, 23]);
        assert.deepEqual(func([100]), [100]);
        assert.deepEqual(func([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]);
        assert.deepEqual(func([]), []);
        assert.notDeepEqual(large, largeSorted);
        assert.deepEqual(func(large), largeSorted);
    };

    it('test bubble sort', function() {
        doTest(sort.bubbleSort);
    });

    it('test selection sort', function() {
        doTest(sort.selectionSort);
    });

    it('test insertion sort', function() {
        doTest(sort.insertionSort);
    });

    it('test insertion sort V2', function() {
        doTest(sort.insertionSortV2);
    });

    it('test merge arrays', function() {
        const func = sort.mergeArrays;
        assert.deepEqual(
            func([1, 10, 50], [2, 14, 99, 100]),
            [1, 2, 10, 14, 50, 99, 100]
        );
        assert.deepEqual(func([1], [2]), [1, 2]);
        assert.deepEqual(func([], [2]), [2]);
        assert.deepEqual(func([], []), []);
    });

    it('test merge sort', function() {
        doTest(sort.mergeSort);
    });

    it('test pivot', function() {
        const func = sort.reoderPivotArray;

        let arr = [4, 8, 2, 1, 5, 7, 6, 3];
        assert.deepEqual(func(arr, 0), 3);
        assert.deepEqual(arr, [3, 2, 1, 4, 5, 7, 6, 8]);
    });

    it('test quick sort', function() {
        doTest(sort.quickSort);
    });

    it('test getDigit', function() {
        const func = sort.getDigit;

        assert.equal(func(12345, 0), 5);
        assert.equal(func(12345, 1), 4);
        assert.equal(func(12345, 2), 3);
    });

    it('test digitCount', function() {
        const func = sort.digitCount;

        assert.equal(func(12345), 5);
        assert.equal(func(123), 3);
        assert.equal(func(1234566), 7);
    });

    it('test mostDigits', function() {
        const func = sort.mostDigits;

        assert.equal(func([1, 21, 222, 1]), 3);
        assert.equal(func([1, 213232, 222, 1]), 6);
    });

    it('test radix sort', function() {
        doTest(sort.radixSort);
    });

    it('compare performance', function() {
        let duration = utils.getDuration;
        let timeBubble = duration(doTest, sort.bubbleSort);
        let timeSelection = duration(doTest, sort.selectionSort);
        let timeInsertion = duration(doTest, sort.insertionSort);
        let timeMerge = duration(doTest, sort.mergeSort);
        let timeQuick = duration(doTest, sort.quickSort);
        let timeRadix = duration(doTest, sort.radixSort);
        let timeNative = duration(doTest, sortNative);
        assert.equal(
            timeSelection < timeBubble,
            true,
            'the selection sort version is faster than the bubble sort version',
        );
        assert.equal(
            timeInsertion < timeSelection,
            true,
            'the insertion sort version is faster than the selection sort version',
        );
        assert.equal(
            timeQuick < timeInsertion,
            true,
            'the quick sort version is faster than the insertion sort version',
        );
        assert.equal(
            timeRadix < timeQuick,
            true,
            'the radix sort version is faster than the quick sort version',
        );
        assert.equal(
            timeMerge < timeQuick,
            true,
            'the merge sort version is faster than the quick sort version',
        );
        assert.equal(
            timeNative < timeMerge,
            true,
            'the native sort is the fastest',
        );
    });
});