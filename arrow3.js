//3.Sum of all numbers in an array

let sumOfNumbers=(arr)=> {
    let sum=0
    for(let i of arr){
        sum+=i
    }
    return sum
}
let a=[1,100,6,5,9]
console.log(sumOfNumbers(a))