
// problem No : 1
// function explain : play mind game
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function mindGame(number) {
    const result = (number * 3 + 10) / 2 - 5;
    if (isNaN(result)) {
        return "please input a valid number"
    } else {

        return result
    }
}


