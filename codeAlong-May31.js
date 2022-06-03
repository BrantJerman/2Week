// Funcitons 1 Interactive Lecture

// Converting to a Boolean --------------------------------------------------------------------

// create a number variable, on the next line convert that variable to a boolean with the Boolean method (assign it to another variable)
// if that number is not 0, it will console.log as true
const myFavNum = 6;
const myNumBoo = Boolean(myFavNum);
console.log(myNumBoo);
// will console.log as true

// create a string variable, on the next line convert that variable to a boolean with the Boolean method (assign it to another variable)
// if that string is not a set of empty quotes, it will console.log as true
const myString = '';
const myStringBoo = Boolean(myString);
console.log(myStringBoo);
// will console.log as false


// Converting to a Number --------------------------------------------------------------------

// create a boolean variable, on the next line convert that variable to a number with the Number method (assign it to another variable)
// if you set the variable to "true", it will console.log as 1
// if you set the variable to "false", it will console.log as 0
const iLoveCats = true;
let catsBoo = Number(iLoveCats);
console.log(catsBoo);
// will console.log as 1

// create a variable equal to a string of numbers, on the next line convert that string into a number using the Number method shorthand (assign it to another variable)
// console.log both variables and they should be different colors in the terminal since one is a number and the
let numString = '1234';
let convertedString = +numString;
console.log(numString, convertedString);
// this shows the difference between a string and number in the terminal

// shorthand number conversion can be done all in one line
// set a variable equal to a string with the shorthand operator in front of it, console.log it and the result will be the same as the other two versions
let inOneLine = +'1234';
console.log(inOneLine);
// shorthand number conversion can be done all in one line

// set a string variable equal to your height in inches (should look like this '75in')
// convert that string into a number with the Number method and the parseInt method (assigning both to new variables)
// when you console.log the variables, one will succeed and one will fail
let myHeight = '62in';
let withNum = Number(myHeight);
let withParse = parseInt(myHeight);
console.log(withNum);
console.log(withParse);
// this shows how Number and parseInt are different, parseInt is more advanced and intelligently searches a string for the first number it can find


// Converting to a String --------------------------------------------------------------------

// create a number variable, on the next line convert that variable to a string with the String method (assign it to another variable)
// when you console.log the 2 variables, they should be different colors
let myAge = 21;
let ageToString = String(myAge);
console.log(myAge, ageToString);
// works opposite to the conversion in the second code block in the above section

// create another variable but this time use concatenation of empty quotes to turn your number into a string
let ageToString2 = myAge + '';
console.log(ageToString2);
// this shows another way you can convert a number into a string

// create a boolean variable (to either true or false, your choice)
// create another variable equal to a string (saying whatever you want) and concatenate the boolean variable to it
// if you console.log it, the boolean will now be a string
const lovesPokemon = true;
let doYouLovePkmn = 'Do I love pokemon? Yes, that is ' + lovesPokemon;
// console.log(lovesPokemon, doYouLovePkmn)
// the whole variable doYouLovePkmn has been converted into a string


// String Methods --------------------------------------------------------------------

// create a string variable and use the string methods listed below to see if your string includes, starts with, and ends with the letter(s) you input as parameters
const myName = 'joely';

// .includes()
console.log(myName.includes('oe'));
// true

// .startsWith()
console.log(myName.startsWith('g'));
// false

// .endsWith()
console.log(myName.endsWith('y'));
// true


// Trimming Whitespace --------------------------------------------------------------------

// set a variable equal to a string with extra spaces at the beginning and end of the words in your string
// use .trim() on the string and assign it to another variable to remove the extra spaces
const lotsOSpaces = '  wow so roomy in here  ';
let noMoreSpace = lotsOSpaces.trim();
console.log(noMoreSpace);
// the string's extra spaces have been trimmed


// Changing Casing --------------------------------------------------------------------

// set a variable "lowercase" equal to a string with all the letters being in lowercase
// try to use toUpperCase() on "lowercase" without reassigning it (this will fail)
// do the same except reassign "lowercase" to be lowercase.toUpperCase() (this will be successful)
let lowercase = 'these are my letters and i love them';
lowercase.toUpperCase();
console.log(lowercase);
// this will not make the lowercase string uppercase because you need to assign it to a variable

lowercase = lowercase.toUpperCase();
console.log(lowercase);
// now the string will be capitalized


