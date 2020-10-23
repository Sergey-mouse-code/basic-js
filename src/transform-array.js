const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (Array.isArray(arr) === true) {

        const dPrev = '--double-prev';
        const dNext = '--double-next';
        const discardNext = '--discard-next';
        const discardPrev = '--discard-prev';


        let result = [];
        let length = arr.length;
        let i = 0;
        let j = 0;
        let index = 0;
        if (length === 1 && (arr[0] === dPrev || arr[0] === dNext || arr[0] === discardNext || arr[0] === discardPrev)) return [];
        if (arr[length - 1] === discardNext || arr[length - 1] === dNext) { index = 1; }
        if (arr[0] === dPrev || arr[0] === discardPrev) {++i; }
        for (; i < length - index; i++) {
            if (arr[i] === dPrev) {
                result[j] = arr[i - 1];
                j++;
            } else if (arr[i] === dNext) {
                result[j] = arr[i + 1];
                j++;
            } else if (arr[i] === discardPrev) {

                ++i;
                result[j] = arr[i];
            } else if (arr[i] === discardNext) {
                i = i + 2;
                result[j] = arr[i];
                j++
            } else {
                result[j] = arr[i];
                j++
            }



        }

        return result;
    }

    throw new Error('This is not Array');
};