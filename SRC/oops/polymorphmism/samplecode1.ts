//method overloading
class payment{
    pay(amount :number):void;
    pay(amount:number,method:string):void;
    pay(amount:number,method?:string):void{
    if(method){
        console.log(`Payment of ${amount} is done using ${method}`);
    }
    else{
        console.log(`Payment of ${amount} is done`);
    }

}
}

let pay=new payment();
pay.pay(1000);
pay.pay(2000,"upi");