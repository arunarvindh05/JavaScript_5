//4.Return all the prime numbers in an array

let primeNumber=(a)=> {
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

console.log(primeNumber([1,2,5,7]))