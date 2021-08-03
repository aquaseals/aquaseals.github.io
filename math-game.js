let easy = document.getElementById('easy');
let medium = document.getElementById('medium');
let hard = document.getElementById('hard');
let user_answer = document.getElementById('answer');
let question = document.getElementById('question');
let submit = document.getElementById('submit');
let difficulty = ""
let choices = document.getElementById("choices")
let quiz = document.getElementById('quiz')
let endStatement = document.getElementById('result')
let percentage = document.getElementById('percentage')
let result = []
let questionQuantity = 15
var answer = 0




function hide() {
    percentage.style.display = "none"
    quiz.style.display = "none";
    endStatement.style.display = "none";
};

function generateQuestion(difficulty) {
    let firstNum = Math.floor(Math.random() * 21)
    let secondNum = Math.floor(Math.random() * 21)
    let operator
    if (difficulty === "easy") {
        operator = " + "
        answer = firstNum+secondNum
        

    } else if (difficulty === "medium") {
        if (secondNum > firstNum) {
            secondNum = Math.floor(Math.random() * (firstNum+1))
        }
        operator = " - "
        answer = firstNum-secondNum
        

    } else if (difficulty === "hard") {
        let operation = Math.floor(Math.random() * 2)
        
        if (operation === 0) {
            operator = " + "
            answer = firstNum+secondNum
        } else {
            if (secondNum > firstNum) {
                secondNum = Math.floor(Math.random() * (firstNum+1))
            }
            operator = " - "
            answer = firstNum-secondNum
            
        }
    }
    let questionParts = {
        "firstNum" : firstNum,
        "secondNum" : secondNum,
        "operator" : operator,
        "correctAnswer" : answer
    }
    let questionText = firstNum + operator + secondNum + " = "
    question.textContent = questionText
    return questionParts
}

function showResult(result) {
    endStatement.style.display = "flex";
    quiz.style.display = "none";
    percentage.style.display = "block"
    for (let i = 0; i < result.length; i++) {
        let listItem = result[i]["firstNum"] + result[i]["operator"] + result[i]["secondNum"] + " | " + result[i]["correctAnswer"] + " " + result[i]["userAnswer"]
        document.getElementById("" + (i+1)).textContent = listItem
    }
    

}

function findPercentage(result) {
    let userCorrectAnswers = 0
    for (let i = 0; i < result.length; i++) {
        if (result[i]["correctAnswer"] === parseInt(result[i]["userAnswer"])) {
            userCorrectAnswers++
        }

    }
    a = 100/result.length
    percentageValue = a * userCorrectAnswers
    return percentageValue
    
}

easy.addEventListener("click", function() {
    quiz.style.display = "block";
    choices.style.display = "none"
    difficulty = "easy"
    answer = generateQuestion(difficulty)


});

medium.addEventListener("click", function() {
    quiz.style.display = "block";
    choices.style.display = "none"
    difficulty = "medium"
    answer = generateQuestion(difficulty)


});

hard.addEventListener("click", function() {
    quiz.style.display = "block";
    choices.style.display = "none"
    difficulty = "hard"
    answer = generateQuestion(difficulty)

});

let questionNum = 0;
submit.addEventListener("click", function() {
    if (user_answer.value === "") {
        alert("You can't skip questions, please answer the question")
    } else {
        answer.userAnswer = user_answer.value
        result.push(answer)
        console.table(result)
        answer = generateQuestion(difficulty)
        questionNum++
        if (questionNum === questionQuantity) {
            showResult(result)
            percentage.textContent = findPercentage(result) + "% correct"
        }
        user_answer.value = ""
    }

    

})



