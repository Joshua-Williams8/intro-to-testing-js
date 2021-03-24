// helloWorld function
//function expressions DO NOT get hoisted to the top.
const helloWorld = function() {
//function helloWorld() {
  return "Hello, World!"
  //return console.log("Hello, World!"); returns undefined
}

function addTwo(num){
  //return
  return 3
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
  return "Hello, " + name + "!";
}
