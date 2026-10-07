import React, { useContext } from 'react';
import { CartContext } from '../../Pages/Rental/Rental';
import { checkCart } from '../../utils';


const CartItem = ({displayUnitInfo , removeItemFromCart, today , paidThruDate, setUpdateCart}) => {

    // Contexts
    const cart = useContext(CartContext);

    // Checks if cart has an item in it
    let itemsInCart = cart.length;
    
    
    // If cart is empty display that cart is empty
    if (!itemsInCart) {
        return (
        <div>
            <h1 className="text-xl font-black text-base-200 p-5">
            Your cart is empty
            </h1>
            </div>
        );
    } else if (itemsInCart) {
    //  If an item is found in the cart, map through all items and create an item card for each item in cart to display
            return cart.map((item, index) => {
            
            const itemType = item.item;
            const ECC = 'Elevator Climate-Controlled'
            const FFC = 'First Floor Climate-Controlled'
            const insurance = 'Insurance'
            
            // Card for units
            if (itemType === ECC || itemType === FFC) {
                return (
                    <li key={index} className="flex py-12">
                        <div className="ml-4 flex flex-1 flex-col">
                        <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                                <p>Unit Number: {displayUnitInfo.number}</p>
                            </h3>
                                <p className="ml-4"> Price: ${displayUnitInfo.price === '' ? '0.00' : displayUnitInfo.price}</p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">{displayUnitInfo.size}</p>
                            <p className="mt-1 text-sm text-gray-500">{today} - {paidThruDate}</p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                            <p className="text-gray-500">{displayUnitInfo.type}</p>
                            <div className="flex pt-5 ">
                            <button onClick={removeItemFromCart} type="button" className="btn btn-sm btn-info btn-outline font-medium text-indigo-600 hover:text-indigo-500">
                                Remove
                            </button>
                            </div>
                        </div>
                        </div>
                    </li>
                );
            } else if (itemType === insurance) {
            // Card for insurance
                return (
                    <li key={index} className="flex py-12">
                        <div className="ml-4 flex flex-1 flex-col">
                        <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                                <p>Item: Insurance</p>
                            </h3>
                                <p className="ml-4"> Price: $ 11.00 / month</p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">{today} - {paidThruDate}</p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                            <p className="text-gray-500">Coverage $ 2,000</p>
                            <div className="flex pt-5 ">
                            <button onClick={removeItemFromCart} type="button" className="btn btn-sm btn-info btn-outline font-medium text-indigo-600 hover:text-indigo-500">
                                Remove
                            </button>
                            </div>
                        </div>
                        </div>
                    </li>
                );
            }
        }
    )}
}

export default CartItem;