// rock | paper | scissors
function decideWinner( computer, user ){
    var winner
    if( user===computer ){
        // they are TIED
        winner = "tied"

    } else if( user==='rock' ){
        if( computer==="paper" ){
            winner = "computer"
        } else {
            winner = "you"
        }
    } else if( user==="paper" ){
        if( computer==="scissors" ){
            winner = "computer"
        } else {
            winner = "you"
        }
    } else if( user==="scissors" ){
        if( computer==="rock" ){
            winner = "computer"
        } else {
            winner = "you"
        }
    }
    return winner
}

// some TESTING
// var computer = 'rock'
// var user = 'rock'
// var result = decideWinner( computer, user )
// console.log( `computer(${computer}) user(${user})  --> winner: ${result}` )

// var computer = 'paper'
// var user = 'rock'
// var result = decideWinner( computer, user )
// console.log( `computer(${computer}) user(${user})  --> winner: ${result}` )

// var computer = 'rock'
// var user = 'scissors'
// var result = decideWinner( computer, user )

// var computer = 'paper'
// var user = 'scissors'
// var result = decideWinner( computer, user )
// console.log( `computer(${computer}) user(${user})  --> winner: ${result}` )

// var computer = 'scissors'
// var user = 'rock'
// var result = decideWinner( computer, user )
// console.log( `computer(${computer}) user(${user})  --> winner: ${result}` )