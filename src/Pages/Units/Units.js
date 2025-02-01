import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import FilterListItem from "../../Components/FilterListItem/FilterListItem";
import { getUsers, toggleDrawer } from "../../utils";

const Units = () => {

    // State for the table list
    const [tableList, setTableList] = useState([]);
    const [visibleTable , setVisibleTable] = useState([])
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        // Fetch users from database
        // Needs two parameters: setLoading and the url
        getUsers(setLoading,"http://localhost:3001/units")
        .then(data => {
            // Set the table list to the data
            setTableList(data);
            setVisibleTable(data);
        });
  }, []);

// If loading is true, return the loading screen
if (loading) {
    // LOADING SCREEN 
    return(
        <div className="h-screen">
        {/* container for unit list and sidebar  */}
        <div className="flex flex-col">
                {/* TOP SIDE */}
                <div className="flex flex-col">
                    <button className="btn text-white text-2xl filter-btn">Filter</button>
                    <div className="filter h-min w-screen hidden">
                        <div className="flex justify-evenly rounded-lg bg-slate-700 text-base-content min-h-full p-5">
                            {/* Sidebar content here */}
                            <div>
                                <details className="dropdown">
                                <summary className="btn btn-wide btn-outline">Unit Type</summary>
                                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] p-2 shadow">
                                    <FilterListItem  />
                                </ul>
                                </details>
                            </div>
                            <div>
                                <details className="dropdown">
                                <summary className="btn btn-outline btn-wide">Unit Type</summary>
                                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] p-2 shadow">
                                    <FilterListItem  />
                                </ul>
                                </details>
                            </div>
                            <div>
                                <details className="dropdown">
                                <summary className="btn btn-outline btn-wide">Unit Type</summary>
                                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] p-2 shadow">
                                    <FilterListItem  />
                                </ul>
                                </details>
                            </div>
                        </div>
                    </div>
                </div>
                 {/* BOTTOM SIDE */}
                <div className="h-screen w-screen overflow-auto">
                    <div className="rounded-xl overflow-x-max">
                        <table className="table">
                            {/* head */}
                            <thead className="text-2xl text-slate-100 bg-base-100 sticky top-0">
                                <tr>
                                    <td>Unit Number </td>
                                    <td>Account Name </td>
                                    <td>Unit Type </td>
                                    <td>Paid Thru Date </td>
                                    <td>Rental Start Date </td>
                                    <td>Status </td>
                                </tr>
                            </thead>
                        </table>
                        {/* Loading Area  */}
                        <div className="h-screen flex justify-center items-center flex-col pb-72">
                            <div className="pb-4">
                                <h1 className="text-2xl text-slate-500  font-bold">Please wait.</h1>
                            </div>
                            <div>
                                <span className="loading loading-ring loading-lg"></span>
                            </div>
                        </div>
                        {/* Loading Area  */}
                    </div>
                </div>
            </div>
        </div>
    )
    
} else {
// If loading is false, return the table
return(
        <div className="h-screen">
            {/* container for unit list and sidebar  */}
            <div className="flex flex-col">
                 {/* FILTER MENU */}
                <div className="flex flex-col">
                    <button onClick={toggleDrawer} className="btn btn-ghost text-base-100 text-2xl filter-btn">Filter</button>
                    <div className="filter h-min w-screen hidden">
                        <div className="bg-base-100 text-base-content min-h-full p-5">
                            {/* Filter content here */}
                            <FilterListItem tableList={tableList} setVisibleTable={setVisibleTable} />
                        </div>
                    </div>
                </div>
                 {/* TABLE */}
                <div className="h-screen w-screen overflow-y-auto">
                    <div className="rounded-xl overflow-x-max">
                        <table className="table">
                            {/* head */}
                            <thead className="text-2xl text-slate-100 bg-base-100 sticky top-0">
                                <tr>
                                    <td>Unit Number</td>
                                    <td>Account Name</td>
                                    <td>Unit Type</td>
                                    <td>Paid Thru Date</td>
                                    <td>Rental Start Date</td>
                                    <td>Status</td>
                                </tr>
                            </thead>
                            {visibleTable.map((info, index) => {

                                
                                const { id, unit_number, unit_type, paid_thru_date, account_name, rental_start_date } = info;
                                let { unit_status } = info;
                                let buttonClass = '';
                                let paidThruDate = '';
                                let rentalStartDate ='';

                               

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

                                const findDelinquentStatus = () => {
                                    {/* Todays date  */}
                                    const date = new Date;
                                    const getToday = date.getTime()
                                    const today = new Date(getToday).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "numeric",
                                    day: "numeric"
                                })
                                    {/* Paid Thru Date  */}

                                    const pastDue = formattedThruDate < today;
                                    const current = formattedThruDate >= today; 
                                    paidThruDate = formattedThruDate;
                                    rentalStartDate = formattedStartDate;

                                    if (formattedThruDate === 'Invalid Date' && account_name === null){
                                        paidThruDate = null;
                                        rentalStartDate = null;
                                        unit_status = 'Available';
                                        buttonClass = 'flex btn btn-warning no-animation cursor-default'
                                        return unit_status;
                                    } else if (pastDue) {
                                        unit_status = 'Past Due'
                                        buttonClass = 'flex btn btn-error no-animation cursor-default'
                                        return unit_status;
                                    } else {
                                        unit_status = 'Current';
                                        buttonClass = 'flex btn btn-success no-animation cursor-default'
                                        return unit_status;
                                    }
                                }

                                findDelinquentStatus();
                                if (id) {
                                    return(
                                            <tbody 
                                            key={index} 
                                            className="bg-white text-base-100 text-xl hover:bg-base-100 hover:text-slate-100">
                                                {/* rows */}
                                                <tr>
                                                    <td>
                                                    <NavLink
                                                    // This is the account number
                                                    to={`/account/${id}`}
                                                    className="cursor-pointer btn-link btn btn-outline"
                                                    >{unit_number} 
                                                    </NavLink>
                                                    </td>
                                                    <td>{account_name}</td>
                                                    <td>{unit_type}</td>
                                                    <td>{paidThruDate}</td>
                                                    <td>{rentalStartDate}</td>
                                                    <td>
                                                        <p className={buttonClass}>{unit_status}</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        )
                                    } else {
                                        return(
                                            <tbody 
                                            key={index} 
                                            className="bg-white text-base-100 text-xl hover:bg-base-100 hover:text-slate-100">
                                                {/* rows */}
                                                <tr>
                                                    <td>
                                                        <div className="cursor-default btn btn-outline">
                                                            {unit_number} 
                                                        </div>
                                                    </td>
                                                    <td>{account_name}</td>
                                                    <td>{unit_type}</td>
                                                    <td>{paidThruDate}</td>
                                                    <td>{rentalStartDate}</td>
                                                    <td>
                                                        <p className={buttonClass}>{unit_status}</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        )

                                    }
                                }      
                            )}
                        </table>
                    </div>
                </div>
            </div>
          
        </div>
       
    )}
}

export default Units;