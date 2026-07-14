class Employee {
    private salary: number;
    constructor(salary: number) {
        this.salary = salary;
    }
    public getSalary():number{
        return this.salary;
    }
    public setSalary(newSalary: number):void{
        if(newSalary>=50000) {
            this.salary = newSalary;
        }
        else{
            console.log("invalid salary, salary should be greater than or equal to 50000");
        }
    }
}
const emp = new Employee(50000);
console.log(emp.getSalary());
emp.setSalary(6000);
console.log(emp.getSalary());