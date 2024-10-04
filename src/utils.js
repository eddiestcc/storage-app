import { doc } from "prettier";

export  function readField(event) {
    console.log(event.target.value);
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

