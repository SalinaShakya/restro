"use client"
import React from "react";
// set timer
setTimeout(() => {
    console.log("hello")
}, 3000
)
// //interval
// setInterval(() => {
//     console.log("hello")
// }, 2000
// )
//promises
// const func=()
// const dataFromApi=new Promise((resolves,rejects)=>{
// resolve("hello success");
// reject("hello");//for error

// })
// dataFromApi.then(()=>{//success
//     console.log(value,"resolved");
// }).catch(error)=>{
//     console.log(error)
// }
// console.log(dataFromApi)
const promiseData = new Promise((resolves, rejects) => {
    setTimeout(() => {
        if (2 + 2 === 5) {
            resolves("hello success");

        } else {
            rejects("hello");//for error
        }
    }, 3000);

});
promiseData.then((value) => {
    console.log(value, "resolved");
})
    .catch((error) => {
        console.log(error, "not resolved")
    })
// // dataFromApi.then(() => {//success
//     console.log(value, "resolved");
// }).catch(error)=> {
//     console.log(error)
// }
// console.log(dataFromApi)
const Async=()=>{
    return <div>async</div>
}
export default Async;