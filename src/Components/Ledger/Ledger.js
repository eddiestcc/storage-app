const Ledger = () => {
    return (
        <div className="flex justify-center bg-slate-200">
            <article className="overflow-x-auto w-full">
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
                        <td>11/12/2040</td>
                        <td>Invoice</td>
                        <td>$298.10</td>
                        <td>$298.10</td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                        <td>11/12/2040</td>
                        <td>Invoice</td>
                        <td>$298.10</td>
                        <td>$298.10</td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                        <td>11/12/2040</td>
                        <td>Invoice</td>
                        <td>$298.10</td>
                        <td>$298.10</td>
                    </tr>
                    </tbody>
                </table>
            </article>
        </div>
    )
}

export default Ledger;