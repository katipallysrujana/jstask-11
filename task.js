//create 2 functions with studentName and anotherFunction with their surname 
//and execute the code and write the execution of function behind the scenes  and how FEC creates in call stack and how it vanishes there
 function studentName(){
    var studentName="studentName:"+"srujana"
     console.log(studentName);
}
function surname(){
    var surname="surname:"+"katipally"
    console.log(surname)
}
surname()
studentName()


//execution process behind the scenes


// - the functions studentname and surname are defined
// -  when surname() is Called,a new execution context is created for this function, the code gets executed. after execution is completed its execution context is removed from the call stack
// - next, studentname() is called,creating a new execution context,memory is allocated for local variable studentName(),the code gets executed and context is removed once the excution is completed

//call stack

// when surname is called the call stack grows by adding adding a new context for surname,
 //after finishes execution the context will be vanished .similarly studentName is called,
 //a new context is added,and it too removed once the function completes
