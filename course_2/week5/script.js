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
        if (t.tagName === 'INPUT' && t.dataset.hasOwnProperty("required") && t.value === "") {
            console.log("t=", t, " is empty but required!")
            valid = false;
            event.target.classList.add(inputErrorClass);
        } else {
            console.log("t=", t, "t.value=", t.value, "t.tagName=", t.tagName, ",t.dataset.required=", t.dataset.required)
        }
    }
    const validateLetters = function(elem) {
        var re = new RegExp('[a-zA-Zа-яА-я]');
        if (!re.match(elem.value)) {
            elem.classList.add(inputErrorClass);
        }
    }
    const validateNumbers = function(elem, min, max) {
        const num = Number(elem.value)
        console.log("num=", num, ", min=", min, ", max=", max)
        if (num < min || num > max) {
            elem.classList.add(inputErrorClass);
        }
    }
    const validateRegexp = function(elem, pattern) {
        var re = new RegExp(pattern);
        if (!re.match(elem.value)) {
            elem.classList.add(inputErrorClass);
        }
    }
    var customValidatorHandler = function(event) {
        console.log('custom validator')
        var t = event.target;
        if (t.tagName === 'INPUT' && t.dataset.hasOwnProperty("validator")) {
            if (t.dataset.validator === "letters") {
                validateLetters(t);
            } else if (t.dataset.validator === "number") {
                validateNumbers(t, t.dataset.validatorMin, t.dataset.validatorMax);
            } else if (t.dataset.validator === "regexp") {
                validateRegexp(t, t.dataset.validatorPattern);
            }
        }
    }
    var validateAllElementsHandler = function(event) {
        console.log("validateAllElems")
        event.preventDefault();
        var OK = true;
        var inputs = form.querySelectorAll('input') //document.querySelector('.input')
        for (var i = 0; i < inputs.length; i++) {
            console.log("checking t=", inputs[i]);
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
            event.target.classList.remove(inputErrorClass);
        }
    }
    form.addEventListener("blur", requiredValidatorHandler, true);
    form.addEventListener("blur", customValidatorHandler, true);
    form.addEventListener("focus", focusHandler, true);
    form.addEventListener("submit", validateAllElementsHandler, true);
    
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