function playGame() {
	let human = 0;
	let computer = 0;

	const battle = document.querySelector(".battle");
	const playerScore = document.querySelector(".playerScore");
	const computerScore = document.querySelector(".computerScore");
	
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
			battle.textContent = "It's a tie!";
			return;
		}

		if (
			(humanChoice === "rock" && computerChoice === "scissors") ||
			(humanChoice === "paper" && computerChoice === "rock") ||
			(humanChoice === "scissors" && computerChoice === "paper")
		) {
			battle.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
			++human;
		} else {
			battle.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
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
