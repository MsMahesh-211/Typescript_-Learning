class Student{ 
    //using constructor
    name:string;
    age:number;
    id:number;
    constructor(name:string, age:number, id:number){
        this.name=name;
        this.age=age;
        this.id=id;
    }
    display(){
        console.log(`Student_Name:${this.name},Student_Age:${this.age},Student_ID:${this.id}`);
    }

}
//object creation
const stu=new Student("Mahesh", 30, 123456789);
stu.display();
