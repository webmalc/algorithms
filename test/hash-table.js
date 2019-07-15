const HashTable = require('../hash-table.js');
const assert = require('assert');

describe('hash table', function() {


    let createHashTable = function() {
        let ht = new HashTable(17);

        ht.set('maroon', '#800000');
        ht.set('yellow', '#FFFF00');
        ht.set('olive', '#808000');
        ht.set('salmon', '#FA8072');
        ht.set('lightcoral', '#F08080');
        ht.set('mediumvioletred', '#C71585');
        ht.set('plum', '#DDA0DD');
        ht.set('purple', '#DDA0DD');
        ht.set('violet', '#DDA0DD');

        return ht;
    };

    it('test the set and get methods', function() {
        const ht = createHashTable();

        assert.equal(ht.get('violet'), '#DDA0DD');
        assert.equal(ht.get('purple'), '#DDA0DD');
        assert.equal(ht.get('mediumvioletred'), '#C71585');
        assert.equal(ht.get('salmon'), '#FA8072');
    });

    it('test the keys method', function() {
        const ht = createHashTable();
        const keys = ht.keys();

        assert.equal(keys.length, 9);
        assert.notEqual(keys.indexOf('maroon'), -1);
        assert.notEqual(keys.indexOf('salmon'), -1);
        assert.notEqual(keys.indexOf('plum'), -1);
        assert.notEqual(keys.indexOf('violet'), -1);
        assert.equal(keys.indexOf('invalid'), -1);
    });

    it('test the values method', function() {
        const ht = createHashTable();
        const values = ht.values();

        assert.equal(values.length, 7);
        assert.notEqual(values.indexOf('#800000'), -1);
        assert.notEqual(values.indexOf('#FFFF00'), -1);
        assert.notEqual(values.indexOf('#808000'), -1);
        assert.notEqual(values.indexOf('#F08080'), -1);
        assert.equal(values.indexOf('invalid'), -1);
    });
});