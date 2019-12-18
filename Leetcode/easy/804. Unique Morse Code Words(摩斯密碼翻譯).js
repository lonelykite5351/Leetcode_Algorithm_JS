var uniqueMorseRepresentations = function(words) {
    
    //法1：用陣列對應到位子的摩斯密碼
    /*
    let abcStr = 'abcdefghijklmnopqrstuvwxyz'
    
    //abcArray = ['a','b','c',............,'z']
    let abcArray = [...abcStr]
    const abcMorse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    
    for(let i=0; i<words.length; i++){
    
        //[ [ 'g', 'i', 'n' ], [ 'z', 'e', 'n' ], [ 'g', 'i', 'g' ], [ 'm', 's', 'g' ] ] 
        let temp = [...words[i]]
        for(let j=0; j<temp.length; j++){
        
            // 存放該字母對應到abcArray相應的index數字
            let abcArrayIndex = abcArray.indexOf(temp[j])
            // index對應到abcMorse陣列，得到摩斯密碼後放進原陣列元素覆蓋
            temp[j] = abcMorse[abcArrayIndex]
        }
        words[i] = temp.join('')
    }
    return new Set(words).size
    
    -------------------------------------------------------------------------
    */

    //法2：建立物件，雙map傳值(簡潔寫法)
    const alphabet = {
        a: '.-', b: '-...',   c: '-.-.', d: '-..', e: '.', f: '..-.', g: '--.', h: '....', i: '..',  j: '.---',  k: '-.-',  l: '.-..', m: '--',
        n: '-.',  o: '---', p: '.--.',  q: '--.-',  r: '.-.', s: '...', t: '-', u: '..-', v: '...-', w: '.--', x: '-..-',  y: '-.--', z: '--..' 
    }
    //傳進["gin", "zen", "gig", "msg"]
    //第一段：傳進["gin"]會分割元素[ 'g', 'i', 'n' ]
    //第二段：傳進'g'對應到alphabet['g']的摩斯密碼，依此類推會得到[ '--.', '..', '-.' ]，最後合併join得到['--...-.']
    let temp1 = words.map(word => word.split('').map(letter => alphabet[letter]).join(''))
    
    // finally get [ '--...-.', '--...-.', '--...--.', '--...--.' ] , to use new Set return the number of different transformations
    let number_of_different = new Set(temp1).size
    
    return number_of_different

};

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]))
