const {
    PriorityQueue,
    PriorityQueueArray,
} = require('../priority-queue-heap.js');

const assert = require('assert');
let utils = require('./utils');

describe('priority queue', function() {

    it('test the enqueue and dequeue methods', function() {
        let queue = new PriorityQueue();
        queue.enqueue('common cold', 5);
        queue.enqueue('gunshot wound', 1);
        queue.enqueue('high fever', 4);
        queue.enqueue('broken arm', 2);
        queue.enqueue('glass in foot', 3);

        assert.equal(queue.dequeue().val, 'gunshot wound');
        assert.equal(queue.dequeue().val, 'broken arm');
        assert.equal(queue.dequeue().val, 'glass in foot');
        assert.equal(queue.dequeue().val, 'high fever');
        assert.equal(queue.dequeue().val, 'common cold');
    });

    it('test the enqueue and dequeue methods - array version', function() {
        let queue = new PriorityQueueArray();
        queue.enqueue('common cold', 5);
        queue.enqueue('gunshot wound', 1);
        queue.enqueue('high fever', 4);
        queue.enqueue('broken arm', 2);
        queue.enqueue('glass in foot', 3);

        assert.equal(queue.dequeue().val, 'gunshot wound');
        assert.equal(queue.dequeue().val, 'broken arm');
        assert.equal(queue.dequeue().val, 'glass in foot');
        assert.equal(queue.dequeue().val, 'high fever');
        assert.equal(queue.dequeue().val, 'common cold');
    });

    let createHugeQueue = function(queue) {
        let max = 5000;
        for (let i = 0; i < max; i++) {
            queue.enqueue('test' + i, i);
        }
        for (let i = 0; i < max; i++) {
            queue.dequeue();
        }
    };

    it('compare performance', function() {
        let duration = utils.getDuration;
        let queueDuration = duration(createHugeQueue, new PriorityQueue);
        let arrayDuration = duration(createHugeQueue, new PriorityQueueArray);

        assert.equal(
            queueDuration < arrayDuration,
            true,
            'the heap version is faster than the array version',
        );
    });
});