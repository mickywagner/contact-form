const phoneNumberEntryForm = document.querySelector("#phoneNumberEntryForm")

phoneNumberEntryForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const { phone } = e.target
    console.log(phone.value)
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


$('#contact-number').inputmask("(999) 999-9999");