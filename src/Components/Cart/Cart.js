import { useContext } from "react";
import { FormContext, UnitDisplayContext } from "../../Pages/Rental/Rental";

export default function Cart({setDisplayUnitInfo}) {

  // Get today's date 
  const today = new Date()
  const formattedToday = today.toLocaleDateString();
  const next30Days= today.getTime() + 30 * 24 * 60 * 60 * 1000
  const next30DaysDate = new Date(next30Days);
  const formattedPaidThruDate = next30DaysDate.toLocaleDateString();

  const displayUnitInfo = useContext(UnitDisplayContext);
  const formData = useContext(FormContext);

  const handleRemoveItem = () => {
      setDisplayUnitInfo({
        number: null,
        size: null,
        price: null
    });
  }

  const handlePay = async () => {
    console.log(formData, 'you paid!')
    console.log(displayUnitInfo)
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

    const { number , price } = displayUnitInfo;

    const paidThruDate = formattedPaidThruDate;
    const rentalStartDate = today;

    const url = "http://localhost:3001/rental"
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
                    rentalStartDate: rentalStartDate,
                    price: price,
                    paidThruDate: paidThruDate,
                })
            });
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        await response.json()
        .then((data) => {
            console.log(data, 'data')
        });
    } catch (err) {
        console.log(err.message);
    }
  }
  
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
                                <p className="mt-1 text-sm text-gray-500">{formattedToday} - {formattedPaidThruDate}</p>
                              </div>
                              <div className="flex flex-1 items-end justify-between text-sm">
                                <p className="text-gray-500">{displayUnitInfo.type}</p>
                                <div className="flex pt-5 ">
                                  <button onClick={handleRemoveItem} type="button" className="btn btn-sm btn-info btn-outline font-medium text-indigo-600 hover:text-indigo-500">
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

