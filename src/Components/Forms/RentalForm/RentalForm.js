import { useContext } from "react";
import { CartContext, SelectInsurnaceContext } from "../../../Pages/Rental/Rental";
import { insurnaceOptions } from "../../../utils";

const RentalForm = ({setSelectInsurance, setUpdateCart}) => {

    let option = document.getElementsByClassName('insurance-option');
    let selection = document.getElementsByClassName('insurnace-selection')

    // Contxts
    const cart = useContext(CartContext)
    const selectInsurance = useContext(SelectInsurnaceContext)

    // Console.log
    // I left off trying to figure out how to display the insurnace information that is selected, as well as
    // sending to to the cart, so that it could be used at checkout

    // Handle insurance selection and displays insurnace information
    const handleUnitSelect = (e) => {

        let itemInCart = cart.length;

        // Selection of insurnace displayed
        let selection = e.target.textContent;
        console.log(selection, 'selection')
        const {type, coverage, price} = selection;

        if (selection) {
            // Set unit information to display
            setSelectInsurance({
                type: type,
                coverage: coverage,
                price: price,
            })
            // If nothing is in the cart, add insurance to cart
            if (!itemInCart) {
                cart.push({item: type, price: price, coverage: coverage, quantity: 1});
            } else {
            // If a insurance is found in cart, update the insurace to the newly selected one
                let found = false;
                for (let i = 0, length = cart.length; i < length; i++) {
                    if (cart[i].item === 'Insurance') {
                        cart.splice(i, 1);
                        cart.push({item: type, price: price, coverage: coverage, quantity: 1});
                        found = true;
                    }
                }
            // If no insurance is found in cart, add the insurance to the cart
                if (!found) {
                    cart.push({item: type, price: price, coverage: coverage, quantity: 1});
                }
            }
            setUpdateCart(true); 
        }
    }

    return (
        <div className="flex flex-row">
            <div>
                <article className="p-10 w-96">
                    <h4 className="text-lg pb-2 font-semibold text-base-100">Value of Goods</h4>
                    <label className="input px-3 input-bordered flex items-center text-slate-400 font-bold bg-slate-200 gap-2">
                        <input defaultValue={'$ '}></input>
                    </label>
                </article>
            </div>
            <div>
                <article className="p-10 w-96">
                    <h4 className="text-lg pb-2 font-semibold text-base-100">Insurance</h4>
                    <label className="input px-3 input-bordered flex items-center bg-slate-200 gap-2">
                        <select className=" w-96 px-3 bg-slate-200 text-slate-400 font-bold gap-2 insurnace-selection" name="insurnace">
                            <option value={''}></option>
                            {insurnaceOptions.map((plan, index) => {
                                        {/* Deconstruct plan object */}
                                        const {type, coverage, price } = plan;
                                        return (
                                            <option className="insurance-option" key={index} value={coverage}>$ {coverage}</option>
                                        )
                                    }
                                )
                            }
                        </select>
                    </label>
                </article>
            </div>
        </div>

    )
}

export default RentalForm;