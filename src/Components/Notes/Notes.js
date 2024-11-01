const Notes = () => {
    return (
        <div className="flex justify-center bg-slate-200">
            <div className="overflow-x-auto w-full">
                <table className="table h-80">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>Priority</th>
                        <th>Category</th>
                        <th>Details</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>High</th>
                        <td>Warning</td>
                        <td>Note Example</td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                        <th>low</th>
                        <td>General</td>
                        <td>Example Written Here</td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                        <th>low</th>
                        <td>Maintenance</td>
                        <td>Details Here</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Notes;