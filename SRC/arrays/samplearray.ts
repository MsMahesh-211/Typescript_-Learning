//arrays and objects
type employeerecord={
    id:number;
    name:string;
    role:string;
    active:boolean;
};
let employees:employeerecord[]=[
    
        {id:101,name:'Arun',role:'Developer',active:true},
        {id:102,name:'Meena',role:'Tester',active:true},
        {id:103,name:'Kavi',role:'Manager',active:false}
    ]
let activeEmployees=employees.filter(emp=>emp.active);
let employeeNames=activeEmployees.map(emp=>emp.name);
let manager=employees.find(emp=>emp.role==='Manager');
console.log("Active Employees:",activeEmployees);
console.log("Employee Names:",employeeNames);
console.log("Manager:",manager);
//2
let numbers:number[]=[10,20,30,40,50];
let names:Array<string>=['Arun','Meena','Kavi'];
let mixed:(number|string)[]=['hi',10,'hello',20];
console.log("Numbers:",numbers);
console.log("Names:",names);
console.log("Mixed:",mixed);
//3
let fruits:string[]=['apple','banana','mango'];
fruits.push('orange');
fruits.unshift('grapes');
console.log("After add:",fruits);
console.log("Index of Mango:", fruits.indexOf("Mango"));
console.log("Includes Banana?", fruits.includes("Banana"));
console.log("Length of array:", fruits.length);

fruits.sort();
console.log("Sorted:", fruits);
//iterating
let skills = ["Selenium", "Playwright", "Cypress", "API"];

// for loop
for (let i = 0; i < skills.length; i++) {
  console.log(`Skill ${i + 1}: ${skills[i]}`);
}
// for-of loop
for (let skill of skills) {
  console.log("Using for-of:", skill);
}
// for-in loop (indexes)
for (let index in skills) {
  console.log(`Index ${index} = ${skills[index]}`);
}
//forEach method
skills.forEach((skill, i) => {
  console.log(`forEach [${i}]: ${skill}`);
});
//map filter reduce
let scores:number[]=[100,80,92,66,89];
let updatedScores=scores.map(score=>score+5);
let highscores=scores.filter(score=>score>85);
let total=scores.reduce((acc,score)=>acc+score,0);
let average=total/scores.length;
let topper=scores.find(score=>score===100);
console.log("Updated Scores:", updatedScores);
console.log("High Scores:", highscores);
console.log("Total:", total, "Average:", average.toFixed(2));
console.log("Topper:", topper);
//





