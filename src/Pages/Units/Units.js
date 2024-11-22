import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import FilterListItem from "../../Components/FilterListItem/FilterListItem";

const Units = () => {

    const [tableList, setTableList] = useState([]);
    const [displayTable, setDisplayTable] = useState([]);

    async function getUsers() {
      const url = "http://localhost:3001/units";
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
      .then(data => setTableList(data))
  }, []);


return(
        <div className="h-screen">
            {/* LEFT SIDE */}
            <div className="flex space-between">
                <div className="h-screen overflow-auto container">
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
                                <th>Status</th>
                                </tr>
                            </thead>
                            {tableList.map((info, index) => {
                                
                            const { id, unit_number, unit_type, unit_status, paid_thru_date, account_name, rental_start_date } = info;

                            const timeStampStartDate = Date.parse(rental_start_date);
                            const startDate = new Date (timeStampStartDate);
                            const formattedStartDate = startDate.toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "numeric",
                                day: "numeric"
                            })

                            const timeStampThruDate = Date.parse(paid_thru_date);
                            const thruDate = new Date (timeStampThruDate);
                            const formattedThruDate = thruDate.toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "numeric",
                                day: "numeric"
                            })

                            return(
                                    <tbody 
                                    key={index} 
                                    className="bg-white text-base-100 text-xl hover:bg-base-100 hover:text-slate-100">
                                        {/* row 1 */}
                                        <th>
                                        <NavLink
                                        // This will be an account number that is unique later on 
                                        to={`/account/${id}`}
                                        className="cursor-pointer btn btn-outline"
                                        >{unit_number} 
                                        </NavLink>
                                        </th>
                                        <td >{account_name}</td>
                                        <td>{unit_type}</td>
                                        <td>{formattedThruDate}</td>
                                        <td>{formattedStartDate}</td>
                                        <td>{unit_status}</td>
                                    </tbody>
                                )}
                            )}
                        </table>
                    </div>
                </div>
                {/* RIGHT SIDE */}
                <div className="flex justify-center">
                    <div className="drawer lg:drawer-open">
                        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content flex flex-col items-center justify-center">
                            {/* Page content here */}
                            <label htmlFor="my-drawer-2" className="flex btn btn-primary drawer-button lg:hidden">
                                Filters
                            </label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                            <button className="btn text-white text-2xl w-96">Filter</button>
                            <ul className="rounded-lg bg-base-100 w-96 text-base-content min-h-full p-10">
                                {/* Sidebar content here */}
                                <div className="flex justify-center pb-5">
                                    <details className="dropdown">
                                    <summary className="btn btn-outline w-full">Unit Type</summary>
                                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] p-2 shadow">
                                        <li>Item 1</li>
                                        <FilterListItem displayTable={displayTable} setDisplayTable={setDisplayTable} />
                                    </ul>
                                    </details>
                                </div>
                                <div className="flex justify-center pb-5">
                                    <li className="btn btn-outline w-full">Mock</li>
                                </div>
                                <div className="flex justify-center pb-5">
                                    <li className="btn btn-outline w-full">Mock</li>
                                </div>
                                <div className="flex justify-center pb-5">
                                    <li className="btn btn-outline w-full">Mock</li>
                                </div>
                                <div className="flex justify-center pb-5">
                                    <li className="btn btn-outline w-full">Mock</li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
          
        </div>
       
    )
}

export default Units;