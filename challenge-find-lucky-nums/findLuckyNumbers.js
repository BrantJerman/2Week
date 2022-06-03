// Write your code below this line



// let n = 9;

// const nums = new Set();
// while(nums.size !== n) {
//   nums.add(Math.floor(Math.random() * 10) + 1);
// }

// console.log([...nums]);

// This works aswell, we just wanted to make a function work with an array rather than a set

n = 8

var arr = [];
while(arr.length !== n){
    var r = Math.floor(Math.random() * 10) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr);