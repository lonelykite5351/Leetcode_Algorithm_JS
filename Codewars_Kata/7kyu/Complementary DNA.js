// https://www.codewars.com/kata/554e4a2f232cdd87d9000038

function DNAStrand(dna){
    let temp = [...dna]
    for(let key in temp){
        switch (temp[key]) {
            case "A":
                temp[key] = "T"
                break
            case "T":
                temp[key] = "A"
                break
            case "C":
                temp[key] = "G"
                break
            case "G":
                temp[key] = "C"
                break
        }
    }
    console.log(temp)
    return temp.join('')
}