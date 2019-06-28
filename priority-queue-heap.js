class PriorityQueue {

    constructor() {
        this.values = [];
    }


    /**
     * Add a value to the queue O(logn)
     * @param {*} val
     * @param {int} int
     */
    enqueue(val, priority) {
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }

    /**
     * Bubble up a value from the bottom of the queue O(logn)
     */
    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if (element.priority >= parent.priority) {
                break;
            }
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    /**
     * Remove and return a value from the queue O(logn)
     * @return {*} the value
     */
    dequeue() {
        const min = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }

    /**
     * Sink down a value from the top of the queue O(logn)
     */
    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        let go = true;
        while (go) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    (swap === null && rightChild.priority < element.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) {
                break;
            }
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueueArray {

    constructor() {
        this.values = [];
    }

    /**
     * Add a value to the queue O(1)
     * @param {*} val
     * @param {int} int
     */
    enqueue(val, priority) {
        let newNode = new Node(val, priority);
        this.values.push(newNode);
    }

    /**
     * Remove and return a value from the queue O(logn)
     * @return {*} the value
     */
    dequeue() {
        if (this.values.length > 0) {
            let min = 0;
            let minValue = this.values[min];
            for (var key in this.values) {
                let value = this.values[key];
                if (value.priority < minValue.priority) {
                    min = key;
                    minValue = this.values[min];
                }
            }
            this.values.splice(min, 1);

            return minValue;

        } else {
            return undefined;
        }

    }
}

module.exports = {
    PriorityQueue,
    PriorityQueueArray
};