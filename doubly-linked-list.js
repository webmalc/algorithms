class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }


    /**
     * Push value to the list O(1)
     * @param {val} val
     * @return {DoublyLinkedList} the list
     */
    push(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;

        return this;
    }

    /**
     * Remove and return the last value from the list O(1)
     * @return {*} the value
     */
    pop() {
        if (!this.head) {
            return undefined;
        }
        let poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;

        return poppedNode;
    }

    /**
     * Remove and return the first value from the list O(1)
     * @return {*} the value
     */
    shift() {
        if (this.length === 0) {
            return undefined;
        }
        let oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    /**
     * Insert the value at the beginning of the list O(1)
     * @param {val} val
     * @return {DoublyLinkedList} the list
     */
    unshift(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    /**
     * Get the value by the index O(n) [ O(n/2) ]
     * @param {index} int
     * @return {*} the value
     */
    get(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        let count, current;
        if (index <= this.length / 2) {
            count = 0;
            current = this.head;
            while (count !== index) {
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while (count !== index) {
                current = current.prev;
                count--;
            }
        }
        return current;
    }


    /**
     * Set the value by the index O(n)
     * @param {index} int
     * @param {*} value
     * @return {boolean} if successful
     */
    set(index, val) {
        let foundNode = this.get(index);
        if (foundNode != null) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    /**
     * Insert the value by the index O(n)
     * @param {index} int
     * @param {*} value
     * @return {boolean} if successful
     */
    insert(index, val) {
        if (index < 0 || index > this.length) {
            return false;
        }
        if (index === 0) {
            return !!this.unshift(val);
        }
        if (index === this.length) {
            return !!this.push(val);
        }

        let newNode = new Node(val);
        let beforeNode = this.get(index - 1);
        let afterNode = beforeNode.next;

        beforeNode.next = newNode, newNode.prev = beforeNode;
        newNode.next = afterNode, afterNode.prev = newNode;
        this.length++;

        return true;
    }

    /**
     * Insert the node by the index O(n)
     * @param {index} int
     * @return {*} the removed value
     */
    remove(index) {
        if (this.length == 0) {
            return undefined;
        }
        if (index < 0 || index > this.length) {
            return undefined;
        }
        if (index == 0) {
            return this.shift();
        }
        if (index == this.length - 1) {
            return this.pop();
        }
        let removed = this.get(index);
        let rprev = removed.prev;
        let rnext = removed.next;
        rprev.next = rnext;
        rnext.prev = rprev;
        removed.next = null;
        removed.prev = null;
        this.length--;

        return removed;
    }

    /**
     * Reverse the list O(n)
     * @return {SinglyLinkedList} the list
     */
    reverse() {
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev = null;
        for (var i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            node.prev = next;
            prev = node;
            node = next;
        }
        return this;
    }

}

module.exports = DoublyLinkedList;