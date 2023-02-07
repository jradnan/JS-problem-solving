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


