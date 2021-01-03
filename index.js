const phoneNumberEntryForm = document.querySelector("#phoneNumberEntryForm")

phoneNumberEntryForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const { phone } = e.target
    const phoneDigitsOnly = getPhoneDigitsOnly(phone.value)

    console.log(phoneDigitsOnly)
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

$('#contact-number').inputmask("(999) 999-9999");