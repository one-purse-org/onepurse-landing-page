import "../../styles/faq/question.css"
import questions from "./faqQuestion";
import ScrollSpy from "react-ui-scrollspy";
import { useRef } from "react"


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
    const myElementRef = useRef(null);
    return(
        <div className="questions">
        <div className="container-c questions-container">
            <div className="link">
                <p data-to-scrollspy-id="first" className='faqQuestions'>Account Setup</p>
                <p data-to-scrollspy-id="second" className='faqQuestions'>Sending Money</p>
                <p data-to-scrollspy-id="third" className='faqQuestions'>Security</p>
            </div>
            <div className="question" ref={myElementRef}>
            <ScrollSpy parentScrollContainerRef = {myElementRef} updateHistoryStack={false} offsetTop={-360}>
                <div id="first">
                    {questions.slice(0, 10).map(question=> <Accordion key={question.key} head={question.head} body={question.body} target={question.target} /> )}
                </div>
                <div id="second">
                    {questions.slice(10, 20).map(question=> <Accordion key={question.key} head={question.head} body={question.body} target={question.target} /> )}
                </div>
                <div id="third">
                    {questions.slice(20, 30).map(question=> <Accordion key={question.key} head={question.head} body={question.body} target={question.target} /> )}
                </div>
            </ScrollSpy>
            </div>
        </div>
        </div>
    )
};

export default Questions;