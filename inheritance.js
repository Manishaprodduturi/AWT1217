class Student2{
    constructor(name){
        this.name=name;
    }
    display(){
        console.log("student name from parent class"+this.name);
    }
}
    class Student3 extends Student2{
        constructor(name,rollno){
            super(name);
            this.rollno=rollno;
        }
        display1(){
            console.log("student name from child class"+this.name+"his/her rollno is"+this.rollno);
        }
    }
    let s=new Student3("manisha",1217);
    s.display1();
    