import React from "react";
import "../../styles/reuseable/footer-cta.css"
export default function FooterCta(props){
    return(
    <div className="footer-cta position-relative" >
        <div className='footer-cta-image position-absolute'>
            <img className="footer-cta-image-md" src={props.ctaImgMd}></img>
            <img className="footer-cta-image-lg" src={props.ctaImgLg}></img>
        </div>
            {props.footerContent}
    </div>
    )
}
