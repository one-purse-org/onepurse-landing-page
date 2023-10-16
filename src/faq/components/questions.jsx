import "../../styles/faq/question.css"
import questions from "./faqQuestion";

function Accordion(props){

    return(
        <div className="accordion accordion-flush">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#" + props.target}>
                    {props.head}
                </button>
                </h2>
                <div id={props.target} className="accordion-collapse collapse">
                <div className="accordion-body">
                    {props.body}
                </div>
                </div>
            </div>
        </div>
        
    )
}

function Questions(){
    
   

    function handleScroll(){
        let questionsContainer = document.querySelector(".question-container");
        let scrolled = questionsContainer.scrollTop;

        let questionContainerOne = document.querySelector(".first-question");
        let questionContainerTwo = document.querySelector(".second-question");
        let questionContainerThree = document.querySelector(".third-question");
    
        let questionContainerOneHeight = questionContainerOne.clientHeight;
        let questionContainerTwoHeight = questionContainerTwo.clientHeight;
        let questionContainerThreeHeight = questionContainerThree.clientHeight;

        scrolled < questionContainerOneHeight && performChange()
        scrolled >= questionContainerOneHeight && performChange("one");
        scrolled >= questionContainerOneHeight + questionContainerTwoHeight - 10 && performChange("two")
    }

    function performChange(theScrolledOne){
        let questionContainerOne = document.querySelector(".faqQuestionOne");
        let questionContainerTwo = document.querySelector(".faqQuestionTwo");
        let questionContainerThree = document.querySelector(".faqQuestionThree");
        if (theScrolledOne === "one"){
            questionContainerTwo.classList.add("active-scroll")
            questionContainerOne.classList.remove("active-scroll")
            questionContainerThree.classList.remove("active-scroll")
        }else if(theScrolledOne === "two"){
            questionContainerThree.classList.add("active-scroll")
            questionContainerOne.classList.remove("active-scroll")
            questionContainerTwo.classList.remove("active-scroll")
        }else{
            questionContainerThree.classList.remove("active-scroll")
            questionContainerOne.classList.add("active-scroll")
            questionContainerTwo.classList.remove("active-scroll")
        }
    }

    function handleClick(number){
        let questionsContainer = document.querySelector(".question-container");

        if (number==="one"){
            let questionContainerHeight = 0
            questionsContainer.scrollTop = questionContainerHeight
            performChange()
        }else  if (number==="two"){
            let questionContainer = document.querySelector(".first-question");
            let questionContainerHeight = questionContainer.clientHeight
            questionsContainer.scrollTop = questionContainerHeight
            performChange("one")
        }else  if (number==="three"){
            let questionContainerOne = document.querySelector(".second-question");
            let questionContainerTwo = document.querySelector(".first-question")
            let questionContainerHeight = questionContainerOne.clientHeight + questionContainerTwo.clientHeight
            questionsContainer.scrollTop = questionContainerHeight
            performChange("two")
        }   
    }

    return(
        <div className="questions">
            <div className="container questions-container">
                <div className="link">
                    <p onClick={()=>{handleClick("one")}} className='faqQuestions active-scroll faqQuestionOne'>Account Setup</p>
                    <p onClick={()=>{handleClick("two")}} className='faqQuestions faqQuestionTwo'>Sending Money</p>
                    <p onClick={()=>{handleClick("three")}} className='faqQuestions faqQuestionThree'>Security</p>
                </div>
                <div className="question-container" onScroll={handleScroll}>
                    <div className="first-question">
                        {questions.accountSetup.map(question=> <Accordion key={question.key} head={question.head} body={question.body} target={question.target} /> )}
                    </div>
                    <div className="second-question">
                        {questions.sendingMoney.map(question=> <Accordion key={question.key} head={question.head} body={question.body} target={question.target} /> )}
                    </div>
                    <div className="third-question">
                        {questions.security.map(question=> <Accordion key={question.key} head={question.head} body={question.body} target={question.target} /> )}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Questions;