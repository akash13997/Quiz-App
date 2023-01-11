const quizDB = [
    {
        question: "Q1: What is the full form of HTML?",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "HyperText Markup Language",
        d: "Hypertext Markup Language",
        ans: "ans4"
    },
    {
        question: "Q2: What is the full form of CSS?",
        a: "Cascading Style Sheets",
        b: "Cascading Style Sheep",
        c: "Cartoon Style Sheets",
        d: "Cascading Super Sheets",
        ans: "ans1"
    },
    {
        question: "Q3: What is the full form of HTTP?",
        a: "Hypertext Transfer Product",
        b: "Hypertext Test Proticol",
        c: "Hey Markup Language",
        d: "Hypertext Transfer Protocol",
        ans: "ans4"
    },
    {
        question: "Q4: What is the full form of JS?",
        a: "JavaScript",
        b: "JAvaSuper",
        c: "Just Script",
        d: "JhonyScript",
        ans: "ans1"
    }
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");
const showScore = document.querySelector("#showScore");

let index = 0;
let correctAns = 0;



const loadQuestion = () =>{
    let data = quizDB[index]
    question.innerText = data.question;
    option1.innerText = data.a;
    option2.innerText = data.b;
    option3.innerText = data.c;
    option4.innerText = data.d;

}



loadQuestion();

const getCheckAnswer=()=>{
    let answer;
    answers.forEach((curAnsElem)=>{
       if(curAnsElem.checked){
        answer = curAnsElem.id;
       };
    });
    return answer;
};

const deselectAll=()=>{
    answers.forEach((curAnsElem)=> curAnsElem.checked = false);
}

submit.addEventListener('click', ()=>{
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
    if(checkedAnswer === quizDB[index].ans){
        correctAns++;
    };
    index++;
    deselectAll();
    if(index < quizDB.length){
        loadQuestion();
    } else{
        showScore.classList.remove("scoreArea")
        showScore.innerHTML = `
        <h3> Your Score is ${correctAns} out of ${index}</h3>
        <button class="btn" onclick="location.reload()"> Play Again </button>
        `;
    }
});