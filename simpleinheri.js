class Student{
    display(){
        console.log("hii from parent");
    }
}
    class Student1 extends Student{
        display1(){
            console.log("hii from child class");
        }
    }
    let s=new Student1();
    s.display();
    s.display1();
    