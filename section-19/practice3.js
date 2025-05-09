// PRACTICE NUMBER 1
/**
 * fetch function theke return kora promise er maddhome response.json() kora hoy karon
 * response ta ekta json format a thake, ei data ti jodi amra use korte chai tahole prothome 
 * json format theke jabascript object a convert korte hobe, jeta amra response.json() diye kori. 
 */



// PRACTICE NUMBER 2
/**
 * fetch use kora hoye data niye ashar jonno, etike web api o bola jay.
 */



// PRACTICE NUMBER 3
/**
 * fetch vs promise er difference holo fetch er maddhome amra data niye ashte pari,kintu promise
 * er maddhome amra data niye ashte pari na, promise er maddhome amra ekta function ke
 * asynchronous vabe call korte pari.
 */



// PRACTICE NUMBER 4
// const url = fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error))




// PRACTICE NUMBER 5
fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error=>console.log(error))



// const url = 'https://example.com/api/user';
// const user = {name:'Jhon Doe',email:'jhon.doe@example.com'}
// const options ={
//     method:'POST',
//     body:JSON.stringify(user),
//     headers:{
//         'Content-type':'application/json',
//     },
// }
// fetch(url,options)
//     .then(res=>res.json())
//     .then(data=>console.log(data))
//     .catch(error=>console.log(error))
