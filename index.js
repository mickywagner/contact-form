const phoneNumberEntryForm = document.querySelector("#phoneNumberEntryForm")
const contactNumberInput = document.querySelector("#contact-number")

contactNumberInput.addEventListener("keyup", (e) => {
    const phoneInput = e.target   
    const phoneDigitsOnly = getPhoneDigitsOnly(phoneInput.value)
    const isValid = validatePhoneNumber(phoneDigitsOnly)
    addValidationStyle(phoneInput, isValid)
})

phoneNumberEntryForm.addEventListener("submit", (e) => {
    const { phone } = e.target
    const userPhoneNumber= phone.value
    const phoneDigitsOnly = getPhoneDigitsOnly(userPhoneNumber)
    const isValid = validatePhoneNumber(phoneDigitsOnly)
    
    if(!isValid) {
        e.preventDefault()
        phone.setAttribute("class", "form-error form-input")
    } else {
        let wrapper = document.querySelector(".wrapper")
        let successMessageHTML = `
                <h1 class="form-title">Congratulations!</h1>
                <p>Your phone number ${userPhoneNumber} was submitted.<p>
        `
        wrapper.innerHTML = successMessageHTML
    }
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