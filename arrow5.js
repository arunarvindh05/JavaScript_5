//5. Return all the palindromes in an array 

let palindromes=(a)=> {
    b=[]
    for(let i of a){
        if(String(i) === String(i.toString().split('').reverse().join(''))){
            b.push(i)
        }
    }
    return b
}
console.log(palindromes([121,"abc",785,"aba"]))
