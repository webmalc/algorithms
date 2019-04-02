class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    /**
     * Add a value to the BST O(logn)
     * @param {int} value
     * @return {BinarySearchTree} return the BST
     */
    insert(value) {
        let newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        let loop = true;
        while (loop) {
            if (value === current.value) return undefined;
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
        return undefined;
    }

    /**
     * Check if there is a value in the BST O(logn)
     * @param {int} value
     * @return {bool} 
     */
    includes(value) {
        if (this.root === null) return false;
        let current = this.root,
            found = false;
        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }

    /**
     * Breadth-first search traverse algorithm O(n)
     * @return {array} 
     */
    breadthFirstSearch() {
        let node = this.root,
            data = [],
            queue = [];
        queue.push(node);

        while (queue.length) {
            node = queue.shift();
            data.push(node.value);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        return data;
    }

    /**
     * Depth-first pre order search  traverse algorithm O(n)
     * @return {array} 
     */
    depthFirstSearchPreOrder() {
        let data = [];

        function traverse(node) {
            data.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
}


module.exports = BinarySearchTree;