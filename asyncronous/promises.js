//Promise can either be fullfile or rejected

let mypromise = new Promise(function (resolve,reject){
    let a = 5
    let b = 5
    setTimeout(()=>{
        if (a===b){
            resolve('The values were equal')        //  it will  not be in pending state
        }
        else{
            reject('The values were different')
        }
    },1000)
})

// to take the resolve we use then and to get the reject ,we use catch
mypromise.then((result)=>{
    console.log(result)
})

mypromise.catch((erroresult)=>{
    console.log(erroresult)
})