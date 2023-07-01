import "../../styles/about/second.css"

function Second(){
    return (
        <div className="second-div">
            <div className="second-div-container">
                <div className="who-we-are">
                    <div className="text">
                        <h2>Who We Are</h2>
                        <p>Onepurse is a US financial technology company that makes it easy to send money internationally.</p>
                    </div>
                    <div className="img">
                        <img src="img/who-we-are.png" alt="who-we-are"/>
                    </div>
                </div>
                <div className="what-we-do">
                        <div className="img">
                            <img src="img/what-we-do.png" alt="who-we-do"/>
                        </div>
                        <div className="text">
                            <h2>What We Do</h2>
                            <p>We partner with banks and payment partners around the world to help you send money across to Africa at the lowest cost possible while we guarantee the safe delivery of your funds.</p>
                        </div>
                </div>
           </div>
           
        </div>
    )
    
};

export default Second;