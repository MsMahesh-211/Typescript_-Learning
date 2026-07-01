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

// //=================================================
// //map()-easy levels
// const numbers: number[] = [1, 2, 3, 4, 5];
// const doubled=numbers.map(n=>n*2);
// console.log("E1 Doubled:", doubled);

// const scores: number[] = [50, 60, 70];
// const bonusscores=scores.map(function(score){
//     return score+10;
// });
// console.log("E2 Bonus Scores:", bonusscores);
// //medium
// const prices: number[] = [100, 300, 400];
// const withgst=prices.map(function(price){
//     return Math.round(price*1.18);
// });
// console.log("M1 Prices with GST:", withgst);
// const age: number[] = [18, 25, 30,40,50];
// const Adultflags=age.map(function(age){
//     return age>=18;
// });
// console.log("M2 Adult Flags:", Adultflags);
// const items: string[] = ["pen", "pencil", "eraser"];
// const numberedItems=items.map(function(item,index){
//     return `${index+1}. ${item}`;
// });
// console.log("M3 Numbered Items:", numberedItems);
//hard
type Product = { id: number; name: string; price: number };
type ProductSummary = { label: string; total: number };

const products: Product[] = [
  { id: 1, name: "Laptop", price: 45000 },
  { id: 2, name: "Mouse", price: 800 },
  { id: 3, name: "Keyboard", price: 1500 },
];

const summaries: ProductSummary[] = products.map(function (p) {
  return { label: p.name, total: p.price * 1.18 };
});
console.log("H1 Summaries:", summaries);
//=====================================
//filter()-easy levels



    


