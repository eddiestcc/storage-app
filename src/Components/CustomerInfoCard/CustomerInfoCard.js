import { readField } from "../../utils"

const mockInfo = [
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


const CustomerInfoCard = () => {
    return (
        <div className="flex flex-wrap justify-end bg-base-100">
            <div className=" flex justify-center flex-wrap">
                {mockInfo.map((info, index) => {
                    return(
                            <article  key={index} className="hero-content px-8">
                                <div className="w-72 contact-form-div">
                                    <h4 className="text-lg pb-2 font-semibold text-slate-100">{info}</h4>
                                    <label className="input px-3 flex items-center bg-slate-100 gap-2 contact-form-field">
                                        <input onChange={readField} type="text" className="text-base-300 " placeholder="..." />
                                    </label>
                                </div>
                            </article>
                        )
                     })
                 }
            </div>
        </div>
    )
}

export default CustomerInfoCard;