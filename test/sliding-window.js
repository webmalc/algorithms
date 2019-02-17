const assert = require('assert');
let slidingWindow = require('../sliding-window');
let utils = require('./utils');


describe('multiple-pointer', function() {


    let longTest = function(func) {
        const max = 10000;
        const a = Array.apply(null, {length: max}).map(Number.call, Number);
        assert.equal(
            func(a, 10000), 49995000, 'large'
        );
    };

    let doTest = function(func) {
        assert.equal(func([100, 200, 300, 400], 2), 700, '700');
        assert.equal(func([1, 4, 2, 10, 23, 3, 1, 0, 20], 4), 39, '39');
        assert.equal(func([3, -2, 7, -4, 1, -1, 4, -2, 1], 2), 5, '5');
        assert.equal(func([1, 4], 3), null, 'short');
        longTest(func);
    }; 

    it('test multiple loops version', function() {
        let func = slidingWindow.maxSubarraySumLoop;
        doTest(func);
    });

    it('test sliding window version', function() {
        let func = slidingWindow.maxSubarraySum;
        doTest(func);
    });

    it('compare performance', function() {
        let duration = utils.getDuration;
        let timeLoop = duration(longTest, slidingWindow.maxSubarraySumLoop);
        let time = duration(longTest, slidingWindow.maxSubarraySum);
        assert.equal(
            time < timeLoop,
            true,
            'the sliding window version is faster than the loop version',
        );
    });
});
