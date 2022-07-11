//6. Return median of two sorted arrays of the same

//* IIFE
(function(){
    let a=[1,2,3,5]
    let b=[8,6,9,3]
    let c=a.concat(b).sort()
    let med=null
    let n=c.length
    //console.log(c)
    if(n%2==0){
        med = (c[n/2]+c[n/2-1])/2;
    }
    else{
        med = c[n/2];
    }
   console.log(med)
})();


//* Anonymous Function 
let arr1=[1,2,3,5]
let arr2=[8,6,9,3]
function medianArray(a,b) {
    let c=a.concat(b).sort()
    let med=null
    let n=c.length
    //console.log(c)
    if(n%2==0){
        med = (c[n/2]+c[n/2-1])/2;
    }
    else{
        med = c[n/2];
    }
    return med
}

console.log(medianArray(arr1,arr2))