const Graph = require('../graph.js');
const assert = require('assert');

describe('graph', function() {

    const s = JSON.stringify;

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
            s(graph.adjacencyList['Dallas']),
            s(['Tokyo', 'Aspen', 'Hong Kong']),
        );
        assert.equal(
            s(graph.adjacencyList['Los Angeles']),
            s(['Hong Kong', 'Aspen']),
        );
    });

    it('test the removeEdge method', function() {
        let graph = createGraph();
        assert.equal(
            s(graph.adjacencyList['Hong Kong']),
            s(['Tokyo', 'Dallas', 'Los Angeles']),
        );

        assert.equal(
            s(graph.adjacencyList['Tokyo']),
            s(['Dallas', 'Hong Kong']),
        );
        graph.removeEdge('Hong Kong', 'Tokyo');

        assert.equal(
            s(graph.adjacencyList['Hong Kong']),
            s(['Dallas', 'Los Angeles']),
        );
        assert.equal(
            s(graph.adjacencyList['Tokyo']),
            s(['Dallas']),
        );
    });

    it('test the removeVertex method', function() {
        let graph = createGraph();
        assert.equal(
            s(graph.adjacencyList['Hong Kong']),
            s(['Tokyo', 'Dallas', 'Los Angeles']),
        );
        assert.equal(
            s(graph.adjacencyList['Dallas']),
            s(['Tokyo', 'Aspen', 'Hong Kong']),
        );

        assert.equal(
            s(graph.adjacencyList['Tokyo']),
            s(['Dallas', 'Hong Kong']),
        );
        graph.removeVertex('Tokyo');

        assert.equal(
            s(graph.adjacencyList['Hong Kong']),
            s(['Dallas', 'Los Angeles']),
        );
        assert.equal(
            graph.adjacencyList['Tokyo'], undefined,
        );
        assert.equal(
            s(graph.adjacencyList['Dallas']),
            s(['Aspen', 'Hong Kong']),
        );
    });

    it('test the depthFirstRecursive method', function() {
        const graph = createGraph();

        assert.equal(
            s(graph.depthFirstRecursive('Dallas')),
            s(['Dallas', 'Tokyo', 'Hong Kong', 'Los Angeles', 'Aspen'])
        );
    });

    it('test the depthFirstIterative method', function() {
        const graph = createGraph();

        assert.equal(
            s(graph.depthFirstIterative('Dallas')),
            s(['Dallas', 'Hong Kong', 'Los Angeles', 'Aspen', 'Tokyo'])
        );
    });

    it('test the breadthFirst method', function() {
        const graph = createGraph();

        assert.equal(
            s(graph.breadthFirst('Dallas')),
            s(['Dallas', 'Tokyo', 'Aspen', 'Hong Kong', 'Los Angeles'])
        );
    });

});