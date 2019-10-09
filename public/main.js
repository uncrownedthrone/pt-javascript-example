let teamOneScore = 0;
let teamTwoScore = 0;

const teamOneScoreText = document.querySelector('.team-1-score');
teamOneScoreText.textContent = teamOneScore;

const teamTwoScoreText = document.querySelector('.team-2-score');
teamTwoScoreText.textContent = teamTwoScore;

const teamOneAddOne = () => {
	teamOneScore += 1;
	teamOneScoreText.textContent = teamOneScore;
	if (teamOneScore > 7) {
		teamOneScoreText.getElementsByClassName.color = 'yellow';
	}
	if (teamOneScore === 10) {
		scoreReachesTen();
	}
};

const teamTwoAddOne = () => {
	teamTwoScore += 1;
	teamTwoScoreText.textContent = teamTwoScore;
	if (teamTwoScore === 10) {
		teamTwoScoreReachesTen();
	}
};

// creating a function to subtract 1 and return new score
const teamOneSubtractOne = () => {
	teamOneScore -= 1;
	teamOneScoreText.textContent = teamOneScore;
};

const teamTwoSubtractOne = () => {
	teamTwoScore -= 1;
	teamTwoScoreText.textContent = teamTwoScore;
};

// when team one score reaches 10 turn score red
const scoreReachesTen = () => {
	teamOneScoreText.style.color = 'red';
};

const main = () => {
	document
		.querySelector('button.team-1-add-1-button')
		.addEventListener('click', teamOneAddOne);
	document
		.querySelector('button.team-1-subtract-1-button')
		.addEventListener('click', teamOneSubtractOne);
	document
		.querySelector('button.team-2-add-1-button')
		.addEventListener('click', teamTwoAddOne);
	document
		.querySelector('button.team-2-subtract-1-button')
		.addEventListener('click', teamTwoSubtractOne);
};

document.addEventListener('DOMContentLoaded', main);
