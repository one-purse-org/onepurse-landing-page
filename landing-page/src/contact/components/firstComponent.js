import "../../styles/contact/firstComponent.css"

function FirstComponent(){
    return(
        <div className="firstComponent-div">
            <div className="firstComponent-div-container container-c">
                <div className="firstComponent-div-container-text">
                    <h1>Contact Us</h1>
                    <p>Send us a message if you have any questions or concerns, we’d love to hear from you.</p>
                </div>
                <div className="firstComponent-div-container-img">
                    <img src="img/contact-img.png" alt="contact"></img>
                </div>
            </div>
        </div>
    )
}

export default FirstComponent;