let linkStyle = {
    color:"initial"
}
let questions = {
    "accountSetup": [
        {
            key:1,
            head: "How do I get a OnePurse account?",
            body: <span>You can download OnePurse from the <a href="" style={linkStyle}> Google play store </a> or the <a href="/" style={linkStyle}> iOS App Store.</a></span>,
            target: "accordion1",
            
        },
        {
            key:2,
            head:  "What does it require to be verified on OnePurse?",
            body: "Your full name, date of birth, phone number, gender, email address, and resident address.",
            target: "accordion2",
    
        },
        {
            key:3,
            head: "Do I need a smartphone to download OnePurse?",
            body: "Yes, you need a supported Andriod or Apple Device",
            target: "accordion3",
        },
        {
            key:4,
            head: "Why do I need to verify my account?",
            body: "You need to verify your account in line with KYC (Know Your Customer) compliance requirements to verify a customer’s identity, assess and monitor customer risk.",
            target: "accordion4",
        },
        {
            key:5,
            head:"How do I verify my account?",
            body: "The easiest way to verify your OnePurse account is when you are signing up on the app, just fill in your details and follow the instructions on the screen. Please note that you’ll need a valid piece of government-issued ID such as a passport, or driver’s license, and proof of address for higher verification limits.",
            target: "accordion5",
        },
        {
            key:6,
            head:"How do I recover my password?",
            body: "You can make use of the forgot password and follow the instructions on your screen.",
            target: "accordion6",
        }
    ],

    "sendingMoney": [
        {
            key:1,
            head: "What can I do with OnePurse?",
            body:"You can use OnePurse to send money (USD) to Africa in their respective currencies. This is limited to our supported countries",
            target: "accordion7",
        },
        {
            key:2,
            head: "How does the app work for remittances?",
            body:"The app allows you to transfer money from the USA to Africa from your mobile device. You can create an account, and add your debit card to start transact today.",
            target: "accordion8"
        },
        {
            key:3,
            head: "Are there any fees for using the OnePurse app?",
            body: "We do not charge any fee for sending money on OnePurse",
            target: "accordion9"
        },
        {
            key:4,
            head: "How long does it take for the money to be received by the recipient?",
            body:"Transactions on OnePurse typically process within minutes, although occasional delays may occur due to unforeseen banking issues beyond our control. If your transaction experiences prolonged processing times, please don't hesitate to reach out to our Customer Support team for assistance.",
            target: "accordion10"
        },
        {
            key:5,
            head: "Can I track my transfer?",
            body: "Yes, the app allows you to track transfers in real-time and receive notifications when the money has been received by the recipient.",
            target: "accordion11"
        },
        {
            key:6,
            head: "Can I transfer money to any country?",
            body: "OnePurse currently facilitates transfers from the USA to Africa. However, we are growing rapidly and will be adding more countries soon. Please keep an eye out for communications in this regard on our website and social media channels.",
            target: "accordion12"
        },
        {
            key:7,
            head: "Does my recipient need to take any action steps to receive funds from me?",
            body: "Your recipients do not need to take any steps as their accounts are credited instantly.",
            target: "accordion13"
        },
        {
            key:8,
            head: "How much money can I send at once?",
            body: "This is totally dependent on your KYC level, the higher the level the more money you can send. Click here to view the KYC levels and requirements.",
            target: "accordion14"
        },
        {
            key:9,
            head: "How do I know if the Money has been sent to the recipient?",
            body: "Upon completion of the transaction, you will receive a receipt and an email notification informing you of the status of your transaction.",
            target: "accordion15"
        },
        {
            key:10,
            head: "How does the exchange rate work?",
            body: "Exchange rates may initially appear complex, but they are, in fact, quite simple to understand. An exchange rate represents the value of one currency relative to another.",
            target: "accordion16"
        }
    ],

    "security":[
        {
            key:1,
            head:  "What do I do if my account is restricted?",
            body: "Tell us how it happened and we will take a look and get back to you as soon as possible.",
            target: "accordion18"
        },
        {
            key:2,
            head: "Is my personal and financial information secure on the app?",
            body:"Yes your information is secured on OnePurse. We use industry-standard security measures, such as encryption, to protect users’ personal and financial information.",
            target: "accordion19"
        },
        {
            key:3,
            head: " Can I cancel or reverse a transfer after it’s been initiated?",
            body:"Yes, transactions that have not been delivered to the beneficiary can be cancelled, all you need to do is click on the cancel button.",
            target: "accordion20"
        },
        {
            key:4,
            head:"How do I make a complaint?",
            body:"If you're not satisfied with the service you've received from OnePurse, we strongly encourage you to contact us directly with your complaint. Our commitment is to promptly address and resolve your concerns. We appreciate your patience as we work towards a resolution that meets your expectations.",
            target: "accordion21"
        }
    ]
}

export default questions;