// for (var i = 0; i <= 10; i++){
//   console.log(i);
// }

  //arrays

// var cat_names = ["winston","felix", "olaf"]
//
//
// for (var i = 0; i < cat_names.length; i++ ){
//   console.log(cat_names[i])
//   console.log(i)
//}
// console.log(cat_names[0])
// console.log(cat_names[1])


//definition
//i want to add two numbers together

// function sum(a, b){
//   //validate
//   if( typeof a === "number" && typeof b === "number" ){
//     return a+b
//   } else{
//     alert("Please provide valid integers.")
//     return null
//   }
//
// }
//
// console.log(sum("fkdjsfklakj",1))
//console.log(sum(sum(1,1), sum(1,1)))
//
// function namer(name){
//   return "hey, "+ name
// }
//
// function sayHello(someName, namer){
//   return namer(someName)
// }
//
// console.log(sayHello("syed", namer))

// function sayHello(){
// console.log("i was called")
//   return "hello"
// }
//
// var interval = window.setInterval(sayHello, 1000)

// console.log(calculator.sum(1,1))
// console.log(calculator.multiply(10,10))
// console.log(calculator.difference(10,1))

function init(){
  console.log("I'm Ready")
  var name = prompt("What's your name?")
  var counter = 0
  function hello(){
    counter = counter + 1
    document.getElementById("demo").innerHTML = "Hello Wrold! " + counter
  }
  setInterval(hello,100)
}
