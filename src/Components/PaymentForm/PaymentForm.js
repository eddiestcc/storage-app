import { useContext } from "react";
import { CardNumberContext, CVVContext, ExpiryDateContext } from "../Cart/Cart";
import { formatCreditCard, formatCVV, formatExpiryDate } from "../../utils";

const PaymentForm = ({setCardNumber,setExpiryDate,setCvv}) => {

    // Contexts
    const cardNumber = useContext(CardNumberContext);
    const expiryDate = useContext(ExpiryDateContext);
    const cvv = useContext(CVVContext);

    return (
        <form className="flex flex-col items-center">
            <div className="pb-5">
                <input
                id="card-number"
                className="input input-bordered w-72" 
                type="text"
                placeholder="Card Number"
                // onChange={(e) => setCardNumber(e.target.value)}
                onChange={formatCreditCard}
                />
            </div>
            <div className="pb-5">
                <input
                id="expiry-date"
                className="input input-bordered w-72" 
                type="text"
                placeholder="Expiry Date (MM/YY)"
                // onChange={(e) => setExpiryDate(e.target.value)}
                onChange={formatExpiryDate}
                />
            </div>
            <div className="pb-5">
                <input
                id="cvv"
                className="input input-bordered w-72" 
                type="text"
                placeholder="CVV"
                // onChange={(e) => setCvv(e.target.value)}
                onChange={formatCVV}

                />
            </div>
        </form>
    )
}

export default PaymentForm;