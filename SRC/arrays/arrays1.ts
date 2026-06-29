//foreach
let flowers = ["rose","lily","jasmine"];
flowers.forEach(flowers=>{console.log(flowers)});
//using index
let values=[10,20,30];
values.forEach((values,i)=>console.log(`Index ${i}=${values}`));
//sum
let float=[0.9,-0.5,0.07];
let total=0;
float.forEach(float=>total+=float);
console.log(total);
//map()
let nums=[1,2,3];
let squares=nums.map(n=>n*n);
console.log(squares);
//map objects
let students=[
    {name:"Mahesh",marks:50},{name:"sankar",marks:90}
]
let names=students.map(s=>s.name);
console.log(names);