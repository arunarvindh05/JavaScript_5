//8.Rotate an array by k times

//* IIFE
(function(){
    let n=5
    let arr=[1,2,3,6,9,2,8]
    for(let i=0;i<n;i++){
        let removedElement = arr.pop();
        arr.unshift(removedElement);
    }
   console.log(arr)
})();

//* Anonymous Function 
let arr=[1,2,3,6,9,2,8]
function rotate(arr,n) {
    for(let i=0;i<n;i++){
        let removedElement = arr.pop();
        arr.unshift(removedElement);
    }
    return arr;
}

console.log(rotate(arr,5));
console.log(rotate(arr,1));

console.log(rotate(arr,2));