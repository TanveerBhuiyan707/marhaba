// PRACTICE NUMBER 1
// const myPromise = new Promise((resolve,reject)=>{
//     const arr = ['ramim','tanvir','laden'];
//     if(arr){
//        resolve(arr);
//     }reject('No data available')
// })

// myPromise
//     .then((data)=>{
//         console.log(data);
//     })
//     .catch((error)=>{
//         console.log(error);
//     })



// PRACTICE NUMBER 2
// const payment = new Promise((resolve,reject)=>{
//     const amount = 1500;
//     if(amount){
//         resolve('Payment Successfull')
//     }reject('Payment failed')
// })
// payment
//  .then((data)=>{
//     console.log(data);})
// .catch((error)=>{
//     console.log(error);
    
// })



// PRACTICE NUMBER 3
function sendEmail(email){
    const validEmail = ['prince@mail.com','ceo@company.com', 'rich.dude@fortune.com'];
   return new Promise((resolve,reject)=>{
        if(validEmail.includes(email)){
            resolve("Eamil from Nigerian prince");
        }reject("Lets Dance in the spam folder")
    });
   
}
sendEmail('prince@mail.com')
    .then (message => console.log((message)))
    .catch(error => console.log(error))









// const orderFood = new Promise((resolve,reject)=>{
//     const foodReady = false;
//     if(foodReady){
//         resolve("Food is ready")
//     }reject('baap er hotel bondho')
// })
// orderFood
//     .then((t)=>{console.log(t);
//     })
//     .catch((t)=>{console.log(t);
//     })


// const moneyRequest = new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve('Request submited'),1000);
// });

// const transferMoney = new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve('Money Transfered'),2000)
// })

// const payFee = new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve('Fee Paid'),1500)
// })

// Promise.all([moneyRequest,transferMoney,payFee])
//     .then((result)=>{
//         console.log(result);
//     })
//     .catch((error)=>{
//         console.log("Error: ",error);
//     })