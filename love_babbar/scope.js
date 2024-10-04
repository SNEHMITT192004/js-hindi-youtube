//global scope

var age=15;//let age or const age then no change 
console.log(age);
{
    console.log(age);
}
if(true){
    console.log(age);
}
function sayH(age){
    console.log("hi"+age);
}
sayH(age);
//accessible everywhere


//function scope
function sayHello(){
    var fullName; //same for let and const
    //accessible here 
}
//fullName not accessible here 

//BLOCK SCOPE
console.log(height);//hoisting so undefined 
{
   var height=100;
}
console.log(height);
//accessible here as var is not block scope

{
    let height=100;//same for const
    
 }
 console.log(height);
//reference error
//not accessible as let is block scope



