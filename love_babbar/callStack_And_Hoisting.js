/*Normal Scenario
function sayMyName(finalName){
    console.log(finalName);
}
sayMyName("Mittal")
*/

// Hoisting


sayMyName("Mittal")
function sayMyName(finalName){
    console.log(finalName);
}
//still running 
//This is Hoisting=> where function shifts to 
// top of its current scope

//Variable Hoisting
console.log(age);

var age=25;

//output comes as "undefined"
/*
in case of variable hoisting unlike in 
func hoisting whole function is not shifted instead
only its decl i.e var age is shifted
*/
//using let and const
console.log(score);
let score=90;
//Reference Error is coming
//Means let cannot be hoisted
//similarly with const

//That's why var is not used much

//Function Hoisting in FUNCTION EXPRESSION 
sayHello()
let sayHello=function(){
    console.log("Hello");
    
}
//in this case refernce error comes

//Class Hoisting
const object1=new Human();
class Human{

}
//this will give error 
//class level hoisting not possible

//Function Call Stack

//Function=>FIRST CLASS CITIZEN

//1.function as arg
function greetMe(greet,fullName){
    console.log("hello" +fullName);
    greet();
}
function greet(){
    console.log("Greetings of day");
    
}
greetMe(greet,"Sneha");

//2.returning function

 function solve(number){
 return function(number){
      return number*number;
    }
 }
    let ans=solve(5); //returned function 
    //so ans will behave like func

    let finalANs=ans(10);
    console.log(finalANs);
//o/p will be 100 


//3.array of function
const arr =[
    function(a,b){
        return a+b;
    },
    function(a,b){
        return a-b;
    },
    function(a,b){
        return a*b;
    }
]
let first=arr[0];
let add=first(5,15);
console.log(add);
//5+15 i.e 20 comes as output

//4. in obj
let obj={
    age:25,
    greet:()=>{
        console.log("hello");
    }
}
console.log(obj.age);
obj.greet();




