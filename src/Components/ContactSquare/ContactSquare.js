import ContactInput from "../ContactInput/ContactInput";

const ContactSquare = () => {

    return(
        <article>
            <div className="hero hero-align-start bg-white">
                <div className="bg-base-100 w-full shrink-0">
                    <div className="hero-content px-12 gap-y-12 flex-col">
                        <ContactInput />
                    </div>
                </div>
        </div>
       </article>
    )
}

export default ContactSquare;