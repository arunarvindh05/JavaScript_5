//1. Print odd numbers in an array

//* IIFE
(function(){
    let arr=[4,1,101,7]
    let brr=[]
   for(let i of arr){
       if(i%2!=0){
           brr.push(i)
       }
   }
   console.log(brr.join(' '))
})();


//* Anonymous Function 
let arr=[7,2,5,0,16]

function printOddNumber(arr){
     let brr=[]
    for(let i of arr){
        if(i%2!=0){
            brr.push(i)
        }
    }
    return brr;
}
console.log(printOddNumber(arr).join(' '))