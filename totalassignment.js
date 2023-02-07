
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



// problem No : 2
// function explain : Finding even or odd
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function evenOdd(name) {

    if (name.length % 2 === 0) {
      return "even"
    }
    else if (Number.isFinite(name)) {
      return "please write a latter"
    }
    else {
      return "odd"
    }
  
  }
  

  // problem No : 3
// function explain : Is Less or Greater than seven
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function isLGSeven(number) {

    if (number <= 7) {
      return number - 7;
    }
    else if(isNaN(number)){
      return "please input a valid number"
    }
    else {
      return number * 2;
    }
  }
  

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

// problem No : 5
// function explain : Convert your gems into diamond
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function gemsToDiamond(firstFriend, secondFriend, thirdFriend) {

    const firstFriendGems = firstFriend * 21;
    const secondFriendGems = secondFriend * 32;
    const thirdFriendGems = thirdFriend * 43;
    const result = firstFriendGems + secondFriendGems + thirdFriendGems;

    if (result >= 2000) {
        return result - 2000
    }
    else if (isNaN(result)) {
        return "please input a valid number"
    }
    else {
        return result;
    }


}



  
  