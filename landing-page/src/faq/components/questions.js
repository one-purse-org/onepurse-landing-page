import "../../styles/faq/question.css"

let accountQuestions = [
    "Why do you require my ID?",
    "How do I verify my email or phone?",
    "How do I add a new recipient?",
    "What information do I need to add a new recipient?",
    "Why do you require my ID?",
    "How do I verify my email or phone?",
    "How do I add a new recipient?",
    "What information do I need to add a new recipient?",
    "Why do you require my ID?",
    "How do I verify my email or phone?",
    "How do I add a new recipient?",
    "What information do I need to add a new recipient?",
    "Why do you require my ID?"

]

function AccountSetup(){
    return(
        accountQuestions.map(question => <div className="question-div"><p>{question}</p></div>)
    )
}

function Questions(){
    return(
        <div className="questions">
            <div className="link">
                <p>Account Setup</p>
                <p>Sending Money</p>
                <p>Security</p>
            </div>
            <div className="question">
                <AccountSetup/>
            </div>
        </div>
    )
};

export default Questions;