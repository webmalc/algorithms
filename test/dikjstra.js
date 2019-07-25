const WeightedGraph = require('../dikjstra.js');
const assert = require('assert');

describe('dikjstra', function() {

    const s = JSON.stringify;
    let createGraph = function() {
        let graph = new WeightedGraph();
        graph.addVertex('A');
        graph.addVertex('B');
        graph.addVertex('C');
        graph.addVertex('D');
        graph.addVertex('E');
        graph.addVertex('F');

        graph.addEdge('A', 'B', 4);
        graph.addEdge('A', 'C', 2);
        graph.addEdge('B', 'E', 3);
        graph.addEdge('C', 'D', 2);
        graph.addEdge('C', 'F', 4);
        graph.addEdge('D', 'E', 3);
        graph.addEdge('D', 'F', 1);
        graph.addEdge('E', 'F', 1);

        return graph;
    };

    it('test the dikjstra methods', function() {
        let graph = createGraph();

        assert.equal(
            s(graph.dijkstra('A', 'E')),
            s(['A', 'C', 'D', 'F', 'E'])
        );
        assert.equal(
            s(graph.dijkstra('A', 'D')),
            s(['A', 'C', 'D'])
        );
        assert.equal(
            s(graph.dijkstra('D', 'B')),
            s(['D', 'F', 'E', 'B'])
        );
    });

});