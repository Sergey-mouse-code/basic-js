const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if (!Array.isArray(arr)) throw new Exception('not an array');
        let length = arr.length;
        let maxdepth = 0;



        for (let i = 0; i < length; i++) {
            if (Array.isArray(arr[i])) {
                let depth = this.calculateDepth(arr[i]);
                if (depth > maxdepth) maxdepth = depth;
            }
            return maxdepth + 1;
        }








    }
};