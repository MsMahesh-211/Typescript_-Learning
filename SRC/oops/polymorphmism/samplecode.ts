class hospital{
    generateReport(){
        console.log("Generating hospital report");
    }
}
class Doctor extends hospital{
    generateReport(){
        console.log("Generating Doctor report");
    }
}
class lab extends hospital{
    generateReport(){
        console.log("Generating Lab report");
    }
}
class pharmacy extends hospital{
    generateReport(){
        console.log("Generating Pharmacy report");
    }
}
const hosp=new hospital();
const lab1=new lab();
const pharm=new pharmacy();
const dotor=new Doctor();
dotor.generateReport();
lab1.generateReport();
pharm.generateReport();
