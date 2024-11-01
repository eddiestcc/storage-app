import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const UnitTable = () => {

    const [tableList, setTableList] = useState([]);

    async function getUsers() {
      const url = "http://localhost:3001";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const userList = await response.json();
        return userList;
      } catch (error) {
        console.error(error.message);
      }
    }

    useEffect(() => {
      getUsers()
      .then((data) => setTableList(data))
  }, []);
    

    return (
        <div className="rounded-xl overflow-x-auto">
            <table className="table">
            {/* head */}
            <thead className="text-2xl text-slate-100 bg-base-100">
                <tr>
                <th>Unit Number</th>
                <th>Account Name</th>
                <th>Unit Type</th>
                <th>Paid Thru Date</th>
                <th>Rental Start Date</th>
                </tr>
            </thead>
            {tableList.map((info, index) => {
              console.log(info, 'info')
            return(
                <tbody 
                key={index} 
                className="bg-white text-base-100 text-xl hover:bg-base-100  hover:text-slate-100 ">
                    {/* row 1 */}
                    
                    <th>
                      <NavLink
                      to={`/account`}
                      className="cursor-pointer btn btn-outline"
                      >{info.unit} 
                      </NavLink>
                    </th>
                    <td>{info.accountName}</td>
                    <td>{info.unitType}</td>
                    <td>{info.paidThruDate}</td>
                    <td>{info.rentalStartDate}</td>
                   
                </tbody>
            )}
        )}
            </table>
      </div>
    )
}

export default UnitTable;