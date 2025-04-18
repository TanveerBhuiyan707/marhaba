// PRACTICE NUMBER 1
// let a = 100;
// let b = 20;
// let result = a-b;
// console.log(`the deffeence between ${a} and ${b} is ${result}`);



// PRACTICE NUMBER 2
// let employee ={name:'ramim',age:24,salary:12000}
// console.log(`name: ${employee.name} age:${employee.age} salary:${employee.salary}`);




// PRACTICE NUMBER 3
// let fruit =['apple','banana','lichi','mango','orange'];
// console.log(`my favourite fruit is ${fruit[3]}`);




// PRACTICE NUMBER 4
// const a = 50;
// const b = 10;
// const divided = a/b;
// console.log(`the division of ${a} and ${b} is ${divided}`);



// PRACTICE NUMBER 5
// const person={firstName:"Amit",lastName:"Kumar"}
// console.log(`fullName: ${person.firstName+person.lastName}`);




// PRACTICE NUMBER 6
//  const animals =["Cat","Dog","Elephant"];
//  console.log(`my favorite animals are ${animals}`);
 



// PRACTICE NUMBER 7
let students ={
    name:'ramim',
    age:24,
    result:[54,88,67]
}
let length = students.result.length;
let sum = 0;
for(num of students.result){
    sum +=num;
}
let total = sum / length;
console.log(`name : ${students.name} age : ${students.age} result avarage ${total}`);
