const assert = require('assert');
let sort = require('../sort');
// let utils = require('./utils');

describe('search', function() {

    let doTest = function(func) {
        assert.deepEqual(func([10, 23, 3, 4, 5]), [3, 4, 5, 10, 23]);
        // assert.deepEqual(func([10, 23]), [10, 23]);
        // assert.deepEqual(func([100]), [100]);
        // assert.deepEqual(func([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]);
        // assert.deepEqual(func([]), []);
    }; 

    it('test bubble sort', function() {
        doTest(sort.bubbleSort);
    });

    it('test insertion sort', function() {
        doTest(sort.insertionSort);
    });

    it('test insertion sort V2', function() {
        doTest(sort.insertionSortV2);
    });
});
