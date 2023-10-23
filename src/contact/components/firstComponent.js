import "../../styles/contact/firstComponent.css"
import Navbar from "../../reusable/components/Navbar";

function FirstComponent(){
    return(
        <div style={{backgroundColor:"#1A1D4A"}}>
            <Navbar downloadBtn={true}/>
            <div className="firstComponent-div">
                <div className="firstComponent-div-container container">
                    <div className="firstComponent-div-container-img">
                            <img src="img/contact-img.png" alt="contact"></img>
                    </div>
                    <div className="firstComponent-div-container-text">
                        <h1>Contact Us</h1>
                        <p>Don't hesitate to drop us a message if you have any questions or concerns. We're eager to listen and here to help!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstComponent;