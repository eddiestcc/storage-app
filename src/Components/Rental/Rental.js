import ContactForm from "../ContactForm/ContactForm";
import Nav from "../Nav/Nav";
import Logout from "../Logout/Logout";
import ContactInput from "../ContactInput/ContactInput";

const Rental = () => {
    return(
        <div className="h-screen">
            <div className="flex flex-row-reverse">
                <Logout />
                <Nav />
            </div>
            <div className="card bg-base-100">
                <div className="justify-center overflow-auto flex flex-wrap p-5">
                    <ContactInput />
                </div>
            </div>
        </div>
       
    )
}

export default Rental;