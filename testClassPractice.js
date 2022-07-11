//fibonacci series

function fibonacci(n) {
    let a=0,b=1;
    console.log(a)
    console.log(b)
    for(let i=0;i<n-2;i++){
        c=a+b
        console.log(c)
        a=b
        b=c
    }
}

fibonacci(5)

a=['1','2','3','4']
a.map(b=>parseInt(b))

a.filter(b=>b)

b=[2050,2000,1100,1000]
b.filter(b=>((b%4==0 && b%100!=0)||(b%400==0 && b%100==0)))

a=[1,2,3,4,5]
a.reduce((a,b)=>a*b-5)
a=[1,2,3,4,5]
a.reduce((a,b)=>a.toString().concat(b))



