'use strict';

// Код валидации формы
    function validateForm(
        {formId, 
            formValidClass, 
            formInvalidClass, 
            inputErrorClass}) {
    console.log("validateForm")
    console.log(document)
    console.log("searching for form with id ", formId)
    var valid = true
    var form = document.getElementById(formId) 
    console.log(form)
    var requiredValidatorHandler = function(event) {
        console.log("requiredValidator handle");
        var t= event.target;
        if (t.tagName === 'INPUT' && t.dataset.required && t.value === null) {
            valid = false;
            event.target.classList.add(inputErrorClass);
        }
    }
    var validateAllElementsHandler = function(event) {
        console.log("validateAllElems")
        event.preventDefault();
        var OK = true;
        var inputs = form.querySelectorAll('input') //document.querySelector('.input')
        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].classList.contains(inputErrorClass)) {
                OK = false;
            }
        }
        if (OK) {
            form.classList.add(formValidClass);
        } else {
            form.classList.add(formInvalidClass);
        }
    }

    var focusHandler = function(event) {
        if (event.target.tagName === 'INPUT') {
            event.target.className -= inputErrorClass;
        }
    }
    form.addEventListener("submit", validateAllElementsHandler, true);
    form.addEventListener("blur", requiredValidatorHandler, true);
    form.addEventListener("focus", focusHandler, true);
    
    // console.log(form.dataset.formValue)
    // addEventListener(event_, handler_);
    //classList property
    // if (event.target.tag === 'INPUT') {
    //     //value -> value of input
    // }
    //blur & focus -> capturing suing handler with 3rd param as true
    // addEventListener(event, handler, true)
    // can invoke event.stopPropagation inside the handler
    //event.preventDefault() to prevent form from being submitted
    // if (event.target.tagName === 'A') {
    //     if (event.target.classList.contains('more')) {
    //         ...
    //     } else {
    //         console.log(event.target.href)
    //     }
    // }
}

// module.exports = {
//     validateForm 
// }