// let arr = [
//     [1,2],
//     [4,5,6],
//     [34,56,67],
//     [2,3,7,9,[4,5]]
// ]

// let flatarr = [].concat(...arr);
// let flat = [].push(...arr);
// console.log(flatarr, flat)

// const person = {
//     name: "Hema",
//     age:34,
//     hello: function(thing){
//       console.log(this.name + " " + "Says Hello" + " " + thing);
//     },
// };

// var alter = {
//     name: "Hemavathy Lakisha"
// }


// // person.hello.call(alter,"world")
// // person.hello.apply(alter,["world"])
// const bindmethod = person.hello.bind(alter)
// bindmethod("World");

/****Pollyfil creation for map,filter,reduce ****** */

// Array.prototype.myMap = function(cb) {
//   let temp = [];
//  for(let i = 0; i < this.length; i++){
//   temp.push(cb(this[i], i ,this));
//  }
//  return temp;
// }

// const nums = [2,4,6,8,9]
// const multiplythree = nums.myMap((num,i,arr)=>{
//   return num*3;
// });

// console.log(multiplythree)

// Array.prototype.myFilter = function(cb) {
//   let temp = [];
//   for(let i=0; i<this.length; i++){
//     if(cb(this[i],i,this)) temp.push(this[i])
//   }
// return temp;
// }

// const values = [2,4,6,8,9]
// const morethantwo = values.myFilter((value,i,arr)=>{
//   return value > 2;
// });

// console.log(morethantwo)

// Array.prototype.myReduce = function(cb, initialValue) {
//  var accumulator = initialValue;
//   for(let i=0; i<this.length; i++){
//     accumulator = accumulator ? cb(accumulator,this[i],i,this):this[i];
//   }
// return accumulator;
// }

// const values = [2,4,6,8,9]
// const sum = values.myReduce((acc,curr,i,arr)=>{
//   return acc + curr;
// },0);

// console.log(sum)

// const Cars={
//   color: "red",
//   company:"Ferrari"
// };

// function purchaseCar(currency,price){
//   console.log(`I have purchased ${this.color} - ${this.company} car for ${currency} ${price}`)
// }

// Function.prototype.myCall = function(context={}, ...args){
//   if(typeof this !== "function"){
//     throw new Error(this + "Its not callable");
//   }
//   context.fn = this;
//   context.fn(...args);
// }

// purchaseCar.myCall(Cars, "$", 500000)

// const Cars={
//   color: "red",
//   company:"Ferrari"
// };

// function purchaseCar(currency,price){
//   console.log(`I have purchased ${this.color} - ${this.company} car for ${currency} ${price}`)
// }

// Function.prototype.myApply = function(context={}, args=[]){
//   if(typeof this !== "function"){
//     throw new Error(this + "Its not callable");
//   }
//   if(!Array.isArray(args)){
//     throw new TypeError("CreateList of Array is not an object")
//   }
//   context.fn = this;
//   context.fn(...args);
// }

// purchaseCar.myApply(Cars, ["$", 500000])

// const Cars={
//   color: "red",
//   company:"Ferrari"
// };

// function purchaseCar(currency,price){
//   console.log(`I have purchased ${this.color} - ${this.company} car for ${currency} ${price}`)
// }

// Function.prototype.myBind = function(context={}, ...args){
//   if(typeof this !== "function"){
//     throw new Error(this + "Its not callable");
//   }
  
//   context.fn = this;
//   return function(...newArgs){
//     return context.fn(...args,...newArgs);
//   }
  
// }

// const func=purchaseCar.myBind(Cars,"$",500000);
// console.log(func());


/****Promise polyfill ****/

// Function PromisePolyFill(executor){
//   let onResolve, onReject;

//   function resolve(value){
//     onResolve(value);
//   }
//   function reject(value){
//     onReject(value);
//   }

//   this.then = function(callback){
//     onResolve = callback;
//     return this;
//   }

//   this.catch = function(callback){
//     onReject =callback;
//     return this;
//   };

//   executor(resolve,reject);
// }


// const examplePromise = new PromisePolyFill((resolve,reject) => {
//   setTimeout(()=>{
//  resolve(2);
//   },1000);
// });

// examplePromise
// .then((res) => {
//  console.log(res);
// })
// .catch((err) => console.error(err));

//Debounce polyfill trigers the function delays until the certain millseconds holds it and then triggers the function

const myDebounce = (cb,d) =>{
let timer;

return function(...args) {
timer = setTimeout (()=>{
  cb(...args);
},d)
}
}

//throttle polyfill - triggers the function once per every wait milliseconds time 
//once the limits reached out triggers the function

const start = new Date().getTime();

const myThrottle = (cb,d) => {
  let last = 0;

  return (...args) => {
    let now = new Date().getTime();
    if(now - last > d) return;
    last = now;
    return cb(...args);
  }
}
