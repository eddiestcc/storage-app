import { useContext } from "react";
import { getAccountFields, splitName } from "../../utils";
import { UserDataContext } from "../../Pages/Account/Account";

const AccountInfoCard = () => {

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

    return (
        <div className="flex flex-wrap">
            <div className="flex flex-row w-full h-min shadow-xl text-xl font-bold text-base-100 sticky top-0 bg-white">
                <div className="flex flex-row card-body">
                    <h2 className="text-blue-800 font-black pr-4">{account_name}</h2>
                    <h2>Unit Number: {unit_number}</h2>
                </div>
                <div className="card-body">
                    <h2>Account Number: {id}</h2>
                </div>
            </div>
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