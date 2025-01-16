export  function returnInputField(event) {
    const input = event.target.value;
    return input;
}

export  function handleClick(event) {
    console.log(event);
}

export const calcTaxes = (price) => {
    let taxes = price * 0.0825 
    let roundedTaxes = taxes.toFixed(2);
    return roundedTaxes;
 };

 export const calcTotal = (price) => {
    let total = price * 1.0825
    let roundedTotal = total.toFixed(2);
    return roundedTotal;
 };

 export const calcCheckout = (price) => {
    console.log(
        `tax: ${calcTaxes(price)}`,
        `total: ${calcTotal(price)}`)
 };

 export const tempBanner = (element) => {
    // Temporarily shows a banner of the element that is added, then hides it after 3 seconds.
    element.classList.remove('hidden')
    setTimeout(() => {
      element.classList.add('hidden')
    }, 3000);
 };

//  export const addToCart = (item, array) => {

//    // Check to see if item is in cart.
//    for (let i = 0 ; i < array.length; i++) {
//       const cartItem = array[i];
//       const cartUnit = cartItem.unit;
//       console.log(cartItem, 'cart item');
//       console.log(cartUnit, 'cart unit')
      
//    }

//    // If item is in cart, do not add it.

//    // Add item to cart.
// };

// Dashboard list with icons 
export const dashNavItems = [
   {
       Name: 'New Rental',
       Icon:  
       <svg className="h-8 w-8 text-slate-100"  
       fill="none" 
       viewBox="0 0 24 24" 
       stroke="currentColor">
       <path 
       strokeLinecap="round" 
       strokeLinejoin="round" 
       strokeWidth="2" 
       d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/>
       </svg>,
       Link: 'rental',
   },
   {
       Name: 'Units',
       Icon:
       <svg className="h-8 w-8 text-slate-100"  
       viewBox="0 0 24 24"  
       fill="none"  
       stroke="currentColor"  
       strokeWidth="2"  
       strokeLinecap="round"  
       strokeLinejoin="round">  
       <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />  
       <polyline points="3.27 6.96 12 12.01 20.73 6.96" />  
       <line x1="12" y1="22.08" x2="12" y2="12" />
       </svg>,
       Link: 'units',
   },
   {
       Name: 'Retail',
       Icon: 
       <svg className="h-8 w-8 text-slate-100"  
       width="24" 
       height="24" 
       viewBox="0 0 24 24" 
       strokeWidth="2" 
       stroke="currentColor" 
       fill="none" 
       strokeLinecap="round" 
       strokeLinejoin="round">  
       <path stroke="none" d="M0 0h24v24H0z"/>  
       <line x1="3" y1="21" x2="21" y2="21" />  
       <path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4" />  
       <path d="M5 21v-10.15" />  <path d="M19 21v-10.15" />  
       <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
       </svg>,
       Link: 'retail',
   }
]

