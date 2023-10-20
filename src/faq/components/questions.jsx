import "../../styles/faq/question.css"
import questions from "./faqQuestion";
import { useState } from "react";

function Accordion(props){
    let scrolled = false
    function scrollUpOrDown(){
        let scroll = window.scrollY
        if(scrolled === false){
            window.scrollTo(scroll, scroll + 70)
            scrolled = true
            return true
        }
        window.scrollTo(scroll, scroll - 70)
        scrolled = false
        return true
    }
    return(
        <div className="accordion accordion-flush">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button onClick={scrollUpOrDown} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#" + props.target}>
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
            setQuestion(questions["accountSetup"])
            performChange()
        }else  if (number==="two"){
            setQuestion(questions["security"])
            performChange("one")
        }else  if (number==="three"){
            setQuestion(questions["sendingMoney"])
            performChange("two")
        }   
    }
    let [useQuestions, setQuestion] = useState(questions["accountSetup"])
    
    return(
        <div className="questions">
            <div className="container questions-container">
                <div className="link">
                    <p onClick={()=>{handleClick("one")}} className='faqQuestions active-scroll faqQuestionOne'>Account Setup</p>
                    <p onClick={()=>{handleClick("two")}} className='faqQuestions faqQuestionTwo'>Sending Money</p>
                    <p onClick={()=>{handleClick("three")}} className='faqQuestions faqQuestionThree'>Security</p>
                </div>
                <div className="question-container">
                    {useQuestions.map(question=> <Accordion key={question.key} head={question.head} body={question.body} target={question.target} /> )}
                </div>
            </div>
        </div>
    )
};

export default Questions;