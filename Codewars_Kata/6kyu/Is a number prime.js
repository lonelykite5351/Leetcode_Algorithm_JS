// https://www.codewars.com/kata/5262119038c0985a5b00029f

function isPrime(num) {
    /*
        if(num<=1)
            return false
        let n = parseInt(num**0.5) 
        while(n>1){
            if(num%n==0)
                return false
            else
                n--
        }
        return true
    */     
    
    // or
        if(num <= 1)
            return false
        let n = parseInt(num ** 0.5) 
        for(let i=2; i<=n; i++){
            if(num%i == 0)
                return false
        }
        return true
}