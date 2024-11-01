const Details = () => {
    return (
        <div className="flex justify-center bg-slate-200">
            <div className="overflow-x-auto w-full">
                {/* Content 1 Account Information */}
                <table className="table h-auto">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>Primary Account Info</th>
                    </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr className="flex justify-around">
                            <tc className="flex flex-col">
                                    <th>Account Name</th>
                                    <td>Cy Ganderton</td>
                            </tc>
                            <tc className="flex flex-col">
                                    <th>Date of Birth</th>
                                    <td>09/09/9999</td>
                            </tc>
                        </tr>
                        {/* row 2*/}
                        <tr className="flex justify-around">
                        <tc className="flex flex-col">
                                <th>Primary Phone</th>
                                <td>999-999-9999</td>
                        </tc>
                        <tc className="flex flex-col">
                                <th>Primary Email</th>
                                <td>testing@gmail.com</td>
                        </tc>
                        </tr>
                        {/* row 3*/}
                        <tr className="flex justify-around">
                        <tc className="flex flex-col">
                            <th>Billing Address</th>
                            <td>123 N Target St</td>
                            <td> New York, NY 30067</td>
                        </tc>
                        <tc className="flex flex-col">
                            <th>Identification</th>
                            <td>Driver's License</td>
                            <td>D43R4TR3R</td>
                            <td>NY 10/10/9999</td>
                        </tc>
                        </tr>
                    </tbody>
                </table>
                {/* Content 2 Insurance */}
                <table className="table h-auto">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>Insurance Option</th>
                    </tr>
                    </thead>
                    <button className="btn">Edit</button>
                    <tbody>
                        {/* row 1 */}
                        <tr className="flex justify-around">
                            <tc className="flex flex-col">
                                    <th>Insurance</th>
                                    <td>$10,000 Base</td>
                            </tc>
                        </tr>
                    </tbody>
                </table>
                {/* Content 3 Rental Options */}
                <table className="table h-auto">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>Rental Options</th>
                    </tr>
                    </thead>
                    <button className="btn">Edit</button>
                    <tbody>
                        {/* row 1 */}
                        <tr className="flex justify-around">
                            <tc className="flex flex-col">
                                    <th>Gate Information</th>
                                    <td>Gate Code:</td>
                                    <td>Gate Lockout:</td>
                                    <td>Gate Timezone:</td>
                                    <td>Keypad:</td>
                            </tc>
                            <tc className="flex flex-col">
                                    <th></th>
                                    <td>932493</td>
                                    <td>No</td>
                                    <td>01 (Standard)</td>
                                    <td>00 (Main Entry)</td>
                            </tc>
                        </tr>
                        {/* row 2*/}
                        <tr className="flex justify-around">
                            <tc className="flex flex-col">
                                    <th>Description of Goods</th>
                                    <td>Household Goods</td>
                            </tc>
                            <tc className="flex flex-col">
                                    <th>Value of Goods</th>
                                    <td>$10,000</td>
                            </tc>
                        </tr>
                        {/* row 3*/}
                        <tr className="flex justify-around">
                            <tc className="flex flex-col">
                                <th>Addenda</th>
                                <td>None</td>
                            </tc>
                        </tr>
                         {/* row 4*/}
                         <tr className="flex justify-around">
                            <tc className="flex flex-col">
                                <th>Discount</th>
                                <td>None</td>
                            </tc>
                        </tr>
                         {/* row 5*/}
                         <tr className="flex justify-around">
                            <tc className="flex flex-col">
                                <th>Services</th>
                                <td>None</td>
                            </tc>
                        </tr>
                         {/* row 6*/}
                         <tr className="flex justify-around">
                            <tc className="flex flex-col">
                                <th>Questions</th>
                                <td>Lenght of stay? 6 months</td>
                                <td>Student? Yes</td>
                            </tc>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Details;