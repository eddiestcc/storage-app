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

 export const stateOptions = [
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
