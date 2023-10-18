export default function Tier2(){
    return(
        <div className="tiers-div mt-5">
            <h5>Tier 2</h5>
            <table className="mt-3">
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
                        <td><ul>
                            <li>SSN Number</li>
                            <li>ID Number (US-Gov't Issued ID/Passport)</li>
                            <li>ID Expiry Date</li>
                            <li>ID Issuing Authority</li>
                        </ul></td>
                    </tr>
                    <tr>
                        <td><p>Physical Document</p></td>
                        <td><ul>
                            <li>ID Document (US-Gov't Issued ID/Passport)</li>
                        </ul></td>
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
            <table className="mt-3">
                <thead>
                    <tr><td colSpan={"2"}><h6>B. Transaction Limits</h6></td></tr>
                    
                </thead>
                <tbody>
                    <tr>
                    <td >Per Transaction Limit </td>
                    <td >$1000</td>
                    </tr>
                    <tr>
                    <td>Daily Limit </td>
                    <td>$3000</td>
                    </tr>
                    <tr>
                    <td>15 Days Limit </td>
                    <td>$3,000</td>
                    </tr>
                    <tr>
                    <td>30 Days Limit </td>
                    <td>$5,000</td>
                    </tr>
                    <tr>
                    <td>180 Days Limit </td>
                    <td>$9,999</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}