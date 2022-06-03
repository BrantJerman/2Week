// creating an object w brackets
// accessing values in an object


// let person = {
//     firstName: "Brant",
//     lastName: "Jerman",
//     age: 21,
// }

// let brantsFakeAge = person.age
// let brantsFakeAgeCopy = person['age'] 
// literally the same thing as above, they do the same thing

// console.log(brantsFakeAge)
// console.log(brantsFakeAgeCopy)

// decontructing

// // let meal = {
// //     appetizer : "chips & salsa",
// //     entree: "al pastor burrito",
// //     dessert: "churros",
// //     drink: "dr pepper"
// // }

// // // this is the same as: const dessert = meal.dessert
// // const {dessert, drink: bestDrinkOfAllTime} = meal

// // console.log(dessert)
// // console.log(bestDrinkOfAllTime)

// //looping through an object

// //key means all of the keys inside of the object (person)
// // for (key in person){
// //     console.log(`My ${key} is ${person[key]}`)
// //     // console.log(person[key])
// // }

// // person.firstName
// // is exactly the same as
// // person['firstName']

// // adding properties (aka key/value pairs) to an object

// // person.job = "DevMountain Instructor"
// // person['pets'] = ['snake', 'children']
// // //these do the same exact things!! ^^

// // console.log(person)

// // deleting properties

// // delete person['pets']
// // console.log(person)

// // let teams = {
// //     team1: ['kyle', 'joely'], 
// //     team2: ['bob'],
// //     team3: ['sam'],
// //     team4: ['samantha'],
// // }

// // team 4 lost, so lets take her out of the running

// // delete teams.team4

// // console.log(teams)

// // classes

// class Pokemon {
//     constructor(name, types, weakness, level, hp, attack) {
//         this.name = name
//         this.types = types
//         this.weakness = weakness
//         this.level = level
//         this.hp = hp
//         this.attack = attack
//     }

//     sayName() {
//         console.log(this.name + '!')
//     }
// }

// let snivy = new Pokemon(
//     'Snivy',
//     ['grass'],
//     "fire",
//     5,
//     18,
//     10
// )

// console.log(snivy)
// console.log(snivy.level)

// let typhlosion = new Pokemon(
//     'typhlosion',
//     ['fire'],
//     'water',
//     36,
//     119,
//     85
// )

// let evilTyphlosion = new Pokemon(
//     'evil typhlosion',
//     ['fire', 'dark'],
//     'water',
//     36,
//     119,
//     85

// )

// console.log(typhlosion)
// console.log(typhlosion.level)
// console.log(evilTyphlosion)
console.log(`Evil typhlosions level is ${evilTyphlosion.level}`)

// evilTyphlosion.sayName()

// extending a class

class Animal {
    constructor(name,weightInPounds,heightInInches){
        this.name = name
        this.weightInPounds = weightInPounds
        this.heightInInches = heightInInches
    }
    printAnimalName() {
        console.log(this.name)
    }
}

class Bird extends Animal {
    constructor(name,weightInPounds,heightInInches,wingspanInInches,flightSpeedInMPH) {
        super(name,weightInPounds,heightInInches)
        this.wingspanInInches = wingspanInInches
        this.flightSpeedInMPH = flightSpeedInMPH
    }

    birdShreek(){
        console.log('ba-GAWWWKKKK')
    }
    increaseFlightSpeed(speedIncrease) {
        this.flightSpeedInMPH = this.flightSpeedInMPH + speedIncrease
    }
}

// let animal1 = new Animal('oyster',0.3,2)
// console.log(animal1)
// animal1.printAnimalName()

let bird1 = new Bird('bigbird', 350, 94, 60, 0)
// console.log(bird1)
bird1.increaseFlightSpeed(10)
console.log(bird1)




////////////////////////
////// CALCULATOR //////
////////////////////////

// CODE HERE


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



////////////////////////
////// SANDWICHES //////
////////////////////////

// CODE HERE



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


////////////////////////////////////////
////// HIGHER ORDER ARRAY METHODS //////
////////////////////////////////////////


//// MAP ////

/*
    Pass a callback to map that will return 'pink'
    for each color in the array.
*/

const colors = ['red', 'blue', 'yellow', 'green', 'orange']

const mappedColors // = colors.map()

/*
    Edit the formalGreeting function and use the built in .map method 
    to map over the names parameter and return a new array with "Hello, " 
    appended to the beginning of each name
    
    Make sure to use arrow functions combined with the map method    
*/

const formalNames = ['Bernard', 'Elizabeth', 'Conrad', 'Mary Margaret']

const formalGreeting = names => {
    // CODE HERE
}

// Call formalGreeting passing in the formalNames array


//// FILTER ////

/*
    Pass a callback to filter that will return
    only strings that begin with the letter A
*/

const places = ['Binghampton', 'Albany', 'New York', 'Ithaca', 'Auburn', 'Rochester', 'Buffalo']

const placesThatStartWithA // = places.filter()


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
    Edit the productOfArray function and use 
    the built in .reduce method to loop over the numbers parameter
    and return the product of all the numbers in the array

    Make sure to use arrow functions combined with the reduce method    
*/

const numsToReduce = [43, 7, 24, 79, 290]

const productOfArray = numbers => {
    // Code here
}

// CODE HERE


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

const remaining // = expenses.reduce(//callback, //initial value)