// United States list for forms 
 export const stateOptions = [
    { value: "", label: "" },
    { value: "AL", label: "AL - Alabama" },
    { value: "AK", label: "AK - Alaska" },
    { value: "AZ", label: "AZ - Arizona" },
    { value: "AR", label: "AR - Arkansas" },
    { value: "CA", label: "CA - California" },
    { value: "CO", label: "CO - Colorado" },
    { value: "CT", label: "CT - Connecticut" },
    { value: "DE", label: "DE - Delaware" },
    { value: "DC", label: "DC - District Of Columbia" },
    { value: "FL", label: "FL - Florida" },
    { value: "GA", label: "GA - Georgia" },
    { value: "HI", label: "HI - Hawaii" },
    { value: "ID", label: "ID - Idaho" },
    { value: "IL", label: "IL - Illinois" },
    { value: "IN", label: "IN - Indiana" },
    { value: "IA", label: "IA - Iowa" },
    { value: "KS", label: "KS - Kansas" },
    { value: "KY", label: "KY - Kentucky" },
    { value: "LA", label: "LA - Louisiana" },
    { value: "ME", label: "ME - Maine" },
    { value: "MD", label: "MD - Maryland" },
    { value: "MA", label: "MA - Massachusetts" },
    { value: "MI", label: "MI - Michigan" },
    { value: "MN", label: "MN - Minnesota" },
    { value: "MS", label: "MS - Mississippi" },
    { value: "MO", label: "MO - Missouri" },
    { value: "MT", label: "MT - Montana" },
    { value: "NE", label: "NE - Nebraska" },
    { value: "NV", label: "NV - Nevada" },
    { value: "NH", label: "NH - New Hampshire" },
    { value: "NJ", label: "NJ - New Jersey" },
    { value: "NM", label: "NM - New Mexico" },
    { value: "NY", label: "NY - New York" },
    { value: "NC", label: "NC - North Carolina" },
    { value: "ND", label: "ND - North Dakota" },
    { value: "OH", label: "OH - Ohio" },
    { value: "OK", label: "OK - Oklahoma" },
    { value: "OR", label: "OR - Oregon" },
    { value: "PA", label: "PA - Pennsylvania" },
    { value: "PR", label: "PR - Puerto Rico" },
    { value: "RI", label: "RI - Rhode Island" },
    { value: "SC", label: "SC - South Carolina" },
    { value: "SD", label: "SD - South Dakota" },
    { value: "TN", label: "TN - Tennessee" },
    { value: "TX", label: "TX - Texas" },
    { value: "UT", label: "UT - Utah" },
    { value: "VT", label: "VT - Vermont" },
    { value: "VI", label: "VI - Virgin Islands" },
    { value: "VA", label: "VA - Virginia" },
    { value: "WA", label: "WA - Washington" },
    { value: "WV", label: "WV - West Virginia" },
    { value: "WI", label: "WI - Wisconsin" },
    { value: "WY", label: "WY - Wyoming" }
  ];

   // Toggle contact form fields
   export const setContactForm = (btnElement, fieldElement, callbackFunc, setState) => {

      // save button with checkmark icon
      let saveBtnToggle = btnElement[0].children[0].classList.toggle('hidden');
      let saveBtnActive = btnElement[0].children[0].classList.value;
      // edit button with pencil icon
      let editBtnToggle = btnElement[0].children[1].classList.toggle('hidden');
      let editBtnActive = btnElement[0].children[1].classList.value;
      for (let i = 0; i < fieldElement.length; i++) {
          const input = fieldElement[i];
          input.firstChild.toggleAttribute('readOnly');
          input.firstChild.classList.toggle('text-base-300');
          input.firstChild.classList.toggle('text-white');
          input.classList.toggle('bg-slate-100')
          input.classList.toggle('bg-base-200')
      }
      // If the save button is active, then get the input data.
      // Stops the state from being set on every click.
      if (editBtnActive === 'hidden') {
         // callback function to get input data.
         // It needs the fieldElement to get information from the form fields.
         // it needs the setState to set the state of the form data.
         callbackFunc(fieldElement, setState);
      }
  }

   // Get form data for what has been inputted, then set the state.
  export const getInput = (field, setState) => {
   const allInputs = [];
   const inputFormat = {input: '', value: ''};
   for (let i = 0; i < field.length; i++) {
       const currentInput = field[i];
       const currentInputTitle = currentInput.parentNode.firstChild.textContent;
       const formInput = currentInput.firstChild.value;
       // Check to see if field is empty and if so, send an error. 
       if (formInput.length < 1) {
           console.error(`A form field is blank. Please review.`)
       } else {
         allInputs.push({input: currentInputTitle, value: formInput});
       } 
   }

   // Set initial state for form data
   let firstName = '' 
   let lastName = '' 
   let dateOfBirth = '' 
   let primaryPhone = '' 
   let secondaryPhone = '' 
   let email = '' 
   let licenseNumber = '' 
   let licenseExpiration = '' 
   let licenseState = '' 
   let street = '' 
   let apartment = '' 
   let city = '' 
   let state = '' 
   let zip = '' 

   // key value pairs for form data from all input array
   for (let key in allInputs) {
      
         const { input, value } = allInputs[key];

         if (input === 'First Name') {
             firstName = value;
         } else if (input === 'Last Name') {
            lastName = value;
         } else if (input === 'Date of Birth') {
            dateOfBirth = value;
         } else if (input === 'Primary Phone Number') {
            primaryPhone = value;
         } else if (input === 'Secondary Phone Number') {
            secondaryPhone = value;
         } else if (input === 'Email') {
            email = value;
         } else if (input === 'Drivers License Number') {
            licenseNumber = value;
         } else if (input === 'License Expiration') {
            licenseExpiration = value;
         } else if (input === 'License State') {
            licenseState = value;
         } else if (input === 'Street') {
            street = value;
         } else if (input === 'Apartment/Unit') {
            apartment = value;
         } else if (input === 'City') {
            city = value;
         } else if (input === 'State') {
            state = value;
         } else if (input === 'ZIP') {
            zip = value;
         }
   }
   
   // set form data state 
  setState({
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
  })
}

