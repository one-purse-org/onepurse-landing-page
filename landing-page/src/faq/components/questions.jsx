import "../../styles/faq/question.css"
import accountSetup from "./accountSetup";
import security from "./security";
import $ from "jquery"
import sendingMoney from "./sendingMoney";
import { useState } from "react";

// let questions = accountSetup;


function Accordion(props){
    return(
        <div className="accordion accordion-flush" id={props.target + "-div"}>
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
    let [questions, setQuestions] = useState(accountSetup)
    function change(e){
        $(".faqQuestions").removeClass("active")
        e.target.classList.add("active")
        console.log(e.target.classList[0])
        switch (e.target.classList[0]) {
            case "accountSetup": questions = setQuestions(accountSetup)
                break;
    
            case "security": questions = setQuestions(security)
            break;
    
            case "sendingMoney": questions = setQuestions(sendingMoney)
            break;
    
            default:
                break;
        }
         
    }
    return(
        <div className="questions">
        <div className="container-c questions-container">
            <div className="link">
                <p className='accountSetup faqQuestions active' onClick={change}>Account Setup</p>
                <p className='sendingMoney faqQuestions'  onClick={change}>Sending Money</p>
                <p className='security faqQuestions'  onClick={change}>Security</p>
            </div>
            <div className="question">
                {questions.map(question=> <Accordion key={question.key} head={question.head} body={question.body} target={question.target} /> )}
            </div>
            </div>
        </div>
    )
};

export default Questions;