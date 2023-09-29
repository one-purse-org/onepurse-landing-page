import "../../styles/affiliate/secondComponent.css"

function SecondComponent(){
    return(
        <div className="affliate-second-component">
            <div className="container-xxl affliate-second-component-container">
                <div className="affliate-second-component-text">
                    <div className="affliate-second-component-text-container">
                        <p>Your Gateway to Empowerment and Earnings!</p>
                        <h2>Discover the <span> OnePurse Affiliate Program </span></h2>
                        <hr/>
                        <p className="affliate-second-component-text-body">
                            Unlock the potential of the OnePurse Affiliate program – a pathway to teaming up 
                            with us and generating passive income through our app. OnePurse Affiliates are 
                            the dynamic driving force behind the OnePurse App, propelling its adoption across 
                            diverse African communities in the US. By collaborating with us, you help 
                            establish robust customer relationships, building an unshakable foundation of 
                            trust and confidence. Your influence matters, shaping the future of seamless 
                            money transfers to Africa.
                        </p>
                    </div>
                    
                </div>
                <div className="affliate-second-component-image">
                    <img src="img/image-of-smiling-women.png" alt="two women smiling"></img>
                </div>
            </div>
        </div>
    )
}

export default SecondComponent;