function playGame() {
	let humanScore = 0;
	let computerScore = 0;

	function getComputerChoice() {
		let num = Math.random() * 3;
		if (num < 1) return "rock";
		if (num < 2) return "paper";
		return "scissors";
	}

	function playRound(humanChoice, computerChoice) {
		console.log(
			`You went for ${humanChoice}, your opponent went for ${computerChoice}!`
		);

		if (humanChoice == computerChoice) {
			console.log("It's a tie!");
		}

		if (
			(humanChoice === "rock" && computerChoice === "scissors") ||
			(humanChoice === "paper" && computerChoice === "rock") ||
			(humanChoice === "scissors" && computerChoice === "paper")
		) {
			console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
			++humanScore;
		} else {
			console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
			++computerScore;
		}
	}

	function userChoice(event) {
		const humanChoice = event.target.id;
		const computerChoice = getComputerChoice();
		playRound(humanChoice, computerChoice);
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
