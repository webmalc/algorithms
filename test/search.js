const assert = require('assert');
let search = require('../search');
let utils = require('./utils');

describe('search', function() {

    let longTest = function(func) {
        const max = 100000;
        const arr = Array.apply(null, {length: max}).map(Number.call, Number);
        assert.equal(func(arr, 50000), 50000, 'long array');
    }; 

    it('test linear search', function() {
        let func = search.linearSearch;
        assert.equal(func([10, 23, 3, 4, 5], 23), 1);
        assert.equal(func([10, 23], 33), -1);
        assert.equal(func([100], 33), -1);
        longTest(func);
        
    });

    it('test binary search', function() {
        let func = search.binarySearch;
        assert.equal(func([1, 2, 3, 4, 5], 3), 2);
        assert.equal(func([1, 2, 3, 4, 5], 0), -1);
        assert.equal(func([1, 2, 3, 4, 5, 6], 5), 4);
        assert.equal(func([1, 2, 3, 4, 5, 6], 1), 0);
        assert.equal(func([], -1), -1);
        longTest(func);
    });
});
