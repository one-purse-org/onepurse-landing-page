import "../../styles/about/third.css"

function Third(){
    return(
        <div className="third-div">
                <div className="our-mission">
                    <div className="our-mission-container container-xxl ms-sm-0 ms-xxl-auto">
                        <div className="ourmissionmask"><img src="img/ourmissionmask.png"></img></div>
                       
                        <div className="ourmissioncontent">
                            <h2>Our Mission</h2>
                            <p>
                                At OnePurse, our mission is to revolutionize how you send money abroad. 
                                We've established strategic collaborations with global banks and esteemed payment 
                                partners, all in the pursuit of enabling you to effortlessly transfer funds to Africa at 
                                unparalleled affordability. Beyond the cost savings, we are dedicated to ensuring the 
                                secure and timely delivery of your hard-earned funds. With OnePurse, your financial 
                                transactions are in safe hands.
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="our-journey">
                    <div className="our-journey-container container-xxl ms-sm-0 ms-xxl-auto">
                        <div className="position-relative mx-auto our-story-image">
                            <img className="position-absolute" src="img/our-story.png" alt="our-story"/>
                        </div>
                        <div className="our-journey-content"> 
                            <h2>OUR JOURNEY:<br/><span>CRAFTING VALUE THROUGH INNOVATION</span> </h2>
                            <p>
                                Driven by our unwavering commitment to customer satisfaction, we've harnessed our 
                                passion to forge a revolutionary platform. This driving force led us to conceive a 
                                transformative solution that not only resonates with your needs but surpasses them. 
                            </p>
                            <p>
                                With a deep-rooted understanding of the significance of optimal currency exchange 
                                and seamless international money transfers, we embarked on the journey of creating 
                                OnePurse – a testament to our dedication to empower you and your loved ones, bridging 
                                the distance and embracing the true essence of connectivity.
                            </p>
                        </div>
                    </div>
                </div>
        </div>
    )
};

export default Third;