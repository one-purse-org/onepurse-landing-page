import { BrowserRouter as Router, Link } from 'react-router-dom';
import { useEffect } from 'react';
import "../../styles/reuseable/footer.css"


const toShow = {
    display: "block"
}

const noShow = {
    display: "none"
}

function scrollToTop(){
        window.scrollTo(0,0)      
}


function Footer(props){
  
    return (
        <div className={props.display==="show"? "footer" : "footer no-cta-footer"}>
        <div className='footer-container container-fluid'>
            <div className="footer-cta position-relative" style={props.display==="show" ? toShow : noShow}>
                <div className='footer-cta-image position-absolute'>
                    <img src='img/Rectangle103.png'></img>
                </div>
                <div>
                    <h1>Let <span>Onepurse</span> handle your foreign exchange, seamlessly</h1>
                </div>
                
            </div>
           
            
            <div className= {props.display==="show"? "footer-links" : "footer-links no-cta-links"}>
            <div className="footer-logo" >
                    <img src="img/Logo.png" alt="logo"/>
            </div>
          
                <div className='nav-links'>
                    <Link onClick={scrollToTop} to="/">About</Link>
                    <Link onClick={scrollToTop} to="/">Business</Link>
                    <Link onClick={scrollToTop} to="/">FAQ</Link>
                    <Link onClick={scrollToTop} to="/">Privacy Policy</Link>
                    <Link onClick={scrollToTop} to="/">Terms of Use</Link>
                    <Link onClick={scrollToTop} to="/">Support</Link>
                </div>
                <div className='social-links'>
                    <a href='https://whatsapp.com'><i class="fa-brands fa-whatsapp"></i></a>
                    <a href="https://facebook.com"><i class="fa-brands fa-facebook"></i></a>
                    <a href='https://instagram.com'><i class="fa-brands fa-instagram"></i></a>
                    <a href='https://twitter.com'><i class="fa-brands fa-twitter"></i></a>
                </div>
            </div>
            </div>
        </div>
    )

   
}

export default Footer;