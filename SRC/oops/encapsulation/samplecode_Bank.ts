//Parent Class
class Bank{
    public customerName:string;
    protected accountNo:number;
    private balance:number;
    constructor(customerName:string,accountNo:number,balance:number){
        this.customerName=customerName;
        this.accountNo=accountNo;
        this.balance=balance;
    }
    //getter method
    getBalance():number{
        return this.balance;
    }
    //to access protected variable from outside the class we can use getter method
    getAccountNumber():number{
        return this.accountNo;
    }
}
class Customer extends Bank{ //child class
    public branchName:string;
    constructor(customerName:string,accountNo:number,balance:number,branchName:string){
        super(customerName,accountNo,balance);
        this.branchName=branchName;
    }
    displayCustomer(){
        console.log(`Customer_Name:${this.customerName},Customer_AccountNo:${this.getAccountNumber()},Customer_Balance:${this.getBalance()},Customer_BranchName:${this.branchName}`);
    }
    displayBank(){
        console.log(`Customer_Name:${this.customerName},Customer_AccountNo:${this.getAccountNumber()},Customer_Balance:${this.getBalance()}`);

    }
}
//object creation
const customer=new Customer("Mahesh",123456789,50000,"Perundurai");
customer.displayBank();
console.log("================================");
customer.displayCustomer();
console.log("================================");
console.log(`Customer_Name:${customer.customerName}`);
 //public variable can be accessed outside the class
 console.log(`Customer_AccountNo:${customer.getAccountNumber()}`);
 //protected variable can be accessed through getter method
 console.log(`Customer_BranchName:${customer.branchName}`);