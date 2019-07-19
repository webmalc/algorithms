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


    /**
     * The recursive version of the DFS traversal of the graph O(V+E) O(n)
     * @param {string} start - the vertex to start the traversal
     * @return {Array} the result array
     */
    depthFirstRecursive(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        (function dfs(vertex) {
            if (!vertex) {
                return null;
            }
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    return dfs(neighbor);
                }
            });
        })(start);

        return result;
    }


    /**
     * The iterative version of the DFS traversal of the graph O(V+E) O(n)
     * @param {string} start - the vertex to start the traversal
     * @return {Array} the result array
     */
    depthFirstIterative(start) {
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;
        while (stack.length) {
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            });
        }
        return result;
    }

    /**
     * The BFS version of the traversal of the graph O(V+E) O(n)
     * @param {string} start - the vertex to start the traversal
     * @return {Array} the result array
     */
    breadthFirst(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;
        visited[start] = true;

        while (queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);


            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        return result;
    }
}

module.exports = Graph;