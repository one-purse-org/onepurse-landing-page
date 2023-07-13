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
    return(
        <div className="questions">
        <div className="container-c questions-container">
            <div className="link list-group" id="list-example">
                <a href="#first" className='faqQuestions list-group-item list-group-item-action'>Account Setup</a>
                <a href="#second" className='faqQuestions list-group-item list-group-item-action'>Sending Money</a>
                <a href="#third" className='faqQuestions list-group-item list-group-item-action'>Security</a>
            </div>
            <div className="question scrollspy-example" data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" tabindex="0">
                <div id="first">
                    {questions.slice(0, 11).map(question=> <Accordion key={question.key} head={question.head} body={question.body} target={question.target} /> )}
                </div>
                <div id="second">
                    {questions.slice(11,21).map(question=> <Accordion key={question.key} head={question.head} body={question.body} target={question.target} /> )}
                </div>
                <div id="third">
                    {questions.slice(21, 30).map(question=> <Accordion key={question.key} head={question.head} body={question.body} target={question.target} /> )}
                </div>
                
            </div>
            </div>
        </div>
    )
};

export default Questions;