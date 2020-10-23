const CustomError = require("../extensions/custom-error");

const chainMaker = {
    array: [],
    getLength() {
        return this.array.length;
    },
    addLink(value) {
        if (value === undefined) value = '';
        this.array.push(`( ${value} )`);
        return this;

    },
    removeLink(position) {
        if (isNaN(+position)) {
            this.array = [];
            throw new Error('Not implemented');
        } else if (this.array[(+position) - 1] === undefined) {
            this.array = [];
            throw new Error('Not implemented');
        } else {
            this.array.splice((+position) - 1, 1);
            return this;
        }

    },
    reverseChain() {
        this.array = this.array.reverse();
        return this;
    },
    finishChain() {
        let resultString = this.array.join('~~');
        this.array = [];
        return resultString;

    }
};

module.exports = chainMaker;