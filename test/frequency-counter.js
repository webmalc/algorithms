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
        assert.equal(anagram('azz', 'zzss'), false, 'azz');
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
    it('test anagram', function() {
        let anagram = frequencyCounter.validAnagram;
        testAnagram(anagram);
    });
    it('compare anagrams', function() {
        let timeSlow = getDurationAnagram(frequencyCounter.validAnagramSlow);
        let time = getDurationAnagram(frequencyCounter.validAnagram);
        assert.equal(time < timeSlow, true);
    });
});
