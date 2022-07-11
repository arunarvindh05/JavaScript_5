//7.Remove duplicates from an array

//* IIFE
(function(){
    let a=[1,2,7,1,2,8,5,2]
    b=[]
    for(let i of a){
        if(!b.includes(i)){
            b.push(i)
        }
    }
   console.log(b)
})();


//* Anonymous Function 
let arr=[1,2,7,1,2,8,5,2]
function removeDuplicates(a) {
    b=[]
    for(let i of a){
        if(!b.includes(i)){
            b.push(i)
        }
    }
    return b
}
console.log(removeDuplicates(arr))