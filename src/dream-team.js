const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if ((Array.isArray(members) === true) && members.length >= 1) {
        let firstLetter = 0;
        let stringFirstLetters = '';


        function filterFunc(value) {
            if (typeof(value) === 'string')
                return value.trim();
        }
        let stringArray = members.filter(filterFunc);
        let length = stringArray.length;
        for (let i = 0; i < length; i++) {
            let strWithoutSpaces = stringArray[i].trim();
            stringFirstLetters += strWithoutSpaces[firstLetter].toUpperCase();
        }

        return stringFirstLetters.split('').sort().join('');
    }







    return false;
};