function outer(){
    let name="babbar";

    function innerFunction(){
        console.log(name);
        
    }
    return innerFunction;
}

let inner=outer();

//you may think that name must be cleared of
//but in actually name gets bind with func inner

inner();