
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

const ContactInput = () => {

    return (
        mockInfo.map((info) => {
        return(
                <article className="hero-content px-8">
                    <div className="w-72">
                        <h4 className="text-md pb-2 text-slate-100">{info}</h4>
                        <label className="input px-3 input-bordered  flex items-center bg-slate-100 gap-2">
                            <input type="text" className="bg-slate-100 text-slate-600" placeholder="..." />
                        </label>
                    </div>
                </article>
        )
    })
)

  


    // return(
    //     <div className="w-72">
    //     <h4 className="text-lg pb-2 text-slate-100">Name</h4>
    //     <label className="input px-3 input-bordered  flex items-center bg-slate-100 gap-2">
    //         <input type="text" className="bg-slate-100 text-slate-600" placeholder="Daisy" />
    //     </label>
    //     </div>
    // )
}

export default ContactInput;