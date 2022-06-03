// Write your code below

function hasUniqueChars (str) {
    for (var i = 0; i < str.length; i++) {
        for (let j = i+1; j < str.length; j++) if (str[i] !== str[j]) {
            continue;
        } 
        else if (str[i] === str[j]) {
            return console.log(false);
        } 
        else (str[i] !== str[j]) {
            return console.log(true)
        }
    }
}

hasUniqueChars ("Hello")
console.log(hasUniqueChars)


// function hasUniqueChars (str) {
//     for (let i = 0; i < str.length; i++) {
//         for (let j = i + 1; j < str.length; j++) {
//             if (str[i] === str[j] && i !== j) {
//             return false
//             }
//         }
//      }
//      return true
//  }

// console.log(hasUniqueChars('Col'))