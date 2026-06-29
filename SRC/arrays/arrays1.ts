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
//Filter
let marks=[35,60,75,80,90]
let passed=marks.filter(m=> m>=40);
console.log(passed);
//2
let evens:number[]=[2,4,6];
let even =nums.filter(n=>n%2==0);
console.log(even);
//mapping objects
let employees=[
    {id :101,role:"developer"},
    {id :102,role:"tester"},
    {id :103,role:"admin"}
    
];
let testers=employees.filter(emp=>emp.role==="tester");
console.log(testers);


