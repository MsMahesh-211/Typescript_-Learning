//for each()-easy levels.
// const items:string[] =["applephone","samsung","nokia","oneplus"];
// items.forEach(function(item){
//     console.log("E1 Items:",items);
// });
// const nums: number[] = [10, 20, 30];
// nums.forEach(function (n, i) {
//   console.log(`E2 Index ${i} = ${n}`);
// });
// const colors: string[] = ["red", "green", "blue"];
// colors.forEach((color) => console.log("E3 Color:", color));
// //medium
// let total=0;
// const prices:number[]=[100,35,60,80];
// prices.forEach(function(price){
//     total+=price;
// });
// console.log("TotalPrice:", total);
// //
// let evenCount = 0;
// const values: number[] = [1, 4, 7, 8, 10, 3];
// values.forEach(function (n) {
//   if (n % 2 === 0) evenCount++;
// });
// console.log("M2 Even Count:", evenCount);
// const skills: string[] = ["Selenium", "Playwright", "Cypress"];
// const upperSkills: string[] = [];
// skills.forEach(function (skill) {
//   upperSkills.push(skill.toUpperCase());
// });
// console.log("M3 Upper Skills:", upperSkills);
//hard
// type Student = { name: string; marks: number };

// const students: Student[] = [
//   { name: "Arun", marks: 90 },
//   { name: "Meena", marks: 92 },
//   { name: "Kavi", marks: 78 },
// ];

// students.forEach(function (student, index) {
//   const status = student.marks >= 90 ? "Pass" : "Needs Improvement";
//   console.log(`H1 [${index}] ${student.name}: ${status}`);
// });

// const orders: { id: number; amount: number }[] = [
//   { id: 101, amount: 900 },
//   { id: 102, amount: 1000 },
//   { id: 103, amount: 200 },
// ];

// let grandTotal = 0;
// orders.forEach(function (order) {
//   grandTotal += order.amount;
//   console.log(`H2 Order #${order.id} → ₹${order.amount}`);
// });
// console.log("H2 Grand Total:", grandTotal);

//=================================================
//map()-easy levels
const numbers: number[] = [1, 2, 3, 4, 5];
const doubled=numbers.map(n=>n*2);
console.log("E1 Doubled:", doubled);

    


