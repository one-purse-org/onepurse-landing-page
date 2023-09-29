import "../../styles/affiliate/firstComponent.css"

function FirstComponent(){
    return(
        <div className="affliate-first-component">
            <div className="container-xxl affliate-first-component-container">
                <div className="affliate-first-component-tag">
                    <h1>
                        Earn up to <span>$1000 in passive income</span> as a Onepurse Affiliate.
                    </h1>
                    <p>Monetize your network and earn commissions when you share Onepurse with your community. Earn commissions and special rewards on every transaction made by the people you onboard on Onepurse for life.</p>
                    <a src="/"><button>Get Started</button></a>
                </div>

                <div className='affliate-first-component-img'>
                    <img src="img/lady_with_phone.png" alt="image-of-lady" />
                </div>
            </div>
        </div>
    )
}

export default FirstComponent;