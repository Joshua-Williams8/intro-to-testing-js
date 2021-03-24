// helloWorld function
//function expressions DO NOT get hoisted to the top.
const helloWorld = function() {
//function helloWorld() {
  return "Hello, World!"
  //return console.log("Hello, World!"); returns undefined
}


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
