//you have a coffee shop which only serves coffee any other drink is rejected and you have to process the coffee
function placeOder(drink){
    return new Promise (function(resolve,reject){
            if (drink == 'coffee'){
                resolve('Order for coffee received')
            }
            else{
                reject(`Order for ${drink} has been rejected`)
            }
    })
}
//now after taking the order you have to process the order ,and here the order cannot be rejected

function processOrder(order){
    return new Promise(resolve=>{           //note that you can also write resolve only,not compulsory to write reject also
        console.log('Order is being Processed')
        resolve(`${order} and Served`)

    })
}

// placeOder('coffee').then(function(orderPlaced){
//             console.log(orderPlaced)
//             let orderisProcessed = processOrder(orderPlaced) //we need to give the value to processOrder to do the rest of the task
//             return orderisProcessed
// }).then((processOrder)=>{       //it is use to resolve the next promise
//     console.log(processOrder)           //this is called chaining of promise
// }).catch((err)=>{
//     console.log(err)
// })      //catch is used to reject the order,and print the message


// we can do the same thing using async and await

async function serveOrder(){
    try {
        
        let orderPlaced = await placeOder('coffee') //to resolve this promise we need await keyword
        console.log(orderPlaced)                        //it will wait for the promise to be solved
        let processedOrder = await processOrder(orderPlaced)
        console.log(processedOrder)

    } catch (error) {
        console.log(error)
        
    }
                     
}           
            //to handle the error in this ,we use try and catch block
serveOrder()