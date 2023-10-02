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
        <div className="footer">
        <div className='footer-container container-fluid'>
            <div className= "footer-links">
                <div className="footer-logo" >
                <a href='/'>
                    <img src="img/Logo.png" alt="logo"/>
                </a>
                </div>
                <div className='nav-links'>
                    <Link onClick={scrollToTop} to="/about">About</Link>
                    <Link onClick={scrollToTop} to="/affiliate">Become an Affiliate</Link>
                    <Link onClick={scrollToTop} to="/faq">FAQ</Link>
                    <Link onClick={scrollToTop} to="/contact">Contact Us</Link>
                    <Link onClick={scrollToTop} to="/terms-of-use">Terms of Use</Link>
                    <Link onClick={scrollToTop} to="/privacy-policy">Privacy Policy</Link>
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