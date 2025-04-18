// PRACTICE NUMBER 1
// const product ={
//     name:"Laptop",
//     price:50000,
//     brand:"Dell"
// }
// const {name,...others} = product;
// console.log(others);




// // PRACTICE NUMBER 2
// const project ={
//     id:101,
//     titlel:"Web App",
//     budget:3000,
//     clint:"Tech Corp"
// }
// const {titlel,...others} =project;
// console.log(others);




// // PRACTICE NUMBER 3
// const programmer = {name:"Sophia",language:"JavaScript",experince:5,specialty:"Backend"}
// const {language,specialty,...details} = programmer;
// console.log(details);




// PRACTICE NUMBER 4
// const numbers = [10,20,30,3,300,3000];
// const [,,...others] =numbers
// console.log(others);



// PRACTICE NUMBER 5
// function add(a,b,...rest){
//     console.log(rest);
// }
// add(2,3,4,5,6,7,8,9)




// PRACTICE NUMBER 6
function sum(...numbers){
     let total = 0;
     for(const number of numbers){
        total += number;
     }
     return total/numbers.length
}
let result = sum(1,2,3,4,5,6,7,8,9);
console.log(result);
