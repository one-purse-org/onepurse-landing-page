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
            <div>
                <p className="machnet mb-5">The banking services of the Onepurse Platform are powered by Machnet. Machnet is a financial technology company and not a bank. Banking services are provided by Machnet's partner banks who are Member FDIC. Machnet provides the Bank services through its banking software provider, Synapse. To report a complaint relating to the bank services, email help@synapsefi.com."</p>
            </div>
        </div>
        <Footer/>
        </div>
    )
}

export default ThirdComponent;