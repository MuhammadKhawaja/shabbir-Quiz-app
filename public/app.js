var quizData = [{
    question: "HTML stands for ?",
    a: "Hyper Type marks language",
    b: "Hyper Text markee language",
    c: "Hyper Link markup language",
    d: "Hyper Text makeup language",
    correct: "d",
},
{
    question: "CSS stands for ?",
    a: "Cascading Style sheet",
    b: "Cascading Styling Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "Which tag gives your the largest heading in html ?",
    a: "<h2>",
    b: "<h1>",
    c: "<h6>",
    d: "<h4>",
    correct: "b",
},
{
    question: "In how many ways can CSS be written in ?",
    a: "1",
    b: "3",
    c: "5",
    d: "2",
    correct: "b",
}
];
var index = 0;
var correct = 0,
incorrect = 0,
total = quizData.length;
var questionBox = document.getElementById("questionBox");
var allInputs = document.querySelectorAll("input[type='radio']")
var loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
var data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    var data = quizData[index]
    var ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

var getAnswer = () => {
var ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

var reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

var quizEnd = () => {
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Hii, you've scored ${correct} / ${total}  </h3>
    </div>
`
}
loadQuestion(index);