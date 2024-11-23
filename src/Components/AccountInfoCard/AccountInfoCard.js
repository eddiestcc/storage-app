const AccountInfoCard = ({ userData }) => {

    const { account_name, phone_number, email, street_one, street_two, city, state, zip_code, license_number, license_expiration, license_state, date_of_birth, second_phone_number } = userData;
   
    function splitName(fullName) {
        const split = fullName.split(" ");
        const firstName = split[0];
        const lastName = split[split.length - 1];

        return{
            firstName: firstName,
            lastName: lastName,
        }
    }
    
    const firstName = splitName(account_name).firstName;
    const lastName = splitName(account_name).lastName;

    const timeStampBirth = Date.parse(date_of_birth);
    const birthDate = new Date (timeStampBirth);
    const formattedBirthDate = birthDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "numeric",
        day: "numeric"
    })

    const fields = [
    [
        'First Name',
        firstName
    ],
    [
        'Last Name',
        lastName
    ],
    [
        'Date of Birth',
       formattedBirthDate
    ],
    [
        'Primary Phone Number',
       phone_number
    ],
    [
        'Secondary Phone Number',
       second_phone_number
    ],
    [
        'Email',
       email
    ],
    [
        'Identification Number',
       license_number
    ],
    [
        'Identification Expiration',
       license_expiration
    ],
    [
        'Identification State',
       license_state
    ],
    [
        'Street',
       street_one
    ],
    [
        'Apartment/Unit',
       street_two
    ],
    [
        'City',
       city
    ],
    [
        'State',
        state
    ],
    [
        'Zip',
       zip_code
    ]
]

    return (
        <div className="flex flex-wrap justify-end bg-base-100">
            <div className=" flex justify-center flex-wrap">
                {fields.map((data, index) => {
                    console.log(data, 'data')
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