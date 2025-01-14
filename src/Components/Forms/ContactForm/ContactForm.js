import { returnInputField, stateOptions } from "../../../utils"

const formFields = [
    {
        fieldName:  'First Name' ,
        className: 'text-base-300 w-full',
        type: 'text',
        placeholder: 'John',
        pattern: '[a-z]',
        tag: 'input',
    },
    {
        fieldName:  'Last Name' ,
        className: 'text-base-300 w-full',
        type: 'text',
        placeholder: 'Doe',
        pattern: null,
        tag: 'input',
    },
    {
        fieldName:  'Date of Birth' ,
        className: 'text-base-300 w-full dark-scheme',
        type: 'date',
        placeholder: '01/01/1900',
        pattern: null,
        tag: 'input',
    },
    {
        fieldName:  'Primary Phone Number' ,
        className: 'text-base-300 w-full',
        type: 'tel',
        placeholder: '(999)-999-9999',
        pattern: null,
        tag: 'input',
    },
    {
        fieldName:  'Secondary Phone Number' ,
        className: 'text-base-300 w-full',
        type: 'tel',
        placeholder: '(999)-999-9999',
        pattern: null,
        tag: 'input',
    },
    {
        fieldName:  'Email' ,
        className: 'text-base-300 w-full',
        type: 'email',
        placeholder: 'example@example.com',
        pattern: null,
        tag: 'input',
    },
    {
        fieldName:  'Drivers License Number' ,
        className: 'text-base-300 w-full',
        type: 'text',
        placeholder: 'A1B2C3D4E5',
        pattern: null,
        tag: 'input',
    },
    {
        fieldName:  'License Expiration' ,
        className: 'text-base-300 w-full dark-scheme',
        type: 'date',
        placeholder: '01/01/2999',
        pattern: null,
        tag: 'input',
    },
    {
        fieldName:  'License State' ,
        className: 'text-base-300 w-full bg-transparent',
        type: 'text',
        placeholder: 'FL - Florida"',
        pattern: null,
        tag: 'option',
    },
    {
        fieldName:  'Street' ,
        className: 'text-base-300 w-full',
        type: 'text',
        placeholder: '123 Example St',
        pattern: null,
        tag: 'input',
    },
    {
        fieldName:  'Apartment/Unit' ,
        className: 'text-base-300 w-full',
        type: 'text',
        placeholder: 'Apt 100',
        pattern: null,
        tag: 'input',
    },
    {
        fieldName:  'City' ,
        className: 'text-base-300 w-full',
        type: 'text',
        placeholder: 'Tampa',
        pattern: null,
        tag: 'input',
    },
    {
        fieldName:  'State' ,
        className: 'text-base-300 w-full bg-transparent',
        type: 'text',
        placeholder: 'FL - Florida',
        pattern: null,
        tag: 'option',
    },
    {
        fieldName:  'ZIP' ,
        className: 'text-base-300 w-full',
        type: 'text',
        placeholder: '99999',
        pattern: null,
        tag: 'input',
    },
]

const ContactForm = ({ setFormData }) => {

    const contactField = document.getElementsByClassName("contact-form-field");
    const contactButton = document.getElementsByClassName("contact-form-button");

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
            const currentFieldTitle = contactField[i].parentElement.textContent;
            const currentText = currentInput.firstChild.value;
            // Check to see if field is empty and if so, send an error. 
            if (currentText.length < 1) {
                // console.error(`${currentFieldTitle} cannot be left blank.`)
            } 
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
        apartment: array[10],
        city: array[11],
        state: array[12],
        zip: array[13],
       })
    }
 
    const handleForm = async () => {
        setContactForm();
        getInput();
        try {
            
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <div>
        {/* ALERT SECTION START */}
            {/* Warning header unsaved button */}
            <div role="alert" id="missing-checkmark-banner" className="alert alert-warning hidden">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 shrink-0 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24">
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span>Warning: Click checkmark before paying!</span>
            </div>
            {/* Warning header missing unit */}
            <div role="alert" id="missing-unit-banner" className="alert alert-warning hidden">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 shrink-0 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24">
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span>Warning: Select a unit before you continue!</span>
            </div>
            <div role="alert" id="payment-success-banner" className="alert alert-success hidden">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 shrink-0 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24">
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Payment successful!</span>
            </div>
            <div role="alert" id="error-banner" className="alert alert-error hidden">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 shrink-0 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24">
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Error! Task failed.</span>
            </div>
            {/* ALERT SECTION END  */}
            <div className="flex flex-wrap justify-end pt-3">
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
                    {formFields.map((form, index) => {
                            if (form.tag === 'input') {
                                return(
                                    <article  key={index} className="hero-content px-8">
                                        <div className="w-72 contact-form-div">
                                            <h4 className="text-lg pb-2 font-semibold text-slate-100">{form.fieldName}</h4>
                                            <label className="input px-3 flex items-center bg-slate-100 gap-2 contact-form-field">
                                                <input 
                                                onChange={returnInputField} 
                                                type={form.type} 
                                                className={form.className} 
                                                placeholder={form.placeholder}
                                                pattern={form.pattern} 
                                                />
                                            </label>
                                        </div>
                                    </article>
                                )

                            } else if (form.tag === 'option') {
                                return (
                                    <article  className="hero-content px-8">
                                        <div className="w-72 contact-form-div">
                                            <h4 className="text-lg pb-2 font-semibold text-slate-100">{form.fieldName}</h4>
                                            <label className="input px-3 flex items-center bg-slate-100 gap-2 contact-form-field">
                                                <select className={form.className}>
                                                    {stateOptions.map((option, i) => {
                                                            return (
                                                                <option key={i} value={option.value}>{option.label}</option>
                                                            )
                                                        }
                                                    )}
                                                </select>
                                            </label>
                                        </div>
                                    </article>
                                )
                            } 
                        })
                    }
                    {/* OPTIONS TEST  */}
                </div>
            </div>
        </div>      
    )
}

export default ContactForm;