import { useContext } from "react";
import { FormContext, UnitDisplayContext } from "../../Pages/Rental/Rental";
import { getToday, getPaidThruDate, tempBanner } from "../../utils";
import { useNavigate } from "react-router-dom";


export default function Cart({setDisplayUnitInfo}) {

  // Contexts
  const displayUnitInfo = useContext(UnitDisplayContext);
  const formData = useContext(FormContext);

  // navigate hook
  const navigate = useNavigate();

  // DOM Elements
  const contactButton = document.getElementsByClassName("contact-form-button");
  const missingCheckmarkBanner = document.getElementById("missing-checkmark-banner");
  const missingUnitBanner = document.getElementById("missing-unit-banner");
  const paymentSuccessBanner = document.getElementById("payment-success-banner");
  const errorBanner = document.getElementById("error-banner");


  const today = getToday();
  const paidThruDate = getPaidThruDate();

  // Handles payment
  const handlePay = async () => {

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

    const status = 'rented';


    // Address of backend server
    const url = "http://localhost:3001/rental"

    // Check if all information has been saved, then submits to backend
    if(contactBtnValue1 === 'hidden') {
      tempBanner(missingCheckmarkBanner);
    } else if (number.length === 0) {
      tempBanner(missingUnitBanner)
    } else if(contactBtnValue2 === 'hidden') {
      try {
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
                  })
              });
          if (!response.ok) {
              throw new Error(`Response status: ${response.status}`);
          }
          await response.json()
          .then((res) => {
              if (res.status === 'success') {
                const id = res.id.rows[0].id;
                tempBanner(paymentSuccessBanner);
                setTimeout(() => {
                  const dashboard = '/dashboard'
                  const accountPage = `/account/${id}`
                  navigate(accountPage);
                }, 3000);
              } else {
                tempBanner(errorBanner);
              }
          });
      } catch (err) {
          tempBanner(errorBanner);
          console.log(err.message);
      }
    }
  }
 
  // Cart component
  return (
              <div className='h-screen lg:overflow-auto flex flex-col justify-between lg:w-96'>
                {/* LIST AREA */}
                <div className="px-4 sm:px-6  ">
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
                          <li className="flex py-12">
                            <div className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                    <p>Unit Number: {displayUnitInfo.number}</p>
                                  </h3>
                                    <p className="ml-4"> Price: ${displayUnitInfo.price}</p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">{displayUnitInfo.size}</p>
                                <p className="mt-1 text-sm text-gray-500">{today} - {paidThruDate}</p>
                              </div>
                              <div className="flex flex-1 items-end justify-between text-sm">
                                <p className="text-gray-500">{displayUnitInfo.type}</p>
                                <div className="flex pt-5 ">
                                  <button type="button" className="btn btn-sm btn-info btn-outline font-medium text-indigo-600 hover:text-indigo-500">
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* TOTAL AREA  */}
                <div className="pb-40  border-t border-gray-200 bg-slate-700 px-4 py-4 lg:sticky lg:bottom-0 lg:right-0 max-lg:sticky max-lg:inset-x-0 max-lg:bottom-0">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>${displayUnitInfo.price}</p>
                  </div>
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Taxes</p>
                    <p>${}</p>
                  </div>
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Grand Total</p>
                    <p>${}</p>
                  </div>
                  <div className="mt-6">
                    <button
                    onClick={handlePay}
                      className="flex items-center justify-center btn-wide rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                    >
                      Pay Now
                    </button>
                  </div>
                </div>
              </div>
  )
}

