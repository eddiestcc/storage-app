import ContactForm from "../../Components/Forms/ContactForm/ContactForm";
import RentalForm from "../../Components/Forms/RentalForm/RentalForm";
import GoodsForm from "../../Components/Forms/GoodsForm/GoodsForm";
import QuestionForm from "../../Components/Forms/QuestionForm/QuestionForm";
import SelectUnitButton from "../../Components/Buttons/SelectUnitButton/SelectUnitButton";
import Cart from "../../Components/Cart/Cart";
import { createContext, useEffect, useState } from "react";

export const UnitsContext = createContext(null);
export const UnitDisplayContext = createContext(null);
export const FormContext = createContext(null);

const Rental = () => {

    // Units from DB state 
    const [units, setUnits] = useState([]);

    useEffect(() => {
        const getUnits = async () => {
            try {
            //   setLoading(true);
              const url = "http://localhost:3001/rental";
              const response = await fetch(url);
              if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
              }
              const unitList = await response.json();
              return unitList;
            } catch (error) {
              console.error(error.message);
            } finally {
            // setLoading(false);
            }
          };
            getUnits()
            .then(data => {
                setUnits(data);
            });
    }, []);

    // Show selected unit state 
    const [displayUnitInfo, setDisplayUnitInfo] = useState({
        number: '',
        size: '',
        type: ''
    })

    
    // Form state 
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
        apartment: '',
        city: '',
        state: '',
        zip: '',
    })

    console.log(formData)

    return(
        <UnitsContext.Provider value={units}>
        <UnitDisplayContext.Provider value={displayUnitInfo}>
        <FormContext.Provider value={formData}>
            <div className="relative bg-white">
                {/* LEFT  */}
                <div className="relative inset-0 pt-10 flex space-between max-lg:flex-wrap h-full">
                    <div className="bg-white h-screen overflow-y-auto text-center lg:text-left">
                            <h1 className="flex justify-center text-base-100 text-5xl font-bold pt-7 pb-5">New Rental</h1>
                        <div className="flex justify-center pt-5">
                            <div className="justify-center flex flex-wrap p-5 bg-base-200 w-11/12 rounded-2xl">
                                <ContactForm setFormData={setFormData} />
                            </div>
                        </div>
                        <div className="flex justify-center pt-5">
                            <div  className="justify-center flex flex-wrap p-5 bg-transparent w-11/12 rounded-2xl">
                                <GoodsForm />
                                <SelectUnitButton setDisplayUnitInfo={setDisplayUnitInfo}/>
                                <RentalForm setDisplayUnitInfo={setDisplayUnitInfo} />
                            </div>
                        </div>
                        <div className="flex justify-center pb-5 pt-5 ">
                            <div className="justify-center flex flex-wrap p-5 bg-base-200 w-11/12 rounded-2xl">
                                <QuestionForm />
                            </div>
                        </div>
                        <footer className="bg-transparent pb-64">
                        </footer>
                    </div>
                    {/* RIGHT  */}
                    <div className="flex max-lg:sticky max-lg:w-screen max-lg:inset-x-0 max-lg:bottom-0 max-lg:h-min flex-start h-screen bg-slate-300 max-lg:rounded-xl flex-col  bg-white shadow-xl">
                        <Cart setDisplayUnitInfo={setDisplayUnitInfo} />
                    </div>
                </div>
            </div>
        </FormContext.Provider>
        </UnitDisplayContext.Provider>
        </UnitsContext.Provider>
    )
}

export default Rental;