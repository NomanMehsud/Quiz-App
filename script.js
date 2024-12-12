const questions = [
    {
        question: "What does HTML stant for",
        answer: [
            {Text:"Hypertext Markup Language"},
            {Text:"Hyper Transfer Markup Language"},
            {Text:"Hypertext Marchine Language"},
            {Text:"Hyperlink and Text Markup Language"},
        ],
        correct: "Hypertext Markup Language",
    },
    {
        question: "Which CSS property is used to control the spacing between elements",
        answer: [
            {Text:"padding"},
            {Text:"margin"},
            {Text:"spacing"},
            {Text:"border-spacing"}],
        correct: "margin",
    },
    {
        question: "What is the capital of Pakistan",
        answer:[
            {Text:"Lahore"},
            {Text:"Karachi"},
            {Text:"Islamabad"},
            {Text:"Peshawer"}
        ],
        correct: "Lahore",
    } 
]

const questionElement = document.querySelector(".question");
const answerButton = document.querySelector(".question-answer");
const nextBtn =document.querySelector(".next-btn");

let currentIndex = 0;
let score = 0;

function startQuiz(){
    currentIndex = 0;
    score = 0;
    nextBtn.style.display = "none";
    nextBtn.innerHTML = "Next";
    quitData();
    
}

function quitData(){
    resetState();
    let currentquestion = questions[currentIndex];
    let questionNo = currentIndex+1;
    questionElement.innerHTML = questionNo + "." + currentquestion.question


    currentquestion.answer.forEach(answer => {
        console.log(answer);
        let button = document.createElement("button");
        button.innerHTML =answer.Text;
        button.classList.add("btn");
        answerButton.append(button);
        button.addEventListener("click" , (e)=>{
            let selectbtn = e.target;
            if(answer.Text === currentquestion.correct){
                selectbtn.classList.add("correct");
                score++;
            }else{
                selectbtn.classList.add("inncorrect");
            }

            Array.from(answerButton.children).forEach(button =>{
                if(answer.Text === currentquestion.correct){
                    selectbtn.classList.add("correct");
                }
                button.disabled = true;
            })
            nextBtn.style.display = "block";
            
        })
    });
}


    function resetState(){
        while(answerButton.firstChild){
            answerButton.removeChild(answerButton.firstChild);
        }
    }
    function ShowScore(){
        resetState();
        questionElement.innerHTML= `you scored ${score} out of ${questions.length}`;
        //nextBtn.style.display = "block";
        nextBtn.innerHTML = "Play Again";
    }
    

    function handelNextButtoon(){
        currentIndex++;
        if(currentIndex < questions.length){
            quitData();
            nextBtn.style.display = "none";
        }else{
            ShowScore();
        }
        // nextBtn.style.display = "block";
    }
    
    
    nextBtn.addEventListener("click" , ()=> {
    
        if(currentIndex < questions.length){
            handelNextButtoon();
        }else{
            startQuiz();
        }
    })
startQuiz();
// btn.addEventListener("click" , quitData() )