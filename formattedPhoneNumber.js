function formatPhoneNumber(tenDigitNunber) {
    let phoneNumberString = tenDigitNunber.toString()
    
    let formattedPhoneNumber = `(${phoneNumberString.substr(0,3)}) ${phoneNumberString.substr(3, 3)}-${phoneNumberString.substr(6,4)}`

    return formattedPhoneNumber
}

const formatted = formatPhoneNumber(2132589796)
console.log(formatted)
