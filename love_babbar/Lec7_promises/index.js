// let firstPromise=new Promise((resolve,reject)=>{

//     console.log("Babbar");
//     //output will be babbar 
//     //as resolved/fulfilled not marked so now its state is pending
    
//     // resolve(1001);
//     //now state is fulfilled

//     // reject(new Error("Internal Server Error"));
//     //int this case rejected state this error comes
// });


//asynchronous code example

// setTimeout(function sayMyName(){
//     console.log("My name is Sneha");
    
// },10000);

// let firstPromise=new Promise((resolve,reject)=>{

//     setTimeout(function sayMyName(){
//         console.log("My name is Sneha");
        
//     },15000);
//     resolve(1);// to make it fulfilled 
// });
// let promise1=new Promise((resolve,reject)=>{

//     let success=true;
//     if(success){
//         resolve("promise fulfilled");
//     }
//     else{
//         reject("promise rejected");
//     }
     
// });
// promise1.then((message)=>{
//     console.log("This message :"+message);
    
// }).catch((error)=>{
//        console.log("Error is: "+error)
// });

//Promise Chaining
// promise1.then((message)=>{
//     console.log("first msg:",message);
//     return "Promises Fulfilled second msg";
// }).then((message)=>{
//     console.log("second msg:",message);
//     return "Promise fulfilled third msg";    
// }).then((message)=>{
//     console.log("Third msg:",message);
// }).finally((message)=>{
//     console.log("main to final hoon chalunga hi chalunga");

// })


let promise1=new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,"First");
})
let promise2=new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"sec");
})
let promise3=new Promise((resolve,reject)=>{
    setTimeout(reject,3000,"third");
})
//when multiple promises we use .all
Promise.all([promise1,promise2,promise3]).then((values)=>{
    console.log(values);
    
}).catch((error)=>{
    console.log("Error:",error);
});
//new promise created that is marked resolve when all promises 
//in it get executed




