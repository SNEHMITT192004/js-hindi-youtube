// //Dynamic Nature of Objects
let obj={
    age:12,
    wt:68,
    ht:180
}
console.log(obj);

// //we can change properties of object at runtime
// //that's why dynamic
// obj.color="white";

// console.log(obj);

// let dest=obj;

// obj.age=90;

// console.log("dest ",dest);
// console.log("src ",obj);

// //let b=a; not cloned
// //in this just copying address of a basically shallow copy

// //1.using SPREAD OPERATOR
// dest={...obj};

// obj.age=90;

// console.log("dest ",dest);
// console.log("src ",obj);

// //2.Assign method

let src={
    val:101,
    fname:"Love Babbar"
}
let dest=Object.assign({},obj,src);
obj.age=90;

console.log("dest ",dest);
console.log("src ",obj);

//GARBAGE COLLECTOR
//in js
//memory which is in no longer in use can be free 
//using tool garbage collector
//avoiding memory leak
//we have no control over GC
//runs in background

//unlike in c++=> new is used to make heap memory obj
//we need to deallocate manually memory 
//using free/delete


