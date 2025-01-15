import { getAccountFields, splitName } from "../../utils";

const AccountInfoCard = ({ userData }) => {

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
    second_phone_number 
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
        <div className="flex flex-wrap justify-end bg-base-100">
            <div className=" flex justify-center flex-wrap">
                {accountFields.map((data, index) => {
                    return(
                            <article  key={index} className="hero-content px-8">
                                <div className="w-72">
                                    <h4 className="text-sm pb-2 font-semibold text-slate-400">{data[0]}</h4>
                                    <div>
                                        <h4 className="text-xl pb-2 font-semibold text-slate-100">{data[1]}</h4>
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