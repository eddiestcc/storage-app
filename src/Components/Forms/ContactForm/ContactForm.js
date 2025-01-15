import { useContext } from "react";
import { formFields, getInput, returnInputField, setContactForm, stateOptions } from "../../../utils"
import { FormContext } from "../../../Pages/Rental/Rental";

const ContactForm = ({ setFormData }) => {

    // Context
    const formData = useContext(FormContext)

    // DOM elements
    const contactField = document.getElementsByClassName("contact-form-field");
    const contactButton = document.getElementsByClassName("contact-form-button");
 
    // Saves form
    const saveForm = async () => {
        try {
        // Set contact form requires four arguments, the save button, 
        // the form field, the getInput callbackfunction, and the state setter.
        setContactForm(contactButton, contactField, getInput, setFormData );
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <div>
            <div className="flex flex-wrap justify-end pt-3">
                <button onClick={saveForm} className="btn btn-outline rounded-full contact-form-button">
                    <div className="hidden" >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" 
                            />
                        </svg>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="size-4" > 
                        <path fill="currentColor" d="m9 19.414l-6.707-6.707l1.414-1.414L9 16.586L20.293 5.293l1.414 1.414z"></path>
                        </svg>
                    </div>
                </button>
                {/* Form fields */}
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
                                    <article key={index}  className="hero-content px-8">
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
                </div>
            </div>
        </div>      
    )
}

export default ContactForm;