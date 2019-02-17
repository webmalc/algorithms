const { performance } = require('perf_hooks');

module.exports = {

    getDuration: function (func, arg) {
        var start = performance.now();
        func(arg);
        var end = performance.now();
        return end - start;
    }
};
