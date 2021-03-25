// helloWorld function
//function expressions DO NOT get hoisted to the top.
const helloWorld = function() {
//function helloWorld() {
  return "Hello, World!"
  //return console.log("Hello, World!"); returns undefined
}

//earlier exercises
function sayHello(name) {
  //return
  //return ""
  //return "Hello, Jane!"
  // if (name === "Alex") {
  //   return "Hello, Alex!"
  // } else if(name === "Jane") {
  //   return "Hello, Jane!"
  // } else {
  //   return "Hello, Pat!"
  // }
  //return "Hello, " + name + "!";
  if (name == parseFloat(name) || typeof name !== "string" || name === "" ) {
    return "Hello, World!"
  } else {
    return "Hello, " + name + "!";
  }
}
//exercise 10
//Old code is getting commited out
function isFive(num){
  //return
  //return false
  //return true
  // if (num === 1 || num === -8 ){
  //   return false
  // } else {
  //   return true
  // }
  if (num == 5){
    return true
  } else {
    return false
  }
}
//Exercise 11
function isEven(num){
  //return
  //return true
  // if (num === 3) {
  //   return false
  // } else return true
  // if (num === 3 || num === "banana" || num === Infinity || typeof num === "boolean" || num === undefined) {
  //   return false
  // } else return true
  //Since I used or's on the last one I'm going to use if else statements on this one.
  if  (isNaN(parseFloat(num))) {
    return false
  } else if (num % 2 === 0) {
      return true
    } else {
    return false
  }
}

//Exercise 12
function isVowel(letter) {
  //return
  //return true

  //Below code works for all the test defined in readme.
  //I will still refactor it to work as intended tho.
  // if (letter === "a" || letter === "A") {
  //   return true
  // } else {
  //   return false
  // }
  if (typeof letter !== "string") {
    return false
  } else if (letter.length === 1) {
    letter = letter.toLowerCase();
    return (letter === "a") || (letter === "e") || (letter === "i") || (letter === "o") || (letter === "u");
  } else {
    return false
  }
}
