import "../../styles/affiliate/sixthComponent.css"

function SixthComponent(){
    return(
        <div className="affiliate-sixth-component-div">
            <div className="container-md affliate-cta-container">
                <div className="affiliate-cta-text">
                    <h2>
                        Promote Onepurse & Get paid. Simple right?
                    </h2>
                    <a href="/" ><button>
                        Get Started
                    </button></a>
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