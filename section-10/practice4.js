// PRACTICE NUMBER 1
function myFunction(numbers){
    let unique = [];
    for(let num of numbers){
        if (!unique.includes(num)){
            unique.push(num);
        }
    }
    return unique;
}
console.log(myFunction([1,2,3,4,5,1,2,3,6,7,8,9,10]));
