// //compile time

// //syntax error
// //console.log(1;


// //Runtime error
// //reference error
// //console.log(x);

// //if any error comes in try block
// //then catch catches it and "e" is name of error

// try{
//     console.log("try start");
//     console.log(x);
//     console.log("try ends");
//     //a
//     //b
//     //c
// }
// catch(err){
//   //define error k sath kya krna chahte h

//   //retry logic
//   //fallback mechanism
//   //logging
//   //custom error
//   console.log("inside catch");
//   //error "err" is printed
//   console.log("your error is here:",err);
// }
// finally{
//     console.log("I will run everyime,as i am finally block");
// }

//CUSTOM ERROR

try{
    //Reference error
    console.log(x);
    
}
catch(err){
    throw new Error("Pehle declare karo,phir print");

}

let errorCode=100;
if(errorCode==100){
    throw new Error("Invalid JSON");
}