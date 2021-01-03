const phoneNumberEntryForm = document.querySelector("#phoneNumberEntryForm")

phoneNumberEntryForm.addEventListener("keyup", (e) => {
    const phoneInput = e.target 
    const phoneDigitsOnly = getPhoneDigitsOnly(phoneInput.value)
    const isValid = validatePhoneNumber(phoneDigitsOnly)
    addValidationStyle(phoneInput, isValid)
    
    /******
     * For validation on "submit"
     * e.preventDefault()
     * const { phone } = e.target
     * const phoneDigitsOnly = getPhoneDigitsOnly(phone.value)
     * const isValid = validatePhoneNumber(phoneDigitsOnly)
     * addValidationStyle(phone, isValid)
     * 
     */

})

function validatePhoneNumber(num) {
    const firstDigit = num[0]
    if(firstDigit == 1 || firstDigit == 0) { 
        return false
    }
    if(num.length !== 10) {
        return false
    }
    return true
}

function getPhoneDigitsOnly(string) {
    return string.replace(/[^0-9]/g, '')
}

function addValidationStyle(input, boolean) {
    const validClass = "form-valid"
    const errorClass = "form-error"
    const formClasses = "form-input"

    boolean ? input.setAttribute('class', `${formClasses} ${validClass}`) : input.setAttribute('class', `${formClasses} ${errorClass}`)
}

$('#contact-number').inputmask("(999) 999-9999");