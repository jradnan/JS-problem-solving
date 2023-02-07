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


