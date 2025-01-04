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
