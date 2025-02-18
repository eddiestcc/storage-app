import { useContext, useState } from "react";
import { getAccountFields, splitName } from "../../utils";
import { UserDataContext } from "../../Pages/Account/Account";

const AccountInfoCard = () => {

    // State
    const [moveOutDate, setMoveOutDate] = useState(null);
    const [msg, setMsg] = useState(null);

    // Context 
    const userData = useContext(UserDataContext);

    const { 
    account_name, 
    phone_number, 
    email, 
    street_one, 
    street_two, 
    city, 
    state, 
    zip_code, 
    license_number, 
    license_expiration, 
    license_state, 
    date_of_birth, 
    second_phone_number,
    unit_number,
    id,
    } = userData;
   

    const timeStampBirth = Date.parse(date_of_birth);
    const birthDate = new Date (timeStampBirth);
    const formattedBirthDate = birthDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "numeric",
        day: "numeric"
    })

    // Get account fields. The function requires the fields in the argument to be in a specific order.
    // Order start to finish: account_name, phone_number, email, street_one, street_two, city, state, zip_code, license_number, license_expiration, license_state, formattedBirthDate, second_phone_number
    const accountFields = getAccountFields(
        account_name,
        phone_number, 
        email, 
        street_one, 
        street_two, 
        city, 
        state, 
        zip_code, 
        license_number, 
        license_expiration, 
        license_state, 
        formattedBirthDate, 
        second_phone_number,
        splitName);
    
    const handleMoveOut = async () => {

        // Elements 
        const moveOutDateValue = document.getElementById('move-out-date-input').value;
        const moveOutDate = moveOutDateValue.replaceAll('-', '/');
        const formatMoveOut = new Date(moveOutDate).toLocaleDateString('en-US', {
            month: '2-digit',
            day: '2-digit',
            year: '2-digit'
        })
        const closeBtn = document.getElementById('close-btn');

        try {
            const url = `http://localhost:3001/account/moveout`;
            const response = await fetch(url, {
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify({
                    id: id,
                    moveOutDate: formatMoveOut
                })
            });
            if (!response.ok) {
              throw new Error(`Response status: ${response.status}`);
            }
            await response.json()
            .then(response => {
            console.log(closeBtn.click())
            console.log(response.msg)
            setMsg(response.msg)
            });
          } catch (error) {
            console.error(error.message, 'move out error');
          }

    }

    return (
        <div className="flex flex-wrap">
            <div className="flex flex-row w-full h-min shadow-xl text-xl font-bold text-base-100 sticky top-0 bg-white">
                <div className="flex flex-row card-body">
                    <h2 className="text-blue-800 font-black pr-4">{account_name}</h2>
                    <h2>Unit Number: {unit_number}</h2>
                </div>
                <div className="flex flex-row items-center justify-end pr-48 card-body">
                    <h2>Account Number: {id}</h2>
                    <div className="dropdown dropdown-bottom">
                        <div tabIndex={0} role="button" className="btn btn-wide btn-info">Actions</div>
                        <ul tabIndex={0} className="dropdown-content menu bg-slate-200 text-slate-100 rounded-box z-[1] w-52 p-2 shadow">
                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                            <button className="btn btn-ghost text-base-100" onClick={()=>document.getElementById('my_modal_3').showModal()}>Move Out</button>
                            <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button id="close-btn" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <div className="flex flex-col">
                                    <h3 className="font-bold text-lg pb-5">Confirm Move Out</h3>
                                    <input id="move-out-date-input" className="rounded p-2 text-base-300 w-full dark-scheme" type="date"></input>
                                </div>
                                <div className="flex justify-center pt-5">
                                    <button onClick={handleMoveOut} className="rounded btn btn-info btn-wide p-2 text-base-300">Confirm</button>
                                </div>
                                
                            </div>
                            </dialog>
                        </ul>
                    </div>
                </div>
            </div>
            <div role="alert" className="rounded-none alert alert-info">{msg}</div>
            <div className="flex justify-center flex-wrap bg-white pt-6">
                {accountFields.map((data, index) => {
                    return(
                            <article  key={index} className="p-2">
                                <div className="w-72">
                                    <h4 className="text-sm pb-2 font-semibold text-base-400">{data[0]}</h4>
                                    <div>
                                        <h4 className="text-xl pb-2 font-semibold text-base-100">{data[1]}</h4>
                                    </div>
                                </div>
                            </article>
                        )
                     })
                 }
            </div>
        </div>
    )
}

export default AccountInfoCard;