// Replacing Characters --------------------------------------------------------------------

// make a variable that is equal to a string saying whatever you want
// use .replace() to replace the first letter of your choosing from the string
// use .replaceAll() to replace every letter of your choosing from the string
let myFavVine = 'Road work ahead? Uh yeah, I sure hope it does!';

let noFirstA = myFavVine.replace('a', 'j');
console.log(noFirstA);
// only removes first a

let aIsAllGone = myFavVine.replaceAll('a', 'j');
console.log(aIsAllGone);
// removes all a's


// Splitting Strings --------------------------------------------------------------------

// make a string variable saying whatever you want
// split the string with .split(' '), .split(','), and .split('')
// console.log them to see the difference
let sentence = 'Four smart fellows, they felt smart'

let splitSpace = sentence.split(' ');
let splitComma = sentence.split(',');
let splitEmpty = sentence.split('');

console.log(splitSpace);
console.log(splitComma);
console.log(splitEmpty);


// Joinging Strings --------------------------------------------------------------------

// make an array variable containing a few different strings
// join the array with .join(), .join(''), .join(' '), .join(' + ')
const tmnt = ['leonardo', 'rafael', 'michaelangelo', 'donatello'];

let joinNothing = tmnt.join();
let joinEmpty = tmnt.join('');
let joinSpace = tmnt.join(' ');
let joinComma = tmnt.join(' + ');

console.log(joinNothing);
console.log(joinEmpty);
console.log(joinSpace);
console.log(joinComma);


// Functions --------------------------------------------------------------------

// create functions with no params, 1 param, and 2 params
// then show the difference between a return value vs just console logging something in the function
function noParams(){
    console.log('This function has no parameters!')
};

function oneParam(word){
    console.log(`The word I chose is ${word}.`)
};

function twoParams(num1, num2){
    console.log(num1 + num2)
};

noParams();
oneParam('eructabundant');
twoParams(6, 3);

function hasReturn(num1, num2){
    return num1 + num2
}

let valueOfFunction = hasReturn(6, 3);
console.log(hasReturn(6, 3), valueOfFunction);

// Scope --------------------------------------------------------------------

// show outer scope vs a function's inner scope by setting variables inside and outside of a function
// console.log both variables, one of them is going to give an error

let outerVar = "I'm in the outer scope!";

function scopeTester(){
    let innerVar = "I'm in the scope of the scopeTester function!"
    console.log(outerVar, innerVar)
}
scopeTester()
// console.log(outerVar, innerVar)

// Syntaxes --------------------------------------------------------------------

// show an example of each of the 3 function types doing the same block of code
function rooter(num){
    return Math.sqrt(num)
}

const rooter2 = function(num){
    return Math.sqrt(num)
}

const rooter3 = (num) => {
    return Math.sqrt(num)
}

console.log(rooter(36))
console.log(rooter2(36))
console.log(rooter3(36))

// then show an arrow function with implicit return as well

const implicit = word => `This arrow function has ${word} return`
console.log(implicit('implicit'))







////////////////////////
////// CALCULATOR //////
////////////////////////

// CODE HERE
const add = (num1, num2) => num1 + num2
const subtract = (num1, num2) => num1 - num2
const multiply = (num1, num2) => num1 * num2
const divide = (num1, num2) => num1 / num2

const calculator = (num1, num2, callback) => {
// we'll check to see if it's true that num1 and num2 can be coerced into number
// if they are able to be numbers, we'll do it, and call the callback to do our math
// if they aren't able to be numbers, we warn them that they need to be numbers
    if (+num1 && +num2) {
        num1 = +num1
        num2 = +num2
        return callback(num1, num2)
    } else {
        console.log('Hey bro/broette! Send me some nums, yo!')
    }
}

// let result = calculator(5,6,add)
// console.log(result)
// result = calculator(5,6,subtract)
// console.log(result)
// result = calculator(5,6,multiply)
// console.log(result)
// result = calculator(5,6,divide)
// console.log(result)


///////////////////////
////// PET STORE //////
///////////////////////

