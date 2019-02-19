const assert = require('assert');
let recursion = require('../recursion');

describe('recursion', function() {

    it('test the pow function', function() {
        let func = recursion.pow;
        assert.equal(func(2, 0), 1, '2^0');
        assert.equal(func(2, 2), 4, '2^2');
        assert.equal(func(2, 4), 16, '2^4');
        assert.equal(func(3, 12), 531441, '3^12');
    });
});
