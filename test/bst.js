const BinarySearchTree = require('../bst.js');
const assert = require('assert');
let utils = require('./utils');

describe('binary search tree', function() {

    let getBST = function() {
        let bst = new BinarySearchTree();
        bst.insert(12);
        bst.insert(3);
        bst.insert(5);
        bst.insert(44);
        bst.insert(10);
        bst.insert(1);
        bst.insert(9);
        bst.insert(12);
        bst.insert(55);
        bst.insert(15);

        return bst;
    };

    it('test the insert and includes methods', function() {
        let bst = getBST();
        assert.equal(bst.root.value, 12);
        assert.equal(bst.root.left.value, 3);
        assert.equal(bst.root.left.right.value, 5);
        assert.equal(bst.root.left.left.value, 1);
        assert.equal(bst.root.right.value, 44);
        assert.equal(bst.root.right.right.value, 55);
        assert.equal(bst.root.right.left.value, 15);

        assert.ok(bst.includes(3));
        assert.ok(bst.includes(12));
        assert.ok(bst.includes(55));
        assert.ok(bst.includes(55));

        assert.ok(!bst.includes(566));
        assert.ok(!bst.includes(0));
        assert.ok(!bst.includes(2));
    });


    it('test the breadth-first search methods', function() {
        let bst = getBST();
        let result = JSON.stringify([12, 3, 44, 1, 5, 15, 55, 10, 9]);
        assert.equal(JSON.stringify(bst.breadthFirstSearch()), result);
    });


    let makeStorages = function() {
        let max = 50000;
        let arr = [];
        let bst = new BinarySearchTree();

        for (let i = 0; i < max; i++) {
            let val = Math.floor((Math.random() * 10000000) + 1);
            arr.push(val);
            bst.insert(val);
        }
        return [bst, arr];
    };

    let findVals = function(storage) {
        storage.includes(3);
        storage.includes(5);
        storage.includes(0);
        storage.includes(1);
        storage.includes(1);
        storage.includes(24);
        storage.includes(1);
    };

    it('compare performance', function() {
        let [bst, arr] = makeStorages();
        let duration = utils.getDuration;
        let bstDuration = duration(findVals, bst);
        let arrayDuration = duration(findVals, arr);

        assert.equal(
            bstDuration < arrayDuration,
            true,
            'an bst is faster that a array',
        );
    });
});