const {
    Queue,
    QueueArray,
} = require('../queue.js');
const assert = require('assert');
let utils = require('./utils');

describe('queue', function() {

    it('test the enqueue and dequeue methods', function() {
        let queue = new Queue();
        queue.enqueue(12);
        queue.enqueue('test');
        queue.enqueue(33);

        assert.equal(queue.dequeue(), 12);
        assert.equal(queue.dequeue(), 'test');
        assert.equal(queue.dequeue(), 33);
    });

    it('test the enqueue and dequeue methods - array version', function() {
        let queue = new QueueArray();
        queue.enqueue(12);
        queue.enqueue('test');
        queue.enqueue(33);

        assert.equal(queue.dequeue(), 12);
        assert.equal(queue.dequeue(), 'test');
        assert.equal(queue.dequeue(), 33);
    });

    let createHugeQueue = function(queue) {
        let max = 50000;
        for (let i = 0; i < max; i++) {
            queue.enqueue(i);
        }
        for (let i = 0; i < max; i++) {
            queue.dequeue();
        }
    };

    it('compare performance', function() {
        let duration = utils.getDuration;
        let queueDuration = duration(createHugeQueue, new Queue);
        let arrayDuration = duration(createHugeQueue, new QueueArray);

        assert.equal(
            queueDuration < arrayDuration,
            true,
            'an queue is faster that a array',
        );
    });
});