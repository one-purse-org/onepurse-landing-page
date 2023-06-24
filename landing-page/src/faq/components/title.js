import "../../styles/faq/title.css"

function Title(){
    return(
        <div className="title-div">
            <div className="title-h1">
                <h1>
                    Frequent Asked <br/> <span>Questions</span>
                </h1>
            </div>
            <div className="title-img">
                <img src="img/question-mark.png" alt="question mark"/>
            </div>
           
        </div>
    )
};

export default Title;