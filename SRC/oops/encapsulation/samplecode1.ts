class Employee{ //parent class
    public name:string;
    protected age:number;
    private salary:number;
    constructor(name:string,age:number,salary:number){
        this.name=name;
        this.age=age;
        this.salary=salary;
    }
    //public
    displayEmployee(){
        console.log(`Employee_Name:${this.name},Employee_Age:${this.age},Employee_Salary:${this.salary}`);
    }
    //getter method
    getSalary(){
        return this.salary;
    }
    getAge(){
        return this.age;
    }
}
    //child class
    class HR_Dep extends Employee{
    
        public department:string;

    
        constructor(name:string,age:number,salary:number,department:string){
            super(name,age,salary);
            this.department=department;
        }
        displayHR_Dep(){
            console.log(`Employee_Name:${this.name},Employee_Age:${this.age},Employee_Salary:${this.getSalary()},Employee_Department:${this.department}`);  
        }
        displayEmployee(){
            console.log(`Employee_Name:${this.name},Employee_Age:${this.getAge()},Employee_Salary:${this.getSalary()}`);
        }
        
        
    }
    //object creation
    const hr=new HR_Dep("Mahesh", 30, 500000, "QA Automation");
    //Method calling
    hr.displayEmployee();
    console.log("================================");
    hr.displayHR_Dep();
    console.log("================================");
    //assigning public var to parent class
    console.log(`Employee_Name:${hr.name}`); //public variable can be accessed outside the class
    console.log(`Employee_Salary:${hr.getSalary()}`);
    console.log(`Employee_Department:${hr.department}`); //public variable can be accessed outside the class
     //private variable can be accessed through getter method

