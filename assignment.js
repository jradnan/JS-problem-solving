// Problem 1: Let’s play a mind game
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// function mindGame(number){
//   const result = (number * 3 + 10)  /2 -5;
//   return result
// }


// const result = mindGame(33);

// console.log(result)
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// Problem 2: Finding even or odd
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// function evenOdd(name) {

//   if (name.length % 2 === 0) {
//     return "even"
//   }
//   else if (Number.isFinite(name)) {
//     return "please write a latter"
//   }
//   else {
//     return "odd"
//   }

// }

// const name = 'Phero';

// const result = evenOdd(name);

// console.log(result);



// Problem 3: Is Less or Greater than seven>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// function isLGSeven(number) {

//   if (number <= 7) {
//     return number - 7;
//   }
//   else {
//     return number * 2;
//   }
// }

// const result = isLGSeven(6);

// console.log(result)



// Problem 4: Finding Bad data
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// function findingBadData(array){
//   let badData = 0;

//   for(let i =0; i < array.length; i++){

//     let index = i;
//     let element = array[index];

//     if(element < 0 ){
//       badData ++;
//     }

//   }

// return badData;
// }

// const numbers = [22, 445, 76766, 5344, 4343, -3,-4, -6, -9, -34];

// const Input = [ -4, -9, -5, -33, -55 ]

// const num = ['abida', 'rahoma', 'sundaro', 'afsana']

// const result = findingBadData(Input);

// console.log(result)


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Problem 5: Convert your gems into diamond
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// function gemsToDiamond(firstFriend, secondFriend, thirdFriend){

//           const firstFriendGems = firstFriend * 21;
//           const secondFriendGems = secondFriend * 32;
//           const thirdFriendGems = thirdFriend * 43;
//           const result = firstFriendGems + secondFriendGems + thirdFriendGems;

//         if(result >= 2000){
//           return result - 2000
//         }else{
//           return result;
//         }


// }


// const total = gemsToDiamond(100,5,1)

// console.log(total);


