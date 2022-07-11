//2. Convert all the strings to title caps in a string array

//* IIFE
(function(){
    let arr=[]
    let s="hello hi world"
    if(s!=null){
        strArr=s.split(' ')
        for(let str of strArr){
            if(str[0]!==undefined)
                arr.push(str.replace(str[0], str[0].toUpperCase()))
        }
    }
   console.log(arr)
})();

//* Anonymous Function 
let string="hello world"

function convertStringArr(s) {
    let arr=[]
    if(s!=null){
        strArr=s.split(' ')
        for(let str of strArr){
            if(str[0]!==undefined)
                arr.push(str.replace(str[0], str[0].toUpperCase()))
        }
    }
    return arr
}
console.log(convertStringArr(string))