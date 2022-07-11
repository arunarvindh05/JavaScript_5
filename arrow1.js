//Print odd numbers in an array

let arr=[7,2,5,0,16]
let printOddNumber = (arr)=>{
    brr=[]
    for(i of arr){
        if(i%2!=0){
            brr.push(i)
        }
    }
    return brr
}

console.log(printOddNumber(arr).join(' '))
