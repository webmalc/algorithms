class Graph {

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
     */
    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }


    /**
     * Remove the edge between the two vertexes v1 and v2 O(n)
     * @param {string} v1 - the first vertex
     * @param {string} v2 - the second vertex
     */
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }

    /**
     * Remove the vertex O(n)
     * @param {string} vertex - the vertex to remove
     */
    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }
}

module.exports = Graph;