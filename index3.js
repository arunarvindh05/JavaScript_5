//3.Sum of all numbers in an array

//* IIFE
(function(){
    arr=[1,64363,654674,6]
    let sum=0
    for(let i of arr){
        sum+=i
    }
   console.log(sum)
})();

//* Anonymous Function 
function sumOfNumbers(arr) {
    let sum=0
    for(let i of arr){
        sum+=i
    }
    return sum
}
let a=[1,100,6,5,9]
console.log(sumOfNumbers(a))