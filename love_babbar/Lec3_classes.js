//DEFAULT PARAMETERS
function sayName(fname="uday",lname=fname.toUpperCase()){
    console.log("My Name is: ",fname," ",lname);
}
sayName();
sayName("Babbar");

//obj as default parameters
// function solve(val={
//     age:15,
//     wt:90,
//     ht:190
// }){
//     console.log("hello all",val);
// }
function solve(val="rahul"){
    console.log("hello all",val);
}
solve(null);//then in val "null" is stored
solve(undefined);//then in val "default val" i.e rahul will be stored

//function as default para
function getAge(){
    return 190;
}

function utility(name="love",age=getAge()){
    console.log(name," ",age);
}
utility("love",20);
utility();




//similarly array is possible

// class Human{
//     //properties
    
//     age=13;//public
//     #wt=80;//private # for wt
//     ht=100;

//     constructor(newAge,newHeight,newWt){
//         this.age=newAge;
//         this.ht=newHeight;
//         this.#wt=newWt;
//     }
//     //behaviour
//     walking(){
//         console.log("Walking"+ this.#wt);
//     }
//     //this=>refers to curr obj for which func call
//     running(){
//         console.log("Running");
//     }
//     //getters and setters
//     //without get and set keyword also work in same way

//     get fetchWeight(){
//         return this.#wt;
//     }
//     set modifyWeight(val){
//         this.#wt=val;
//     }
// }
// let obj=new Human(50,190,90);
// console.log(obj.age);

// obj.walking();
// console.log(obj.ht);

// //getters and setters for private members
// console.log(obj.fetchWeight);
// obj.modifyWeight=70
// console.log(obj.fetchWeight);





