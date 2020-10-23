const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
    if (Array.isArray(matrix) === true) {
        let counter = 0;
        let length = matrix.length;
        for (let i = 0; i < length; i++) {

            for (let j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] === '^^') counter++;
            }
        }

        return counter;
    }

    return false;
}