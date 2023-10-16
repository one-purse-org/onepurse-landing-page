import "../../styles/affiliate/firstComponent.css";
import Navbar from "../../reusable/components/Navbar.jsx"

function FirstComponent(){
    return(
        <div style={{color:"#FFFF"}}>
            <Navbar color="white"/>
            <div className="affiliate-first-component">
                <div className="container-xxl affiliate-first-component-container">
                    <div className="affiliate-first-component-tag">
                        <h1>
                            Earn up to <span>$1000 in passive income</span> as a OnePurse Affiliate.
                        </h1>
                        <p>Monetize your network and earn commissions when you share OnePurse with your community. Earn commissions and special rewards on every transaction made by the people you onboard on OnePurse for life.</p>
                        <a src="/"><button>Get Started</button></a>
                    </div>

                    <div className='affiliate-first-component-img'>
                        <img className="lady-with-phone" src="img/lady_with_phone.png" alt="image-of-lady" />
                        <img className="lady-with-phone-sm" src="img/lady_with_phone_sm.png" /> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstComponent;