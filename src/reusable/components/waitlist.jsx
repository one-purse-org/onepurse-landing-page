import "../../styles/affiliate/demo.css";

function Demo(){
    return(
        <div className="demo">
            <div className="demo-container">
                <div className="demo-form-header">
                    <h3>Request a demo </h3>
                    <img onClick={removeDemo} src="img/close.png"></img>
                </div>
                
                <form className="demo-form" method="POST" action="/">
                    <div className="firstName">
                        <label for="">First Name</label>
                        <input id="first_name" ></input>
                    </div>

                    <div className="lastName">
                        <label>Last Name</label>
                        <input id="last_name"></input>
                    </div>

                    <div>
                        <label>Email</label>
                        <input id="email"></input>
                    </div>

                    <div>
                        <label>Country</label>
                        <select id="country">
                            <option>Nigeria</option>
                        </select>
                    </div>
                    <div className="demo-form-button"><button type="button">Submit</button></div>
                    
                </form>
            </div>
        </div>
    ) 
}

function demo(){
    document.querySelector(".demo").classList.add("active-demo")
}

function removeDemo(){
    document.querySelector(".demo").classList.remove("active-demo")
}

export default Demo;
export {demo};