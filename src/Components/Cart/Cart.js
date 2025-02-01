import { createContext, useContext, useState } from "react";
import { CartContext, CartTotalContext, FormContext, UnitDisplayContext, UpdateCartContext } from "../../Pages/Rental/Rental";
import { getToday, getPaidThruDate, tempBanner, inputError, fakeLoad } from "../../utils";
import { useNavigate } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import PaymentForm from "../PaymentForm/PaymentForm";

// Create context
export const CardNumberContext = createContext(null);
export const ExpiryDateContext = createContext(null);
export const CVVContext = createContext(null);



export default function Cart({setDisplayUnitInfo, setCartTotal, setUpdateCart}) {

  // Contexts
  const displayUnitInfo = useContext(UnitDisplayContext);
  const formData = useContext(FormContext);
  const cart = useContext(CartContext);
  const cartTotal = useContext(CartTotalContext);
  const updateCart = useContext(UpdateCartContext);

  // States
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');


  // navigate hook
  const navigate = useNavigate();

  // DOM Elements
  const contactButton = document.getElementsByClassName("contact-form-button");
  const missingCheckmarkBanner = document.getElementById("missing-checkmark-banner");
  const missingUnitBanner = document.getElementById("missing-unit-banner");
  const paymentSuccessBanner = document.getElementById("payment-success-banner");
  const errorBanner = document.getElementById("error-banner");
  const paymentUnsuccesfulBanner = document.getElementById('payment-unsuccesful-banner');

  // Get today's date and paid thru date
  const today = getToday();
  const paidThruDate = getPaidThruDate();

  // Tax rate
  const flTax = 0.07;

  // Removes item from cart
  const removeItemFromCart = (e) => {
    e.preventDefault();
    const item = e.target.parentElement.parentElement.children[0].textContent;
    for (let i = 0, length = cart.length; i < length; i++) {
      if (cart[i].item === item) {
        cart.splice(i, 1);
        setDisplayUnitInfo({
          number: '',
          size: '',
          type: '',
          price: '',
      })
        setUpdateCart(true);
        break;
      }
    }
  }

  // Recalculates cart total
  const recalulateCartTotal = (cart) => {
    setCartTotal(
      {
        tax: cart.reduce((acc, item) => ((acc + Number(item.price)) * flTax).toFixed(2), 0), 
        grandTotal: cart.reduce((acc, item) => ((acc + Number(item.price)) * (1 + flTax)).toFixed(2), 0) 
      });
  }

// If cart is updated, recalculate cart total
if (updateCart === true) {
  recalulateCartTotal(cart);
  setUpdateCart(false);
}


  // Handles payment
  const handlePay = async () => {

    // Elements

    const cardNumberElement = document.getElementById('card-number');
    const expiryElement = document.getElementById('expiry-date');
    const cvvElement = document.getElementById('cvv');

    // Value of contact form button so we can check if all information has been saved
    const contactBtnValue1 = contactButton[0].children[0].classList.value
    const contactBtnValue2 = contactButton[0].children[1].classList.value

    // Destructure form data
    const 
    {   
      firstName ,
      lastName ,
      dateOfBirth ,
      primaryPhone ,
      secondaryPhone ,
      email ,
      licenseNumber ,
      licenseExpiration ,
      licenseState ,
      street ,
      apartment ,
      city ,
      state ,
      zip,
       
      } = formData;

    // Destructure unit data
    const { number , price } = displayUnitInfo;

    const total = cartTotal;

    const status = 'rented';

    // Address of backend server
    const url = "http://localhost:3001/rental"

    // Check if all information has been saved, then try payment

      let cardNumLength = cardNumberElement.value.length;
      let expiryLength = expiryElement.value.length;
      let cvvLength = cvvElement.value.length;

    if(contactBtnValue1 === 'hidden') {
      tempBanner(missingCheckmarkBanner);
    } else if (number.length === 0) {
      tempBanner(missingUnitBanner)
    } else if (cardNumLength < 19 || expiryLength  < 5 || cvvLength < 3) {
      // Sets an input error on the fields that are missing information for credit card
      // An array of elements and three parameters are required.
      inputError([cardNumberElement,expiryElement,cvvElement], cardNumLength < 19, expiryLength  < 5, cvvLength < 3);
    } else if (contactBtnValue2 === 'hidden') {
      try {
          // Send a POST request to the url with the user information and await a response.
          const response = await fetch(url, {
                  headers: {
                      "Content-Type": "application/json"
                  },
                  method: "POST",
                  body: JSON.stringify({
                      firstName: firstName,
                      lastName: lastName,
                      dateOfBirth: dateOfBirth,
                      primaryPhone: primaryPhone,
                      secondaryPhone: secondaryPhone,
                      email: email,
                      licenseNumber: licenseNumber,
                      licenseExpiration: licenseExpiration,
                      licenseState: licenseState,
                      street: street,
                      apartment: apartment,
                      city: city,
                      state: state,
                      zip: zip,
                      unit: number,
                      rentalStartDate: today,
                      price: price,
                      paidThruDate: paidThruDate,
                      total: total
                  })
              });
          // If something is wrong with the response, throw an error
          if (!response.ok) {
              throw new Error(`response status: ${response.status}`);
          }
          //Once response is received, check to see if everything was successful on the server side
          await response.json()
          .then((res) => {
          // If the response was received successfully,
          // Show a payment success banner and use the ID to redirect to the account page.
              if (res.status === 'success') {
          // Fake load
                fakeLoad();
                // After 5.3s display payment success banner
                setTimeout(() => {
                  tempBanner(paymentSuccessBanner);
                }, 5300);
                const id = res.id.rows[0].id;
                setTimeout(() => {
                  const dashboard = '/dashboard'
                  const accountPage = `/account/${id}`
                  navigate(accountPage);
                }, 8500);
              } else {
                // If response from server is not a success, show banner that payment failed.
                fakeLoad(tempBanner,paymentUnsuccesfulBanner);
              } 
          });
      // If try block fails, log the error and display an error banner
      } catch (err) {
          tempBanner(errorBanner);
          console.log(err.message);
      }
    }
  }
 
  // Cart component
    return (
      <CardNumberContext.Provider value={cardNumber}>
      <ExpiryDateContext.Provider value={expiryDate}>
      <CVVContext.Provider value={cvv}>
      <div className='h-screen lg:overflow-auto flex flex-col justify-between lg:w-96'>
        {/* LIST AREA */}
        <div className="px-4 sm:px-6">
            <div className="ml-3 flex h-7 items-center">
              <button
                type="button"
                className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only ">Close panel</span>
              </button>
            </div>
          <div className="mt-8">
            <div className="flow-root">
              <ul  className="max-lg:flex-shrink -my-6 divide-y divide-gray-200 h-max">
              {/* Cart Item Card  */}
                <CartItem 
                displayUnitInfo={displayUnitInfo} 
                removeItemFromCart={removeItemFromCart} 
                today={today}
                paidThruDate={paidThruDate}
                setUpdateCart={setUpdateCart}
                />
              </ul>
            </div>
          </div>
        </div>
        {/* TOTAL AREA  */}
        <div className="pb-40  border-t border-gray-200 bg-slate-700 px-4 py-4 lg:sticky lg:bottom-0 lg:right-0 max-lg:sticky max-lg:inset-x-0 max-lg:bottom-0">
        <PaymentForm 
          setCardNumber={setCardNumber} 
          setExpiryDate={setExpiryDate}
          setCvv={setCvv}
          />
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>${displayUnitInfo.price === '' ? '0.00' : displayUnitInfo.price}</p>
          </div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Taxes</p>
            <p>${cartTotal.tax === 0 ? '0.00' : cartTotal.tax}</p>
          </div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Grand Total</p>
            <p>${cartTotal.grandTotal === 0 ? '0.00' : cartTotal.grandTotal}</p>
          </div>
          <div className="mt-6 flex justify-center items-center pt-5">
            <button
            onClick={handlePay}
              className="btn-wide rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              Pay Now
            </button>
          </div>
        </div>
      </div>
      </CVVContext.Provider>
      </ExpiryDateContext.Provider>
      </CardNumberContext.Provider>
    )
  
}

