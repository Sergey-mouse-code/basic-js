const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    const sampleActivityNumber = Math.round(+(sampleActivity));
    if ((typeof(sampleActivity) === String) &&
        (sampleActivityNumber !== NaN) && (sampleActivityNumber > 0) && (sampleActivityNumber < 15)) {
        let lastFullAge = 0;
        let age = 0;
        let hunderedPercent = 100;
        let percent = 0;

        if (sampleActivityNumber >= (MODERN_ACTIVITY / 2)) {
            let step = (MODERN_ACTIVITY - (MODERN_ACTIVITY / 2)) * (1 / hunderedPercent);
            for (let i = MODERN_ACTIVITY; i >= sampleActivityNumber; i = i - step) {
                percent++

            }
            return Math.round(HALF_LIFE_PERIOD * (percent / hunderedPercent));
        }


        for (let i = MODERN_ACTIVITY; i >= sampleActivityNumber; i = i / 2) {
            age += HALF_LIFE_PERIOD;
            lastFullAge = i;
        }
        let fullScale = lastFullAge - (lastFullAge / 2);
        let stepScale = 1 / hunderedPercent;

        for (let i = lastFullAge; i >= sampleActivityNumber; i = i - (fullScale * stepScale)) {
            percent++;
        }
        age = age + (MODERN_ACTIVITY * (percent / hunderedPercent));


        return Math.round(age);

    }


    return false;
};