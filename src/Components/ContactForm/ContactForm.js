import ContactSquare from "../ContactSquare/ContactSquare";

const ContactForm = () => {
    return(
        <article className="contactform-card flex flex-row center w-fit h-fit bg-base-100 overflow-scroll">
            <div className="xl:flex flex-row items-center">
                <ContactSquare />
            </div>
        </article>
    )
}

export default ContactForm;