const assert = require('assert');
let search = require('../search');

describe('search', function() {

    it('test linear search', function() {
        let func = search.linearSearch;
        assert(func([10, 23, 3, 4, 5], 23), 1);
        assert(func([10, 23], 33), -1);
        assert(func([100], 33), 0);
    });
});
