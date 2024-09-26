
import Nav from "../../Components/Nav/Nav";
import Logout from "../../Components/Buttons/Logout/Logout";
import ContactForm from "../../Components/Forms/ContactForm/ContactForm";
import RentalForm from "../../Components/Forms/RentalForm/RentalForm";
import GoodsForm from "../../Components/Forms/GoodsForm/GoodsForm";
import QuestionForm from "../../Components/Forms/QuestionForm/QuestionForm";
import SelectUnitButton from "../../Components/Buttons/SelectUnitButton/SelectUnitButton";
import HiddenMenu from "../../Components/HiddenMenu/HiddenMenu";

const Rental = () => {
    return(
        <div className="h-screen overflow-auto">
            <div className="flex flex-row-reverse">
                <Logout />
                <Nav />
            </div>
            <div className="flex justify-center pt-5 ">
                <div className="justify-center flex flex-wrap p-5 bg-base-200 w-11/12 rounded-2xl">
                    <ContactForm />
                </div>
            </div>
            <div className="flex justify-center pt-5">
                <div className="justify-center flex flex-wrap p-5 bg-transparent w-11/12 rounded-2xl">
                    <GoodsForm />
                    <SelectUnitButton />
                    <RentalForm />
                </div>
            </div>
            <div className="flex justify-center pt-5 ">
                <div className="justify-center flex flex-wrap p-5 bg-base-200 w-11/12 rounded-2xl">
                    <QuestionForm />
                </div>
            </div>
            <footer className="pb-64">

            </footer>
        </div>
       
    )
}

export default Rental;