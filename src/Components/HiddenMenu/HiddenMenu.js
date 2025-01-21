import { useContext } from "react";
import { CartContext, UnitsContext } from "../../Pages/Rental/Rental";
import { getAvailableUnits } from "../../utils";

    const HiddenMenu = ({ setDisplayUnitInfo, setUpdateCart }) => {

        // Get units from context
        const units = useContext(UnitsContext);
        const cart = useContext(CartContext);

        // Empty available units array to store unique units
        let availableUnits = [];

        // Counter for loop
        let count = 0;


        // Loop through units and store unique units in availableUnits array
        getAvailableUnits(units, availableUnits, count);

        // Handle unit selection and display unit information
        const handleUnitSelect = (e) => {
            // Selection of unit displayed
            let selection = Number(e.target.textContent);
            for (let i = 0, length = units.length; i < length; i++) {
                    const unit = units[i];
                if (unit.unit_number === selection) {
                    // Set unit information to display
                    setDisplayUnitInfo({
                        number: unit.unit_number,
                        size: unit.size,
                        type: unit.full_unit_type,
                        price: unit.price
                    })
                    // If nothing is in the cart, add unit to cart
                    if (cart.length === 0) {
                        cart.push({item: unit.full_unit_type, price: unit.price, quantity: 1});
                    } else {
                    // If a unit is found in cart, update the unit to the newly selected one
                        let found = false;
                        for (let i = 0, length = cart.length; i < length; i++) {
                            if (cart[i].item) {
                                cart.splice(i, 1);
                                cart.push({item: unit.full_unit_type, price: unit.price, quantity: 1});
                                found = true;
                            }
                        }
                    // If no unit is found in cart, add the unit to the cart
                        if (!found) {
                            cart.push({item: unit.full_unit_type, price: unit.price, quantity: 1});
                        }
                    }
                    setUpdateCart(true); 
                    break;
                }
            }
        }

        return (
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    {/* HIDDEN MENU HERE */}
                    {availableUnits.map((object,index) => {
                        const { size, type } = object;
                        return(
                        <div key={index} className="collapse collapse-arrow bg-sale-200">
                            <input type="radio" name="my-accordion-2" />
                            <div className="text-slate-100 collapse-title text-xl font-medium">{size} - {type}</div>
                            <div className="collapse-content">
                            <h1>Select Unit Number</h1>
                                <div className="space-x-8 space-y-5">
                                {units.map ((unit, index) => {
                                    const { unit_number } = unit; 
                                    if (object.id === unit.unit_type_id)
                                    return (
                                        <button onClick={handleUnitSelect} key={index} className=" text-xl text-slate-200 btn btn-neutral">{unit_number}</button>
                                    )
                                })}
                                </div>
                            </div>
                        </div>
                        )
                        })
                    } 
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        )
    }
    
    export default HiddenMenu;