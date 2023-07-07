import { BrowserRouter as Router, Link } from 'react-router-dom';
import "../../styles/reuseable/footer.css"


const toShow = {
    display: "flex"
}

const noShow = {
    display: "none"
}


function Footer(props){
  
    return (
        <div className={props.display==="show"? "footer" : "footer no-cta-footer"}>
        <div className='container-c' style={{height:"100%"}}>

        
            <div className="footer-cta" style={props.display==="show" ? toShow : noShow}>
                <h1>Send money to your loved ones today</h1>
                <p style={{lineHeight:1.5}} className='paragraph'>Download the Onepurse app and quickly transfer money <br /> to your friends and loved ones. It’s that simple.</p>
                <div style={{display:'flex'}}>
                    <button type="button" className='footer-btn'>
                        <i className="fa-brands fa-google-play google-play download"></i>
                        <div className="btn-div">
                            <p className="get">Get it on</p>
                            <p className="where">Google Play</p>
                        </div>
                        
                    </button>
                    <button type="button" className="apple footer-btn">
                        <i className="fa-brands fa-apple download"></i>
                        <div className="btn-div">
                            <p className="get">Download on the</p>
                            <p className="where">App Store</p>
                        </div>
                    </button>
                </div>
                
            </div>
           
       
            <div className="logo footer-logo" style={props.display==="show" ? {display:"none"} : {display:"block"}}>
                    <img src="img/Logo.png" alt="logo"/>
            </div>
          
            
            <div className= {props.display==="show"? "links" : "links no-cta-links"}>
                <div className='nav-links'>
                    <Link to="/about">About</Link>
                    <Link to="/affliate">Become an affliate</Link>
                    <Link to="/FAQ">FAQ</Link>
                    <Link to="/contact">Contact Us</Link>
                </div>
                <div className='social-links'>
                    <a href="https://facebook.com"><i class="fa-brands fa-facebook"></i></a>
                    <a href='https://whatsapp.com'><i class="fa-brands fa-whatsapp"></i></a>
                    <a href='https://linkedIn.com'><i class="fa-brands fa-linkedin"></i></a>
                    <a href='https://twitter.com'><i class="fa-brands fa-twitter"></i></a>
                    <a href='https://instagram.com'><i class="fa-brands fa-instagram"></i></a>
                </div>
            </div>
            </div>
        </div>
    )

   
}

export default Footer;