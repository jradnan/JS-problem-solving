// problem No : 4
// function explain : Finding Bad data
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function findingBadData(array) {
    let badData = 0;

    for (let i = 0; i < array.length; i++) {

        let index = i;
        let element = array[index];

        if (element < 0) {
            badData++;
        } else if (isNaN(element)) {
            return "please input a valid number"
        }

    }

    return badData;
}

