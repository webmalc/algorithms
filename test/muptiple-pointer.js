const assert = require('assert');
let multiplePointer = require('../multiple-pointer');
let utils = require('./utils');

describe('multiple-pointer', function() {

    let longTest = function(func) {
        const max = 10000;
        const a = Array.apply(null, {
            length: max
        }).map(Number.call, Number);
        assert.equal(
            func(a), max, 'large'
        );
    };

    let doTest = function(func) {
        assert.equal(func([1, 1, 1, 1, 2, 2]), 2, '2');
        assert.equal(func([5, 1, 1, 1, 2, 3]), 4, '4');
        assert.equal(func([]), 0, 'empty');
        assert.equal(func([1, 1, 1]), 1, '1');
        assert.equal(func([0, 4, 4, 5, 6, 6]), 4, '4');
        assert.equal(func([2]), 1, '1');
        assert.equal(func([-2, -1, 0, 1]), 4, '4');
        longTest(func);
    };

    it('test multiple loops version', function() {
        let func = multiplePointer.countUniqueValuesLoop;
        doTest(func);
    });

    it('test set version', function() {
        let func = multiplePointer.countUniqueValuesSet;
        doTest(func);
    });

    it('test multiple pointers version', function() {
        let func = multiplePointer.countUniqueValues;
        doTest(func);
    });

    it('test multiple pointers version V2', function() {
        let func = multiplePointer.countUniqueValuesV2;
        doTest(func);
    });

    it('compare performance', function() {
        let duration = utils.getDuration;
        let timeLoop = duration(longTest, multiplePointer.countUniqueValuesLoop);
        let timeSet = duration(longTest, multiplePointer.countUniqueValuesSet);
        let time = duration(longTest, multiplePointer.countUniqueValues);
        assert.equal(
            time < timeLoop,
            true,
            'the multiple pointers version is faster than the loop version',
        );
        assert.equal(
            timeSet > time,
            true,
            'the set version is the slowest',
        );
    });
});