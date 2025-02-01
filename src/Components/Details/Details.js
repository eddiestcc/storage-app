const Details = () => {
    return (
        <div className="flex justify-center text-base-100 rounded-lg bg-white">
            <article className="overflow-auto h-96  w-full">
                {/* Content 1 Account Information */}
                <table className="table h-auto">
                    {/* head */}
                    <thead>
                    <tr>
                        <td>Primary Account Info</td>
                    </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <th className="flex justify-around">
                            <tr className="flex flex-col">
                                    <td>Account Name</td>
                                    <td>Cy Ganderton</td>
                            </tr>
                            <tr className="flex flex-col">
                                    <td>Date of Birtd</td>
                                    <td>09/09/9999</td>
                            </tr>
                        </th>
                        {/* row 2*/}
                        <th className="flex justify-around">
                            <tr className="flex flex-col">
                                    <td>Primary Phone</td>
                                    <td>999-999-9999</td>
                            </tr>
                            <tr className="flex flex-col">
                                    <td>Primary Email</td>
                                    <td>testing@gmail.com</td>
                            </tr>
                        </th>
                        {/* row 3*/}
                        <th className="flex justify-around">
                            <tr className="flex flex-col">
                                <td>Billing Address</td>
                                <td>123 N Target St</td>
                                <td> New York, NY 30067</td>
                            </tr>
                            <tr className="flex flex-col">
                                <td>Identification</td>
                                <td>Driver's License</td>
                                <td>D43R4TR3R</td>
                                <td>NY 10/10/9999</td>
                            </tr>
                        </th>
                    </tbody>
                </table>
                {/* Content 2 Insurance */}
                <table className="table h-auto">
                    {/* head */}
                    <thead>
                    <tr>
                        <h1>Insurance Option</h1>
                    </tr>
                    </thead>
                    <button className="btn">Edit</button>
                    <tbody>
                        {/* row 1 */}
                        <th className="flex justify-around">
                            <tr className="flex flex-col">
                                    <td>Insurance</td>
                                    <td>$10,000 Base</td>
                            </tr>
                        </th>
                    </tbody>
                </table>
                {/* Content 3 Rental Options */}
                <table className="table h-auto">
                    {/* head */}
                    <thead>
                    <tr>
                        <h1>Rental Options</h1>
                    </tr>
                    </thead>
                    <button className="btn">Edit</button>
                    <tbody>
                        {/* row 1 */}
                        <th className="flex justify-around">
                            <tr className="flex flex-col">
                                    <td>Gate Information</td>
                                    <td>Gate Code:</td>
                                    <td>Gate Lockout:</td>
                                    <td>Gate Timezone:</td>
                                    <td>Keypad:</td>
                            </tr>
                            <tr className="flex flex-col">
                                    <td></td>
                                    <td>932493</td>
                                    <td>No</td>
                                    <td>01 (Standard)</td>
                                    <td>00 (Main Entry)</td>
                            </tr>
                        </th>
                        {/* row 2*/}
                        <th className="flex justify-around">
                            <tr className="flex flex-col">
                                    <td>Description of Goods</td>
                                    <td>Household Goods</td>
                            </tr>
                            <tr className="flex flex-col">
                                    <td>Value of Goods</td>
                                    <td>$10,000</td>
                            </tr>
                        </th>
                        {/* row 3*/}
                        <th className="flex justify-around">
                            <tr className="flex flex-col">
                                <td>Addenda</td>
                                <td>None</td>
                            </tr>
                        </th>
                         {/* row 4*/}
                         <th className="flex justify-around">
                            <tr className="flex flex-col">
                                <td>Discount</td>
                                <td>None</td>
                            </tr>
                        </th>
                         {/* row 5*/}
                         <th className="flex justify-around">
                            <tr className="flex flex-col">
                                <td>Services</td>
                                <td>None</td>
                            </tr>
                        </th>
                         {/* row 6*/}
                         <th className="flex justify-around">
                            <tr className="flex flex-col">
                                <td>Questions</td>
                                <td>Lenght of stay? 6 months</td>
                                <td>Student? Yes</td>
                            </tr>
                        </th>
                    </tbody>
                </table>
            </article>
        </div>
    )
}

export default Details;