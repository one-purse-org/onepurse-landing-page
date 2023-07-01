import "../../styles/contact/secondComponent.css"

function SecondComponent(){
    return(
        <div className="secondComponent">
            <h5>Fill in the form below.</h5>
            <form>
                <div className="form-div">
                    <input placeholder="Full Name" class="form-control mb-3"></input>
                    <input placeholder="Email" class="form-control mb-3"></input>
                    <input placeholder="Phone Number" class="form-control mb-3"></input>
                    <input placeholder="Subject" class="form-control mb-3"></input>
                    <textarea placeholder="Message" class="form-control mb-3"></textarea>
                    <button className="btn btn-primary">Submit</button>
                </div>
              
            </form>

            <div className="customer-support">
                <p>
                    Customer support hours are between 7am EST to 7pm EST. You can contact us on Whatsapp by clicking on the whatsapp logo.
                </p>                
                <button className="btn btn-success"><i className="fa-brands fa-whatsapp"></i> Contact Us</button>
            </div>
        </div>
    )
}

export default SecondComponent;