// Get available units for rental
export const getAvailableUnits = (unitsArray, availableUnitsArray, counter) => {
   for (let key in unitsArray) {
       const objectSize = unitsArray[key].size;
       const objectType = unitsArray[key].full_unit_type;
       const objectId = unitsArray[key].unit_type_id;

       let objTemplate = {id: objectId, size: objectSize, type: objectType};

       const { id } = objTemplate;

       if (availableUnitsArray.length === 0) {
           availableUnitsArray.push(objTemplate)
       } else if (!availableUnitsArray[counter].id.includes(id)){
           availableUnitsArray.push(objTemplate)
           counter = counter + 1;
       }
   } 
};

// Get today's date
export const getToday = () => {
   const today = new Date();
   const formattedToday = today.toLocaleDateString();
   return formattedToday;
 }

 // Get paid thru date 30 days from today
 export const getPaidThruDate = () => {
   const today = new Date()
   const formattedToday = today.toLocaleDateString();
   const next30Days= today.getTime() + 30 * 24 * 60 * 60 * 1000
   const next30DaysDate = new Date(next30Days);
   const formattedPaidThruDate = next30DaysDate.toLocaleDateString();
   return formattedPaidThruDate;
 }

   // Adds item to cart (pending)
  // const addItemToCart = () => {

  // };

  // removes item from cart (pending)
  // const removeFromCart = () => {
  //     setDisplayUnitInfo({
  //       number: '',
  //       size: '',
  //       price: ''
  //   });
  // }

   // Get user data from API
  export const getUsers = async (loadingState, urlAddress,) => {
   try {
     loadingState(true);
     const url = urlAddress;
     const response = await fetch(url);
     if (!response.ok) {
       throw new Error(`Response status: ${response.status}`);
     }
     const userList = await response.json();
     return userList;
   } catch (error) {
     console.error(error.message);
   } finally {
   loadingState(false);
   }
 };

 export const toggleDrawer = () => {
   const filter = document.getElementsByClassName('filter');
   filter[0].classList.toggle('hidden');
 }

 export const getUserAccountData = async (setUserState, urlAddress) => {
   try {
     const url = urlAddress;
     const response = await fetch(url);
     if (!response.ok) {
       throw new Error(`Response status: ${response.status}`);
     }
     await response.json()
     .then(response => {
      setUserState(response);
     });
   } catch (error) {
     console.error(error.message);
   }
 }

 export function splitName(fullName) {
   const split = fullName.split(" ");
   const firstName = split[0];
   const lastName = split[split.length - 1];

   return{
       firstName: firstName,
       lastName: lastName,
   }
}

 export const getAccountFields = (
   account_name,
   phone_number, 
   email, 
   street_one, 
   street_two, 
   city, 
   state, 
   zip_code, 
   license_number, 
   license_expiration, 
   license_state, 
   formattedBirthDate, 
   second_phone_number,
   callbackFunc) => {
   
   const firstName = callbackFunc(account_name).firstName;
   const lastName = callbackFunc(account_name).lastName;

   return [
   [
       'First Name',
       firstName
   ],
   [
       'Last Name',
       lastName
   ],
   [
       'Date of Birth',
      formattedBirthDate
   ],
   [
       'Primary Phone Number',
      phone_number
   ],
   [
       'Secondary Phone Number',
      second_phone_number
   ],
   [
       'Email',
      email
   ],
   [
       'Identification Number',
      license_number
   ],
   [
       'Identification Expiration',
      license_expiration
   ],
   [
       'Identification State',
      license_state
   ],
   [
       'Street',
      street_one
   ],
   [
       'Apartment/Unit',
      street_two
   ],
   [
       'City',
      city
   ],
   [
       'State',
       state
   ],
   [
       'Zip',
      zip_code
   ]
]}

export const formatPhoneNumber = (e) => {
   // Need to change the dom input field so that formatting is applied.
   let inputField = document.getElementById(e.target.id);

   // Checks event and returns only numbers
   const numbersOnly = e.target.value.replace(/\D/g, '');
   let formattedNumber = numbersOnly;

   // Formats phone number to (999) 999-9999
   if (numbersOnly.length > 0) {
      formattedNumber = `(${numbersOnly.slice(0, 3)}) `;
      if (numbersOnly.length > 3) {
        formattedNumber += `${numbersOnly.slice(3, 6)}`;
        if (numbersOnly.length > 6) {
          formattedNumber += `-${numbersOnly.slice(6, 10)}`;
        }
      }
    }

   return inputField.value = formattedNumber;
}