const dogProducts = [
    {
      name: 'leash',
      colors: ['red', 'blue', 'green'],
      category: 1,
      inventory: 30,
      basePrice: 13.99, 
      displayPrice: 13.99
    }, 
    {
      name: 'chew toy',
      colors: ['brown'],
      category: 2,
      inventory: 120,
      basePrice: 6.00, 
      displayPrice: 6.00
    }, 
    {
      name: 'rope',
      colors: ['blue & green', 'red & yellow'],
      category: 2,
      inventory: 75,
      basePrice: 4.99, 
      displayPrice: 4.99
    }
]

const catProducts = [
  {
    name: 'mouse toy', 
    colors: ['pink', 'grey', 'black'], 
    category: 2, 
    inventory: 125, 
    basePrice: 2.50, 
    displayPrice: 2.50
  },
  {
    name: 'cat sweater',
    colors: ['black'],
    category: 1,
    inventory: 15,
    basePrice: 10.00, 
    displayPrice: 10.00
  }, 
  {
    name: 'straching post',
    colors: ['tan'],
    category: 2,
    inventory: 40,
    basePrice: 22.99, 
    displayPrice: 22.99
  }
]

// CODE HERE

//callback function #1
const applyPercentDiscount = (product, discount) => {
    product.displayPrice = product.basePrice * (1 - discount)
}

//callback functioin #2
const applyFlatRateDiscount = (product, discount) => {
    product.displayPrice = product.basePrice - discount
}

//higher order function #1
const applyDiscounts = (arr, callback, discount) => {
    arr.forEach((product) => {
        callback(product, discount)
    })
}

//applyDiscounts(dogProducts, applyPercentDiscount, .1)
//console.log(dogProducts)

//applyDiscounts(catProducts, applyFlatRateDiscount, 2)
//console.log(catProducts)

//higher order function #2
const applyDiscountsByCategory = (arr, category, callback, discount) => {
    for (let i=0; i<arr.length; i++) {
        if (arr[i].category === category) {
            callback(arr[i], discount)
        }
    }
}

//applyDiscountsByCategory(dogProducts, 1, applyPercentDiscount, .6)
//console.log(dogProducts)

//applyDiscountsByCategory(catProducts, 2, applyFlatRateDiscount, .5)
//console.log(catProducts)

//higher order function #3
//make a higher order function that takes an inventory threshold as a parameter (a number called "amount")
//and only applies the discount (another parameter) with the given callback function (another parameter)
//if the inventory for the product is less than "amount"
const applyDiscountsByInventory = (arr, amount, callback, discount) => {
    arr.forEach((product) => {
        if (product.inventory < amount) {
            callback(product, discount)
        }
    })
}

// applyDiscountsByInventory(dogProducts, 50, applyPercentDiscount, .05)
// console.log(dogProducts)

// applyDiscountsByInventory(catProducts, 50, applyFlatRateDiscount, 1.5)
// console.log(catProducts)


////////////////////////
////// SANDWICHES //////
////////////////////////

// CODE HERE
function makeSandwichFunction(bread) {
    return function(ingredients) {
        let order = `You ordered a ${bread} bread sandwich with `
        for (let i=0; i < ingredients.length; i++) {
            if (i === ingredients.length - 1 && i !== 0) {
                order += `and ${ingredients[i]}.`
            } else if (ingredients.length === 1) {
                order += `${ingredients}.`
            } else {
                order += `${ingredients[i]}, `
            }
        }
        return order
    }
}

const makeWheatSandwich = makeSandwichFunction('wheat')
const makeRyeSandwich =  makeSandwichFunction('rye')

let wheatSandwichOrder = makeWheatSandwich(['pickles','tuna','smoked gouda'])
//console.log(wheatSandwichOrder)

let ryeSandwichOrder = makeRyeSandwich(['lettuce'])
//console.log(ryeSandwichOrder)


////////////////////////////////////
////// COPY AND CHANGE ARRAYS //////
////////////////////////////////////

const lotr = ['biLbO BaGGINs', 'leGOlAs', 'Frodo bAGGINS', 'sAMwiSe GamGEe', 'gAndALF tHe GREY']

const copyArrToCamelCase = arr => {
    const newArr = []

    for (let i = 0; i < arr.length; i++) {
        const str = arr[i]
        const splitStr = str.split(' ')
        let camelCaseStr = ''
        
        for (let x = 0; x < splitStr.length; x++) {
            let word = splitStr[x]

            word = word.toLowerCase()

            if (x !== 0) {
                word = word.charAt(0).toUpperCase() + word.slice(1)
            }

            camelCaseStr += word
        }

        newArr.push(camelCaseStr)
    }

    return newArr
}

