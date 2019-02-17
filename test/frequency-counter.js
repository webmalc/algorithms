const assert = require('assert');
const { performance } = require('perf_hooks');
let frequencyCounter = require('../frequency-counter');


describe('frequency-counter', function() {


    let longTest = function(anagram) {
        const max = 10000;
        assert.equal(
            anagram('test'.repeat(max), 'sett'.repeat(max)), true, 'large'
        );
    };

    let testAnagram = function(anagram) {
        assert.equal(anagram('azz', 'Zs'), false, 'azz');
        assert.equal(anagram('anagram', 'nagaram'), true, 'anagram');
        assert.equal(anagram('rat', 'car'), false, 'rat');
        assert.equal(anagram('test', 'sett'), true, 'test');
        longTest(anagram);
    }; 

    let getDurationAnagram = function(anagram) {
        var start = performance.now();
        longTest(anagram);
        var end = performance.now();
        return end - start;
    };

    it('test slow anagram', function() {
        let anagram = frequencyCounter.validAnagramSlow;
        testAnagram(anagram);

    });

    it('test arrays anagram', function() {
        let anagram = frequencyCounter.validAnagramAsArrays;
        testAnagram(anagram);

    });
    it('test anagram', function() {
        let anagram = frequencyCounter.validAnagram;
        testAnagram(anagram);
    });
    it('compare anagrams performance', function() {
        let timeSlow = getDurationAnagram(frequencyCounter.validAnagramSlow);
        let timeArray = getDurationAnagram(frequencyCounter.validAnagramAsArrays);
        let time = getDurationAnagram(frequencyCounter.validAnagram);
        assert.equal(
            timeArray < timeSlow,
            true,
            'the array version is faster than the loops version',
        );
        assert.equal(
            time < timeArray,
            true,
            'the frequency counter version is faster than the array version',
        );
    });
});
