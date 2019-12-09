// https://www.codewars.com/kata/56269eb78ad2e4ced1000013

function findNextSquare(sq) {
    
    /*
        if(!Number.isInteger(sq ** 0.5))
            return -1
        let result = (sq**0.5) + 1
        return result**2
    */
    
      //or
        return !Number.isInteger(sq**0.5) ? -1 : (sq**0.5 + 1) ** 2
}