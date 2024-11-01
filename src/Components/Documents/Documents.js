const Documents = () => {
    return (
        <div className="flex justify-center bg-slate-200">
               <div className="overflow-x-auto w-full">
                <th>Documents</th>
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
                            <th>Lease</th>
                            <td>0001</td>
                            <td>Lease_Example.pdf</td>
                            <td>09/19/2030 8:15pm</td>
                            <td>*Menu Here*</td>
                        </tr>
                            {/* row 2 */}
                            <tr>
                            <th>Insurance Addenda</th>
                            <td>0001</td>
                            <td>Insurance_Example.pdf</td>
                            <td>09/19/2030 8:15pm</td>
                            <td>*Menu Here*</td>
                        </tr>
                            {/* row 3 */}
                            <tr>
                            <th>Text Election</th>
                            <td>0001</td>
                            <td>Text_Example.pdf</td>
                            <td>09/19/2030 8:15pm</td>
                            <td>*Menu Here*</td>
                        </tr>
                    </tbody>
                </table>
                <th>Auction Images</th>
                <table className="table h-80">
                    {/* head */}
                    <thead>
                        <tr>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Documents;