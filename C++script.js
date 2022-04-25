const quizData = [
    {
        question: "What is a correct syntax to output 'Hello World' in C++?",
    answer: "b",
    a:"System.out.println('Hello World');",
    b:  "cout <<'Hello World';",
    c:  "Console.WriteLine('Hello World');",
    d:  "Print ('Hello World');"
    },
    {
        question: "How do you insert COMMENTS in C++ code?",
      answer: "a",
    a:"//This is a comment",
    b:"/*This is a comment",
    c:"#This is a comment",
    d:"<--This is a comment"
    },
    {
        question: "How do you create a variable with the numeric value 5?",
        answer: "d",
        a:"x = 5;",
        b:  "num x = 5;",
        c:  "double x = 5;",
        d:  "int x = 5;"
    },
    {
        question: "How do you create a variable with the floating number 3.5?",
        answer: "c",
        a:"int x = 3.5;",
        b:  "byte x = 3.5;",
        c:  "double x = 3.5;",
        d:  "x = 3.5;"
    },
    {
        question: "Which method can be used to find the length of a string?",
        answer: "a",
        a: "length()",
        b:  "getSize()",
        c:  "getLength",
        d:  "len()"
    },
    {
        question: "How do you start writing a while loop in C++?",
        answer: "a",
       a: "while (x > y)",
       b:   "x > y while {",
       c:   "while x > y {",
       d:   "while x > y:"
    },
    {
        question: "Which operator can be used to compare two values?",
        answer: "d",
        a: "=",
        b:  "><",
        c:  "<>",
        d:  "=="
    },
    {
       
        question: "Array indexes start with:",
        answer: "a",
        a:  "0",
        b:  "1",
        c:  "-1",
        d:  "2"
    },
    {
        question: "How do you start writing an if statement in C++?",
        answer: "c:",
        a:"if x > y",
        b:  "if x > y then",
        c:  "if (x > y)"
    },
    {
        question: "Which keyword is used to return a value inside a method?",
        answer: "a",
       a: "return",
       b:   "void",
       c:   "break",
       d:   "get"
    },

];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].answer) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})