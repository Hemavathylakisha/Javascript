// const data = new Promise((resolve,reject) => {
//     setTimeout(()=>{
//         const res = "Hema";
//         if(res){
//             resolve(res)
//         }else{
//             reject(new Error('No data'))
//         }
//     },1000)
// })

// function getUserDetails(name){
//     const userDetails = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const user = [{name:"Hema", age:34}]
//             if(user.find(user=>user.name===name)){
//                 resolve(user)
//             }else{
//                 reject(new Error("Error Ocurred"))
//             }
//         },1000)      
//     })
//     return userDetails;
// }

// data
// .then((name)=>{
//    return getUserDetails(name)
// }).then((userDetails)=>{
//     console.log(userDetails)
// })
// .catch((error)=>{
//     console.log(error.name)
// })
// .finally(()=>{
//     console.log("Test")
// })
// console.log("say")


//async await method 

// async function process(){
//     try{
//     const name = await data;
//     const userDetails = await getUserDetails(name)
//     console.log(userDetails)
//     console.log('Test')
// }catch(error){
// console.log(error.message);
// }finally{
//     console.log('FromFinally')
// }
// }

// process();
// console.log('Last')


// example

// async function loadJson(url){
//     let response = await fetch(url) 
//     if(response.status==200){
//         let json = await response.json()
//         return json
//     }
//         throw new Error(response.status);
// }

// loadJson("https://fakeurl.com/no-such-user.json").catch((error)=>
//     console.log(err)
// )


//Promise pollyfill

function PromisePolyfill(executor){
    let onResolve,onReject;

    function resolve(value){
        onResolve(value)
    }
    function reject(value){
        onReject(value)
    }
    this.then = function(callback){
        onResolve = callback;
        return this;
    }
    this.catch = function(callback){
        onReject = callback;
        return this;
    }
    executor(resolve,reject)
}

const examplePromise = new PromisePolyfill((resolve,reject)=>{
    setTimeout(()=>{
        resolve(2)
    },1000)
})

examplePromise.then((res)=>{
    console.log(res)
}).catch((err)=>console.error(err));