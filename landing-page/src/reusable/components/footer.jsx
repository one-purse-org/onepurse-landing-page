import { BrowserRouter as Router, Link } from 'react-router-dom';

const toShow ={
    display: "block"
}

const noShow = {
    display: "none"
}


function Footer(props){
    let styles
    if (props.display === "show"){
        styles = toShow
    }else{
        styles = noShow
    }
    return (
        <div className="footer">
            <div className='footer-cta'>
            <img style={styles} src="Rectangle103.png" className="rectangle2" alt='rectangle' />
            <div className="rectangle-text">
                <h1>Send money to your loved ones today</h1>
                <p style={{lineHeight:1.5}} className='paragraph'>Download the Onepurse app and quickly transfer money <br /> to your friends and loved ones. It’s that simple.</p>
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
            
            <div className='links'>
                <div className='nav-links'>
                    <Link to="/about">About</Link>
                    <Link to="/affliate">Become an affliate</Link>
                    <Link to="/faq">Faq</Link>
                    <Link to="/contact">Contact Us</Link>
                </div>
                <div className='social-links'>
                    <a href='facebook.com'><i class="fa-brands fa-facebook"></i></a>
                    <a href='whatsapp.com'><i class="fa-brands fa-whatsapp"></i></a>
                    <a href='linkedIn.com'><i class="fa-brands fa-linkedin"></i></a>
                    <a href='twitter.com'><i class="fa-brands fa-twitter"></i></a>
                    <a href='instagram'><i class="fa-brands fa-instagram"></i></a>
                </div>
            </div>
        </div>
    )

   
}

export default Footer;