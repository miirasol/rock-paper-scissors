function getComputerChoice() {
	let result = "";
	let num = Math.random() * 3;

	console.log(num);
	if (num < 1) {
		return (result = "rock");
	}

	if (num < 2) {
		return (result = "paper");
	}

	return (result = "scissors");
}

function getHumanChoice() {
	let choice = prompt("Enter rock/paper/scissors");

	return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
	humanChoice = humanChoice.toLowerCase();
	computerChoice = computerChoice.toLowerCase();

	if (
		humanChoice != "rock" ||
		humanChoice != "paper" ||
		humanChoice != "scissors"
	) {
		return;
	}

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
			console.log("You lose! scissors beats paper.");
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
