//it is used to execute the code after a fixed amount of time

console.log('start')
function Hello(){
    console.log('hi,there')
}
let  timer = setInterval(Hello,1000)   //it will end up infinitely
//this is used to stop the function,after 3 sec
setTimeout(function(){
    clearInterval(timer)
},3000)

console.log('end')