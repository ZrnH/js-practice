// rock / paper / scissors
isGameOver = false

while( !isGameOver ){
  // do all my stuff
  var move = parseInt(prompt("Rock! paper! scissors! enter 1 for rock, enter 2 for paper, and enter 3 for scissors"))
  // computer's move
  var computer = Math.floor(Math.random() * ( 4 - 1 ) + 1)

console.log(move)
console.log(computer)

//game logic
if( move === computer ){
  console.log("it's a tie!")
} else if( move === 1 && computer === 3 ) { // rock beat scissors
  console.log( "you win!")
  console.log( "rocks beat scissors")
} else if ( move === 2 && computer === 1){ // paper beats rocks
  console.log("you win!")
  console.log("paper beats rock!")
} else if( move === 3 && rock === 2 ){ //scissors beats paper
  console.log("you win!")
  console.log("scissors beats paper!")
}
else{
  console.log("computer wins!")
}

var playerResponse = prompt("Do you wanna play again? y/n?")

if ( playerResponse === "y"){
  isGameOver = false
}
else { isGameOver = true
}
}
