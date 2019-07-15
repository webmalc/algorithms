const Graph = require('../graph.js');
const assert = require('assert');

describe('graph', function() {


    let createGraph = function() {
        let graph = new Graph();

        graph.addVertex('Dallas');
        graph.addVertex('Tokyo');
        graph.addVertex('Aspen');
        graph.addVertex('Los Angeles');
        graph.addVertex('Hong Kong');
        graph.addEdge('Dallas', 'Tokyo');
        graph.addEdge('Dallas', 'Aspen');
        graph.addEdge('Hong Kong', 'Tokyo');
        graph.addEdge('Hong Kong', 'Dallas');
        graph.addEdge('Los Angeles', 'Hong Kong');
        graph.addEdge('Los Angeles', 'Aspen');

        return graph;
    };

    it('test the addVertex and addEdge methods', function() {
        const graph = createGraph();
        const keys = Object.keys(graph.adjacencyList);

        assert.equal(keys.length, 5);
        assert.notEqual(keys.indexOf('Dallas'), -1);
        assert.notEqual(keys.indexOf('Tokyo'), -1);
        assert.notEqual(keys.indexOf('Aspen'), -1);
        assert.notEqual(keys.indexOf('Los Angeles'), -1);
        assert.notEqual(keys.indexOf('Hong Kong'), -1);

        assert.equal(
            JSON.stringify(graph.adjacencyList['Dallas']),
            JSON.stringify(['Tokyo', 'Aspen', 'Hong Kong']),
        );
        assert.equal(
            JSON.stringify(graph.adjacencyList['Los Angeles']),
            JSON.stringify(['Hong Kong', 'Aspen']),
        );
    });

    it('test the removeEdge method', function() {
        let graph = createGraph();
        assert.equal(
            JSON.stringify(graph.adjacencyList['Hong Kong']),
            JSON.stringify(['Tokyo', 'Dallas', 'Los Angeles']),
        );

        assert.equal(
            JSON.stringify(graph.adjacencyList['Tokyo']),
            JSON.stringify(['Dallas', 'Hong Kong']),
        );
        graph.removeEdge('Hong Kong', 'Tokyo');

        assert.equal(
            JSON.stringify(graph.adjacencyList['Hong Kong']),
            JSON.stringify(['Dallas', 'Los Angeles']),
        );
        assert.equal(
            JSON.stringify(graph.adjacencyList['Tokyo']),
            JSON.stringify(['Dallas']),
        );
    });

    it('test the removeVertex method', function() {
        let graph = createGraph();
        assert.equal(
            JSON.stringify(graph.adjacencyList['Hong Kong']),
            JSON.stringify(['Tokyo', 'Dallas', 'Los Angeles']),
        );
        assert.equal(
            JSON.stringify(graph.adjacencyList['Dallas']),
            JSON.stringify(['Tokyo', 'Aspen', 'Hong Kong']),
        );

        assert.equal(
            JSON.stringify(graph.adjacencyList['Tokyo']),
            JSON.stringify(['Dallas', 'Hong Kong']),
        );
        graph.removeVertex('Tokyo');

        assert.equal(
            JSON.stringify(graph.adjacencyList['Hong Kong']),
            JSON.stringify(['Dallas', 'Los Angeles']),
        );
        assert.equal(
            graph.adjacencyList['Tokyo'], undefined,
        );
        assert.equal(
            JSON.stringify(graph.adjacencyList['Dallas']),
            JSON.stringify(['Aspen', 'Hong Kong']),
        );
    });

});