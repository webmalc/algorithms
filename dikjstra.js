const {
    PriorityQueue
} = require('./priority-queue-heap.js');

class WeightedGraph {

    constructor() {
        this.adjacencyList = {};
    }

    /**
     * Add the vertex to the graph O(1)
     * @param {string} vertex - the vertex to add
     */
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    /**
     * Add the edge between the two vertexes v1 and v2 O(1)
     * @param {string} v1 - the first vertex
     * @param {string} v2 - the second vertex
     * @param {int} weight - the weight of the edge
     */
    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({
            node: vertex2,
            weight
        });
        this.adjacencyList[vertex2].push({
            node: vertex1,
            weight
        });
    }

    /**
     * Find the shortest path between the given vertexes O((v+e) logv)
     * @param {string} start - the start vertex
     * @param {string} finish - the finish vertex
     */
    dijkstra(start, finish) {
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let path = [];
        let smallest;
        //build up initial state
        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }
        // as long as there is something to visit
        while (nodes.values.length) {
            smallest = nodes.dequeue().val;
            if (smallest === finish) {
                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if (smallest || distances[smallest] !== Infinity) {
                for (let neighbor in this.adjacencyList[smallest]) {
                    //find neighboring node
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    //calculate new distance to neighboring node
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    if (candidate < distances[nextNeighbor]) {
                        //updating new smallest distance to neighbor
                        distances[nextNeighbor] = candidate;
                        //updating previous - How we got to neighbor
                        previous[nextNeighbor] = smallest;
                        //enqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();
    }
}

module.exports = WeightedGraph;