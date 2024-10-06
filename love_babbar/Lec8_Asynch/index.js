// async function getData() {
//     setTimeout(function(){
//         console.log("I am inside set Timeout block");
        
//     },3000);
// }
// let out=getData();

//await=> is an efficient way in which we can write 
//          syntax of Promise (then and catch)
//to handle promises

//an async function always return a promise

//fetch API
// async function getData() {
//     //get request-async
//     let response =fetch('https://jsonplaceholder.typicode.com/todos/1');

//     console.log(response);
// }
//scenario:
//prepare url/api endpoint->sync
//fetch data->network call->async
//process data ->sync

//now if without data being fetched we execute process data 
//that would be wrong o/p will be undefined 
//so we need to wait for async operarion to be executed first

//this is where "await" is used 

//we can mark await only in async function
// async function getData() {
//     //get request-async
//     let response =await fetch('https://jsonplaceholder.typicode.com/posts');

//     //parse json->async
//     let data =await response.json();
//     console.log(data);
// }
// getData();

//POST and GET REQUEST

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const url='https://jsonplaceholder.typicode.com/posts';

const options={
  method: "POST",
  body: JSON.stringify({ username: "Sneha Mittal" }),
  headers: myHeaders,
}
async function getData() {
    const response = await fetch(url);
    let data=await response.json();
    console.log("My Get Data:",data);
    
}
async function postData() {
    const response = await fetch(url,options);
    let data=await response.json();
    console.log("My Post Data:",data);
    
}
async function process(params) {
    await postData();
    await getData();
}
process();



