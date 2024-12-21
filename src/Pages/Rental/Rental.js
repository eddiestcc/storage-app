import ContactForm from "../../Components/Forms/ContactForm/ContactForm";
import RentalForm from "../../Components/Forms/RentalForm/RentalForm";
import GoodsForm from "../../Components/Forms/GoodsForm/GoodsForm";
import QuestionForm from "../../Components/Forms/QuestionForm/QuestionForm";
import SelectUnitButton from "../../Components/Buttons/SelectUnitButton/SelectUnitButton";
import Cart from "../../Components/Cart/Cart";
import { createContext, useEffect, useState } from "react";

export const UnitsContext = createContext(null);
export const UnitDisplayContext = createContext(null);


const Rental = () => {

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

    const [displayUnitInfo, setDisplayUnitInfo] = useState({
        number: '',
        size: null,
        type: ''
    })


    return(
        <UnitsContext.Provider value={units}>
        <UnitDisplayContext.Provider value={displayUnitInfo}>
            <div className="relative bg-white">
                {/* LEFT  */}
                <div className="relative inset-0 pt-10 flex space-between max-lg:flex-wrap h-full">
                    <div className="bg-white h-screen overflow-y-auto lg:container text-center lg:text-left">
                            <h1 className="flex justify-center text-base-100 text-5xl font-bold pt-7 pb-5">New Rental</h1>
                        <div className="flex justify-center pt-5">
                            <div className="justify-center flex flex-wrap p-5 bg-base-200 w-11/12 rounded-2xl">
                                <ContactForm />
                            </div>
                        </div>
                        <div className="flex justify-center pt-5">
                            <div  className="justify-center flex flex-wrap p-5 bg-transparent w-11/12 rounded-2xl">
                                <GoodsForm />
                                <SelectUnitButton setDisplayUnitInfo={setDisplayUnitInfo}/>
                                <RentalForm />
                            </div>
                        </div>
                        <div className="flex justify-center pb-5 pt-5 ">
                            <div className="justify-center flex flex-wrap p-5 bg-base-200 w-11/12 rounded-2xl">
                                <QuestionForm />
                            </div>
                        </div>
                        <footer className="bg-slate-200 pb-64">
                        </footer>
                    </div>
                    {/* RIGHT  */}
                    <div className="flex max-lg:absolute max-lg:inset-x-0 max-lg:bottom-0 max-lg:h-96 flex-start h-screen  bg-slate-300 max-lg:rounded-xl flex-col ll bg-white shadow-xl">
                        <Cart />
                    </div>
                </div>
            </div>
        </UnitDisplayContext.Provider>
        </UnitsContext.Provider>
    )
}

export default Rental;