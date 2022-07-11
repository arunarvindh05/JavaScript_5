//5. Return all the palindromes in an array 

//* IIFE
(function(){
    let a=[121,"abc",785,"aba"]
    b=[]
    for(let i of a){
        if(String(i) === String(i.toString().split('').reverse().join(''))){
            b.push(i)
        }
    }
   console.log(b)
})();

//* Anonymous Function 
let arr=[121,"abc",785,"aba"]
function palindromes(a) {
    b=[]
    for(let i of a){
        if(String(i) === String(i.toString().split('').reverse().join(''))){
            b.push(i)
        }
    }
    return b
}
console.log(palindromes(arr))