const DoublyLinkedList = require('../doubly-linked-list.js');
const assert = require('assert');
let utils = require('./utils');

describe('single linked list', function() {

    it('test the push and pop methods', function() {
        let l = new DoublyLinkedList();
        l.push(24);
        l.push('str');
        l.push(111);

        assert.equal(l.length, 3);
        assert.equal(l.pop().val, 111);
        assert.equal(l.length, 2);
        assert.equal(l.pop().val, 'str');
        assert.equal(l.pop().val, 24);
        assert.equal(l.length, 0);
    });

    it('test the push and shift methods', function() {
        let l = new DoublyLinkedList();
        l.push(24);
        l.push('str');
        l.push(111);

        assert.equal(l.length, 3);
        assert.equal(l.shift().val, 24);
        assert.equal(l.head.val, 'str');
        assert.equal(l.tail.val, 111);
        assert.equal(l.tail.prev.val, 'str');
        assert.equal(l.length, 2);
        assert.equal(l.shift().val, 'str');
        assert.equal(l.shift().val, 111);
        assert.equal(l.length, 0);
    });

    it('test the unshift method', function() {
        let l = new DoublyLinkedList();
        l.push(24);
        l.push('str');
        l.push(111);
        l.unshift('new value');

        assert.equal(l.length, 4);
        assert.equal(l.head.val, 'new value');
    });

    it('test the get method', function() {
        let l = new DoublyLinkedList();
        l.push(24);
        l.push('str');
        l.push(111);

        assert.equal(l.get(1).val, 'str');
        assert.equal(l.get(0).val, 24);
        assert.equal(l.get(2).val, 111);
        assert.equal(l.get(2).prev.val, 'str');
    });

    it('test the set method', function() {
        let l = new DoublyLinkedList();
        l.push(24);
        l.push('str');
        l.push(111);
        l.set(0, 'head');
        l.set(1, 'one');

        assert.equal(l.head.val, 'head');
        assert.equal(l.head.next.val, 'one');
        assert.equal(l.head.next.prev.val, 'head');
    });

    it('test insert method', function() {
        let l = new DoublyLinkedList();
        l.push(24);
        l.push('str');
        l.push(111);
        l.insert(1, 'new value');

        assert.equal(l.length, 4);
        assert.equal(l.get(1).val, 'new value');
        assert.equal(l.get(1).next.val, 'str');
        assert.equal(l.get(1).prev.val, 24);
        assert.equal(l.head.next.val, 'new value');
    });

    it('test remove method', function() {
        let l = new DoublyLinkedList();
        l.push(24);
        l.push('str');
        l.push(111);
        l.remove(1);

        assert.equal(l.length, 2);
        assert.equal(l.get(1).val, 111);
        assert.equal(l.get(1).prev.val, 24);
    });

    it('test reverse method', function() {
        let l = new DoublyLinkedList();
        l.push(24);
        l.push('str');
        l.push('one');
        l.push(111);
        l.reverse();

        assert.equal(l.length, 4);
        assert.equal(l.head.val, 111);
        assert.equal(l.head.next.val, 'one');
        assert.equal(l.head.next.prev.val, 111);
        assert.equal(l.tail.val, 24);
        assert.equal(l.tail.prev.val, 'str');
    });


    let unshiftValues = function(arr) {
        let max = 50000;
        for (let i = 0; i < max; i++) {
            arr.unshift(i);
        }
        assert.equal(arr.length, max);
        return arr;
    };

    it('compare performance', function() {
        let duration = utils.getDuration;
        let arrayDuration = duration(unshiftValues, []);
        let listDuration = duration(unshiftValues, new DoublyLinkedList());

        assert.equal(
            listDuration < arrayDuration,
            true,
            'the doubly linked list is the fastest',
        );
    });
});