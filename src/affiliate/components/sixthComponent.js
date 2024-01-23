import "../../styles/affiliate/sixthComponent.css"
import AmplitudeAnalytics from "../../utils/analytics"

function SixthComponent(){
    function affiliateButton(){
        AmplitudeAnalytics.trackEvent("LandingPage: BecomeAffiliate", null )
    }
    return(
        <div className="affiliate-sixth-component-div">
            <div className="container-md affiliate-cta-container">
                <div className="affiliate-cta-text">
                    <h2>
                        Promote OnePurse & Get paid. <br/> Simple right?
                    </h2>
                    <div className="nav-btn">
                                    <button type="button" className="button1">&nbsp;&nbsp;&nbsp;Join Waitlist&nbsp;&nbsp;&nbsp;</button>
                                </div>
                </div>
                <div className="position-relative affiliate-cta-img-container">
                <div className="affiliate-cta-img">
                    <img className="our-story" src="img/our-story.png" alt="phone"></img>
                    <img className="our-story-2" src="img/our-story-2.png" alt="phone"></img>
                </div>
                </div>
            </div>
        </div>
    )
}

export default SixthComponent;