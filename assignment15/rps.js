function rps(player1, player2) {
    if ( player1 == "r") {
        if (player2 == "r") {
            return "Tie"
        } else if (player2 == "p") {
            return "Paper beats rock. Player 1 wins."
        } else if (player2 == "s") {
            return "Rock beats scissors. Player 1 wins."
        } else {
            return "Player 2 made an invalid selection."
        }
    } else if ( player1 == "p") {
        if (player2 == "r") {
            return "Paper beats rock. Player 2 wins."
        } else if (player2 == "p") {
            return "Tie"
        } else if (player2 == "s") {
            return "Scissors beats paper. Player 2 wins."
        } else {
            return "Player 2 made an invalid selection."
        }
    } else if ( player1 == "s") {
        if (player2 == "r") {
            return "Rock beats scissors. Player 2 wins."
        } else if (player2 == "p") {
            return "Scissors beats paper. Player 1 wins."
        } else if (player2 == "s") {
            return "Tie"
        } else {
            return "Player 2 made an invalid selection."
        }
    } else {
        return "Player 1 made an invalid selection."
    }
}

function rpsTest(name, expected, actual){
    if (expected == actual){
        console.log(name + "\nTest passed.")
    } else {
        console.log(name + "\nTest failed." + "\nExpected: " + expected + "\nActual: " + actual)
    }
}

// i - invalid value

// r r
rpsTest("r r", "Tie", rps("r", "r"))

// r p
rpsTest("r p", "Paper beats rock. Player 1 wins.", rps("r", "p"))

// r s
rpsTest("r s", "Rock beats scissors. Player 1 wins.", rps("r", "s"))

// p r
rpsTest("p r", "Paper beats rock. Player 2 wins.", rps("p", "r"))

// p p
rpsTest("p p", "Tie", rps("p", "p"))

// p s
rpsTest("p s", "Scissors beats paper. Player 2 wins.", rps("p", "s"))

// s r
rpsTest("s r", "Rock beats scissors. Player 2 wins.", rps("s", "r"))

// s p
rpsTest("s p", "Scissors beats paper. Player 1 wins.", rps("s", "p"))

// s s
rpsTest("s s", "Tie", rps("s", "s"))

// i s
rpsTest("i s", "Player 1 made an invalid selection.", rps("i", "s"))

// s i
rpsTest("s i", "Player 2 made an invalid selection.", rps("s", "i"))