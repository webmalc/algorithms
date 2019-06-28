class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class QueueArray {

    constructor() {
        this.array = [];
    }

    /**
     * Add a value to the queue O(1)
     * @param {*} val
     * @return {int} the queue size
     */
    enqueue(val) {
        this.array.push(val);
        return this.array.length;
    }

    /**
     * Remove and return a value from the queue O(1)
     * @return {*} the value
     */
    dequeue() {
        return this.array.shift();
    }
}

/**
 * FIFO
 */
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    /**
     * Add a value to the queue O(1)
     * @param {*} value
     * @return {int} the queue size
     */
    enqueue(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    /**
     * Remove and return a value from the queue O(1)
     * @return {*} the value
     */
    dequeue() {
        if (!this.first) return null;

        let temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}
module.exports = {
    Queue,
    QueueArray,
};