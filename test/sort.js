const assert = require('assert');
let sort = require('../sort');
let utils = require('./utils');

describe('search', function() {


    let sortNative = function(arr) {
        return [...arr].sort((a, b) => a - b);
    };

    let doTest = function(func) {
        let large = Array.from(
            {length: 10000}, () => Math.floor(Math.random() * 10000)
        );
        let largeSorted = sortNative(large);
        assert.deepEqual(func([10, 23, 3, 4, 5]), [3, 4, 5, 10, 23]);
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

    it('compare performance', function() {
        let duration = utils.getDuration;
        let timeBubble = duration(doTest, sort.bubbleSort);
        let timeSelection = duration(doTest, sort.selectionSort);
        let timeInsertion = duration(doTest, sort.insertionSort);
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
            timeNative < timeInsertion,
            true,
            'the native sort is the fastest',
        );
    });

});
