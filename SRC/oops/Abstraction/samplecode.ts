abstract class Payment{
    //normal
    paymentStarted():void{
        console.log("Payment started");
    }
    //abstract method
    abstract pay(amount:number):void;
}

class creditCardPayment extends Payment{
    pay(amount:number):void{
        console.log(`Payment of ${amount} is done using credit card`);
    }
}
class upiPayment extends Payment{
    pay(amount:number):void{
        console.log(`Payment of ${amount} is done using UPI`);
    }
}
const creditCard=new creditCardPayment();
creditCard.paymentStarted();
creditCard.pay(1000);
const upi=new upiPayment();
upi.paymentStarted();
upi.pay(2000);