// //Named Function
// function add(a:number,b:number): number{
//     return a+b;

// }
// console.log(add(3,4));
// let sum1=3;
// let sum2=4;
// console.log(add(sum1,sum2));
//Arrow Function
// const cube=(x:number)=>x*x*x;
// console.log(cube(8));
//Anonymous Function
// const greet=function(name:string):string{
//     return `Hello ${name}`;
// }
// console.log(greet('Mahesh'));
//Default Parameter
// const greet =function(name:string="Guest"):string{
//     return `Welcome ${name}`;

// }
// console.log(greet());
// console.log(greet("Mahesh"));
//optional Parameter
function fullName(first:string, last?:string):string{
    return last? `${first} ${last}`: first;
}
console.log(fullName("Mahesh"));
console.log(fullName("Mahesh","Viswa"));
//rest parameters
function sum(...nums: number[]):number{
    return nums.reduce((acc,v) => acc+v,0);
}
console.log(sum(1,2,3,4));
//recrusive function
function factorial(n:number):number{
    return n<=1?1:n*factorial(n-1);
}
console.log(factorial(8));
//returning void
function logMessage(msg:string):void{
    console.log (msg);
}
logMessage("Welcome to Palywright");
//boolean
function isEven(n:number):boolean{
    return n%2===0;
}
console.log(isEven(10));
