class Student{ //simple class creating without using constructor
    name:string="";
    age:number=0
    id:number=0
    display(){
        console.log(`Student_Name:${this.name},Student_Age:${this.age},Student_ID:${this.id}`);
    }

}
//object creation
const stu=new Student();
stu.name="Mahesh";
stu.age=30;
stu.id=123456789;
stu.display();