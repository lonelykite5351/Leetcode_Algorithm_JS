// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132

function validatePIN (pin) {
    
    /*
        if(pin.length !== 4 && pin.length !==6){
            return false
        }else{
            let regex = /^[0-9]{4,6}$/
            if(regex.test(pin))
            return true
            else
            return false    
    }
    */
    
/* shorter express
     return pin.length !== 4 && pin.length !==6 ? false : /^[0-9]{4,6}$/.test(pin)     */
    
    // or
  /*   return pin.length !== 4 && pin.length !==6 ? false : /^\d{4,6}$/.test(pin)      */
    
    // or
    return /^(\d{4}|\d{6})$/.test(pin)
}