const copyArrToSnakeCase = arr => {
    const newArr = []

    for (let i = 0; i < arr.length; i++) {
        let str = arr[i]
        str = str.toLowerCase()
        const splitStr = str.split(' ')
        const snakeCaseStr = splitStr.join('_')
        newArr.push(snakeCaseStr)
    }

    return newArr
}
  
// CODE HERE
let myCamelCaseLotrArray = copyArrToCamelCase(lotr)
//console.log(myCamelCaseLotrArray)

let mySnakeCaseLotrArray = copyArrToSnakeCase(lotr)
//console.log(mySnakeCaseLotrArray)

// Let's try to do the previous functions with .map instead
const newCamelCaseArr = lotr.map((element) => {
    const splitStr = element.split(' ')
    let camelCaseStr = ''
    
    for (let x = 0; x < splitStr.length; x++) {
        let word = splitStr[x]

        word = word.toLowerCase()

        if (x !== 0) {
            word = word.charAt(0).toUpperCase() + word.slice(1)
        }

        camelCaseStr += word
    }

    return camelCaseStr
})

//console.log(newCamelCaseArr)


const newSnakeCaseArr = lotr.map((element) => {
    element = element.toLowerCase()
    const splitStr = element.split(' ')
    const snakeCaseStr = splitStr.join('_')
    return snakeCaseStr
})

//console.log(newSnakeCaseArr)

////////////////////////////////////////
////// HIGHER ORDER ARRAY METHODS //////
////////////////////////////////////////


//// MAP ////

/*
    Pass a callback to map that will return 'pink'
    for each color in the array.
*/

const colors = ['red', 'blue', 'yellow', 'green', 'orange']

const newColors = colors.map(() => 'pink')
//console.log(newColors)

//const mappedColors // = colors.map()

/*
    Edit the formalGreeting function and use the built in .map method 
    to map over the names parameter and return a new array with "Hello, " 
    appended to the beginning of each name
    
    Make sure to use arrow functions combined with the map method    
*/

const formalNames = ['Bernard', 'Elizabeth', 'Conrad', 'Mary Margaret']

const formalGreeting = name => {
    return 'Hello, ' + name
}

// Call formalGreeting passing in the formalNames array
const greetedFormalNames = formalNames.map(formalGreeting)
//console.log(greetedFormalNames)


//// FILTER ////

/*
    Pass a callback to filter that will return
    only strings that begin with the letter A
*/

const places = ['Binghampton', 'Albany', 'New York', 'Ithaca', 'Auburn', 'Rochester', 'Buffalo']

const placesThatStartWithA = places.filter((place) => place[0] === 'A')
//console.log(placesThatStartWithA)


/*
    Create a function called identifier that uses the filter higher order 
    array method to filter over the provided jobs array of objects

    The function should return the object of the person with a job as a programmer
    
    Make sure to use the arrow function in conjunction with the filter method
    
    Your returned value should be a single object, not an array with one object inside of it
    
    Use arrow functions and the filter method
*/

// Do not edit the code below.
let jobs = [
	{ receptionist: "James" },
	{ programmer: "Steve" },
	{ designer: "Alicia" },
];

// Do not edit the code above.

// CODE HERE

// call the function passing in the jobs array


//// REDUCE ////

/*
    Make the productOfArrayCallback function a callback to be handed to
    the .reduce method. Call .reduce with the numsToReduce array. 

    the return of the .reduce method should be the product of all the numbers
    in the array

    Make sure to use arrow functions combined with the reduce method    
*/

const numsToReduce = [ 7, 4, 1]

const productOfArrayCallback = (accumulator, currentValue) => {
    return accumulator * currentValue
}

// CODE HERE
const product = numsToReduce.reduce(productOfArrayCallback)

console.log(product)

// call productOfArray passing in numsToReduce


/*
    Pass a callback and an initial value to reduce 
    that will subtract all the expenses in the array
    from the initial budget

    This will allow us to see how much we have left
    in the budget after these expenses
*/

const budget = 2000

const expenses = [
    {
        title: 'rent', 
        amount: 1000
    }, 
    {
        title: 'car payment', 
        amount: 250
    }, 
    {
        title: 'food', 
        amount: 300
    }
]

//const remaining // = expenses.reduce(//callback, //initial value)