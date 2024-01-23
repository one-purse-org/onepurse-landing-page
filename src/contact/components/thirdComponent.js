import "../../styles/contact/thirdComponent.css"
import Footer from "../../reusable/components/footer";
function ThirdComponent(){
    return(
        <div className="contact-third-component">
        <div className="container-md">
            <div className="contact-contact">
                <div className="mb-3">
                    <p className="contact-title">
                        Phone number
                    </p>
                    <p className="contact-details">
                        +19706166825 
                    </p>
                </div>
                <div className="mb-3">
                    <p className="contact-title">
                        Email address
                    </p>
                    <p className="contact-details">
                        support@onepurse.co 
                    </p>
                </div>
               
            </div>
            <div>
                <hr/>
            </div>
           
        </div>
        <Footer/>
        </div>
    )
}

export default ThirdComponent;