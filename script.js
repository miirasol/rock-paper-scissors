function getComputerChoice() {
	let num = Math.random() * 3;

	if (num < 1) {
		return 'rock';
	}

	if (num < 2) {
		return 'paper';
	}

	return 'scissors';
}

function getHumanChoice() {
	
    let choice = '';

    while (true) {
        choice = prompt('Enter rock/paper/scissors: ');
		choice = choice.toLowerCase();
        if (choice == 'rock' ||
            choice == 'paper' ||
            choice == 'scissors'
        ) {
            break;
        }

        console.log("Invalid input.");
    }

	return choice;
}

function playGame() {
	let humanScore = 0;
	let computerScore = 0;

	function playRound(humanChoice, computerChoice) {
	console.log(
		`You went for ${humanChoice}, your opponent went for ${computerChoice}!`
	);

	if (humanChoice == computerChoice) {
		console.log("It's a tie!");
	}

	if (humanChoice == "rock") {
		if (computerChoice == "scissors") {
			console.log("You win! Rock beats scissors.");
			humanScore++;
			return;
		}
		if (computerChoice == "paper") {
			console.log("You lose! Paper beats rock.");
			computerScore++;
			return;
		}
	}

	if (humanChoice == "paper") {
		if (computerChoice == "rock") {
			console.log("You win! Paper beats rock.");
			humanScore++;
			return;
		}
		if (computerChoice == "scissors") {
			console.log("You lose! Scissors beats paper.");
			computerScore++;
			return;
		}
	}

	if (humanChoice == "scissors") {
		if (computerChoice == "rock") {
			console.log("You lose! Rock beats scissors.");
			computerScore++;
			return;
		}
		if (computerChoice == "paper") {
			console.log("You win! Scissors beats paper.");
			humanScore++;
			return;
		}
	}
}

	console.log(`Your score: ${humanScore}`);
	console.log(`Computer score: ${computerScore}`);

	if (humanScore > computerScore) {
		console.log("You win!");
	} else if (humanScore < computerScore) {
		console.log("You lose!");
	} else {
		console.log("It's a tie.");
	}
}

playGame();
