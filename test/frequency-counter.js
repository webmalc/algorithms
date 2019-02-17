const assert = require('assert');
let frequencyCounter = require('../frequency-counter');
let utils = require('./utils');


describe('frequency-counter', function() {


    let longTest = function(anagram) {
        const max = 10000;
        assert.equal(
            anagram('test'.repeat(max), 'sett'.repeat(max)), true, 'large'
        );
    };

    let doTest = function(anagram) {
        assert.equal(anagram('azz', 'Zs'), false, 'azz');
        assert.equal(anagram('anagram', 'nagaram'), true, 'anagram');
        assert.equal(anagram('rat', 'car'), false, 'rat');
        assert.equal(anagram('test', 'sett'), true, 'test');
        longTest(anagram);
    }; 

    it('test slow anagram', function() {
        let anagram = frequencyCounter.validAnagramLoop;
        doTest(anagram);

    });

    it('test arrays anagram', function() {
        let anagram = frequencyCounter.validAnagramAsArrays;
        doTest(anagram);

    });
    it('test anagram', function() {
        let anagram = frequencyCounter.validAnagram;
        doTest(anagram);
    });
    it('test anagram v2', function() {
        let anagram = frequencyCounter.validAnagramV2;
        doTest(anagram);
    });
    it('compare anagrams performance', function() {
        let duration = utils.getDuration;
        let timeLoop = duration(longTest, frequencyCounter.validAnagramLoop);
        let timeArray = duration(longTest, frequencyCounter.validAnagramAsArrays);
        let time = duration(longTest, frequencyCounter.validAnagram);
        assert.equal(
            timeArray < timeLoop,
            true,
            'the array version is faster than the loops version',
        );
        assert.equal(
            time < timeArray,
            true,
            'the frequency counter version is faster than the array version',
        );
    });
    it('test sameFrequency function', function() {
        let large = Math.pow(12233112331, 30);
        let func = frequencyCounter.sameFrequency;
        assert.equal(func(123, 321), true, '123');
        assert.equal(func(123, 3211), false, 'different length');
        assert.equal(func(41231, 13214), true, '41231');
        assert.equal(func(12311, 32122), false, '12311');
        assert.equal(func(large, large), true, 'large');
    });
});
