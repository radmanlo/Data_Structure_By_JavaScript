
/*
    Array Initialization
*/

//create an empty array
const arr1 = new Array()
//console.log(arr1)

//create an array with 5 empty items
const arr2 = new Array(5)
//console.log(arr2)

//create an array with 5 specified items
const arr3 = new Array(1,2,"BMW", "Java", 5 )
//console.log(arr3)

//create an array with 1 item 
const arr4 = new Array("1")
//console.log(arr4)

//create an empty array 
const arr5 = []
//console.log(arr5)

//create an array with 5 specified items
const arr6 = ["Python", 22, "JavaScript", 56, "a"]
//console.log(arr6)



/*
    Array Methods
*/

// find the length of array
const length =  arr3.length
//console.log( `length of arr3 is ${length}`)

// reversing the array
const reversedArr3 = arr3.reverse();
//console.log(arr3)
//console.log(reversedArr3)

// sort the city array in ascending order
const city = ["California", "Barcelona", "Paris", "Kathmandu"];
let sortedArray = city.sort();
//console.log(sortedArray);
//console.log(city)

// filling every element of the array with 'Cherry' 
const filedArr = arr6.fill("Cherry");
//console.log(arr6)
//console.log(filedArr)

// filling array by start and end point .fill(value, start, end) 
const filedArr2 = arr6.fill(15, 2, 4)
//console.log(filedArr)
//console.log(arr6)

// join all elements of array using space  .join(separator)
const message = ["JavaScript", "is", "fun."];
const joinedMessage = message.join(" ")
//console.log(joinedMessage)
//console.log(message)

// returns a string with elements of the array separated by commas
const stringArr6 = arr6.toString()
//console.log(stringArr6)
//console.log(arr6)

// remove the last element
const cities = ["Madrid", "New York", "Kathmandu", "Paris"];
const removedCity = cities.pop();
//console.log(cities)        
//console.log(removedCity);   

// removes the first element of the array
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Watermelon"]
const firstFruit = fruits.shift()
//console.log(fruits)
//console.log(firstFruit)

// add items or an item into the end of the array
const cars = ["BMW", "Benz", "Toyota"]
const addedCar = cars.push("Honda")
console.log(addedCar)
console.log(cars)


// https://www.programiz.com/javascript/library/array#:~:text=In%20JavaScript%2C%20Array%20is%20a,default%20or%20custom%20sorting%20rules.


