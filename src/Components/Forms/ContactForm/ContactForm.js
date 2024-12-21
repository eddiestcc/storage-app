import { useState } from "react"
import { returnInputField } from "../../../utils"



const formFields = [
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
    'State',
    'ZIP',
]

const ContactForm = () => {

    const contactField = document.getElementsByClassName("contact-form-field");
    const contactButton = document.getElementsByClassName("contact-form-button");

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        primaryPhone: '',
        secondaryPhone: '',
        email: '',
        licenseNumber: '',
        licenseExpiration: '',
        licenseState: '',
        street: '',
        unit: '',
        city: '',
        state: '',
        zip: '',
    })


    function setContactForm() {
        contactButton[0].children[0].classList.toggle('hidden');
        contactButton[0].children[1].classList.toggle('hidden');
        for (let index = 0; index < contactField.length; index++) {
            const input = contactField[index];
            input.firstChild.toggleAttribute('readOnly');
            input.firstChild.classList.toggle('text-base-300');
            input.firstChild.classList.toggle('text-white');
            input.classList.toggle('bg-slate-100')
            input.classList.toggle('bg-base-200')
        }
    }
   
    const getInput = () => {
        const array = [];
        for (let i = 0; i < contactField.length; i++) {
            const currentInput = contactField[i];
            const currentText = currentInput.firstChild.value;
            array.push(currentText)           
        }
       setFormData({
        firstName: array[0],
        lastName: array[1],
        dateOfBirth: array[2],
        primaryPhone: array[3],
        secondaryPhone: array[4],
        email: array[5],
        licenseNumber: array[6],
        licenseExpiration: array[7],
        licenseState: array[8],
        street: array[9],
        unit: array[10],
        city: array[11],
        state: array[12],
        zip: array[13],
       })
    }

    console.log(formData)

    

   


    const handleForm = async () => {
        setContactForm();
        getInput();
        try {
            
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <div className="flex flex-wrap justify-end">
            <button onClick={handleForm} className="btn btn-outline rounded-full contact-form-button">
                <div className="hidden" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                    </svg>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="size-4" > 
                    <path fill="currentColor" d="m9 19.414l-6.707-6.707l1.414-1.414L9 16.586L20.293 5.293l1.414 1.414z"></path>
                    </svg>
                </div>
            </button>
            
            <div className=" flex justify-center flex-wrap">
                {formFields.map((fieldName, index) => {
                    return(
                            <article  key={index} className="hero-content px-8">
                                <div className="w-72 contact-form-div">
                                    <h4 className="text-lg pb-2 font-semibold text-slate-100">{fieldName}</h4>
                                    <label className="input px-3 flex items-center bg-slate-100 gap-2 contact-form-field">
                                        <input onChange={returnInputField} type="text" className="text-base-300 " placeholder="..." />
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

export default ContactForm;