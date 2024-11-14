export  function readInputField(event) {
    const inputField = event.target.value;
    return inputField;
}

export  function handleClick(event) {
    console.log(event);
}

export  function enableEditContactForm() {
    const contactField = document.getElementsByClassName("contact-form-field");
    const contactButton = document.getElementsByClassName("contact-form-button");
    contactButton[0].children[0].classList.toggle('hidden');
    contactButton[0].children[1].classList.toggle('hidden');
    for (let index = 0; index < contactField.length; index++) {
        const element = contactField[index];
        element.firstChild.toggleAttribute('readOnly');
        element.firstChild.classList.toggle('text-base-300');
        element.firstChild.classList.toggle('text-white');
        element.classList.toggle('bg-slate-100')
        element.classList.toggle('bg-base-200')
    }  
}

export function authenticateSignIn() {
    // Enter API Call Here
    const apiUrl = "http://localhost:3001/users"
    fetch(apiUrl)
    .then((response) => {
            if (!response) {
                throw new Error('Fetch failed');
            }
            return response.json();
    })
    .then((data) => {
        console.log(data, 'users')
        return data;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}


