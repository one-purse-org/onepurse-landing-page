import "../../styles/about/fourth.css"

function Fourth(){
    return(
        
        <div className="fourth-div">
            <div className="fourth-div-container container-xxl mx-sm-0 mx-xxl-auto">
                <div className="about-reasons">
                    <div className="header">
                        <h2> WHY WE EXIST </h2>
                        <p>At OnePurse, we're driven by the pursuit of the extraordinary. Our existence is 
                        grounded in a resolute mission to accomplish the following:</p>
                    </div>
                    <div className="reasons">
                        <div>
                            <img src="img/aboutuscheck.svg"></img>
                            <p>Become The Most Trusted Money Transfer App</p>
                        </div>
                        <div>
                            <img src="img/aboutuscheck.svg"></img>
                            <p>Satisfy The Demands of Our Customers</p>
                        </div>
                        <div>
                            <img src="img/aboutuscheck.svg"></img>
                            <p>Enabling The Creation of Wealth and Value</p>
                        </div>
                        <div>
                            <img src="img/aboutuscheck.svg"></img>
                            <p>Giving Back To Our Community</p>
                        </div>
                    </div>
                </div>
                <div className="smilingblackgirl">
                    <img  src="img/smilingblackgirl.png"></img>
                </div>
            </div>
        </div>
    );
}

export default Fourth;