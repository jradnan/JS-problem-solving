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

