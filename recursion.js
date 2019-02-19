module.exports = {

    /**
     * Math.pow() analog
     * @param {int} base
     * @param {int} exponent
     * @return {int}
     */
    pow: function (base, exponent) {
        if (exponent === 0) {
            return 1;
        }
        exponent--;
        return base * module.exports.pow(base, exponent); 
    },
};
