function formatPhoneNumber(tenDigitNunber = null) {
    if(tenDigitNunber === null)  {
        throw new Error ("No phone number available")
    } 
    const phoneNumberString = tenDigitNunber.toString()
    if(phoneNumberString.length < 10) {
        throw new Error ("Phone number does not meet 10 digit required length")
    }
    const formattedPhoneNumber = `(${phoneNumberString.substr(0,3)}) ${phoneNumberString.substr(3, 3)}-${phoneNumberString.substr(6,4)}`

    return formattedPhoneNumber
}

