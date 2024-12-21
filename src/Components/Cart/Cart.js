import { useContext } from "react";
import { UnitDisplayContext } from "../../Pages/Rental/Rental";



const products = [
  {
    id: 1,
    unit: '1000',
    href: '#',
    size: '5x5',
    type: 'Climate-Controlled',
    price: '$50.00',
    imageSrc: '',
    imageAlt: 'Image Here',
  }
]

export default function Cart() {

  const displayUnitInfo = useContext(UnitDisplayContext);

  let { size , type , number } = displayUnitInfo;
  
  return (

              <div className='max-lg:flex-wrap lg:overflow-auto h-fit'>
                {/* LIST AREA */}
                <div className="flex-1 px-4 sm:px-6 max-lg:h-96 max-lg:overflow-auto">
                  <div className="flex items-start justify-between">
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        // onClick={() => setOpen(false)}
                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                      >
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only ">Close panel</span>
                      </button>
                    </div>
                  </div>
                  <div className="mt-8">
                    <div className="flow-root">
                      <ul  className="max-lg:flex-shrink -my-6 divide-y divide-gray-200 h-max">
                          <li className="flex py-12">
                            <div className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                    <p>Unit Number: {number}</p>
                                  </h3>
                                  <p className="ml-4"> Price: {}</p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">{size}</p>
                              </div>
                              <div className="flex flex-1 items-end justify-between text-sm">
                                <p className="text-gray-500">{type}</p>
                                <div className="flex">
                                  <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
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
                <div className="h-min border-t border-gray-200 bg-slate-700 px-4 py-4 lg:sticky lg:bottom-0 lg:right-0 max-lg:sticky max-lg:inset-x-0 max-lg:bottom-0">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>$262.00</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">Taxes calculated at checkout.</p>
                  <div className="mt-6">
                    <button
                      className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                    >
                      Pay Now
                    </button>
                  </div>
                </div>
              </div>

       

  )
}

