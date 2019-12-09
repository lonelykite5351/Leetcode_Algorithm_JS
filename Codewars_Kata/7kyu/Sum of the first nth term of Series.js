// https://www.codewars.com/kata/555eded1ad94b00403000071

function SeriesSum(n)
{
    if(n==0){
        return "0.00"
    }
    else if(n==1){
        return "1.00"
    }else{
        let sum = 1
        let temp = 1
        for(let i=1; i<n; i++){
            temp += 3
            sum += 1/temp
        }
        
        // or can use <toFixed(2)> 
        // ex: sum.toFixed(2)
        
        sum = Math.round(sum*100)/100
        sum = sum.toString()

        let dot = sum.indexOf('.')
        while(sum.length <= dot+2){
            sum += '0'
        }
        return sum
    }
}