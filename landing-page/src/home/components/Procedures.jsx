import "../../styles/home/procedures.css"
import $ from "jquery"
import { useEffect } from "react";

const overscrollContainer = $('.phone-images');
const targetDiv1 = $('.procedure-img1');
const targetDiv2 = $('.procedure-img2');
const targetDiv3 = $('.procedure-img3');
const targetDiv4 = $('.procedure-img4');

overscrollContainer.on("scroll", handleScroll)

function handleScroll(){
    const containerTop = overscrollContainer.scrollTop;
    console.log(overscrollContainer.clientHeight)
    const containerBottom = containerTop + overscrollContainer.clientHeight;
    const divTop = targetDiv4.offsetTop;
    const divBottom = divTop + targetDiv4.clientHeight;

    // Check if the div is in view
    if (divTop >= containerTop && divBottom <= containerBottom) {
        console.log('The div is in view.');
    } else {
        console.log('The div is out of view.');
    }
}

let text = [
    {
        key: 1,
        number: "1.",
        text: "Sign up with your details",
        image: "img/phone1.png"
    },
    {
        key:2,
        number: "2.",
        text: "Enter your Affiliate code",
        image: "img/phone2.png"
    },
    {
        key:3,
        number: "3.",
        text: "Enter Beneficiary Information",
        image: "img/phone3.png"
    },
    {
        key:4,
        number: "4.",
        text: "Send money",
        image: "img/phone4.png"
    }
]

function Card(props){
    return(<div className="phone">
        <h2>{props.number}</h2>
        <p>{props.text}</p>
        <img src={props.image} alt=""/>
    </div>)
}

function Numbers(props){
    return(
        <div className="numberings">
            <div className="number">
                <p>{props.number}</p>
            </div>
            <div className="text">
                <p>{props.text}</p>
            </div>
        </div>
        
    )
}

function Procedure(){
    return(
        <div className="procedure">
            <div className=" container">
                <div className="big-div">
                    <h2>Start sending <span>money</span> today</h2>
                    <p className="steps">Create your Onepurse account in 4 easy steps via our mobile app!</p>
                </div>

                <div className="phone-procedure">
                        <div className="phone-procedure-container position-relative">
                            <div className="arrow-absolute position-absolute">
                                <img src="img/arrow-procedure.svg"></img>
                            </div>
                            <div className="phone-images">
                                <img src="img/phone1.png" className="procedure-img1"></img>
                                <img src="img/phone1.png" className="procedure-img2"></img>
                                <img src="img/phone1.png" className="procedure-img3"></img>
                                <img src="img/phone1.png" className="procedure-img4"></img>
                            </div>
                        </div>
                        <div className="phone-numbers position-relative">
                            <img src="img/numbers-vertical.svg" className="position-absolute numbers-vertical" />
                            <Numbers number="1." text="Sign up with your details"/>
                            <Numbers number="2." text="Enter your Affiliate code"/>
                            <Numbers number="3." text="Enter Beneficiary Information"/>
                            <Numbers number="4." text="Send Money" />
                        </div>
                </div>
                {/* <div className="phones">
                    {
                        text.map((phone) => {
                        return <Card number={phone.number} text={phone.text} image={phone.image}/>
                        })
                    }
                </div> */}
            </div>
        </div>
    )
}

export default Procedure;