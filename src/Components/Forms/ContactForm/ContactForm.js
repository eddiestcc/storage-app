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

const ContactForm = () => {

    return (
        mockInfo.map((info) => {
            return(
                    <article className="hero-content px-8">
                        <div className="w-72">
                            <h4 className="text-lg pb-2 font-semibold text-slate-100">{info}</h4>
                            <label className="input px-3 input-bordered  flex items-center bg-slate-200 gap-2">
                                <input type="text" className="text-slate-600" placeholder="..." />
                            </label>
                        </div>
                    </article>
            )
        })
    )
}

export default ContactForm;