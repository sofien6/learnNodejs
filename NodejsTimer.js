/*
Node.js Timer functions are global functions. You don't need to use require() function in order to use timer functions. Let's see the list of timer functions.
Set timer functions:

setImmediate(): It is used to execute setImmediate.
setInterval(): It is used to define a time interval.
setTimeout(): ()- It is used to execute a one-time callback after delay milliseconds.

Clear timer functions:

clearImmediate(immediateObject): It is used to stop an immediateObject, as created by setImmediate
clearInterval(intervalObject): It is used to stop an intervalObject, as created by setInterval
clearTimeout(timeoutObject): It prevents a timeoutObject, as created by setTimeout

*/


// Node.js Timer setInterval() Example
setInterval(()=>{
    console.log(" hey i'm dzbrain ");
},1000)

// Node.js Timer setTimeout() Example
setTimeout(() => {
   console.log(" hey i'm dzbrain");
}, 1000);


// Let's see an example to use clearTimeout() function.
const welcome = ()=>{
    console.log('welcome dzbrain');
}

let id1 = setInterval(welcome,10000)
clearInterval(id1)

let id2 = setTimeout(welcome,10000)
clearTimeout(id1)