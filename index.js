const phoneNumberEntryForm = document.querySelector("#phoneNumberEntryForm")

phoneNumberEntryForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const { phone } = e.target
    const phoneDigitsOnly = getPhoneDigitsOnly(phone.value)
    const isValid = validatePhoneNumber(phoneDigitsOnly)
    addValidationStyle(phone, isValid)
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

    boolean ? input.setAttribute('class', `form-input ${validClass}`) : input.setAttribute('class', `form-input ${errorClass}`)
}

$('#contact-number').inputmask("(999) 999-9999");