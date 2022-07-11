//4.Return all the prime numbers in an array

//* IIFE
(function(){
    let a=[1,5,654674,6]
    let b=[]
    for(let i of a){
        let c=0
        for(let j=1;j<i;j++){
            if(i%j===0){
                c++
            }
        }
        if(c==1){
            b.push(i)
        }
    }
   console.log(b)
})();

//* Anonymous Function 

function primeNumber(a=[1,2,5,7]) {
    let b=[]
    for(let i of a){
        let c=0
        for(let j=1;j<i;j++){
            if(i%j===0){
                c++
            }
        }
        if(c==1){
            b.push(i)
        }
    }
    return b;
}

console.log(primeNumber())

