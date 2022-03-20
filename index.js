
function sum(num1, num2) {
let sumOfResult = num1 + num2
console.log(sumOfResult)
return sumOfResult
}

hi = sum(10,20)  
console.log(hi * 3)
console.log(hi % 3)
console.log(hi + 30)
console.log(hi-10)
 //(a+b) square function
function add(a,b){
    console.log(a*a + 2*a*b + b*b)
}
add(5,2)


function div(a,b){
    console.log(a/b)
}
div(1,2)

function fibonacci(num){
    let n1=0, n2=1, n3,i
    console.log("fibonacci:")
    console.log(n1,n2)
    for(i=2;i<num;++i)
    {
        n3=n1+n2;
        console.log(n3)
        n1=n2;
        n2=n3;
    }
}
fibonacci(10);





