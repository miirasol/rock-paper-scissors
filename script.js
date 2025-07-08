function playGame() {
	let human = 0;
	let computer = 0;

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
			++human;
		} else {
			console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
			++computer;
		}
	}

	function userChoice(event) {
		const humanChoice = event.target.id;
		const computerChoice = getComputerChoice();
		playRound(humanChoice, computerChoice);
	}

	const buttons = document.querySelector(".buttons");

	buttons.addEventListener("click", userChoice);
}

playGame();
