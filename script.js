function playGame() {
	let human = 0;
	let computer = 0;

	const WINNING_SCORE = 5;

	const battle = document.querySelector(".battle");
	const playerScore = document.querySelector(".playerScore");
	const computerScore = document.querySelector(".computerScore");
	
	function getComputerChoice() {
		let num = Math.random() * 3;
		if (num < 1) return "Rock";
		if (num < 2) return "Paper";
		return "Scissors";
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
			(humanChoice === "Rock" && computerChoice === "Scissors") ||
			(humanChoice === "Paper" && computerChoice === "Rock") ||
			(humanChoice === "Scissors" && computerChoice === "Paper")
		) {
			battle.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
			playerScore.textContent = `🧑 ${++human}`;
		} else {
			battle.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
			computerScore.textContent = `${++computer} 🤖`;
		}
		
		if (human === WINNING_SCORE || computer === WINNING_SCORE) {
			if (human === WINNING_SCORE) {
				battle.textContent = "🎉 Game over! You win!";
			} else {
				battle.textContent = "💀 Game over! You lose!";
			}
			disableButtons();
		}
	}

	function userChoice(event) {
		if (event.target.tagName !== "BUTTON") return;
		const humanChoice = event.target.id;
		const computerChoice = getComputerChoice();
		playRound(humanChoice, computerChoice);
	}

	function disableButtons() {
		const allButtons = document.querySelectorAll(".buttons button");
		allButtons.forEach(button => button.disabled = true);
	}

	const buttons = document.querySelector(".buttons");
	buttons.addEventListener("click", userChoice);

}

playGame();
