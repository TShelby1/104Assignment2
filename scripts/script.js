console.log("Script");

const student= {
    firstName:"brandon",
    lastName:"Britt",
    age:99,
    email:"blahblah@gmail.com",
    isActive:true,
    fullName:function(){
        return this.firstName+ " " + this.lastName;
    }
};
// console.log(student.fullName());

// object constructor..... inputs after the constructor name i.e. firstName(Vicky) last Name(test).. --->studentC----> output is showing you( .this)
function StudentC(firstName,lastName,age,email,isActive){
    this.userFn = firstName;
    this.userLn = lastName
    this.userAge = age;
    this.userEmail = email;
    this.isActive = true;
}

let student1= new StudentC("Vicky","test",99,"test@gmail.com",true);
let student2= new StudentC("Von","test2",98,"test2@gmail.com",true);

// display the users in the console

function displayStudent(user){
    return `Name: ${user.userFn} \n Email: ${user.userEmail}`;

}

console.log(displayStudent(student1));