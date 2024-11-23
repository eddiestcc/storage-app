const Documents = () => {
    return (
        <div className="flex justify-center bg-slate-200">
               <article className="overflow-x-auto w-full">
                <h1>Documents</h1>
                <table className="table h-80">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>Type</th>
                        <th>Relation</th>
                        <th>Name</th>
                        <th>Created Date</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>Lease</td>
                            <td>0001</td>
                            <td>Lease_Example.pdf</td>
                            <td>09/19/2030 8:15pm</td>
                            <td>*Menu Here*</td>
                        </tr>
                            {/* row 2 */}
                            <tr>
                            <td>Insurance Addenda</td>
                            <td>0001</td>
                            <td>Insurance_Example.pdf</td>
                            <td>09/19/2030 8:15pm</td>
                            <td>*Menu Here*</td>
                        </tr>
                            {/* row 3 */}
                            <tr>
                            <td>Text Election</td>
                            <td>0001</td>
                            <td>Text_Example.pdf</td>
                            <td>09/19/2030 8:15pm</td>
                            <td>*Menu Here*</td>
                        </tr>
                    </tbody>
                </table>
                <h1>Auction Images</h1>
                <table className="table h-80">
                    {/* head */}
                    <thead>
                        <tr>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </article>
        </div>
    )
}

export default Documents;