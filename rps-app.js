let rock_div = document.getElementById('Rock');
let paper_div = document.getElementById('Paper');
let scissors_div = document.getElementById('Scissors');
let user_score_span = 0;
let computer_score_span = 0;
let result_div = document.getElementById('result');

function play(soundFile) {
    var audio = new Audio(soundFile);
    audio.play();
};

function win(userChoice, compChoice,imgid){
    user_score_span++
    document.getElementById('user-score').innerHTML = user_score_span
    result_div.innerHTML = userChoice + 'user'.fontsize(4).sub() + ' beats ' + compChoice +  'comp'.fontsize(4).sub() + '. You win! 🔥👍🏽';
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('green-glow')}, 300);
    var a = document.getElementById('winSound');
    play('sounds/win.mp3');

}
function lose(userChoice, compChoice, imgid) {
    computer_score_span++
    document.getElementById('computer-score').innerHTML = computer_score_span
    result_div.innerHTML = userChoice + 'user'.fontsize(4).sub() + ' loses to ' + compChoice + 'comp'.fontsize(4).sub() +'. You lose... 😟';
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('red-glow')}, 300);
    var b = document.getElementById('loseSound')
    play('sounds/lose.mp3');
}
function draw(userChoice, compChoice) {
    result_div.innerHTML = userChoice + 'user'.fontsize(4).sub() + ' equals ' + compChoice + 'comp'.fontsize(4).sub() + " . It's a draw";
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('gray-glow')}, 300);
}

function game(userChoice, compChoice,imgid) {
    console.log(userChoice + compChoice)
    switch (compChoice) {
        case 0:
            compChoice = 'Rock';
            break;
        case 1:
            compChoice = 'Paper';
            break;
        case 2:
            compChoice = 'Scissors';
            break;
    }
    console.log(userChoice+compChoice)
    switch (userChoice + compChoice) {
        case 'RockScissors':
        case 'ScissorsPaper':
        case 'PaperRock':
            win(userChoice, compChoice,imgid);
            break;
        case 'ScissorsRock':
        case 'PaperScissors':
        case 'RockPaper':
            lose(userChoice, compChoice,imgid);
            break;
        case 'RockRock':
        case 'PaperPaper':
        case 'ScissorsScissors':
            draw(userChoice, compChoice,imgid);
            break;

    }
}

rock_div.addEventListener('click', function() {
    let compChoice =Math.floor(Math.random(0, 3) * 3);
    let userChoice = 'Rock'
    game(userChoice, compChoice)
})

paper_div.addEventListener('click', function() {
    let compChoice =Math.floor(Math.random(0, 3) * 3);
    let userChoice = 'Paper'
    game(userChoice, compChoice)
})
scissors_div.addEventListener('click', function() {
    let compChoice =Math.floor(Math.random(0, 3) * 3);
    let userChoice = 'Scissors'
    game(userChoice, compChoice)
})