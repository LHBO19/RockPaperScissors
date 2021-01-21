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
