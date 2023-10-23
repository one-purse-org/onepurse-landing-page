import { Link } from 'react-router-dom';
import "../../styles/reuseable/footer.css"

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
                    <img src="img/logo.svg" alt="logo"/>
                </a>
                </div>
                <ul className="nav-links navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link onClick={scrollToTop} to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link onClick={scrollToTop} to="/affiliate">Become an Affiliate</Link>
                    </li>
                    <li className="nav-item">
                        <Link onClick={scrollToTop} to="/faq">FAQ</Link>
                    </li>
                    <li className="nav-item">
                        <Link onClick={scrollToTop} to="/contact">Contact Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link onClick={scrollToTop} to="/terms-of-use">Terms of Use</Link>
                    </li>
                    <li className="nav-item">
                        <Link onClick={scrollToTop} to="/privacy-policy">Privacy Policy</Link> 
                    </li>
                </ul>
                <div className='social-links'>
                    <a href='https://whatsapp.com'><i class="fa-brands fa-whatsapp"></i></a>
                    <a href="https://facebook.com/OnepurseGlobal"><i class="fa-brands fa-facebook"></i></a>
                    <a href='https://instagram.com/OnepurseGlobal'><i class="fa-brands fa-instagram"></i></a>
                    <a href='https://twitter.com/OnepurseGlobal'><i class="fa-brands fa-twitter"></i></a>
                </div>
            </div>
            </div>
        </div>
    )

   
}

export default Footer;