// Starting array
let array = [28, 43, -12, 30, 4, 0, -3]

// Write your solution below:

let sumArray = false

for (let i = 0; i < array.length;  i++) {
    for (let j = i + 1; j < array.length - i; j++) {
        if (array[i] + array [j] === 0){
            sumArray = true;
        } 
    }
}

console.log(sumArray); 