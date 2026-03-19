/**
 * Queries the DOM for element that match the provided CSS selector
 * Returns a single DOM element if only one is found
 * or an array of DOM elements
 * @param {*} selector - CSS selector rule
 * @returns {HTMLElement | HTMLElement[]} - A single or an array of found HTML element
 */

const $ = selector => {
    const q = document.querySelectorAll(selector);

    if (q.length === 0)
        return null;
    return q.length > 1 ? q : q[0]; 
}

const form = $('form');
const fName = $('#firstName');
const lName = $('#lastName');

form.onsubmit = evt => {
    //console.log(evt.target);
    evt.preventDefault(); // prevents form submission default behavior

    //Validation errors
    clearErrors();

    //console.log(form.firstName.value);
    //console.log(form.lastName.value);
    //console.log(form.checkValidity());

    if (!form.checkValidity()) {

        if (!form.firstName.checkValidity()){
            $('div#firstNameError').classList.add('show');
        }

        if (!form.lastName.checkValidity()){
            $('div#lastNameError').classList.add('show');
        }

        //alert('Form is invalid');
        return; // do not go any further as data is invalid
    }

    console.log('Form is valid and ready to go');

    fName.textContent = form.firstName.value.trim();
    lName.textContent = form.lastName.value.trim();

    const object = Object.fromEntries(new FormData(form));

    console.log(object);

    
}

function clearErrors() {
    const errors = $('.error'); //gets all class error
    
    for (let err of errors) {
        err.classList.remove('show');
    }
}