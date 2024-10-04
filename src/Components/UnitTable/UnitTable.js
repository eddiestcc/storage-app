const mockInfo = [
    {
        number: '1000',
        name: 'John Doe',
        type: 'Climate-Controlled',
        status: 'Delinquent',
    },
    {
        number: '1000',
        name: 'John Doe',
        type: 'Climate-Controlled',
        status: 'Delinquent',
    },
    {
        number: '1000',
        name: 'John Doe',
        type: 'Climate-Controlled',
        status: 'Delinquent',
    },
    {
        number: '1000',
        name: 'John Doe',
        type: 'Climate-Controlled',
        status: 'Delinquent',
    },
    {
        number: '1000',
        name: 'John Doe',
        type: 'Climate-Controlled',
        status: 'Delinquent',
    },
    {
        number: '1000',
        name: 'John Doe',
        type: 'Climate-Controlled',
        status: 'Delinquent',
    },
    {
        number: '1000',
        name: 'John Doe',
        type: 'Climate-Controlled',
        status: 'Delinquent',
    },
    {
        number: '1000',
        name: 'John Doe',
        type: 'Climate-Controlled',
        status: 'Delinquent',
    },
    {
        number: '1000',
        name: 'John Doe',
        type: 'Climate-Controlled',
        status: 'Delinquent',
    },
    {
        number: '1000',
        name: 'John Doe',
        type: 'Climate-Controlled',
        status: 'Delinquent',
    },
    {
        number: '1000',
        name: 'John Doe',
        type: 'Climate-Controlled',
        status: 'Delinquent',
    },
    {
        number: '1000',
        name: 'John Doe',
        type: 'Climate-Controlled',
        status: 'Delinquent',
    },
    {
        number: '1000',
        name: 'John Doe',
        type: 'Climate-Controlled',
        status: 'Delinquent',
    },
    {
        number: '1000',
        name: 'John Doe',
        type: 'Climate-Controlled',
        status: 'Delinquent',
    },
    {
        number: '1000',
        name: 'John Doe',
        type: 'Climate-Controlled',
        status: 'Delinquent',
    },
    {
        number: '1000',
        name: 'John Doe',
        type: 'Climate-Controlled',
        status: 'Delinquent',
    },
    {
        number: '1000',
        name: 'John Doe',
        type: 'Climate-Controlled',
        status: 'Delinquent',
    },
    {
        number: '1000',
        name: 'John Doe',
        type: 'Climate-Controlled',
        status: 'Delinquent',
    },
    {
        number: '1000',
        name: 'John Doe',
        type: 'Climate-Controlled',
        status: 'Delinquent',
    },
    {
        number: '1000',
        name: 'John Doe',
        type: 'Climate-Controlled',
        status: 'Delinquent',
    },
    {
        number: '1000',
        name: 'John Doe',
        type: 'Climate-Controlled',
        status: 'Delinquent',
    },
    {
        number: '1000',
        name: 'John Doe',
        type: 'Climate-Controlled',
        status: 'Delinquent',
    },
    {
        number: '1000',
        name: 'John Doe',
        type: 'Climate-Controlled',
        status: 'Delinquent',
    },
    {
        number: '1000',
        name: 'John Doe',
        type: 'Climate-Controlled',
        status: 'Delinquent',
    },
    {
        number: '1000',
        name: 'John Doe',
        type: 'Climate-Controlled',
        status: 'Delinquent',
    },
    {
        number: '1000',
        name: 'John Doe',
        type: 'Climate-Controlled',
        status: 'Delinquent',
    },
    {
        number: '1000',
        name: 'John Doe',
        type: 'Climate-Controlled',
        status: 'Delinquent',
    },
    {
        number: '1000',
        name: 'John Doe',
        type: 'Climate-Controlled',
        status: 'Delinquent',
    },
    {
        number: '1000',
        name: 'John Doe',
        type: 'Climate-Controlled',
        status: 'Delinquent',
    },
    {
        number: '1000',
        name: 'John Doe',
        type: 'Climate-Controlled',
        status: 'Delinquent',
    },
    {
        number: '1000',
        name: 'John Doe',
        type: 'Climate-Controlled',
        status: 'Delinquent',
    },
    ]

const UnitTable = () => {
    return (
        <div className="rounded-xl overflow-x-auto">
            <table className="table">
            {/* head */}
            <thead className="text-2xl text-slate-100 bg-base-100">
                <tr>
                <th>Unit Number</th>
                <th>Account Name</th>
                <th>Unit Type</th>
                <th>Delinquency Status</th>
                </tr>
            </thead>
            {mockInfo.map((info, index) => {
                return(
                    <tbody key={index} 
                    className="bg-white text-base-100 text-xl hover:bg-base-100 cursor-pointer hover:text-slate-100
                    ">
                        {/* row 1 */}
                        <tr className="">
                        <th>{info.number}</th>
                        <td>{info.name}</td>
                        <td>{info.type}</td>
                        <td>{info.status}</td>
                        </tr>
                    </tbody>
                )}
            )}
            </table>
      </div>
    )
}

export default UnitTable;