export default function Tier1(){
    return(
        <div className="tiers-div mt-5">
            <h5>Tier 1</h5>
            <div className="mt-3 table">
              <h6 className="thead">A. KYC Information</h6>
              <table>
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
            <div className="mt-3 table">
                <h6 className="thead">B. Transaction Limits</h6> 
                <table>
                    <tbody>
                        <tr>
                        <td >Per Transaction Limit </td>
                        <td >$500</td>
                        </tr>
                        <tr>
                        <td>Daily Limit </td>
                        <td>$500</td>
                        </tr>
                        <tr>
                        <td>15 Days Limit </td>
                        <td>$1,000</td>
                        </tr>
                        <tr>
                        <td>30 Days Limit </td>
                        <td>$1,000</td>
                        </tr>
                        <tr>
                        <td>180 Days Limit </td>
                        <td>$3,000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}