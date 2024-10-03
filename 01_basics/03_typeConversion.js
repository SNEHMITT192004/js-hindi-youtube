let score="33";

console.log(typeof score);

let valInNumber=Number(score);
console.log(typeof valInNumber);
console.log(score);

//a test case 2
score=null;
console.log(typeof score);

valInNumber=Number(score);
console.log(typeof valInNumber);
console.log(valInNumber);//NaN is coming as 33abc is not actually a number

score="33abc";
console.log(typeof score);

valInNumber=Number(score);
console.log(typeof valInNumber);
console.log(valInNumber);
//converted null to 0

//test case 3
score=undefined;
console.log(typeof score);

valInNumber=Number(score);
console.log(typeof valInNumber);
console.log(valInNumber);

//test case 4
score="";
console.log(typeof score);

valInNumber=Number(score);
console.log(typeof valInNumber);
console.log(valInNumber);

//test case 5
score=true;
console.log(typeof score);

valInNumber=Number(score);
console.log(typeof valInNumber);
console.log(valInNumber);

/*
"33"=>33
"33abc" => NaN
true=>1; false=>0
*/

let isLoggedIn=1;

let booleanIsLoggedIn=Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
//results true

//if "" then false
//if "hitesh" then true

//other functions String()