const quizData = [
    {
        question: "What is a correct syntax to output 'Hello World' in Java?",
    answer: "d",
    a: "echo('Hello World');",
    b:  "Console.WriteLine('Hello World');",
    c:  "print ('Hello World');",
    d:  "System.out.println('Hello World');"
    },
    {
        question: "How do you insert COMMENTS in Java code?",
      answer: "b",
     a:   "# This is a comment",
     b:   "// This is a comment",
     c:   "/* This is a comment",
     d:  "<--This is a comment"
    },
    {
        question: "How do you create a method in Java?",
        answer: "c",
          a: "methodName.",
          b: "(methodName)",
          c: "methodName()",
          d: "methodNames()"
    },
    {
        question: "Which operator is used to add together two values?",
        answer: "a",
         a: "The + sign",
         b: "The & sign",
         c: "The = sign ",
         d: "The * sign"
    },
    {
        question: "Which method can be used to find the length of a string?",
        answer: "a",
         a: "length()",
         b: "getSize()",
         c: "getLength",
         d: "len()"
    },
    {
        question: "To declare an array in Java, define the variable type with:",
        answer: "d",
          a:"<>",
          b:"()",
          c:"{}",
          d:"[]"
    },
    {
        question: "Which operator can be used to compare two values?",
        answer: "d",
          a:"=",
          b:"><",
          c:"<>",
          d:"=="
    },
    {
        question: "Which keyword is used to create a class in Java?",
        answer: "b",
        a:"className",
        b:  "class",
        c:  "class()",
        d:  "MyClass"
    },
    {
        question: "Which keyword is used to import a package from the Java API library?",
        answer: "b",
        a: "lib",
        b:  "import",
        c:  "package",
        d:  "getlib"
    },
    {
        question: "Which statement is used to stop a loop?",
        answer: "c",
        a:"return",
        b:  "exit",
        c:  "break",
        d:  "stop"
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
           <button1 onclick="window.location.href='outof.html'" >Exit</button1>
           `
       }
    }
})