const Ledger = () => {
    return (
        <div className="flex justify-center bg-slate-200">
                <div className="overflow-x-auto w-full">
                <table className="table h-80">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Balance Due</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>11/12/2040</th>
                        <td>Invoice</td>
                        <td>$298.10</td>
                        <td>$298.10</td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                        <th>11/12/2040</th>
                        <td>Invoice</td>
                        <td>$298.10</td>
                        <td>$298.10</td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                        <th>11/12/2040</th>
                        <td>Invoice</td>
                        <td>$298.10</td>
                        <td>$298.10</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Ledger;