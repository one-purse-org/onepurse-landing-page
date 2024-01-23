import "../../styles/reuseable/waitlist.css";

function Waitlist(){
    function removeWaitlist(){
        document.querySelector(".waitlist").classList.remove("active-waitlist")
    }
    return(
        
        <div className="waitlist">
            <div className="waitlist-container">
                <div className="waitlist-form-header">
                    <h3>Join Waitlist</h3>
                    <img onClick={removeWaitlist} src="img/close.png"></img>
                </div>
                
                <form className="waitlist-form" method="POST" action="https://formspree.io/f/mgegokek">
                    <div className="firstName">
                        <label for="">First Name</label>
                        <input id="first_name" name="firstName"></input>
                    </div>

                    <div className="lastName">
                        <label>Last Name</label>
                        <input id="last_name" name="lastName"></input>
                    </div>

                    <div>
                        <label>Email</label>
                        <input id="email" name="email"></input>
                    </div>

                    <div>
                        <label>Phone Number</label>
                        <input name="phoneNumber"></input>
                    </div>
                    <div className="waitlist-form-button"><button type="submit">Submit</button></div>
                    
                </form>
            </div>
        </div>
    ) 
}

function addWaitlist(){
    document.querySelector(".waitlist").classList.add("active-waitlist")
}



export default Waitlist;
export {addWaitlist};