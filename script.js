// Grab you all your element
const container = document.querySelector(".container")
const questionsH2 = document.querySelector(".questions")
const answer1 = document.querySelector("#A")
const answer2 = document.querySelector('#B');
const answer3 = document.querySelector('#C');
const answer4 = document.querySelector('#D');
const answer5 = document.querySelector('#E');
const button = document.querySelector(".next")
const button2 = document.querySelector(".start")
const score =  document.querySelector(".score2")
const img = document.querySelector(".img")
const game = document.querySelector(".gameOver")





let currentIndex = 0
let score1 = 0 


// create an array of questions 
let question = [
	{
		question: 'Who is the shortest player to win the slam dunk contest ',
		imgSrc: 'images/spud.jpg',
		answerA: 'Spud Webb ',
		answerB: 'Mugssy Bogues',
		answerC: 'Nate robison',
		answerD: 'Isaiah Thomas',
		correctAnswer: 'A',
	},
	{
		question: 'Who was the first player to win 8 NBA scoring title ',
		imgSrc: 'images/GoatAnswer.jpg',
		answerA: 'Allen Iverson',
		answerB: 'Kevin Durant',
		answerC: 'Kobe Byrant',
		answerD: 'Michael Jordan',
		correctAnswer: 'D',
	},

	{
		question: 'What was Dennis Rodman career high in rebounds ',
		imgSrc: 'images/dennis.jpg',
		answerA: 40,
		answerB: 44,
		answerC: 34,
		answerD: 30,
		correctAnswer: 'C',
	},

	{
		question: 'What former NBA Player won a heisman Trophy',
		imgSrc: 'images/heisman.jpeg',
		answerA: 'Allen Iverson',
		answerB: 'Nate Robinson',
		answerC: 'Lebron James ',
		answerD: 'Charlie Ward',
		correctAnswer: 'D',
	},
	{
		question: 'What country is NBA basketball player Yao Ming originally from ',
		imgSrc: 'images/yaoGif.gif',
		answerA: 'Japan',
		answerB: 'Russia',
		answerC: 'France',
		answerD: 'China',
		correctAnswer: 'D',
	},
	{
		question: 'Which team did Shaquille Oneal officially retire with ',
		imgSrc: 'images/shaqgif.gif',
		answerA: 'La Lakers',
		answerB: 'Phonix Suns',
		answerC: 'Orlando Magic',
		answerD: 'Boston Celtics',
		correctAnswer: 'D',
	},
	{
		question: 'How many dunk contest did Nate Robison win',
		imgSrc: 'images/nategif.gif',
		answerA: 2,
		answerB: 1,
		answerC: 4,
		answerD: 3,
		correctAnswer: 'D',
	},

	{
		question:'How many MVP does Lebron James Have',
		imgSrc: 'images/lebron.gif',
		answerA: 5,
		answerB: 2,
		answerC: 4,
		answerD: 3,
		correctAnswer: 'C',
	},
];

// creating variables
questionsH2.innerText = question[currentIndex].question
answer1.innerText = question[currentIndex].answerA
answer2.innerText = question[currentIndex].answerB
answer3.innerText = question[currentIndex].answerC
answer4.innerText = question[currentIndex].answerD
score.innerHTML = score1;

 function scoreUpdate (){
  score.innerHTML = score1
 }

const ansArray = [answer1, answer2, answer3, answer4, ];

game.style.display = 'none';



// add event listener for next button // 
button.addEventListener("click",(event) =>{
	currentIndex++
	
	if (currentIndex === question.length) {
		game.style.display = 'block'
		container.style.display = 'none'
	}else {
	questionsH2.innerText = question[currentIndex].question;
	answer1.innerText = question[currentIndex].answerA;
	answer2.innerText = question[currentIndex].answerB;
	answer3.innerText = question[currentIndex].answerC;
	answer4.innerText = question[currentIndex].answerD;
	img.src = question[currentIndex].imgSrc;
	}
})



// setting the correct answer and incrementing the score 
ansArray.forEach((eachEl) =>{
    
	eachEl.addEventListener("click",(event) =>{
		if (eachEl.id === question[currentIndex].correctAnswer) {
			score1++
			scoreUpdate()
			alert("You're Right")
		}else {
		alert("Wrong Please Try Again")
		}

	})
})

// creating the start button 
container.style.display = 'none';
button2.addEventListener('click',(event) =>{
button2.style.display = "none"
container.style.display = 'block';
   

})
