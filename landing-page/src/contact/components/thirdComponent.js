import "../../styles/contact/thirdComponent.css"
import Footer from "../../reusable/components/footer";
function ThirdComponent(){
    return(
        <div className="contact-third-component">
        <div className="container">
            <div className="contact-contact">
                <div className="mb-3 me-4">
                    <p className="contact-title">
                        Phone number
                    </p>
                    <p className="contact-details">
                        +17205463284 
                    </p>
                </div>
                <div className="mb-3 me-4">
                    <p className="contact-title">
                        Email address
                    </p>
                    <p className="contact-details">
                        support@onepurse.co 
                    </p>
                </div>
                <div className="mb-3 me-4">
                    <p className="contact-title">
                        Address
                    </p>
                    <p className="contact-details">
                        4800 Dahlia St, Denver, CO 80216
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