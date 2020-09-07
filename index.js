// Random Number
var randomNumber = Math.floor(Math.random() * 100) + 1;

// Result Paras
var guesses = document.querySelector(".guesses");
var lastResult = document.querySelector(".lastResult");
var lowORhigh = document.querySelector(".lowORhigh");

var guessSubmit = document.querySelector(".guessSubmit");
var guessField = document.querySelector(".guessField");

var guessCount = 1;
var resetButton

// 새로운 게임을 시작할 때 초기의 값으로 변경하는 함수
function resetGame(){
    guessCount = 1;

    var resetParas = document.querySelectorAll('.resultParas p');
    for (let i = 0; i < resetParas.length; i++){
        resetParas[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disable = false;
    guessSubmit.disable = false;
    guessField.value = '';
    guessField.focus();

    lastResult.getElementsByClassName.backgroundColor = 'white';

    randomNumber = Math.floor(Math.random() * 100) + 1;
}

// 게임의 종료를 알리는 함수
function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

// 게임의 전체적인 동작을 이루는 함수
function checkGuess(){
    var userGuess = Number(guessField.value);
    
    // 플레이어의 차례가 첫번쨰인지 판단한다.
    if (guessCount === 1){
        guesses.textContent = 'Previous guesses: ';
    }
    
    // 입력한 각 숫자에 대해서 나열해 보여준다.
    guesses.textContent += userGuess + ' ';

    // 사용자가 입력한 숫자를 전체적으로 판단하는 조건문이다.
    if (userGuess === randomNumber){
        lastResult.textContent = 'Congratualations! you got it right!';
        lastResult.style.backgroundColor = 'green';
        lowORhigh.textContent = '';
        setGameOver();
    } else if (guessCount === 10){
        lastResult.textContent = "****GAME OVER****";
        setGameOver();
    } else {
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = 'orange';
        if (userGuess < randomNumber){
            lowORhigh.textContent = 'Last guess was too low!';
        } else if (userGuess > randomNumber){
            lowORhigh.textContent = 'Last guess was too high!';
        }
    }

    // 사용자가 입력한 차례를 카운트한다. 추가로, field를 공백으로 만들며 커서를 위치시킨다.
    guessCount++;
    guessField.value = '';
    guessField.focus();
}

// Listen 상태에서 guessSubmit에 대한 click event 발생 시 해당 함수 실행
guessSubmit.addEventListener("click", checkGuess)