export const formatZip = (e) => {
   // Need to change the dom input field so that formatting is applied.
   let inputField = document.getElementById(e.target.id);

   // Checks event and returns only numbers
   const numbersOnly = e.target.value.replace(/\D/g, '');
   let formattedNumber = numbersOnly;

   // Formats phone number to (999) 999-9999
   if (numbersOnly.length > 0) {
      formattedNumber = `${numbersOnly.slice(0, 5)} `;
    }

   return inputField.value = formattedNumber;
}

// Validates format of email
// export const formatEmail = (e) => {
//    // Need to change the dom input field so that formatting is applied.
//    let inputField = document.getElementById(e.target.id);

//    const regex = '/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/';


//    return inputField.value = formattedNumber;
// }

// Form fields for new rental page
export const formFields = [
   {
       fieldName:  'First Name' ,
       className: 'text-base-300 w-full',
       type: 'text',
       placeholder: 'John',
       tag: 'input',
       function: {
         name: '',
         event: '',
      }
   },
   {
       fieldName:  'Last Name' ,
       className: 'text-base-300 w-full',
       type: 'text',
       placeholder: 'Doe',
       tag: 'input',
       function: {
         name: '',
         event: '',
      }
   },
   {
       fieldName:  'Date of Birth' ,
       className: 'text-base-300 w-full dark-scheme',
       type: 'date',
       placeholder: '01/01/1900',
       tag: 'input',
       function: {
         name: '',
         event: '',
      }
   },
   {
       fieldName:  'Primary Phone Number' ,
       className: 'text-base-300 w-full',
       type: 'tel',
       placeholder: '(999)-999-9999',
       id: 'primary-phone',
       tag: 'input',
       function: {
         name: 'formatPhoneNumber',
         event: 'onchange',
      }
   },
   {
       fieldName:  'Secondary Phone Number' ,
       className: 'text-base-300 w-full',
       type: 'tel',
       placeholder: '(999)-999-9999',
       id: 'secondary-phone',
       tag: 'input',
       function: {
         name: 'formatPhoneNumber',
         event: 'onchange',
      }
   },
   {
       fieldName:  'Email' ,
       className: 'text-base-300 w-full',
       type: 'email',
       placeholder: 'example@example.com',
       id: 'email',
       tag: 'input',
       function: {
         name: '',
         event: '',
      }
   },
   {
       fieldName:  'Drivers License Number' ,
       className: 'text-base-300 w-full',
       type: 'text',
       placeholder: 'A1B2C3D4E5',
       tag: 'input',
       function: {
         name: '',
         event: '',
      }
   },
   {
       fieldName:  'License Expiration' ,
       className: 'text-base-300 w-full dark-scheme',
       type: 'date',
       placeholder: '01/01/2999',
       tag: 'input',
       function: {
         name: '',
         event: '',
      }
   },
   {
       fieldName:  'License State' ,
       className: 'text-base-300 w-full bg-transparent',
       type: 'text',
       placeholder: 'FL - Florida"',
       tag: 'option',
   },
   {
       fieldName:  'Street' ,
       className: 'text-base-300 w-full',
       type: 'text',
       placeholder: '123 Example St',
       tag: 'input',
       function: {
         name: '',
         event: '',
      }
   },
   {
       fieldName:  'Apartment/Unit' ,
       className: 'text-base-300 w-full',
       type: 'text',
       placeholder: 'Apt 100',
       tag: 'input',
       function: {
         name: '',
         event: '',
      }
   },
   {
       fieldName:  'City' ,
       className: 'text-base-300 w-full',
       type: 'text',
       placeholder: 'Tampa',
       tag: 'input',
       function: {
         name: '',
         event: '',
      }
   },
   {
       fieldName:  'State' ,
       className: 'text-base-300 w-full bg-transparent',
       type: 'text',
       placeholder: 'FL - Florida',
       tag: 'option',
   },
   {
       fieldName:  'ZIP' ,
       className: 'text-base-300 w-full',
       type: 'text',
       placeholder: '99999',
       id: 'zip',
       tag: 'input',
       function: {
             name: 'formatZip',
             event: 'onchange'
       }
   },
]