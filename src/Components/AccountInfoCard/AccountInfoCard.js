const fields = [
    'First Name',
    'Last Name',
    'Date of Birth',
    'Primary Phone Number', 
    'Secondary Phone Number',
    'Email',  
    'Drivers License Number',
    'License Expiration',
    'License State',
    'Street',
    'Apartment/Unit',
    'City',
    'ZIP',
]


const AccountInfoCard = () => {

    return (
        <div className="flex flex-wrap justify-end bg-base-100">
            <div className=" flex justify-center flex-wrap">
                {fields.map((info, index) => {
                    return(
                            <article  key={index} className="hero-content px-8">
                                <div className="w-72">
                                    <h4 className="text-lg pb-2 font-semibold text-slate-100">{info}</h4>
                                    <div className="input px-3 flex items-center gap-2 contact-form-field">
                                        <h4 className="text-lg pb-2 font-semibold text-slate-100">info here</h4>
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