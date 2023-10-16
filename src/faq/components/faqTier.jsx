import Navbar from "../../reusable/components/Navbar";
import Footer from "../../reusable/components/footer";
import "../../styles/faq/tier.css"
function Tier(){
    return (
    <div>
        <Navbar/>
        <div className="container-fluid px-5 py-5">
            <h2 className="tier-h2" style={{fontWeight:600, fontSize:"36px"}}>
                KYC tiers limits and document requirement
            </h2>
            <div>
                <h5>Tier 1</h5>
                <table>
                    <thead>
                        <h6>A. KYC Information</h6>
                    </thead>
                    <tbody>
                        <tr>
                            <td><p>Basic Information</p></td>
                            <td>
                                <ul>
                                    <li><p>First Name, Middle Name, Last Name</p></li>
                                    <li><p>Date of Birth</p></li>
                                    <li><p>Full Address (address_line1, address_line2, city, state, country, zip code)</p></li>
                                    <li><p>Email </p></li>
                                    <li><p>Phone Number </p></li>
                                    <li><p>Gender</p></li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td><p>Virtual Document</p></td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td><p>Physical Document</p></td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td><p>Other Information</p></td>
                            <td>
                                <ul>
                                    <li>Purpose of Remittance </li>
                                    <li>Sender Beneficiary Relationship</li>
                                </ul>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
        <Footer/>
    </div>
    )
}

export default Tier